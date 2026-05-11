import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Process — Afero Studio" },
      { name: "description", content: "Our four-phase process: Discover, Design, Build, Grow. Predictable, transparent, and on time." },
      { property: "og:title", content: "Process — Afero Studio" },
    ],
  }),
});

const phases = [
  { n: "01", title: "Discover", weeks: "1–2 weeks", body: "Workshops, audits and interviews to understand the business, the audience and the opportunity." },
  { n: "02", title: "Design", weeks: "3–5 weeks", body: "Messaging, structure and visual system — refined together in fast, focused review loops." },
  { n: "03", title: "Build", weeks: "4–8 weeks", body: "Senior engineering, accessibility-first, performance baked in. No outsourcing, no surprises." },
  { n: "04", title: "Grow", weeks: "Ongoing", body: "Measurement, iteration, content and SEO. The site keeps getting better long after launch." },
];

function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
        <div className="text-xs uppercase tracking-[0.2em] text-coral">How we work</div>
        <h1 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95]">
          Four phases. <em className="text-coral">Zero drama.</em>
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Every Afero project follows the same predictable rhythm. You always know what's happening, what's next, and why.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-4">
        {phases.map((p) => (
          <div key={p.n} className="grid md:grid-cols-12 gap-6 rounded-2xl border border-border p-8 bg-card hover:border-coral/60 transition-colors">
            <div className="md:col-span-2 font-serif text-5xl text-coral">{p.n}</div>
            <div className="md:col-span-3">
              <h3 className="font-serif text-3xl">{p.title}</h3>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{p.weeks}</div>
            </div>
            <p className="md:col-span-7 text-muted-foreground leading-relaxed">{p.body}</p>
          </div>
        ))}

        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
            Start your project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
