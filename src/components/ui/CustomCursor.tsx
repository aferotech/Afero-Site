import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hoverType, setHoverType] = useState<"none" | "link" | "button" | "card" | "input">("none");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports hover/fine pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const handleMediaQueryChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(!e.matches);
    };

    handleMediaQueryChange(mediaQuery);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    } else {
      mediaQuery.addListener(handleMediaQueryChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      } else {
        mediaQuery.removeListener(handleMediaQueryChange);
      }
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // Enable custom cursor class globally
    document.documentElement.classList.add("has-custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Instantly position the dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const updateRingPosition = () => {
      // Inertia interpolation: ring follows the dot with lightweight spring math
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(updateRingPosition);
    };

    rafId = requestAnimationFrame(updateRingPosition);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find nearest hoverable elements
      const linkEl = target.closest("a, [role='link']");
      const buttonEl = target.closest("button, [role='button'], .cursor-pointer");
      const cardEl = target.closest(".group, .card, .glass-card-3d, [data-cursor='card']");
      const inputEl = target.closest("input, textarea, select");

      if (cardEl) {
        setHoverType("card");
      } else if (inputEl) {
        setHoverType("input");
      } else if (buttonEl) {
        setHoverType("button");
      } else if (linkEl) {
        setHoverType("link");
      } else {
        setHoverType("none");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile, isVisible]);

  if (isMobile) return null;

  const hoverClassMap = {
    none: "",
    link: "is-hovering-link",
    button: "is-hovering-button",
    card: "is-hovering-card",
    input: "is-hovering-input",
  };

  return (
    <>
      <div
        ref={ringRef}
        className={`custom-cursor ${hoverClassMap[hoverType]}`}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <span className="custom-cursor-label text-[10px] uppercase font-bold tracking-widest font-mono text-[#0a0503] opacity-0 transition-opacity duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          View
        </span>
      </div>
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${hoverType !== "none" ? `is-hovering-${hoverType}` : ""}`}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
