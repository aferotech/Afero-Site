import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import navIcon from "@/assets/nav-icon.png";
import navFull from "@/assets/nav-full.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { to: "/work", label: "Work" },
    { to: "/process", label: "Process" },
    { to: "/about", label: "About" },
    { to: "/journal", label: "Journal" },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/60 transition-all duration-500 ${scrolled
        ? "backdrop-blur-xl bg-background/85"
        : "backdrop-blur-md bg-background/70"
        }`}
    >

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center w-[220px]">

          <Link
            to="/"
            className="relative flex items-center h-6 w-[340px]"
          >

            {/* Default Icon */}
            <img
              src={navIcon}
              alt="Afero"
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-auto transition-all duration-500 ease-in-out ${scrolled
                ? "opacity-0 scale-95"
                : "opacity-100 scale-100"
                }`}
            />

            {/* Full Logo on Scroll */}
            <img
              src={navFull}
              alt="Afero"
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-auto transition-all duration-500 ease-in-out ${scrolled
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
                }`}
            />

          </Link>

        </div>

        {/* Center Navigation */}
        <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-sm">

          {links.map((l) => (
            <li key={l.to}>

              <Link
                to={l.to}
                className="text-foreground/70 hover:text-foreground transition-colors"
                activeProps={{
                  className: "text-foreground font-medium",
                }}
              >
                {l.label}
              </Link>

            </li>
          ))}

        </ul>

        {/* CTA */}
        <div className="flex justify-end w-[220px]">

          <Link
            to="/contact"
            className="inline-flex items-center gap-1 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-coral hover:text-coral-foreground transition-colors"
          >
            Contact <ArrowUpRight className="h-4 w-4" />
          </Link>

        </div>

      </nav>

    </header>
  );
}