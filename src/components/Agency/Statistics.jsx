import { useEffect } from "react";
import { stats } from "./data";

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const count = (node, from, to, speed) => {
  if (!node) return undefined;
  const start = performance.now();
  let raf;
  const stepFrame = (now) => {
    const p = Math.min(1, (now - start) / speed);
    node.textContent = String(Math.round(from + (to - from) * easeOut(p)));
    if (p < 1) raf = requestAnimationFrame(stepFrame);
  };
  raf = requestAnimationFrame(stepFrame);
  return () => cancelAnimationFrame(raf);
};

const Statistics = () => {
  useEffect(() => {
    const section = document.querySelector(".agency-page #statistics");
    if (!section || !("IntersectionObserver" in window)) return undefined;
    const started = new Set();
    const cancelFns = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const span = entry.target;
          if (started.has(span)) continue;
          started.add(span);
          cancelFns.push(count(span, Number(span.dataset.from), Number(span.dataset.to), Number(span.dataset.speed)));
        }
      },
      { threshold: 0.4 }
    );
    const spans = section.querySelectorAll(".timer");
    spans.forEach((s) => io.observe(s));
    return () => {
      io.disconnect();
      cancelFns.forEach((c) => c && c());
    };
  }, []);

  return (
    <section className="statistics" id="statistics">
      <div className="overlay">
        <div className="container">
          <div className="row">
            {stats.map(({ icon, from, to, speed, label }) => (
              <div className="col-md-3 col-sm-6" key={label}>
                <div className="stat text-center">
                  <img src={icon} alt="icon" />
                  <div className="count">
                    <span className="timer" data-from={from} data-to={to} data-speed={speed}>
                      0
                    </span>
                  </div>
                  <p>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;