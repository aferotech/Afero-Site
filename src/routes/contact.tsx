import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Afero Studio" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact — Afero Studio" },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 grid md:grid-cols-2 gap-16">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-coral">Let's talk</div>
          <h1 className="font-serif text-5xl md:text-6xl mt-6 leading-[0.95]">
            Tell us about <br /> your <em className="text-coral">project.</em>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-md">
            We respond within one business day, and we'll tell you straight whether we're the right fit. No pitch decks, no follow-up sequence.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
              <a href="mailto:hello@afero.studio" className="font-serif text-2xl hover:text-coral">hello@afero.studio</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Studio</div>
              <div className="font-serif text-2xl">Rua das Janelas Verdes, Lisbon</div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch soon."); }}
          className="rounded-2xl border border-border bg-card p-8 space-y-5"
        >
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
            <input required className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-coral transition" placeholder="Your name" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <input required type="email" className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-coral transition" placeholder="you@company.com" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Company</label>
            <input className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-coral transition" placeholder="Optional" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">About the project</label>
            <textarea required rows={5} className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-coral transition resize-none" placeholder="Goals, timeline, anything we should know…" />
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
            Send message <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
