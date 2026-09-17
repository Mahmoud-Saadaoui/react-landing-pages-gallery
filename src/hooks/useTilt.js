import { useEffect } from "react";

const MAX_TILT = 20;
const PERSPECTIVE = 300;
const SPEED = 400;
const EASING = "cubic-bezier(.03,.98,.52,.99)";

export const useTilt = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const onEnter = () => {
      el.style.transition = `transform ${SPEED}ms ${EASING}`;
    };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const percentageX = (e.clientX - rect.left) / rect.width;
      const percentageY = (e.clientY - rect.top) / rect.height;
      const rotateX = (percentageY * MAX_TILT - MAX_TILT / 2).toFixed(2);
      const rotateY = (MAX_TILT / 2 - percentageX * MAX_TILT).toFixed(2);

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transition = "";
        el.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1,1,1)`;
      });
    };

    const onLeave = () => {
      el.style.transition = `transform ${SPEED}ms ${EASING}`;
      el.style.transform = `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.style.transform = "";
      el.style.transition = "";
    };
  }, [ref]);
};
