import sharp from "sharp";
import { readdir, stat, unlink, rename } from "node:fs/promises";
import { join, dirname, extname, basename } from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const SCREENSHOTS_DIR = fileURLToPath(
  new URL("../public/screenshots/", import.meta.url)
);
const COMPONENTS_DIR = fileURLToPath(
  new URL("../src/components/", import.meta.url)
);
const SIZE_THRESHOLD = 250 * 1024;
const QUALITY = 82;
const RASTER_EXT = [".jpg", ".jpeg", ".png", ".webp"];

const bytes = (n) =>
  n > 1024 * 1024
    ? `${(n / 1024 / 1024).toFixed(2)} MB`
    : `${(n / 1024).toFixed(0)} KB`;

async function walk(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else if (e.isFile()) out.push(full);
  }
  return out;
}

async function atomicWrite(inputPath, outputPath, pipeline) {
  const tmp = join(
    os.tmpdir(),
    `optimize-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2)}`
  );
  try {
    await pipeline.toFile(tmp);
    await rename(tmp, outputPath);
    return (await stat(outputPath)).size;
  } finally {
    await unlink(tmp).catch(() => {});
  }
}

async function optimizeScreenshots() {
  let saved = 0;
  const files = await readdir(SCREENSHOTS_DIR);
  for (const name of files) {
    const ext = extname(name).toLowerCase();
    if (!RASTER_EXT.includes(ext)) continue;
    const src = join(SCREENSHOTS_DIR, name);
    const dest = join(SCREENSHOTS_DIR, `${basename(name, ext)}.webp`);
    if (dest === src) continue;
    const before = (await stat(src)).size;
    const after = await atomicWrite(
      src,
      dest,
      sharp(src).webp({ quality: QUALITY, effort: 6 })
    );
    if (before <= after) await unlink(dest).catch(() => {});
    else await unlink(src);
    saved += before >= after ? before - after : 0;
    console.log(
      before >= after
        ? `  ↳ ${name}: ${bytes(before)} → ${bytes(after)} (PNG removed)`
        : `  ↳ ${name}: WebP plus gros (${bytes(after)}), ignoré`
    );
  }
  return saved;
}

async function optimizeLandings() {
  let saved = 0;
  const files = await walk(COMPONENTS_DIR);
  for (const src of files) {
    const ext = extname(src).toLowerCase();
    if (!RASTER_EXT.includes(ext)) continue;
    const before = (await stat(src)).size;
    if (before < SIZE_THRESHOLD) continue;
    const rel = src.replace(COMPONENTS_DIR, "");

    if (ext === ".png") {
      const dest = src.replace(ext, ".webp");
      const after = await atomicWrite(
        src,
        dest,
        sharp(src).webp({ quality: QUALITY, effort: 6 })
      );
      if (before <= after) {
        await unlink(dest).catch(() => {});
        console.log(`  ↳ ${rel}: WebP plus gros, PNG conservé`);
      } else {
        await unlink(src);
        saved += before - after;
        console.log(
          `  ↳ ${rel}: ${bytes(before)} → ${bytes(after)} (PNG→WebP, mettre à jour les références)`
        );
      }
      continue;
    }

    const pipeline =
      ext === ".webp"
        ? sharp(src).webp({ quality: QUALITY, effort: 6 })
        : sharp(src).jpeg({ quality: QUALITY, mozjpeg: true, progressive: true });
    const after = await atomicWrite(src, src, pipeline);
    saved += before - after;
    console.log(`  ↳ ${rel}: ${bytes(before)} → ${bytes(after)}`);
  }
  return saved;
}

console.log("▶ Screenshots → WebP");
const screenshotsSaved = await optimizeScreenshots();
console.log("\n▶ Landing images (in-place / PNG→WebP)");
const landingsSaved = await optimizeLandings();

console.log(`\nTotal saving: ${bytes(screenshotsSaved + landingsSaved)}`);