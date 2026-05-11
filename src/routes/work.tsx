import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";
import workHero from "@/assets/work-hero.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Work — Afero Studio" },
      { name: "description", content: "Selected projects from Afero — websites and brands built for businesses and nonprofits." },
      { property: "og:title", content: "Work — Afero Studio" },
      { property: "og:image", content: workHero },
    ],
  }),
});

const projects = [
  { tag: "Nonprofit", title: "Habitat+ for Lisbon", year: "2024", img: workHero },
  { tag: "Architecture", title: "Praxis Studio", year: "2024", img: work2 },
  { tag: "Editorial", title: "Meridian Daily", year: "2023", img: work3 },
  { tag: "Hospitality", title: "Oakridge Hotels", year: "2023", img: work2 },
  { tag: "B2B SaaS", title: "Northwind Cloud", year: "2022", img: work3 },
  { tag: "Culture", title: "Lumen & Co", year: "2022", img: workHero },
];

function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28">
        <div className="text-xs uppercase tracking-[0.2em] text-coral">Selected work</div>
        <h1 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95]">
          A decade of <em className="text-coral">careful</em> launches.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          We pick a small number of projects each year so we can give every one our full attention. Here's a look at recent work.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <article key={i} className="group">
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <div>
                <div className="text-xs text-muted-foreground">{p.tag} · {p.year}</div>
                <h3 className="font-serif text-2xl mt-1">{p.title}</h3>
              </div>
              <Link to="/contact" className="text-xs uppercase tracking-widest text-coral inline-flex items-center gap-1 hover:underline">
                Case study <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </section>
      <Footer />
    </div>
  );
}
