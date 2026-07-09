import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";
import Tag from "../components/Tag";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-b border-border-soft px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="Where the last years went."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border md:block" />
          <div className="flex flex-col gap-4">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative grid gap-4 border-t border-border-soft py-8 md:grid-cols-12 md:gap-8 md:pl-10"
              >
                <span className="absolute left-0 top-10 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent bg-bg transition-transform duration-300 group-hover:scale-125 md:block" />

                <div className="md:col-span-3">
                  <span className="num-label text-sm text-accent">
                    {exp.duration}
                  </span>
                  <p className="mt-1 text-xs text-muted">{exp.location}</p>
                </div>

                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl text-ink">{exp.role}</h3>
                  <p className="mt-1 text-sm text-muted">{exp.company}</p>
                </div>

                <div className="md:col-span-5">
                  <p className="text-sm leading-relaxed text-muted md:text-base">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <Tag key={h}>{h}</Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
