import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative border-b border-border-soft px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="06"
          eyebrow="Testimonials"
          title="Kind words from people I've built with."
          align="center"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <Quote className="mb-8 h-10 w-10 text-accent/40" />

          <div className="relative min-h-[220px] w-full overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center gap-8"
              >
                <p className="font-display text-balance text-2xl leading-snug text-ink md:text-3xl break-words">
                  “{current.quote}”
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-sm text-ink">
                    {current.avatarInitials}
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-ink">{current.name}</p>
                    <p className="text-xs text-muted">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <button
              onClick={prev}
              data-cursor="hover"
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-accent" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              data-cursor="hover"
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
