import { useEffect, useRef, useState } from "react";
import { skills } from "./data";

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
    if (!el) return undefined;
    if (started) return undefined;
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
      <div className="circle">
        <span ref={spanRef} />
        <canvas ref={canvasRef} width={SIZE} height={SIZE} />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="statistics" id="statistics">
      <div className="overlay">
        <div className="container">
          <div className="row">
            {skills.map((s, i) => (
              <div className="col-lg col-md-4 col-sm-6" key={i}>
                <SkillCircle value={s.value} name={s.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}