import { useEffect, useRef, useState } from "react";

const OFFSET = 190;

export default function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  const [scrolled, setScrolled] = useState(false);

  const handle = () => {
    const y = window.scrollY;
    setScrolled(y >= 200);
    let current = ids[0];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= OFFSET) current = id;
    }
    setActive(current);
  };

  const ticking = useRef(false);
  const onScroll = () => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      handle();
      ticking.current = false;
    });
  };

  useEffect(() => {
    handle();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  return { active, scrolled };
}