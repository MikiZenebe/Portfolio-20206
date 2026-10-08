import { AnimatePresence, motion } from "framer-motion";
import { Download, X } from "lucide-react";
import { useEffect, useState } from "react";
// @ts-ignore
import html2pdf from "html2pdf.js";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handlePrint = async () => {
    const iframe = document.getElementById(
      "resume-iframe",
    ) as HTMLIFrameElement;
    if (iframe && iframe.contentDocument) {
      const element = iframe.contentDocument.querySelector(
        ".wrap",
      ) as HTMLElement;
      if (element) {
        setIsGenerating(true);

        // Dynamically measure the exact width and height of the resume to prevent 2 pages
        // Using getBoundingClientRect to account for fractional pixels and adding a small buffer
        const rect = element.getBoundingClientRect();
        const pdfWidth = rect.width ? Math.ceil(rect.width) : 860;
        const pdfHeight = rect.height ? Math.ceil(rect.height) + 5 : 1060;

        const opt = {
          margin: 0,
          filename: "Mikiyas_Zenebe_Resume.pdf",
          image: { type: "jpeg" as const, quality: 1 },
          html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
          jsPDF: {
            unit: "px",
            format: [pdfWidth, pdfHeight] as [number, number],
            orientation: "portrait" as const,
          },
        };

        try {
          await html2pdf().set(opt).from(element).save();
        } catch (error) {
          console.error("Error generating PDF:", error);
        } finally {
          setIsGenerating(false);
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Resume"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-4 md:px-6 shrink-0">
              <h2 className="text-lg font-medium text-ink">Resume</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  disabled={isGenerating}
                  data-cursor="hover"
                  className="flex items-center gap-2 rounded-full border border-border bg-bg/80 px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="h-4 w-4" />
                  {isGenerating ? "Generating..." : "Save as PDF"}
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close resume"
                  data-cursor="hover"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/80 text-ink hover:border-accent hover:text-accent transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 bg-[#d6d3cc] overflow-hidden">
              <iframe
                id="resume-iframe"
                src="/resume.html"
                title="Resume"
                className="w-full h-full border-none"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
