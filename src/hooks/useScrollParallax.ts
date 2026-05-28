import { useEffect, useRef } from "react";

/**
 * Applies a smooth scroll-driven vertical parallax translation directly to an element.
 * Updates are done directly on the style object using requestAnimationFrame to prevent re-renders.
 * 
 * @param speed The rate of translation relative to scroll distance (e.g. 0.1, 0.2).
 * @param direction "up" to move the element opposite to the scroll direction, "down" to move with it.
 */
export function useScrollParallax(speed = 0.2, direction: "up" | "down" = "up") {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let frameId: number;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Only recalculate if the element is visible in the viewport
      if (rect.top < viewHeight && rect.bottom > 0) {
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = viewHeight / 2;
        // Calculate offset based on scroll position relative to screen center
        const offset = (elementCenter - screenCenter) * speed;
        
        const sign = direction === "up" ? -1 : 1;
        el.style.transform = `translateY(${offset * sign}px)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    // Re-check on media query change
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

  return ref;
}
