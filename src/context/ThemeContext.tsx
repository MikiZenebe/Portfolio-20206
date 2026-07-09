import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ThemeMode = "dark" | "light";
export type AccentTheme = "blue" | "violet" | "emerald" | "amber" | "rose";

interface AccentMeta {
  id: AccentTheme;
  label: string;
  swatch: string;
}

/** The available "types of color" accent themes a visitor can pick from. */
export const ACCENT_THEMES: AccentMeta[] = [
  { id: "blue", label: "Blue", swatch: "#3B82F6" },
  { id: "violet", label: "Violet", swatch: "#8B5CF6" },
  { id: "emerald", label: "Emerald", swatch: "#10B981" },
  { id: "amber", label: "Amber", swatch: "#F59E0B" },
  { id: "rose", label: "Rose", swatch: "#F43F5E" },
];

interface ThemeContextValue {
  mode: ThemeMode;
  accent: AccentTheme;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
  setAccent: (accent: AccentTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const MODE_KEY = "portfolio-theme-mode";
const ACCENT_KEY = "portfolio-theme-accent";

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(MODE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getInitialAccent(): AccentTheme {
  if (typeof window === "undefined") return "blue";
  const stored = window.localStorage.getItem(ACCENT_KEY);
  const isValid = ACCENT_THEMES.some((theme) => theme.id === stored);
  return isValid ? (stored as AccentTheme) : "blue";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(getInitialMode);
  const [accent, setAccentState] = useState<AccentTheme>(getInitialAccent);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-mode", mode);
    window.localStorage.setItem(MODE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-accent", accent);
    window.localStorage.setItem(ACCENT_KEY, accent);
  }, [accent]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      accent,
      toggleMode: () => setModeState((m) => (m === "dark" ? "light" : "dark")),
      setMode: setModeState,
      setAccent: setAccentState,
    }),
    [mode, accent]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
