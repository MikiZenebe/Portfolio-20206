import { useMemo, useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects, projectCategories } from "../data/projects";
import type { Project } from "../types";

const SLIDES_TO_SHOW = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
};

export default function Portfolio() {
  const [active, setActive] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slidesToShow, setSlidesToShow] = useState(SLIDES_TO_SHOW.desktop);

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  // Update slides to show based on screen size
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(SLIDES_TO_SHOW.mobile);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(SLIDES_TO_SHOW.tablet);
      } else {
        setSlidesToShow(SLIDES_TO_SHOW.desktop);
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Reset to first slide when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [active]);

  const maxIndex = Math.max(0, filtered.length - slidesToShow);

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Drag handling
  const dragX = useMotionValue(0);

  const handleDragEnd = () => {
    const x = dragX.get();
    if (x < -50 && currentIndex < maxIndex) {
      next();
    } else if (x > 50 && currentIndex > 0) {
      prev();
    }
    dragX.set(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
  };

  return (
    <section
      id="work"
      className="relative border-b border-border-soft px-6 py-28 md:px-10 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title="A handful of projects worth talking about."
          description="From web to native mobile apps — each one solved a real constraint, technical, business or human. Filter by type or swipe through the carousel."
        />

        {/* Filter buttons */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor="hover"
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                active === cat
                  ? "border-accent text-accent"
                  : "border-border text-muted hover:text-ink hover:border-ink/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel container */}
        <div className="relative" ref={containerRef}>
          {/* Navigation arrows */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            data-cursor="hover"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-ink hidden md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            data-cursor="hover"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-ink hidden md:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Carousel track */}
          <div className="overflow-hidden px-1">
            <motion.div
              className="flex gap-6 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              style={{ x: dragX }}
              animate={{
                x: -(currentIndex * (100 / slidesToShow + 2)) + "%",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpen={setSelected}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                data-cursor="hover"
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-border hover:bg-muted"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="mt-4 text-center">
            <span className="num-label text-xs text-muted">
              {currentIndex + 1} / {maxIndex + 1}
            </span>
          </div>
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted">
            No projects found in this category — yet.
          </p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
