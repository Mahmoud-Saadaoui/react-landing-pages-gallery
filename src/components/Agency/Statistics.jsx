import { useEffect } from "react";
import { stats } from "./data";
import bg2 from "./images/bg2.webp";

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
    <section
      className="statistics bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg2})` }}
      id="statistics"
    >
      <div className="overlay bg-[#16aeca]/80 py-[100px]">
        <div className="mx-auto w-full px-[15px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="-mx-[15px] flex flex-wrap">
            {stats.map(({ icon, from, to, speed, label }) => (
              <div className="w-full px-[15px] sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_25%] md:max-w-[25%]" key={label}>
                <div className="stat text-center">
                  <img src={icon} alt="icon" />
                  <div className="count text-[40px] leading-[60px] font-bold text-[#ddfaff]">
                    <span className="timer" data-from={from} data-to={to} data-speed={speed}>
                      0
                    </span>
                  </div>
                  <p className="text-[18px] leading-[22px] text-[#85ecff]">{label}</p>
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