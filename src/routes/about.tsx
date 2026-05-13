import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";
import paulImg from "@/assets/team/paul.jpeg";
import azarImg from "@/assets/team/azar.jpeg";
import akashImg from "@/assets/team/akash.jpeg";
import rohithImg from "@/assets/team/rohith.jpeg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About - Afero Studio" },
      { name: "description", content: "Afero is a small, senior studio in Lisbon. We make websites that work — for the people who use them and the people who run them." },
      { property: "og:title", content: "About - Afero Studio" },
    ],
  }),
});

const team = [
  {
    name: "Paul Benjamin Felix",
    role: "Lead Developer",
    image: paulImg,
  },
  {
    name: "Mohammad Azarudeen",
    role: "Lead Developer",
    image: azarImg,
  },
  {
    name: "Akash Vaishnudev",
    role: "HR / Tech Lead",
    image: akashImg,
  },
  {
    name: "Rohith Raj",
    role: "Editor & Content Strategist",
    image: rohithImg,
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28">

        <div className="text-xs uppercase tracking-[0.2em] text-coral">
          About us
        </div>

        <h1 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95]">
          Building modern <em className="text-coral">digital experiences.</em>
        </h1>

        <div className="mt-8 grid md:grid-cols-2 gap-10 text-muted-foreground">

          <p>
            Afero is a modern web development studio focused on creating scalable,
            responsive, and high-performing digital products for startups,
            businesses, and growing brands.
          </p>

          <p>
            We combine design, development, and creative thinking to build clean,
            functional experiences with strong attention to performance,
            usability, and modern web standards.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="text-xs uppercase tracking-[0.2em] text-coral mb-6">
          The crew
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">

          {team.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-border bg-card p-6"
            >

              <img
                src={p.image}
                alt={p.name}
                className="aspect-square w-full rounded-xl object-cover mb-5"
              />

              <div className="font-serif text-xl">
                {p.name}
              </div>

              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">
                {p.role}
              </div>

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
