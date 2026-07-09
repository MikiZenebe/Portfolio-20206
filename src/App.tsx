import { useEffect, useState } from "react";
import Lenis from "lenis";

import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Noise from "./components/Noise";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    window.__lenis = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg text-ink selection:bg-accent selection:text-white">
      <Loader onDone={() => setLoading(false)} />
      <Noise />
      <Cursor />
      <ScrollProgress />
      <Navbar />

      <main aria-hidden={loading}>
        <Hero />
        {/* <About /> */}
        <Skills />
        <Portfolio />
        <Experience />
        <Services />
        {/* <Achievements /> */}
        <Testimonials />
        <Contact />
        <Footer />
      </main>

      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
