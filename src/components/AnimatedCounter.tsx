"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: string; // e.g. "500+" or "10+"
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const [hasStarted, setHasStarted] = useState(false);

  // Extract the numeric part and the suffix (e.g. "+", "K", etc.)
  const match = target.match(/^([\d,]+)(.*)$/);
  const numericTarget = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericTarget);

      setDisplayed(current.toLocaleString());

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [hasStarted, numericTarget, duration]);

  return (
    <span ref={ref} className={className}>
      {displayed}{suffix}
    </span>
  );
}
