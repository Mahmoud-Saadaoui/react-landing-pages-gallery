import { useEffect, useState } from "react";

const NiceScroll = () => {
  const [thumb, setThumb] = useState({ top: 0, height: 100 });

  useEffect(() => {
    const update = () => {
      const { scrollY } = window;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const height = Math.max(30, (window.innerHeight / document.documentElement.scrollHeight) * 100);
      const top = max > 0 ? (scrollY / max) * (window.innerHeight - height) : 0;
      setThumb({ top, height });
    };
    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed right-0 top-0 z-[9999] h-full w-[10px]">
      <div
        className="absolute right-0 box-border w-[10px] border border-[#f7600e] bg-[#f7600e] opacity-90"
        style={{
          top: `${thumb.top}px`,
          height: `${thumb.height}px`,
        }}
      />
    </div>
  );
};

export default NiceScroll;
