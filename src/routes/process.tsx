import { createFileRoute, Link } from "@tanstack/react-router";
<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";
import { Tilt3D } from "@/components/ui/Tilt3D";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process - Afero Studio" },
      {
        name: "description",
        content:
          "Our four-phase process: Discover, Design, Build, Grow. Predictable, transparent, and on time.",
      },
      { property: "og:title", content: "Process - Afero Studio" },
    ],
  }),
  component: ProcessPage,
});

const phases = [
  {
    n: "01",
    title: "Discover",
    weeks: "1–2 weeks",
    body: "Workshops, audits and interviews to understand the business, the audience and the opportunity.",
  },
  {
    n: "02",
    title: "Design",
    weeks: "3–5 weeks",
    body: "Messaging, structure and visual system - refined together in fast, focused review loops.",
  },
  {
    n: "03",
    title: "Build",
    weeks: "4–8 weeks",
    body: "Senior engineering, accessibility-first, performance baked in. No outsourcing, no surprises.",
  },
  {
    n: "04",
    title: "Grow",
    weeks: "Ongoing",
    body: "Measurement, iteration, content and SEO. The site keeps getting better long after launch.",
  },
];

function ProcessPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate active scroll progress along the timeline container
      const start = rect.top - viewHeight / 2;
      const total = rect.height;
      const progress = Math.min(Math.max((-start / total) * 100, 0), 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 relative z-10">
        <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium">
          How we work
        </div>
        <h1 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95] tracking-tight">
          Four phases. <br />
          <em className="text-coral italic font-normal">Zero drama.</em>
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
=======
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Process - Afero Studio" },
      { name: "description", content: "Our four-phase process: Discover, Design, Build, Grow. Predictable, transparent, and on time." },
      { property: "og:title", content: "Process - Afero Studio" },
    ],
  }),
});

const phases = [
  { n: "01", title: "Discover", weeks: "1–2 weeks", body: "Workshops, audits and interviews to understand the business, the audience and the opportunity." },
  { n: "02", title: "Design", weeks: "3–5 weeks", body: "Messaging, structure and visual system - refined together in fast, focused review loops." },
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
>>>>>>> 3af5039355b7365a9be8d5d428a48433394e7781
          Every Afero project follows the same predictable rhythm. You always know what's happening, what's next, and why.
        </p>
      </section>

<<<<<<< HEAD
      {/* TIMELINE CONTAINER */}
      <section ref={containerRef} className="mx-auto max-w-5xl px-6 pb-28 relative">
        {/* Glow connector line background */}
        <div className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border/40 -translate-x-1/2 rounded-full" />
        
        {/* Glowing scroll-based active line */}
        <div 
          className="absolute left-[26px] md:left-1/2 top-0 w-[2px] bg-coral -translate-x-1/2 rounded-full origin-top transition-all duration-150 shadow-[0_0_12px_var(--coral)]"
          style={{ height: `${scrollProgress}%` }}
        />

        <div className="space-y-16 relative z-10">
          {phases.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={p.n} 
                className={`flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-0 relative ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Card side */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <Tilt3D maxTilt={5} scale={1.02} className="h-full">
                    <div className="grid sm:grid-cols-12 gap-6 rounded-2xl glass-card-3d p-8 preserve-3d h-full">
                      <div className="sm:col-span-2 font-serif text-4xl md:text-5xl text-coral transform translate-z-10" style={{ transform: "translateZ(25px)" }}>
                        {p.n}
                      </div>
                      <div className="sm:col-span-10 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-2xl md:text-3xl transform translate-z-6" style={{ transform: "translateZ(15px)" }}>
                            {p.title}
                          </h3>
                          <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2 transform translate-z-2" style={{ transform: "translateZ(10px)" }}>
                            {p.weeks}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-4 transform translate-z-1" style={{ transform: "translateZ(5px)" }}>
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </Tilt3D>
                </div>

                {/* Point in the center line */}
                <div className="absolute left-[26px] md:left-1/2 top-8 h-6 w-6 rounded-full border-4 border-background bg-card -translate-x-1/2 shadow-md flex items-center justify-center z-20">
                  <span className="h-2 w-2 rounded-full bg-coral" />
                </div>

                {/* Empty side for layout spacing */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center relative z-20">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-8 py-4 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors glow-coral shadow-lg"
          >
=======
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
>>>>>>> 3af5039355b7365a9be8d5d428a48433394e7781
            Start your project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
