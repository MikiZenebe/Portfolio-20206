import { motion } from "framer-motion";
import { achievements } from "../data/achievements";
import Counter from "../components/Counter";

export default function Achievements() {
  return (
    <section id="achievements" className="relative border-b border-border-soft px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 md:gap-10">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col gap-4 border-l border-border pl-5 md:pl-6"
              >
                <Icon className="h-6 w-6 text-accent" />
                <span className="font-display text-4xl text-ink md:text-5xl">
                  <Counter value={item.value} suffix={item.suffix} />
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
