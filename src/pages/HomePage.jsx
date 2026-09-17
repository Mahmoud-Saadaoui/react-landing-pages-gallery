import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import landingPages, { CATEGORIES } from "../config/landingPages";

const initial = (title) => title.trim().charAt(0).toUpperCase();

const CardImage = ({ page }) => {
  if (page.screenshot) {
    return (
      <img
        src={page.screenshot}
        alt={page.title}
        className="h-44 w-full object-cover object-top"
        loading="lazy"
      />
    );
  }
  return (
    <div className="flex h-44 w-full items-center justify-center bg-[#0F172A]">
      <span className="font-display text-5xl font-bold text-white/15">
        {initial(page.title)}
      </span>
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
      <header className="mb-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E8590C]">
          {t("gallery.eyebrow")}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl">
            {t("gallery.title")}
          </h1>
          <p className="inline-flex items-center gap-2 rounded-lg border border-[#0F172A]/10 bg-white px-3 py-1.5 font-mono text-sm font-semibold text-[#0F172A]">
            {landingPages.length}
            <span className="font-normal text-[#5B6B80]">
              {t("gallery.count", { count: landingPages.length })}
            </span>
          </p>
        </div>
        <p className="mt-4 max-w-2xl leading-relaxed text-[#5B6B80]">
          {t("gallery.sub")}
        </p>
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