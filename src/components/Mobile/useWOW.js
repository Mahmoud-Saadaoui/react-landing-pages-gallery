import { useEffect } from "react";

const useWOW = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".mobile-page .wow");
    if (!items.length || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("played"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          el.classList.add("played");
          const name = el.dataset.wow;
          if (name) el.classList.add(`animate-${name}`);
          io.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

export default useWOW;