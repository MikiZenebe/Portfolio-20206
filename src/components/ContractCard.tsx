import { useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, ExternalLink, ShieldCheck, Terminal } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { SiEthereum } from "react-icons/si";
import TiltCard from "./TiltCard";
import Tag from "./Tag";
import type { Project } from "../types";

interface ContractCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  className?: string;
}

export default function ContractCard({
  project,
  onOpen,
  className = "",
}: ContractCardProps) {
  const [copied, setCopied] = useState(false);

  const formatAddress = (addr?: string) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleCopy = async (e: MouseEvent) => {
    e.stopPropagation();
    if (!project.contractAddress) return;
    try {
      await navigator.clipboard.writeText(project.contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${className}`}
    >
      <TiltCard
        max={5}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/80 bg-surface/95 h-full flex flex-col justify-between transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]"
        onClick={() => onOpen(project)}
        data-cursor="hover"
      >
        {/* Subtle Cyber Glow Top Bar */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-emerald-500/0 via-accent to-emerald-500/0 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Ambient background glow on hover */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div>
          {/* Visual Header / Banner */}
          <div className="relative overflow-hidden aspect-[16/9]">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-black/30" />

            {/* Badges Overlay */}
            <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10">
              {/* Network Pill */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-black/70 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {project.network || "Sepolia Testnet"}
              </div>

              {/* Verified Badge */}
              <div className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-black/70 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-accent">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                Verified
              </div>
            </div>

            {/* Standard pill overlay */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-accent/90 bg-black/60 px-2 py-0.5 rounded border border-accent/20 backdrop-blur-sm">
                {project.contractStandard || "SMART CONTRACT"}
              </span>
              <span className="num-label text-xs text-white/70 font-mono">
                {project.year || "2026"}
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6">
            {/* Title & Role */}
            <div className="mb-3">
              <h3 className="font-display text-xl md:text-2xl text-ink leading-tight group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted/80 mt-1 font-mono">
                {project.role || "Smart Contract"} · {project.compiler || "Solidity"}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-5">
              {project.description}
            </p>

            {/* Deployed Contract Address Interactive Box */}
            {project.contractAddress && (
              <div className="mb-5 rounded-xl border border-border/80 bg-black/40 p-3 backdrop-blur transition-colors group-hover:border-accent/40">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted uppercase tracking-wider">
                    <SiEthereum className="h-3 w-3 text-accent" />
                    Contract Address
                  </div>
                  {project.explorerUrl && (
                    <a
                      href={project.explorerUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e: MouseEvent) => e.stopPropagation()}
                      className="text-[10px] font-mono text-accent hover:underline inline-flex items-center gap-0.5"
                    >
                      Etherscan <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <code className="text-xs font-mono text-ink/90 font-medium tracking-wide">
                    {formatAddress(project.contractAddress)}
                  </code>

                  <button
                    type="button"
                    onClick={handleCopy}
                    data-cursor="hover"
                    aria-label="Copy contract address"
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-mono font-medium transition-all ${
                      copied
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-surface-2 hover:bg-accent hover:text-white border border-border text-muted hover:border-accent"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Key Contract Methods Pills */}
            {project.keyMethods && project.keyMethods.length > 0 && (
              <div className="mb-4">
                <p className="text-[10px] uppercase font-mono tracking-wider text-muted mb-2 flex items-center gap-1">
                  <Terminal className="h-3 w-3 text-accent" />
                  Key Functions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.keyMethods.slice(0, 3).map((method) => (
                    <span
                      key={method}
                      className="rounded-md border border-border/70 bg-surface-2/70 px-2 py-0.5 text-[10px] font-mono text-ink/80"
                    >
                      {method}
                    </span>
                  ))}
                  {project.keyMethods.length > 3 && (
                    <span className="rounded-md border border-border/50 px-1.5 py-0.5 text-[10px] font-mono text-muted">
                      +{project.keyMethods.length - 3}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <Tag key={tech} className="text-[10px] py-0.5 px-2">
                  {tech}
                </Tag>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="border-t border-border/70 p-4 bg-surface-2/30 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.explorerUrl && (
              <a
                href={project.explorerUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] font-mono text-ink hover:border-accent hover:text-accent transition-colors"
              >
                <SiEthereum className="h-3 w-3" />
                Explorer
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                data-cursor="hover"
                aria-label="GitHub Repository"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-ink hover:border-accent hover:text-accent transition-colors"
              >
                <FiGithub className="h-3.5 w-3.5" />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                data-cursor="hover"
                aria-label="Live Demo"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-ink hover:border-accent hover:text-accent transition-colors"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={() => onOpen(project)}
            data-cursor="hover"
            className="text-[11px] font-mono text-accent hover:underline inline-flex items-center gap-1"
          >
            Inspect <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
      </TiltCard>
    </motion.div>
  );
}
