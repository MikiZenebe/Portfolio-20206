import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skills, skillCategories } from "../data/skills";

export default function Skills() {
  const [active, setActive] = useState<string>("All");
  const categories = ["All", ...skillCategories];

  const filtered = useMemo(
    () => (active === "All" ? skills : skills.filter((s) => s.category === active)),
    [active]
  );

  return (
    <section id="skills" className="relative border-b border-border-soft px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Tools I reach for, on web and on mobile."
          description="A working kit refined over years of shipping — from browser to App Store, nothing trendy for the sake of it, everything earning its place."
        />

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
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

        <motion.div layout className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
