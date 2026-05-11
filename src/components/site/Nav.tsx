import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function Nav() {
  const links = [
    { to: "/work", label: "Work" },
    { to: "/process", label: "Process" },
    { to: "/about", label: "About" },
    { to: "/journal", label: "Journal" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-tight">Afero<span className="text-coral">.</span></span>
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-foreground/70 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-coral hover:text-coral-foreground transition-colors"
        >
          Contact <ArrowUpRight className="h-4 w-4" />
        </Link>
      </nav>
    </header>
  );
}
