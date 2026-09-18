import { useEffect, useRef, useState } from "react";
import { skills } from "./data";
import bg2 from "./images/bg2.webp";

const SIZE = 160;
const THICKNESS = 7;
const FILL = "#0575e6";

function drawRing(canvas, progress) {
  const ctx = canvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const size = SIZE * dpr;
  if (canvas.width !== size) {
    canvas.width = size;
    canvas.height = size;
  }
  ctx.clearRect(0, 0, size, size);
  ctx.lineWidth = THICKNESS * dpr;
  ctx.lineCap = "round";
  ctx.strokeStyle = "rgba(0,0,0,0.08)";
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, (size - THICKNESS * dpr) / 2 - dpr, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = FILL;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, (size - THICKNESS * dpr) / 2 - dpr, -Math.PI / 2, -Math.PI / 2 + progress * Math.PI * 2);
  ctx.stroke();
}

function SkillCircle({ value, name }) {
  const canvasRef = useRef(null);
  const spanRef = useRef(null);
  const boxRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el || started) return undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || !canvasRef.current) return undefined;
    const canvas = canvasRef.current;
    const span = spanRef.current;
    const duration = 1200;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const k = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - k, 3);
      const progress = value * eased;
      drawRing(canvas, progress);
      if (span) span.textContent = `${Math.round(progress * 100)}%`;
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value]);

  return (
    <div ref={boxRef} className="stat text-center">
      <div className="circle relative mx-auto inline-block">
        <span ref={spanRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px] font-bold text-[#0575e6]" />
        <canvas ref={canvasRef} className="rounded-full bg-[#eef6ff] p-[8px]" width={SIZE} height={SIZE} />
      </div>
      <p className="mt-[30px] text-[24px] leading-[30px] text-white">{name}</p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section
      className="statistics bg-cover bg-center bg-fixed"
      id="statistics"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <div className="bg-[rgba(5,117,230,0.7)] py-[150px]">
        <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="-mx-[15px] flex flex-wrap">
            {skills.map((s, i) => (
              <div
                className="w-full px-[15px] sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] lg:flex-[1_1_0%] lg:max-w-full"
                key={i}
              >
                <SkillCircle value={s.value} name={s.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}