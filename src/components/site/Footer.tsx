import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Check, Copy } from "lucide-react";
import { useState } from "react";
import navFull from "@/assets/nav-full.webp";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@afero.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative border-t border-border/40 bg-background pt-24 pb-12 overflow-hidden">
      {/* Decorative subtle background aura */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-coral/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[200px] h-[200px] bg-coral/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-12 pb-16 border-b border-border/30">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <Link to="/" className="inline-block group">
                <img
                  src={navFull}
                  alt="Afero"
                  className="h-5 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
                Afero is a premium web development and digital product studio. We partner with ambitious
                startups, growing brands, and established businesses to build lightning-fast, scalable,
                and beautifully crafted digital experiences that eliminate friction and unlock business growth.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/aferotech", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/company/aferotech", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/aferotech", label: "Twitter" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="h-10 w-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-coral hover:border-coral/40 hover:bg-coral/5 transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-foreground font-semibold">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {[
                { to: "/work", label: "Selected Work" },
                { to: "/process", label: "Our Process" },
                { to: "/about", label: "About Afero" },
                { to: "/contact", label: "Start a Project" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors duration-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-coral scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Business inquiries */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-foreground font-semibold">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Have an idea? Let's discuss how we can build it together.
              </p>
              
              {/* Copyable Email UI */}
              <div className="flex items-center gap-2 p-1.5 rounded-xl border border-border/40 bg-card hover:border-coral/30 transition-all duration-300 group max-w-fit">
                <div className="h-8 w-8 rounded-lg bg-coral/5 text-coral flex items-center justify-center shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <a
                  href="mailto:hello@afero.in"
                  className="text-sm font-medium text-foreground hover:text-coral transition-colors px-1"
                >
                  hello@afero.in
                </a>
                <button
                  onClick={copyEmail}
                  type="button"
                  title="Copy email to clipboard"
                  className="h-8 w-8 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-moss" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-sm font-medium text-coral hover:text-foreground transition-colors duration-300 group"
              >
                Inquire about a project{" "}
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Metadata & Branding */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-start">
            <span>© {new Date().getFullYear()} Afero Studio. All rights reserved.</span>
            <span className="hidden md:inline h-3 w-px bg-border/50" />
            <Link to="/about" className="hover:text-coral transition-colors">
              Crafted in India
            </Link>
          </div>
          <div className="flex items-center gap-1 text-center md:text-right">
            <span>Designed & developed with precision by</span>
            <span className="font-serif italic font-semibold text-coral text-sm tracking-wide">
              Afero
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
