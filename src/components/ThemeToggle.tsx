import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, Palette } from "lucide-react";
import { ACCENT_THEMES, useTheme, type AccentTheme } from "../context/ThemeContext";

/**
 * Dark/light mode switch + accent "color theme" picker.
 */
export default function ThemeToggle() {
  const { mode, toggleMode, accent, setAccent } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleSelect = (id: AccentTheme) => {
    setAccent(id);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative flex items-center gap-2">
      <button
        onClick={toggleMode}
        data-cursor="hover"
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
        className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border text-ink transition-colors hover:border-accent hover:text-accent"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={mode}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="flex"
          >
            {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.span>
        </AnimatePresence>
      </button>

      <button
        onClick={() => setOpen((v) => !v)}
        data-cursor="hover"
        aria-label="Choose accent color theme"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-accent hover:text-accent"
      >
        <Palette className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 z-[90] flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-3 shadow-xl"
            role="menu"
          >
            {ACCENT_THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleSelect(theme.id)}
                aria-label={`${theme.label} accent theme`}
                data-cursor="hover"
                className="relative flex h-6 w-6 items-center justify-center rounded-full transition-transform hover:scale-110"
              >
                <span className="h-4 w-4 rounded-full" style={{ backgroundColor: theme.swatch }} />
                {accent === theme.id && (
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: `0 0 0 2px var(--color-surface), 0 0 0 4px ${theme.swatch}` }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
