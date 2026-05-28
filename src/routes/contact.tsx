import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";
import { Tilt3D } from "@/components/ui/Tilt3D";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Afero Studio" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact - Afero Studio" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-coral/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-96 h-96 bg-coral/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 grid md:grid-cols-2 gap-16 relative z-10">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium">Let's talk</div>
          <h1 className="font-serif text-5xl md:text-6xl mt-6 leading-[0.95] tracking-tight">
            Tell us about <br /> your <em className="text-coral italic font-normal">project.</em>
          </h1>
          <p className="mt-8 text-muted-foreground max-w-md leading-relaxed text-sm md:text-base">
            We respond within one business day, and we'll tell you straight whether we're the right fit. No pitch decks, no follow-up sequence.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Email</div>
              <a href="mailto:afero.tech@gmail.com" className="font-serif text-2xl md:text-3xl text-foreground hover:text-coral transition-colors">afero.tech@gmail.com</a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Phone</div>
              <a
                href="tel:+917397102011"
                className="font-serif text-2xl md:text-3xl text-foreground hover:text-coral transition-colors"
              >
                (+91)-73971-02011
              </a>
            </div>
          </div>
        </div>

        <div>
          <Tilt3D maxTilt={4} scale={1.01} className="w-full">
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch soon."); }}
              className="rounded-2xl glass-card-3d p-8 space-y-6 preserve-3d"
            >
              <div className="transform translate-z-4" style={{ transform: "translateZ(10px)" }}>
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Name</label>
                <input required className="mt-2 w-full bg-transparent border-b border-border/80 py-2 outline-none focus:border-coral transition duration-300 placeholder:text-muted-foreground/30" placeholder="Your name" />
              </div>
              <div className="transform translate-z-4" style={{ transform: "translateZ(10px)" }}>
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Email</label>
                <input required type="email" className="mt-2 w-full bg-transparent border-b border-border/80 py-2 outline-none focus:border-coral transition duration-300 placeholder:text-muted-foreground/30" placeholder="you@company.com" />
              </div>
              <div className="transform translate-z-4" style={{ transform: "translateZ(10px)" }}>
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Company</label>
                <input className="mt-2 w-full bg-transparent border-b border-border/80 py-2 outline-none focus:border-coral transition duration-300 placeholder:text-muted-foreground/30" placeholder="Optional" />
              </div>
              <div className="transform translate-z-4" style={{ transform: "translateZ(10px)" }}>
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">About the project</label>
                <textarea required rows={5} className="mt-2 w-full bg-transparent border-b border-border/80 py-2 outline-none focus:border-coral transition duration-300 resize-none placeholder:text-muted-foreground/30" placeholder="Goals, timeline, anything we should know…" />
              </div>
              <div className="transform translate-z-10" style={{ transform: "translateZ(20px)" }}>
                <button className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-7 py-3.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors shadow-md">
                  Send message <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Tilt3D>
        </div>
      </section>
      <Footer />
    </div>
  );
}

