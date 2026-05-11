import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Afero Studio" },
      { name: "description", content: "Afero is a small, senior studio in Lisbon. We make websites that work — for the people who use them and the people who run them." },
      { property: "og:title", content: "About — Afero Studio" },
    ],
  }),
});

const team = [
  { name: "Inês Carvalho", role: "Founder & Strategy" },
  { name: "Jonas Beck", role: "Design Director" },
  { name: "Mira Aoki", role: "Lead Engineer" },
  { name: "Tomás Ribeiro", role: "Editor & Content" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28">
        <div className="text-xs uppercase tracking-[0.2em] text-coral">About us</div>
        <h1 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95]">
          A small studio with <em className="text-coral">large opinions.</em>
        </h1>
        <div className="mt-8 grid md:grid-cols-2 gap-10 text-muted-foreground">
          <p>
            Afero began in 2013 as a two-person practice in Lisbon. Twelve years later we're still small on purpose — eight people, all senior, working hands-on with every client from kickoff to launch.
          </p>
          <p>
            We believe the best websites come from a few smart people who care, working closely with one or two clients at a time. No account managers, no template kits, no surprise invoices. Just craft, judgment, and follow-through.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="text-xs uppercase tracking-[0.2em] text-coral mb-6">The crew</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-coral/30 to-secondary mb-5" />
              <div className="font-serif text-xl">{p.name}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{p.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <h2 className="font-serif text-4xl md:text-5xl">Want to work with us?</h2>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
          Start a conversation <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
      <Footer />
    </div>
  );
}
