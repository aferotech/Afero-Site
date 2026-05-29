import { Link } from "@tanstack/react-router";

import navFull from "@/assets/nav-full.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center">
            <img src={navFull} alt="Afero" className="h-4 w-auto" />
          </Link>

          <p className="mt-5 text-sm leading-7 text-muted-foreground max-w-md">
            Afero is a modern web development studio focused on building scalable, responsive, and
            high-performing digital experiences for startups, businesses, and growing brands.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Navigation
          </div>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/work" className="hover:text-coral transition-colors">
                Work
              </Link>
            </li>

            <li>
              <Link to="/process" className="hover:text-coral transition-colors">
                Process
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-coral transition-colors">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-coral transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Contact
          </div>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:afero.tech@gmail.com" className="hover:text-coral transition-colors">
                afero.tech@gmail.com
              </a>
            </li>

            <li>
              <Link to="/contact" className="hover:text-coral transition-colors">
                Start a project →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Afero. All rights reserved.</span>

          <span>Designed & developed by Afero.</span>
        </div>
      </div>
    </footer>
  );
}
