import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Compass, Layers, PenTool, Code2, Sparkles, ShieldCheck, Quote } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import ad from "@/assets/ad.gif";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import arc from "@/assets/arc.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Afero - A studio for websites that actually work" },
      {
        name: "description",
        content:
          "Afero is a small, senior studio building websites and brands that move businesses forward. Strategy, design, and development under one roof.",
      },
      { property: "og:title", content: "Afero — Websites that actually work" },
      { property: "og:description", content: "Strategy, design, and development under one roof." },
    ],
  }),
});

const clients = [
  "Performance",
  "E-commerce",
  "Web Apps",
  "Branding",
  "User Experience",
  "Custom Development",
  "Brand Strategy"
];

const services = [
  {
    icon: Compass,
    title: "Strategy",
    body: "Technical planning and structured workflows focused on scalable digital products.",
    points: ["Planning", "Architecture", "User flow", "Project direction"],
  },
  {
    icon: PenTool,
    title: "Content",
    body: "Clear and structured content integration tailored for modern web experiences.",
    points: ["Content structure", "Landing pages", "UI copy", "Content layouts"],
  },
  {
    icon: Layers,
    title: "Design",
    body: "Modern interface design focused on usability, responsiveness, and clean visual systems.",
    points: ["UI systems", "Responsive layouts", "Design consistency", "Accessibility"],
  },
  {
    icon: Code2,
    title: "Development",
    body: "Fast, scalable, and maintainable web applications built with modern technologies.",
    points: ["Frontend", "Backend", "API integration", "Performance optimization"],
  },
  {
    icon: Sparkles,
    title: "Ongoing growth",
    body: "Continuous improvements, feature updates, and long-term product enhancements.",
    points: ["Feature updates", "Optimization", "UI improvements", "Scalability"],
  },
  {
    icon: ShieldCheck,
    title: "Support",
    body: "Reliable technical support and maintenance for stable and smooth operation.",
    points: ["Bug fixes", "Maintenance", "Technical support", "Deployment support"],
  },
];

const reasons = [
  {
    n: "01",
    title: "Scalable architecture.",
    body: "Modern development practices focused on performance, stability, and maintainable codebases.",
  },
  {
    n: "02",
    title: "Small team. Strong expertise.",
    body: "A focused development team with strong technical knowledge, efficient collaboration, and attention to detail.",
  },
  {
    n: "03",
    title: "Built to perform.",
    body: "Responsive interfaces, smooth interactions, and optimized frontend experiences across devices.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium">
            <span className="h-px w-8 bg-coral" /> Modern websites for growing brands <span className="h-px w-8 bg-coral" />
          </div>
          <h1 className="font-serif mt-8 text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight">
            A studio for websites <br />
            that <em className="text-coral">actually</em> work.
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base md:text-lg text-muted-foreground">
            Afero helps ambitious businesses and nonprofits launch websites that move them forward. Strategy-led, hand-built by experts, delivered on time. 2 years and many projects of doing it well.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors glow-coral"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              See our work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Marquee clients */}
        <div className="border-y border-border/60 bg-background">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">What we do</div>
            <div className="overflow-hidden">
              <div className="marquee">
                {[...clients, ...clients].map((c, i) => (
                  <span key={i} className="font-serif text-2xl text-foreground/40 whitespace-nowrap">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-10">
          <article className="group">
            <div className="flex items-baseline justify-between mb-3">
              <div className="flex items-baseline gap-3">
                {/* <span className="text-xs text-muted-foreground">01 — Nonprofit</span> */}
                <h3 className="font-serif text-2xl">Tomato. - A Grocery Web App </h3>
              </div>
              <Link to="/work" className="text-xs uppercase tracking-widest text-coral hover:underline inline-flex items-center gap-1">
                View project <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
              <img src={ad} alt="Tomato. - A Grocery Web App" width={1280} height={800} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-700" />
            </div>
          </article>

          <div className="grid md:grid-cols-2 gap-10">
            <article className="group">
              <div className="flex items-baseline justify-between mb-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-muted-foreground">02 — Architecture</span>
                  <h3 className="font-serif text-xl">Praxis Studio</h3>
                </div>
                <Link to="/work" className="text-xs uppercase tracking-widest text-coral hover:underline inline-flex items-center gap-1">
                  View <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
                <img src={work2} alt="Praxis Studio website" width={1024} height={768} loading="lazy" className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-700" />
              </div>
            </article>

            <article className="group">
              <div className="flex items-baseline justify-between mb-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-muted-foreground">03 — Editorial</span>
                  <h3 className="font-serif text-xl">Meridian Daily</h3>
                </div>
                <Link to="/work" className="text-xs uppercase tracking-widest text-coral hover:underline inline-flex items-center gap-1">
                  View <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
                <img src={work3} alt="Meridian Daily website" width={1024} height={768} loading="lazy" className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-700" />
              </div>
            </article>
          </div>

          <div className="text-center mt-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              View more work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium">What we do</div>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">From first idea to long after launch.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A complete offering, end-to-end. Every project includes the strategy, content, design and development needed to launch a great website and the ongoing growth and support that keeps it working for years.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl bg-card border border-border p-7 hover:border-coral/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center mb-5 group-hover:bg-coral group-hover:text-coral-foreground transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                <ul className="mt-5 space-y-1.5 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-foreground/80">
                      <span className="h-1 w-1 rounded-full bg-coral" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium">Why Afero</div>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Three reasons clients stay with us.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div key={r.n} className="rounded-2xl border border-border p-8 bg-card">
              <div className="font-serif text-coral text-3xl">{r.n}</div>
              <h3 className="font-serif text-2xl mt-3">{r.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <Quote className="h-10 w-10 text-coral mx-auto" />
          <p className="font-serif text-3xl md:text-4xl leading-tight mt-8">
            “Afero understood our business and our audience in days, then turned it into a site that's beautiful, strategic and obvious. They went above and beyond. Highly recommend.”
          </p>
          <div className="mt-8 text-sm uppercase tracking-widest text-background/60">
            Martin Richard — Director, Coast Enterprise
          </div>
        </div>
      </section>

      {/* TEAM / STATS */}
      <section className="relative overflow-hidden mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">

        {/* Arc Image */}
        <img
          src={arc}
          alt=""
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] opacity-90 pointer-events-none select-none"
        />

        <div className="relative z-10 mt-24 md:mt-32">
          <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium">
            About us
          </div>

          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            Meet the crew.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Afero is a small team of developers and designers focused on building modern,
            scalable, and high-performing digital experiences for growing businesses and startups.
          </p>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-8">
            {[
              { n: "10+", l: "Projects Built" },
              { n: "24/7", l: "Technical Support" },
              { n: "100%", l: "On-time delivery" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-4xl md:text-5xl text-coral">
                  {s.n}
                </div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <h2 className="font-serif text-4xl md:text-6xl leading-tight">
          Ready for a website <br /> that <em className="text-coral">actually</em> works?
        </h2>
        <p className="mt-5 text-muted-foreground">
          Tell us about your project. We respond quickly, and we'll tell you straight whether we're the right fit.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-7 py-3.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors glow-coral"
        >
          Let's talk <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
