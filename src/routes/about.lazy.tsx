import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";
import { Tilt3D } from "@/components/ui/Tilt3D";
import paulImg from "@/assets/team/paul.webp";
import azarImg from "@/assets/team/azar.webp";
import akashImg from "@/assets/team/akash.webp";
import rohithImg from "@/assets/team/rohith.webp";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <section className="relative mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-32">
        {/* Glow behind header */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-coral/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium relative z-10">
          About us
        </div>

        <h1 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95] tracking-tight relative z-10">
          Building modern <br />
          <em className="text-coral italic font-normal">digital experiences.</em>
        </h1>

        <div className="mt-10 grid md:grid-cols-2 gap-10 text-muted-foreground relative z-10 leading-relaxed text-base md:text-lg">
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

      <section className="mx-auto max-w-7xl px-6 pb-28 relative">
        <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-8">
          The crew
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((p) => (
            <Tilt3D key={p.name} maxTilt={8} scale={1.03}>
              <div className="rounded-2xl glass-card-3d p-6 h-full flex flex-col justify-between preserve-3d">
                <div className="overflow-hidden rounded-xl bg-secondary/50 border border-border/30 transform translate-z-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <div 
                    className="font-serif text-xl text-foreground transform translate-z-10" 
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {p.name}
                  </div>
                  <div 
                    className="text-[10px] text-muted-foreground mt-1.5 uppercase tracking-widest font-semibold transform translate-z-2" 
                    style={{ transform: "translateZ(8px)" }}
                  >
                    {p.role}
                  </div>
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-28 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl">Want to work with us?</h2>
        <Link 
          to="/contact" 
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-8 py-4 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors glow-coral shadow-lg"
        >
          Start a conversation <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
      <Footer />
    </div>
  );
}
