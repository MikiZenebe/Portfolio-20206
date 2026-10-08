import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import type { ContactInfo, SocialLink } from "../types";

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/MikiZenebe",
    icon: FiGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mikiyas-zenebe-17451b222",
    icon: FiLinkedin,
  },
  {
    id: "twitter",
    label: "Twitter / X",
    url: "https://x.com/Miki_Zenebe10",
    icon: FiTwitter,
  },
  // {
  //   id: "instagram",
  //   label: "Instagram",
  //   url: "https://instagram.com/",
  //   icon: FiInstagram,
  // },
];

export const contactInfo: ContactInfo = {
  email: "dev.mikiyaszenebe@gmail.com",
  phone: "+251922936393",
  location: "Addis Ababa, Ethiopia — Available Worldwide",
};
