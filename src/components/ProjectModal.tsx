import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, ExternalLink, ShieldCheck, Terminal, X } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { SiEthereum } from "react-icons/si";
import { useEffect, useState } from "react";
import Tag from "./Tag";
import type { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const handleCopy = async () => {
    if (!project?.contractAddress) return;
    try {
      await navigator.clipboard.writeText(project.contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <AnimatePresence>
      {project && (
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
            aria-label={project.title}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl border border-border bg-surface"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              data-cursor="hover"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/80 text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden relative">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">
                      {project.category} · {project.year}
                    </p>
                    {project.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Verified Contract
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-ink">{project.title}</h3>
                </div>
                <p className="text-sm text-muted font-mono">{project.role}</p>
              </div>

              <p className="text-muted leading-relaxed max-w-2xl mb-8">{project.description}</p>

              {/* Web3 Contract Inspector Section */}
              {project.contractAddress && (
                <div className="mb-8 rounded-xl border border-border bg-black/40 p-5 backdrop-blur">
                  <div className="flex items-center justify-between gap-4 mb-3 pb-3 border-b border-border/60">
                    <div className="flex items-center gap-2">
                      <SiEthereum className="h-4 w-4 text-accent" />
                      <span className="text-xs font-mono font-medium text-ink">
                        On-Chain Smart Contract Details
                      </span>
                    </div>
                    {project.network && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.network}
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-muted uppercase tracking-wider block mb-1.5">
                      Contract Address
                    </span>
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border/80 bg-surface-2/60 px-3.5 py-2">
                      <code className="text-xs md:text-sm font-mono text-ink font-medium select-all break-all">
                        {project.contractAddress}
                      </code>
                      <button
                        type="button"
                        onClick={handleCopy}
                        data-cursor="hover"
                        className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-mono transition-colors ${
                          copied
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                            : "bg-surface hover:bg-accent hover:text-white border border-border text-muted"
                        }`}
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" /> Copy Address
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {project.compiler && (
                    <div className="mb-4 text-xs font-mono text-muted flex items-center gap-2">
                      <span>Compiler:</span>
                      <span className="text-ink">{project.compiler}</span>
                      {project.contractStandard && (
                        <>
                          <span className="text-border">•</span>
                          <span>Standard:</span>
                          <span className="text-accent">{project.contractStandard}</span>
                        </>
                      )}
                    </div>
                  )}

                  {project.keyMethods && project.keyMethods.length > 0 && (
                    <div>
                      <span className="text-[11px] font-mono text-muted uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                        <Terminal className="h-3.5 w-3.5 text-accent" />
                        Verified Functions &amp; Interfaces
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.keyMethods.map((m) => (
                          <span
                            key={m}
                            className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-mono text-accent"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.explorerUrl && (
                  <a
                    href={project.explorerUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/80 transition-colors"
                  >
                    View on Etherscan <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg hover:bg-accent hover:text-white transition-colors"
                  >
                    View Live <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
                  >
                    Source Code <FiGithub className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
