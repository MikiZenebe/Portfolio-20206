import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

interface RevealStaggerOptions {
  scroller?: string | Element;
  y?: number;
  stagger?: number;
  start?: string;
}

/**
 * Fades + slides children of a container upward with a stagger, triggered on scroll.
 */
export function revealStagger(
  selector: string | Element | Element[],
  { scroller, y = 40, stagger = 0.12, start = "top 82%" }: RevealStaggerOptions = {}
) {
  return gsap.utils.toArray<Element>(selector).map((el, i) =>
    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          scroller,
        },
      }
    )
  );
}

interface RevealUpOptions {
  y?: number;
  duration?: number;
  delay?: number;
  scrollTrigger?: ScrollTrigger.Vars;
}

/**
 * Splits text-ish reveal: animate a single element up + fade in on scroll.
 */
export function revealUp(target: gsap.TweenTarget, vars: RevealUpOptions = {}) {
  return gsap.fromTo(
    target,
    { opacity: 0, y: vars.y ?? 50 },
    {
      opacity: 1,
      y: 0,
      duration: vars.duration ?? 1.1,
      ease: "power3.out",
      delay: vars.delay ?? 0,
      scrollTrigger: vars.scrollTrigger,
    }
  );
}
