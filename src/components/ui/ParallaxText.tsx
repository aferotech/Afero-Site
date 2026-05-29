import { useEffect, useRef, ReactNode } from "react";

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number; // Speed multiplier for translation
  className?: string;
  direction?: "left" | "right";
}

/**
 * Splits lines/words/headings and slides them horizontally relative to the window scroll.
 */
export function ParallaxText({
  children,
  speed = 0.1,
  className = "",
  direction = "left",
}: ParallaxTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion settings
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let frameId: number;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Only shift if the text is inside the visible viewport
      if (rect.top < viewHeight && rect.bottom > 0) {
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = viewHeight / 2;
        const offset = (elementCenter - screenCenter) * speed;

        const sign = direction === "left" ? -1 : 1;
        el.style.transform = `translateX(${offset * sign}px)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    const listener = (e: MediaQueryListEvent) => {
      if (e.matches) {
        el.style.transform = "";
        window.removeEventListener("scroll", onScroll);
      } else {
        window.addEventListener("scroll", onScroll, { passive: true });
        handleScroll();
      }
    };
    mediaQuery.addEventListener("change", listener);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mediaQuery.removeEventListener("change", listener);
      cancelAnimationFrame(frameId);
    };
  }, [speed, direction]);

  return (
    <span
      ref={ref}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </span>
  );
}
