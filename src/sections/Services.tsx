import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="relative border-b border-border-soft px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="05"
          eyebrow="Services"
          title="How I can help your product move forward."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative flex flex-col justify-between gap-10 bg-surface p-8 transition-colors duration-300 hover:bg-surface-2 md:p-10"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-7 w-7 text-ink transition-colors group-hover:text-accent" />
                  <span className="num-label text-xs text-faint">{service.number}</span>
                </div>
                <div>
                  <h3 className="font-display mb-3 text-xl text-ink md:text-2xl">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
