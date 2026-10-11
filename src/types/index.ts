import type { ComponentType, CSSProperties } from "react";

/**
 * A common shape both lucide-react and react-icons components satisfy,
 * so data files can mix icon sets without friction.
 */
export type IconComponent = ComponentType<{
  className?: string;
  style?: CSSProperties;
}>;

export interface Skill {
  name: string;
  icon: IconComponent;
  category: string;
  color: string;
}

export type ProjectSize = "small" | "medium" | "large";

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  size: ProjectSize;
  description: string;
  technologies: string[];
  github: string;
  liveDemo?: string;
  featured: boolean;
  year?: string;
  role?: string;
  contractAddress?: string;
  network?: string;
  explorerUrl?: string;
  contractStandard?: string;
  compiler?: string;
  verified?: boolean;
  keyMethods?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Service {
  id: string;
  icon: IconComponent;
  title: string;
  number: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarInitials: string;
}

export interface Achievement {
  id: string;
  icon: IconComponent;
  value: number;
  suffix: string;
  label: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: IconComponent;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}
