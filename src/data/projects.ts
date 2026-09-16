import gojoRealEstate from "../assets/projects/gojo-realstate.png";
import arif from "../assets/projects/arif.png";
import nebeVoter from "../assets/projects/nebe-voter.png";
import tribe from "../assets/projects/tribe.png";
import mobileBanner from "../assets/projects/mobileBanner.png";
import owl from "../assets/projects/owl.png";
import sara from "../assets/projects/sara.png";
import grocify from "../assets/projects/grocify.png";
import gojo from "../assets/projects/gojo.jpg";
import lemon from "../assets/projects/lemon.png";
import nexus from "../assets/projects/nexus.png";
import type { Project } from "../types";

export const projectCategories = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "Landing Pages",
  "Backend",
] as const;

export const projects: Project[] = [
  {
    id: "owl-events",
    title: "Owl Events",
    category: "Web Apps",
    image: owl,
    size: "large",
    description: "An interactive online event managment system.",
    technologies: ["React", "Tailwind", "MUI", "RTK", "Framer Motion"],
    github: "",
    liveDemo: "https://owlevents.app/organizers",
    featured: true,
    year: "2025",
    role: "Frontend Developer",
  },
  {
    id: "nebe-voter",
    title: "Nebe Voter Registration",
    category: "Web Apps",
    image: nebeVoter,
    size: "medium",
    description: "A Voter Registration Portal For Ethiopian Election.",
    technologies: ["React", "RTK", "Axios", "TailwindCSS"],
    github: "https://github.com/MikiZenebe",
    liveDemo: "https://mirchaye.portal.nebe.org.et/",
    featured: true,
    year: "2024",
    role: "Frontend Engineer",
  },

  {
    id: "sara-marketing",
    title: "Sara Events & Marketing",
    category: "Web Apps",
    image: sara,
    size: "medium",
    description: "An interactive online event managment system.",
    technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/",
    liveDemo: "http://saraeventsandmarketing.com",
    featured: true,
    year: "2025",
    role: "Frontend Developer",
  },
  {
    id: "lemon-ai",
    title: "Lemon AI",
    category: "Web Apps",
    image: lemon,
    size: "medium",
    description: "AI Social Media Scheduling Platform.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Inngest",
      "Clerk",
      "Insforge",
    ],
    github: "https://github.com/MikiZenebe/Lemon-AI",
    liveDemo: "https://lemon-ai-miki.vercel.app/",
    featured: true,
    year: "2026",
    role: "Fullstack Developer",
  },
  {
    id: "gojo-real-estate",
    title: "Gojo Real Estate",
    category: "Web Apps",
    image: gojoRealEstate,
    size: "large",
    description:
      "A modern real estate platform that makes buying your first home simple and stress-free.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Sanity CMS", "Clerk"],
    github: "https://github.com/MikiZenebe/Gojo-RealState",
    liveDemo: "https://gojo-real-state.vercel.app/",
    featured: false,
    // year: "2024",
    // role: "Lead Frontend Engineer",
  },
  {
    id: "arif-studios",
    title: "Arif Studios",
    category: "Web Apps",
    image: arif,
    size: "medium",
    description: "A booking application with stripe payment functionality.",
    technologies: ["React", "TypeScript", "Axios", "Tailwind"],
    github: "",
    liveDemo: "",
    featured: true,
    year: "2023",
    role: "Frontend Developer",
  },

  {
    id: "tribe",
    title: "Tribe",
    category: "Landing Pages",
    image: tribe,
    size: "small",
    description:
      "A responsive portfolio website showcasing modern web development techniques with smooth animations and interactive elements.",
    technologies: ["GSAP", "React", "Tailwind", "Framer Motion"],
    github: "https://github.com/MikiZenebe/Tribe-LandingPage",
    liveDemo: "https://tribe-miki-sass.vercel.app",
    featured: true,
    // year: "2023",
    // role: "Creative Developer",
  },
  {
    id: "nexus",
    title: "Nexus-DeFi",
    category: "Web 3.0",
    image: nexus,
    size: "large",
    description:
      "A decentralized finance (DeFi) platform for the Ethereum blockchain, built with Hardhat and React. NexusFi allows users to trade ERC-20 tokens, earn rewards, and participate in yield farming, all while maintaining full control of their assets through smart contracts.",
    technologies: ["Solidity", "React", "Vite", "Tailwind"],
    github: "https://github.com/MikiZenebe/NexusFi-DeFi",
    liveDemo: "https://nexus-defi-block.vercel.app/",
    featured: true,
    // year: "2023",
    // role: "Creative Developer",
  },
  {
    id: "book-ocean",
    title: "Book Ocean",
    category: "Mobile Apps",
    image: mobileBanner,
    size: "medium",
    description:
      "a modern fullstack mobile app that helps you discover, explore, and get personalized book recommendations.",
    technologies: ["Expo", "TypeScript", "NodeJs", "MongoDB", "React Native"],
    github: "https://github.com/MikiZenebe/Book-Ocean-Mobile-App",
    // liveDemo: "https://example.com/",
    featured: false,
    // year: "2022",
    // role: "Design Systems Engineer",
  },

  {
    id: "grocify",
    title: "Grocify",
    category: "Mobile Apps",
    image: grocify,
    size: "large",
    description:
      "A modern, fully functional grocery management mobile application built with React Native and Expo. Grocify helps users plan smarter and shop happier with a seamless cross-platform experience.",
    technologies: [
      "React Native",
      "Expo",
      "NativeWind",
      "Zustand",
      "PostgreSQL",
      "DrizzleORM",
      "Clerk",
    ],
    github: "https://github.com/MikiZenebe/Grocify-App",
    liveDemo:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/102186185/587103291-85a7e0ee-4e22-493c-9cf8-29d1d600a19f.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260709T101028Z&X-Amz-Expires=300&X-Amz-Signature=5e731a4324303b9420fe951c9c84a4f2d5548b31d43b5ae5a2287e72f85759bc&X-Amz-SignedHeaders=host&response-content-type=video%2Fmp4",
    featured: true,
    // year: "2023",
    // role: "Mobile App Developer",
  },
  {
    id: "gojo-mobile",
    title: "Gojo Mobile App",
    category: "Mobile Apps",
    image: gojo,
    size: "large",
    description:
      "A modern, fully functional real estate mobile application built with React Native and Expo. Gojo helps users discover their dream homes, apartments, and villas, while also allowing property owners to seamlessly list their properties on the market.",
    technologies: [
      "React Native",
      "Expo",
      "NativeWind",
      "Zustand",
      "PostgreSQL",
      "DrizzleORM",
      "Clerk",
    ],
    github: "https://github.com/MikiZenebe/Gojo-Real-State-Mobile-App",
    liveDemo:
      "https://github.com/user-attachments/assets/da905367-d979-4e69-bba5-aa8933ecaabc",
    featured: true,
    // year: "2023",
    // role: "Mobile App Developer",
  },
];
