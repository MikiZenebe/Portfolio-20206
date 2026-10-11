import gojoRealEstate from "../assets/projects/gojo-realstate.png";
import arif from "../assets/projects/arif.png";
import nebeVoter from "../assets/projects/nebe-voter.png";
import mobileBanner from "../assets/projects/mobileBanner.png";
import owl from "../assets/projects/owl.png";
import sara from "../assets/projects/sara.png";
import grocify from "../assets/projects/grocify.png";
import gojo from "../assets/projects/gojo.jpg";
import lemon from "../assets/projects/lemon.png";
import nexus from "../assets/projects/nexus.png";
import crowdsprout from "../assets/projects/crowdsprout.jpg";
import type { Project } from "../types";

export const projectCategories = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "Web3/Blockchain",
  "Deployed Contracts",
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
    id: "nexus",
    title: "Nexus-DeFi",
    category: "Web3/Blockchain",
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

  {
    id: "crowd-sprout-contract",
    title: "CrowdSprout Campaign Protocol",
    category: "Deployed Contracts",
    image: crowdsprout,
    size: "large",
    description:
      "Production Ethereum smart contract governing multi-milestone campaign fundraising, automatic escrow lockups, and backer refund guarantees. Fully verified on Etherscan Sepolia.",
    technologies: [
      "Solidity",
      "Hardhat",
      "Sepolia",
      "Ethers.js",
      "OpenZeppelin",
    ],
    github: "https://github.com/MikiZenebe/Crowd-Sprout/tree/main/web3",
    liveDemo:
      "https://sepolia.etherscan.io/address/0xB09E98eb5b209f162382e359d7cA5C16bb4099D9#code",
    contractAddress: "0xB09E98eb5b209f162382e359d7cA5C16bb4099D9",
    network: "Sepolia Testnet",
    explorerUrl:
      "https://sepolia.etherscan.io/address/0xB09E98eb5b209f162382e359d7cA5C16bb4099D9#code",
    contractStandard: "Crowdfunding & Escrow",
    compiler: "Solidity 0.8.34",
    verified: true,
    keyMethods: [
      "createCampaign()",
      "donateToCampaign()",
      "getCampaigns()",
      "claimRefund()",
    ],
    featured: true,
    year: "2026",
    role: "Smart Contract Engineer",
  },
];
