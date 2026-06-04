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
  const elementTopRef = useRef(0);
  const elementHeightRef = useRef(0);
  const viewHeightRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion settings
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let frameId: number;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      elementTopRef.current = rect.top + scrollTop;
      elementHeightRef.current = rect.height;
      viewHeightRef.current = window.innerHeight;
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const elementTop = elementTopRef.current;
      const elementHeight = elementHeightRef.current;
      const viewHeight = viewHeightRef.current;

      const relativeTop = elementTop - scrollTop;
      const relativeBottom = relativeTop + elementHeight;

      // Only shift if the text is inside the visible viewport
      if (relativeTop < viewHeight && relativeBottom > 0) {
        const elementCenter = relativeTop + elementHeight / 2;
        const screenCenter = viewHeight / 2;
        const offset = (elementCenter - screenCenter) * speed;

        const sign = direction === "left" ? -1 : 1;
        el.style.transform = `translate3d(${offset * sign}px, 0, 0)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(handleScroll);
    };

    const handleResize = () => {
      measure();
      handleScroll();
    };

    // Initial measurement
    measure();
    handleScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    const listener = (e: MediaQueryListEvent) => {
      if (e.matches) {
        el.style.transform = "";
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", handleResize);
      } else {
        measure();
        handleScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", handleResize, { passive: true });
      }
    };
    mediaQuery.addEventListener("change", listener);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", listener);
      cancelAnimationFrame(frameId);
    };
  }, [speed, direction]);

  return (
    <span ref={ref} className={`inline-block will-change-transform ${className}`}>
      {children}
    </span>
  );
}
