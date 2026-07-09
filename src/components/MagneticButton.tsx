import { forwardRef, createElement, type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react";
import { useMagnetic } from "../hooks/useMagnetic";
import { cn } from "../utils/cn";

type MagneticVariant = "primary" | "outline" | "ghost";

interface MagneticButtonOwnProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: MagneticVariant;
  strength?: number;
}

type MagneticButtonProps = MagneticButtonOwnProps & Omit<ComponentPropsWithoutRef<"button">, keyof MagneticButtonOwnProps>;

const VARIANT_CLASSES: Record<MagneticVariant, string> = {
  primary: "bg-ink text-bg hover:bg-accent hover:text-white",
  outline: "border border-border text-ink hover:border-accent",
  ghost: "text-ink",
};

/**
 * A button/anchor wrapper with a magnetic hover pull + premium border treatment.
 */
const MagneticButton = forwardRef<HTMLElement, MagneticButtonProps>(function MagneticButton(
  { as: Component = "button", children, className, variant = "primary", strength = 0.3, ...props },
  _ref
) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(strength);

  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-wide font-medium transition-colors duration-300 rounded-full overflow-hidden";

  return createElement(
    Component,
    {
      ref,
      "data-cursor": "hover",
      onMouseMove,
      onMouseLeave,
      className: cn(base, VARIANT_CLASSES[variant], className),
      ...props,
    },
    children
  );
});

export default MagneticButton;
