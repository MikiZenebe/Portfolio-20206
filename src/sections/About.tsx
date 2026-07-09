import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import portrait from "../assets/portrait.jpg";
import SectionHeading from "../components/SectionHeading";
import { gsap } from "../animations/reveal";

interface JourneyStep {
  year: string;
  label: string;
}

const journey: JourneyStep[] = [
  { year: "2017", label: "First line of code" },
  { year: "2019", label: "First freelance client" },
  { year: "2021", label: "Joined Studio Halcyon" },
  { year: "2022", label: "Shipped first React Native app" },
  { year: "2023", label: "Leading engineering at Nova" },
  { year: "2024", label: "Two apps live on the App Store & Play Store" },
];

export default function About() {
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrapRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: { trigger: imgWrapRef.current, start: "top 80%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative border-b border-border-soft px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="01" eyebrow="About" title="An engineer obsessed with the last 10% of polish — on every screen size." />

        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div ref={imgWrapRef} className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border">
              <img src={portrait} alt="Portrait of Aarav Mehta" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col gap-12 md:col-span-7">
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-muted md:text-xl">
                For over seven years I've lived at the intersection of design and engineering —
                translating ambitious ideas into interfaces that feel considered, confident and alive,
                whether they run in a browser tab or live on your home screen. I believe great
                software is judged in milliseconds and remembered in feelings.
              </p>
              <p className="leading-relaxed text-muted">
                My process starts with restraint: strip away anything that doesn't serve the story,
                then rebuild with typography, rhythm and motion doing the heavy lifting. On the web
                that means React and thoughtful CSS; on mobile it means React Native, Swift and
                Kotlin tuned until an app feels genuinely native. I work best embedded with design
                teams, close enough to challenge a decision and close enough to ship it the same week.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">Journey</h3>
              <div className="relative flex flex-col gap-0">
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />
                {journey.map((step, i) => (
                  <motion.div
                    key={step.year}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative flex items-center gap-6 py-4 pl-6"
                  >
                    <span className="absolute left-0 h-2.5 w-2.5 rounded-full border border-accent bg-bg" />
                    <span className="num-label w-14 shrink-0 text-sm text-accent">{step.year}</span>
                    <span className="text-sm text-ink md:text-base">{step.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
