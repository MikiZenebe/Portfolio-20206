import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiGreensock,
  SiGit,
  SiGithub,
  SiFigma,
  SiVite,
  SiExpo,
  SiFirebase,
  SiVuedotjs,
  SiExpress,
  SiSupabase,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { Skill } from "../types";

export const skillCategories = [
  "Frontend",
  "Mobile",
  "Backend",
  "Animation",
  "Tools",
] as const;

export const skills: Skill[] = [
  { name: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
  { name: "Vue.js", icon: SiVuedotjs, category: "Frontend", color: "#42B883" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    color: "#FFFFFF",
  },
  { name: "React Native", icon: SiReact, category: "Mobile", color: "#61DAFB" },
  { name: "Expo", icon: SiExpo, category: "Mobile", color: "#F5F5F5" },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Frontend",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Frontend",
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    color: "#38BDF8",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    category: "Animation",
    color: "#BB4DFB",
  },
  { name: "GSAP", icon: SiGreensock, category: "Animation", color: "#88CE02" },
  { name: "Firebase", icon: SiFirebase, category: "Backend", color: "#FFCA28" },
  { name: "Node.js", icon: SiNextdotjs, category: "Backend", color: "#339933" },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "Backend",
    color: "#fff",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    category: "Backend",
    color: "#3ECF8E",
  },
  { name: "Git", icon: SiGit, category: "Tools", color: "#F05032" },
  { name: "GitHub", icon: SiGithub, category: "Tools", color: "#F5F5F5" },
  { name: "Figma", icon: SiFigma, category: "Tools", color: "#F24E1E" },
  { name: "VS Code", icon: VscVscode, category: "Tools", color: "#007ACC" },
  { name: "Vite", icon: SiVite, category: "Tools", color: "#646CFF" },
];
