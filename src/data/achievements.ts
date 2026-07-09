import { Rocket, CalendarDays, Users, Award, Smartphone } from "lucide-react";
import type { Achievement } from "../types";

export const achievements: Achievement[] = [
  { id: "a1", icon: Rocket, value: 42, suffix: "+", label: "Projects Completed" },
  { id: "a2", icon: Smartphone, value: 11, suffix: "+", label: "Mobile Apps Shipped" },
  { id: "a3", icon: CalendarDays, value: 7, suffix: "+", label: "Years of Experience" },
  { id: "a4", icon: Users, value: 28, suffix: "+", label: "Happy Clients" },
  { id: "a5", icon: Award, value: 9, suffix: "", label: "Design Awards" },
];
