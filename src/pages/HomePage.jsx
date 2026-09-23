import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import landingPages, { CATEGORIES } from "../config/landingPages";

const PAGE_SIZE = 6;

const initial = (title) => title.trim().charAt(0).toUpperCase();

const CardImage = ({ page }) => {
  const [loaded, setLoaded] = useState(false);

  if (!page.screenshot) {
    return (
      <div className="flex h-44 w-full items-center justify-center bg-[#052E16]">
        <span className="font-display text-5xl font-bold text-[#A3E635]/25">
          {initial(page.title)}
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-44 w-full">
      <div
        className={`absolute inset-0 bg-[#052E16] transition-opacity duration-300 ${
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
      className="flex flex-col overflow-hidden rounded-xl border border-[#A3E635]/15 bg-[#052E16] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#A3E635]/70 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3E635]"
    >
      <div className="relative overflow-hidden border-b border-[#A3E635]/15">
        <CardImage page={page} />
        {page.status !== "done" && (
          <span className="absolute top-3 end-3 rounded-full bg-[#E8590C] px-2 py-0.5 text-[11px] font-semibold text-white">
            {t("gallery.pending")}
          </span>
        )}
      </div>

      <div className="px-4 py-3">
        <h3 className="truncate font-display text-sm font-semibold text-[#D9F99D]">
          {page.title}
        </h3>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-[#A3E635]">
          {t(`categories.${page.category}`)}
        </p>
      </div>
    </Link>
  );
};

const chipBase = (selected) =>
  `rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
    selected
      ? "border-[#A3E635] bg-[#A3E635] text-[#052E16]"
      : "border-[#A3E635]/30 bg-[#052E16]/60 text-[#D9F99D] hover:border-[#A3E635]/70 hover:bg-[#0B3D24]"
  }`;

const FilterChips = ({ active, onSelect }) => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-wrap justify-center gap-2"
      role="group"
      aria-label={t("gallery.all")}
    >
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={chipBase(active === null)}
      >
        {t("gallery.all")}
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={chipBase(active === category)}
        >
          {t(`categories.${category}`)}
        </button>
      ))}
    </div>
  );
};

const Pagination = ({ current, total, onChange }) => {
  if (total <= 1) return null;

  const idle =
    "rounded-lg border border-[#A3E635]/30 px-3.5 py-2 text-sm font-medium text-[#D9F99D] transition-colors hover:border-[#A3E635]/70 hover:bg-[#0B3D24] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#A3E635]/30 disabled:hover:bg-transparent";
  const active =
    "rounded-lg border border-[#A3E635] bg-[#A3E635] px-3.5 py-2 text-sm font-medium text-[#052E16]";

  return (
    <nav
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className={idle}
      >
        &lsaquo; Prev
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onChange(page)}
          aria-current={page === current ? "page" : undefined}
          className={page === current ? active : idle}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className={idle}
      >
        Next &rsaquo;
      </button>
    </nav>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = activeCategory
    ? landingPages.filter((p) => p.category === activeCategory)
    : landingPages;

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, pageCount);
  const visiblePages = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const selectCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    document
      .getElementById("gallery-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const words = t("gallery.title").split(" ");

  return (
    <section>
      <style>{`
        @keyframes home-rise {
          0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
          70% { filter: blur(0); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes home-fade {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .home-rise, .home-fade { opacity: 0; animation-fill-mode: both; }
        .home-rise { animation-name: home-rise; animation-duration: .9s; animation-timing-function: cubic-bezier(.22,.61,.36,1); }
        .home-fade { animation-name: home-fade; animation-duration: .8s; animation-timing-function: ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .home-rise, .home-fade { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <div className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden bg-[#081B08]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/home-page-bg.jpeg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081B08]/80 via-[#081B08]/55 to-[#052E16]/95" />

        <div className="relative z-10 flex max-w-4xl flex-col items-center gap-10 px-6 py-24 text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-[#DCFCE7] sm:text-5xl md:text-6xl">
            {words.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="home-rise inline-block will-change-transform"
                style={{ animationDelay: `${0.35 + i * 0.09}s` }}
              >
                {word}
                {"\u00A0"}
              </span>
            ))}
          </h1>

          <div className="home-fade" style={{ animationDelay: "1.4s" }}>
            <FilterChips active={activeCategory} onSelect={selectCategory} />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="home-fade absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-[#A3E635]"
          style={{ animationDelay: "1.6s" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="bg-[#052E16]">
        <div id="gallery-grid" className="mx-auto max-w-6xl scroll-mt-6 px-4 py-12 sm:py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePages.map((page) => (
              <Card key={page.slug} page={page} />
            ))}
          </div>

          <Pagination
            current={safePage}
            total={pageCount}
            onChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
