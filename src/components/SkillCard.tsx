import { motion } from "framer-motion";
import type { Skill } from "../types";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -6 }}
      data-cursor="hover"
      className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-surface px-6 py-8 transition-colors duration-300 hover:border-accent/60"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: `0 0 40px -12px ${skill.color}55` }} />
      <Icon
        className="h-9 w-9 grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-1"
        style={{ color: skill.color }}
      />
      <span className="text-xs tracking-wide text-muted transition-colors group-hover:text-ink">
        {skill.name}
      </span>

      <span className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-border bg-bg px-2.5 py-1 text-[10px] uppercase tracking-wide text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-[calc(100%+6px)]">
        {skill.category}
      </span>
    </motion.div>
  );
}
