import React, { useRef } from "react";

interface Tilt3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number; // Maximum tilt angle in degrees
  scale?: number; // Scale on hover
  perspective?: number; // 3D Perspective depth
}

export function Tilt3D({
  children,
  maxTilt = 8,
  scale = 1.02,
  perspective = 1000,
  className = "",
  style,
  ...props
}: Tilt3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x / rect.width - 0.5) * 2; // -1 to 1
    const yPct = (y / rect.height - 0.5) * 2; // -1 to 1

    const rotX = -yPct * maxTilt;
    const rotY = xPct * maxTilt;

    el.style.transform = `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale}, ${scale}, ${scale})`;

    const glare = glareRef.current;
    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.5) 0%, transparent 60%)`;
    }
  };

  const handleMouseEnter = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const glare = glareRef.current;
    if (glare) {
      glare.style.opacity = "0.25";
    }
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (el) {
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
    const glare = glareRef.current;
    if (glare) {
      glare.style.opacity = "0";
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-300 ease-out ${className}`}
      style={{
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transformStyle: "preserve-3d",
        ...style,
      }}
      {...props}
    >
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none rounded-[inherit] z-30 mix-blend-overlay opacity-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5) 0%, transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}
