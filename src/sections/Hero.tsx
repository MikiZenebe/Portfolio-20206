import { useState, useEffect, useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import gsap from "gsap";
import MagneticButton from "../components/MagneticButton";
import { scrollToId } from "../hooks/useLenis";
import ResumeModal from "../components/ResumeModal";

const WORDS = [
  "Building",
  "modern",
  "scalable",
  "web",
  "and",
  "mobile",
  "applications",
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const glowX = useSpring(mvX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(mvY, { stiffness: 60, damping: 20 });
  const parallaxX = useTransform(glowX, [0, 1], [-16, 16]);
  const parallaxY = useTransform(glowY, [0, 1], [-16, 16]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-word",
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.3,
        },
      );
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          delay: 1.1,
        },
      );
      gsap.fromTo(
        ".hero-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.inOut",
          delay: 0.9,
          transformOrigin: "left",
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = containerRef.current!.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width);
    mvY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <>
      <section
        id="hero"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-border-soft px-6 pt-32 pb-20 md:px-10"
      >
        {/* Animated grid background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-border-soft) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border-soft) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        {/* mouse-follow spotlight */}
        <motion.div
          className="pointer-events-none absolute h-[500px] w-[500px] rounded-full"
          style={{
            left: useTransform(glowX, (v) => `calc(${v * 100}% - 250px)`),
            top: useTransform(glowY, (v) => `calc(${v * 100}% - 250px)`),
            background:
              "radial-gradient(circle, var(--color-accent-soft) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.p
            style={{ x: parallaxX, y: parallaxY }}
            className="hero-fade mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted"
          >
            <span className="h-px w-10 bg-accent" />
            Web &amp; Mobile App Engineer
          </motion.p>

          <h1
            ref={headlineRef}
            className="font-display max-w-6xl text-[13vw] leading-[0.98] tracking-tight text-ink sm:text-[9vw] md:text-[4.4vw]"
          >
            {WORDS.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-top pr-[0.28em]"
              >
                <span className="hero-word inline-block">{word}</span>
              </span>
            ))}
          </h1>

          <div className="hero-line mt-10 h-px w-full max-w-3xl bg-border" />

          <div className="mt-10 flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
            <p className="hero-fade max-w-md text-base leading-relaxed text-muted md:text-lg">
              I'm Mikiyas — a web &amp; mobile app engineer who blends editorial
              design sensibility with production-grade React and React Native
              craft to build experiences that feel inevitable, whether they live
              in a browser or in your pocket.
            </p>

            <div className="hero-fade flex flex-wrap items-center gap-4">
              <MagneticButton as="button" onClick={() => scrollToId("work")}>
                View Work <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                as="button"
                variant="outline"
                onClick={() => scrollToId("contact")}
              >
                Start a Project
              </MagneticButton>
              <MagneticButton
                as="button"
                variant="outline"
                onClick={() => setIsResumeOpen(true)}
              >
                Resume <FileText className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToId("about")}
          data-cursor="hover"
          aria-label="Scroll to about section"
          className="hero-fade absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-muted hover:text-ink transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </button>
      </section>
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
