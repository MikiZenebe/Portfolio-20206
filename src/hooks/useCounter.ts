import { useEffect, useRef, useState, type RefObject } from "react";

interface UseCounterOptions {
  duration?: number;
}

/**
 * Animates a number from 0 to `end` once the referenced element enters the viewport.
 */
export function useCounter(
  end: number,
  { duration = 1800 }: UseCounterOptions = {}
): [RefObject<HTMLSpanElement | null>, number] {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return [ref, value];
}
