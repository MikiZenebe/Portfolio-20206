import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { socialLinks, contactInfo } from "../data/socialLinks";
import { scrollToId } from "../hooks/useLenis";

const FOOTER_LINKS = ["hero", "about", "work", "experience", "contact"];

export default function Footer() {
  const [clicks, setClicks] = useState(0);
  const [egg, setEgg] = useState(false);

  const handleLogoClick = () => {
    const next = clicks + 1;
    setClicks(next);
    if (next >= 5) {
      setEgg(true);
      setClicks(0);
      setTimeout(() => setEgg(false), 2200);
    }
  };

  return (
    <footer className="relative px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <button
              onClick={handleLogoClick}
              data-cursor="hover"
              className={`font-display text-3xl tracking-[0.1em] text-ink transition-transform duration-300 ${egg ? "scale-125 text-accent" : ""}`}
            >
              Mikiyas<span className="text-accent"> </span>Zenebe
            </button>
            <p className="mt-3 max-w-xs text-sm text-muted">
              {egg
                ? "✨ You found the easter egg. Let's build something great together."
                : "Designing and building considered digital experiences."}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((id) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className="link-underline text-xs uppercase tracking-[0.15em] text-muted hover:text-ink"
              >
                {id === "hero" ? "Top" : id}
              </button>
            ))}
          </nav>
        </div>

        <div className="h-px w-full bg-border-soft" />

        <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Aarav Mehta. All rights reserved. ·{" "}
            {contactInfo.email}
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map(({ id, label, url, icon: Icon }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-cursor="hover"
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <button
              onClick={() => scrollToId("hero")}
              aria-label="Back to top"
              data-cursor="hover"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
