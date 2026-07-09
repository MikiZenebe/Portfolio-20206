import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { useEffect } from "react";
import Tag from "./Tag";
import type { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl border border-border bg-surface"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              data-cursor="hover"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/80 text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">{project.category} · {project.year}</p>
                  <h3 className="font-display text-3xl md:text-4xl text-ink">{project.title}</h3>
                </div>
                <p className="text-sm text-muted">{project.role}</p>
              </div>

              <p className="text-muted leading-relaxed max-w-2xl mb-8">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg hover:bg-accent hover:text-white transition-colors"
                >
                  View Live <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
                >
                  Source <FiGithub className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
