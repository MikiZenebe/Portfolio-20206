import { useEffect, useRef, type RefObject } from "react";
import Lenis from "lenis";

interface UseLenisOptions {
  onScroll?: (instance: Lenis) => void;
}

/**
 * Sets up a Lenis smooth-scroll instance synced to requestAnimationFrame.
 * Returns the lenis instance ref so other code (e.g. GSAP ScrollTrigger) can hook in.
 */
export function useLenis({ onScroll }: UseLenisOptions = {}): RefObject<Lenis | null> {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    if (onScroll) {
      lenis.on("scroll", onScroll);
    }

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return lenisRef;
}

export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (el && window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80 });
  } else if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
