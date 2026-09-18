import postcss from "postcss";

// Matches any stylesheet that lives inside a landing component folder,
// e.g. /src/components/Kasper/css/kasper.css -> "Kasper"
const LANDING_FILE = /[\\/]src[\\/]components[\\/]([^\\/]+)[\\/].*\.css$/;

const BARE_ROOTS = new Set([":root", "html", "body"]);

const isKeyframeChild = (rule) =>
  rule.parent &&
  rule.parent.type === "atrule" &&
  /keyframes$/.test(rule.parent.name);

function scopeSelector(selector, root) {
  return selector
    .split(",")
    .map((raw) => {
      const s = raw.trim();
      if (!s) return raw;

      // Already gated by a class on <html>/<body> (e.g. html.apple-root):
      // leave untouched so the JS-applied class keeps controlling it.
      if (/^(html|body)\.[\w-]/.test(s)) return s;

      // Bare html / body / :root must stay on the real root element (rem relies
      // on it), but only while this landing is mounted -> gate with :has().
      if (BARE_ROOTS.has(s)) return `${s}:has(${root})`;
      if (/^(html|body)(?=[\s>+~]|$)/.test(s)) {
        return s.replace(/^(html|body)/, (m) => `${m}:has(${root})`);
      }
      if (/^:root(?=[\s>+~]|:|$)/.test(s)) {
        return s.replace(/^:root/, `:root:has(${root})`);
      }

      // Everything else is scoped under the landing root.
      return `${root} ${s}`;
    })
    .join(", ");
}

/**
 * Vite plugin: automatically scopes every landing-page stylesheet under a
 * unique root, e.g. :where([data-landing="Kasper"]). This prevents styles from
 * leaking between landings or into the gallery, without touching any CSS file.
 *
 * Uses :where() to keep the original specificity and :has() to gate
 * html/body/:root rules so they only apply while the landing is mounted.
 */
export default function landingCssScope() {
  return {
    name: "landing-css-scope",
    enforce: "pre",

    transform(code, id) {
      const file = id.split("?")[0];
      if (!file.endsWith(".css")) return null;

      const match = file.match(LANDING_FILE);
      if (!match) return null;

      const folder = match[1];
      if (folder === "common") return null;

      const root = `:where([data-landing="${folder}"])`;
      const ast = postcss.parse(code, { from: file });

      ast.walkRules((rule) => {
        if (isKeyframeChild(rule)) return;
        if (rule.selector.includes("[data-landing=")) return;
        rule.selector = scopeSelector(rule.selector, root);
      });

      return ast.toString();
    },
  };
}
