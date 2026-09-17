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
    <div className="nice-scrollbar">
      <div
        className="thumb"
        style={{
          top: `${thumb.top}px`,
          height: `${thumb.height}px`,
          border: "1px solid #f7600e",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default NiceScroll;