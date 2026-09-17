import { useEffect, useRef, useState } from "react";

const getTarget = () => {
  const now = new Date();
  return new Date(now.getFullYear() + 1, 0, 26);
};

const getRemaining = (target) => {
  const diff = Math.max(0, target.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

export const useCountdown = (target) => {
  const targetRef = useRef(target ?? getTarget());
  const [remaining, setRemaining] = useState(() =>
    getRemaining(targetRef.current)
  );

  useEffect(() => {
    const id = setInterval(
      () => setRemaining(getRemaining(targetRef.current)),
      1000
    );
    return () => clearInterval(id);
  }, []);

  return remaining;
};