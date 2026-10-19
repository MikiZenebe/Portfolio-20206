import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import TiltCard from "./TiltCard";
import Tag from "./Tag";
import ContractCard from "./ContractCard";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  className?: string;
}

export default function ProjectCard({
  project,
  onOpen,
  className = "",
}: ProjectCardProps) {
  // if (project.category === "Deployed Contracts" || Boolean(project.contractAddress)) {
  //   return <ContractCard project={project} onOpen={onOpen} className={className} />;
  // }
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${className}`}
    >
      <TiltCard
        max={5}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface h-full"
        onClick={() => onOpen(project)}
        data-cursor="hover"
      >
        {/* animated border glow */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [box-shadow:inset_0_0_0_1px_var(--color-accent)]" />

        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

          <div className="absolute top-4 right-4 flex gap-2 opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                e.stopPropagation()
              }
              aria-label={`${project.title} GitHub repository`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70 border border-white/10 backdrop-blur text-white hover:bg-accent transition-colors"
            >
              <FiGithub className="h-4 w-4" />
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                e.stopPropagation()
              }
              aria-label={`${project.title} live demo`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70 border border-white/10 backdrop-blur text-white hover:bg-accent transition-colors"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-accent mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
                  {project.title}
                </h3>
              </div>
              <span className="num-label text-xs text-white/50 shrink-0">
                {project.year}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
              {project.technologies.slice(0, 3).map((tech) => (
                <Tag
                  key={tech}
                  className="border-white/20 text-white/80 bg-black/30"
                >
                  {tech}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
