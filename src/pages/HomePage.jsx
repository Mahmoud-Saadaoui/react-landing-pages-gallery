import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import landingPages, { CATEGORIES } from "../config/landingPages";

const initial = (title) => title.trim().charAt(0).toUpperCase();

const CardImage = ({ page }) => {
  const [loaded, setLoaded] = useState(false);

  if (!page.screenshot) {
    return (
      <div className="flex h-44 w-full items-center justify-center bg-[#0F172A]">
        <span className="font-display text-5xl font-bold text-white/15">
          {initial(page.title)}
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-44 w-full">
      <div
        className={`absolute inset-0 animate-pulse bg-gray-200 transition-opacity duration-300 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={page.screenshot}
        alt={page.title}
        className={`h-44 w-full object-cover object-top transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

const Card = ({ page }) => {
  const { t } = useTranslation();

  return (
    <Link
      to={`/landing-pages/${page.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-[#0F172A]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8590C]"
    >
      <div className="relative overflow-hidden border-b border-[#0F172A]/10">
        <div className="transition-transform duration-300 group-hover:scale-[1.03]">
          <CardImage page={page} />
        </div>
        {page.status === "done" ? (
          <span className="absolute bottom-3 end-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#0F172A] shadow-sm">
            {t("gallery.open")}
          </span>
        ) : (
          <span className="absolute top-3 end-3 rounded-full bg-[#E8590C] px-2 py-0.5 text-[11px] font-semibold text-white">
            {t("gallery.pending")}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <h3 className="truncate font-display text-sm font-semibold text-[#0F172A]">
            {page.title}
          </h3>
          <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-[#5B6B80]">
            {t(`categories.${page.category}`)}
          </p>
        </div>
        <div className="shrink-0 text-end">
          <span className="block text-[10px] uppercase tracking-wider text-[#5B6B80]">
            {t("gallery.route")}
          </span>
          <code className="block max-w-34 truncate font-mono text-[11px] text-[#0F172A]/70">
            /landing-pages/{page.slug}
          </code>
        </div>
      </div>
    </Link>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = activeCategory
    ? landingPages.filter((p) => p.category === activeCategory)
    : landingPages;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header className="mb-10 text-center">
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl">
          {t("gallery.title")}
        </h1>
      </header>

      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label={t("gallery.all")}
      >
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            activeCategory === null
              ? "border-[#0F172A] bg-[#0F172A] text-white"
              : "border-[#0F172A]/15 bg-white text-[#0F172A] hover:border-[#0F172A]/40"
          }`}
        >
          {t("gallery.all")}
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() =>
              setActiveCategory((current) =>
                current === category ? null : category
              )
            }
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "border-[#0F172A] bg-[#0F172A] text-white"
                : "border-[#0F172A]/15 bg-white text-[#0F172A] hover:border-[#0F172A]/40"
            }`}
          >
            {t(`categories.${category}`)}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((page) => (
          <Card key={page.slug} page={page} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;