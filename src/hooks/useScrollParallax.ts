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
  const elementTopRef = useRef(0);
  const elementHeightRef = useRef(0);
  const viewHeightRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion media query
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

      // Only shift if the element is visible in the viewport
      if (relativeTop < viewHeight && relativeBottom > 0) {
        const elementCenter = relativeTop + elementHeight / 2;
        const screenCenter = viewHeight / 2;
        // Calculate offset based on scroll position relative to screen center
        const offset = (elementCenter - screenCenter) * speed;

        const sign = direction === "up" ? -1 : 1;
        el.style.transform = `translate3d(0, ${offset * sign}px, 0)`;
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

    // Re-check on media query change
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

  return ref;
}
