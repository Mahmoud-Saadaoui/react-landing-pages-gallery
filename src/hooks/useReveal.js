import { useEffect } from "react";

const useReveal = (scope) => {
  useEffect(() => {
    const root = scope ? document.querySelector(scope) : document;
    const items = root ? root.querySelectorAll("[data-reveal]") : [];
    if (!items.length) return undefined;

    const reveal = (el) => el.classList.add("is-revealed");

    if (!("IntersectionObserver" in window)) {
      items.forEach(reveal);
      return undefined;
    }

    let pending = [...items];
    let raf = 0;
    let sweep = 0;

    const inViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight && rect.height > 0;
    };

    const conclude = () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
      window.removeEventListener("resize", sweepScan);
      clearInterval(sweep);
      io.disconnect();
    };

    const scan = () => {
      if (!pending.length) return;
      const done = [];
      pending = pending.filter((el) => {
        if (inViewport(el)) {
          done.push(el);
          return false;
        }
        return true;
      });
      for (const el of done) {
        reveal(el);
        io.unobserve(el);
      }
      if (!pending.length) conclude();
    };

    const onScroll = () => {
      if (raf || !pending.length) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        scan();
      });
    };

    const sweepScan = () => scan();

    const io = new IntersectionObserver(
      (entries) => {
        const done = [];
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          pending = pending.filter((el) => el !== entry.target);
          done.push(entry.target);
        }
        for (const el of done) {
          reveal(el);
          io.unobserve(el);
        }
        if (!pending.length) conclude();
      },
      { threshold: 0 }
    );

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sweepScan);
    sweep = setInterval(sweepScan, 800);
    items.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
      window.removeEventListener("resize", sweepScan);
      clearInterval(sweep);
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [scope]);
};

export default useReveal;