import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";

export const Route = createLazyFileRoute("/journal")({
  component: JournalPage,
});

const posts = [
  { title: "The case against the homepage hero", date: "Apr 2026", read: "6 min", tag: "Strategy" },
  { title: "Why we still hand-write CSS in 2026", date: "Mar 2026", read: "8 min", tag: "Craft" },
  {
    title: "Designing for nonprofits without making it sad",
    date: "Feb 2026",
    read: "5 min",
    tag: "Design",
  },
  {
    title: "A small studio's pricing model, in full",
    date: "Jan 2026",
    read: "9 min",
    tag: "Studio",
  },
];

function JournalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12 md:pt-28">
        <div className="text-xs uppercase tracking-[0.2em] text-coral">Journal</div>
        <h1 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95]">
          Notes from the <em className="text-coral">studio.</em>
        </h1>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-24 divide-y divide-border border-y border-border">
        {posts.map((p) => (
          <Link
            key={p.title}
            to="/journal"
            className="group flex items-baseline justify-between py-8 hover:bg-secondary/40 -mx-6 px-6 transition-colors"
          >
            <div>
              <div className="text-xs uppercase tracking-widest text-coral mb-2">{p.tag}</div>
              <h3 className="font-serif text-2xl md:text-3xl group-hover:text-coral transition-colors">
                {p.title}
              </h3>
              <div className="text-xs text-muted-foreground mt-2">
                {p.date} · {p.read} read
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 opacity-40 group-hover:opacity-100 group-hover:text-coral transition" />
          </Link>
        ))}
      </section>
      <Footer />
    </div>
  );
}
