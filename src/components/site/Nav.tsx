import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import navIcon from "@/assets/nav-icon.webp";
import navFull from "@/assets/nav-full.webp";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border/60 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/85" : "backdrop-blur-md bg-background/70"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center w-auto md:w-[220px]">
          <Link
            to="/"
            onClick={(e) => {
              if (typeof window !== "undefined" && window.location.pathname === "/") {
                e.preventDefault();
                window.lenis?.scrollTo(0, { duration: 1.2 });
              }
            }}
            className="relative flex items-center h-6 w-32 md:w-[340px]"
          >
            {/* Default Icon */}
            <img
              src={navIcon}
              alt="Afero"
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-auto transition-[opacity,transform] duration-500 ease-in-out ${
                scrolled ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />

            {/* Full Logo on Scroll */}
            <img
              src={navFull}
              alt="Afero"
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-auto transition-[opacity,transform] duration-500 ease-in-out ${
                scrolled ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />
          </Link>
        </div>

        {/* Center Navigation (Desktop Only) */}
        <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="nav-link text-foreground/70 hover:text-foreground transition-colors"
                activeProps={{
                  className: "nav-link-active text-foreground font-medium",
                }}
              >
                <span className="relative z-10">{l.label}</span>
                <svg
                  className="nav-strike-through absolute left-[-8px] right-[-8px] top-[52%] -translate-y-1/2 h-[10px] w-[calc(100%+16px)] pointer-events-none z-0"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M -4,7.5 C 15,3 35,6 55,3.5 C 75,2.5 90,4.5 104,4 C 90,6.5 70,8 50,6 T -4,9.5 Z" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA & Mobile Trigger */}
        <div className="flex items-center justify-end gap-2 md:gap-4 w-auto md:w-[220px]">
          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-coral hover:text-coral-foreground transition-colors"
          >
            Contact <ArrowUpRight className="h-4 w-4" />
          </Link>

          {/* Mobile Navigation Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 rounded-full bg-foreground text-background px-4 py-2 text-xs font-medium hover:bg-coral hover:text-coral-foreground transition-colors"
            >
              Contact <ArrowUpRight className="h-3 w-3" />
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 -mr-2 text-foreground/80 hover:text-foreground outline-none cursor-pointer"
                  aria-label="Toggle Menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background/95 backdrop-blur-xl border-l border-border/40 w-full max-w-[300px] flex flex-col justify-between p-8 pt-16"
              >
                <div>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Afero Studio navigation menu
                  </SheetDescription>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                    Navigation
                  </div>
                  <ul className="space-y-6 text-2xl font-serif">
                    {links.map((l) => (
                      <li key={l.to}>
                        <Link
                          to={l.to}
                          onClick={() => setIsOpen(false)}
                          className="block text-foreground/75 hover:text-coral transition-colors"
                          activeProps={{
                            className: "text-coral font-medium",
                          }}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8 border-t border-border/40">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-coral text-coral-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
                  >
                    Start a Project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
