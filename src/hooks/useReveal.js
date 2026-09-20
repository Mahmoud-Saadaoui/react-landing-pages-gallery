import { useEffect } from "react";

const useReveal = (scope) => {
  useEffect(() => {
    const root = scope ? document.querySelector(scope) : document;
    const items = root ? root.querySelectorAll("[data-reveal]") : [];
    if (!items.length) return undefined;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-revealed"));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          el.classList.add("is-revealed");
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [scope]);
};

export default useReveal;