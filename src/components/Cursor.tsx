import { useEffect, useRef } from "react";

/**
 * Custom cursor: a small dot with tight tracking + a lagging ring.
 * Expands on elements with [data-cursor="hover"].
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    let raf: number;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      raf = requestAnimationFrame(animate);
    };

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest?.('[data-cursor="hover"]')) {
        ring.style.width = "64px";
        ring.style.height = "64px";
        ring.style.borderColor = "var(--color-accent)";
        ring.style.background = "var(--color-accent-soft)";
      }
    };
    const onLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest?.('[data-cursor="hover"]')) {
        ring.style.width = "34px";
        ring.style.height = "34px";
        ring.style.borderColor = "var(--color-border)";
        ring.style.background = "transparent";
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
