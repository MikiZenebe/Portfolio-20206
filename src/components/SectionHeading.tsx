import { motion } from "framer-motion";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/**
 * Consistent editorial section header: index number, eyebrow label, big title.
 */
export default function SectionHeading({ index, eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} gap-5 mb-16 md:mb-20`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 text-muted"
      >
        {index && <span className="num-label text-xs">{index}</span>}
        <span className="h-px w-8 bg-border" />
        <span className="uppercase text-xs tracking-[0.25em]">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.08 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-ink text-balance max-w-3xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-muted max-w-xl text-base md:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
