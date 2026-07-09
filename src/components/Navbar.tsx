import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToId } from "../hooks/useLenis";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  // { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-bg/70 border-b border-border-soft"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-5">
          <button
            onClick={() => handleNav("hero")}
            data-cursor="hover"
            className="font-display text-lg tracking-[0.2em] text-ink"
          >
            Mikiyas
          </button>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  data-cursor="hover"
                  onClick={() => handleNav(item.id)}
                  className={`link-underline text-xs uppercase tracking-[0.15em] transition-colors ${
                    active === item.id
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <button
              data-cursor="hover"
              onClick={() => handleNav("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-ink hover:border-accent hover:text-accent transition-colors"
            >
              Let's Talk
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              className="text-ink"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[75] bg-bg lg:hidden flex flex-col justify-center px-8"
          >
            <ul className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => handleNav(item.id)}
                    className="font-display text-3xl text-ink"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
