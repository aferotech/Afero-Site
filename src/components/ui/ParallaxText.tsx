import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number; // Speed multiplier for translation
  className?: string;
  direction?: "left" | "right";
}

/**
 * Splits lines/headings and slides them horizontally relative to the window scroll.
 * Uses Framer Motion hooks for high-performance compositor thread rendering.
 */
export function ParallaxText({
  children,
  speed = 0.1,
  className = "",
  direction = "left",
}: ParallaxTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Map scrollY to horizontal translation offset (direct mapping without reflow measurements)
  const x = useTransform(scrollY, (latest) => {
    if (shouldReduceMotion) return "0px";
    const sign = direction === "left" ? -1 : 1;
    return `${latest * speed * sign}px`;
  });

  return (
    <motion.span
      ref={ref}
      style={{ x }}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </motion.span>
  );
}
