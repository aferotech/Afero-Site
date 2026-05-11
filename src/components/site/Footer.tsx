import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-3xl">Afero<span className="text-coral">.</span></div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            A small, senior studio crafting websites and brands that move things forward. Made in Lisbon, shipped worldwide.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Studio</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/work" className="hover:text-coral">Work</Link></li>
            <li><Link to="/process" className="hover:text-coral">Process</Link></li>
            <li><Link to="/about" className="hover:text-coral">About</Link></li>
            <li><Link to="/journal" className="hover:text-coral">Journal</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Say hello</div>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@afero.studio" className="hover:text-coral">hello@afero.studio</a></li>
            <li><Link to="/contact" className="hover:text-coral">Start a project →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Afero Studio. All rights reserved.</span>
          <span>Built with intent, not templates.</span>
        </div>
      </div>
    </footer>
  );
}
