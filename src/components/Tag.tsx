import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted ${className}`}
    >
      {children}
    </span>
  );
}
