import { Code2, LayoutTemplate, Gauge, Sparkles, Layers, Smartphone, TabletSmartphone } from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
  {
    id: "srv-1",
    icon: Code2,
    title: "Frontend Development",
    number: "01",
    description:
      "Robust, scalable interfaces built with React and TypeScript — engineered to be as maintainable as they are beautiful.",
  },
  {
    id: "srv-2",
    icon: TabletSmartphone,
    title: "Mobile App Development",
    number: "02",
    description:
      "Cross-platform apps built with React Native and Flutter, plus native touches in Swift and Kotlin — one codebase, native feel on iOS and Android.",
  },
  {
    id: "srv-3",
    icon: Smartphone,
    title: "Responsive Design",
    number: "03",
    description:
      "Layouts that adapt gracefully across breakpoints, treating every screen size as a first-class citizen, not an afterthought.",
  },
  {
    id: "srv-4",
    icon: LayoutTemplate,
    title: "UI Engineering",
    number: "04",
    description:
      "Translating Figma craft into pixel-accurate, accessible components without losing the intent of the original design.",
  },
  {
    id: "srv-5",
    icon: Gauge,
    title: "Performance Optimization",
    number: "05",
    description:
      "Auditing, profiling and tuning apps and sites for fast paints, lean bundles and buttery interactions at scale.",
  },
  {
    id: "srv-6",
    icon: Sparkles,
    title: "Motion & Animation",
    number: "06",
    description:
      "Purposeful micro-interactions and scroll storytelling using GSAP, Framer Motion and native gesture systems — motion with meaning, never noise.",
  },
  {
    id: "srv-7",
    icon: Layers,
    title: "Design Systems",
    number: "07",
    description:
      "Token-driven, themeable component libraries shared across web and mobile that keep growing products consistent.",
  },
];
