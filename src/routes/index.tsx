import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  Layers,
  PenTool,
  Code2,
  ShieldCheck,
  Quote,
  Bot,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { ParallaxText } from "@/components/ui/ParallaxText";
import ad from "@/assets/ad.mp4";
import work2 from "@/assets/work-2.webp";
import work3 from "@/assets/work-3.webp";
import arc from "@/assets/arc.webp";

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
  "Brand Strategy",
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
    icon: Bot,
    title: "AI Integration",
    body: "Integrating intelligent systems and automation to streamline workflows and create smarter user experiences.",
    points: [
      "AI Chatbots",
      "Customer Support Automation",
      "Knowledge Base Assistants",
      "AI-Powered Website Experiences"
    ],
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[85vh] flex flex-col justify-center border-b border-border/40">
        {/* 3D wireframe mesh background */}
        <div className="grid-3d-container opacity-45">
          <div className="grid-3d-plane" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-coral/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-coral/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium mb-6">
            <span className="h-px w-8 bg-coral" /> Modern websites for growing brands{" "}
            <span className="h-px w-8 bg-coral" />
          </div>

          <h1 className="font-serif mt-4 text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight flex flex-col items-center select-none">
            <ParallaxText speed={0.12} direction="left" className="font-normal whitespace-nowrap">
              A studio for websites
            </ParallaxText>
            <ParallaxText speed={0.12} direction="right" className="mt-2 whitespace-nowrap">
              that <em className="text-coral italic font-normal">actually</em> work.
            </ParallaxText>
          </h1>

          <p className="mx-auto mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Afero helps ambitious businesses and nonprofits launch websites that move them forward.
            Strategy-led, hand-built by experts, delivered on time. 2 years and many projects of
            doing it well.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-20">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-7 py-3.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors glow-coral"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              See our work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Marquee clients */}
        <div className="relative z-10 border-t border-border/40 bg-background/50 backdrop-blur-md mt-auto">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="overflow-hidden">
              <div className="marquee">
                {[...clients, ...clients].map((c, i) => (
                  <span
                    key={i}
                    className="font-serif text-2xl text-foreground/30 whitespace-nowrap"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12">
          <Tilt3D maxTilt={4} scale={1.01} className="w-full">
            <article className="group glass-card-3d p-6 md:p-8 rounded-3xl">
              <div className="flex items-baseline justify-between mb-4">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground transform translate-z-10">
                    Tomato. - A Grocery Web App
                  </h3>
                </div>
                <Link
                  to="/work"
                  className="text-xs uppercase tracking-widest text-coral hover:underline inline-flex items-center gap-1"
                >
                  View project <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border bg-secondary/50 transform translate-z-6">
                <video
                  src={ad}
                  width={1280}
                  height={800}
                  className="w-full h-auto group-hover:scale-[1.015] transition-transform duration-[1.2s] ease-out object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </article>
          </Tilt3D>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Tilt3D maxTilt={6} scale={1.02} className="w-full">
              <article className="group glass-card-3d p-6 rounded-3xl h-full flex flex-col justify-between">
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline gap-2 transform translate-z-10">
                    <span className="text-xs text-muted-foreground">02 — Architecture</span>
                    <h3 className="font-serif text-xl md:text-2xl">Praxis Studio</h3>
                  </div>
                  <Link
                    to="/work"
                    className="text-xs uppercase tracking-widest text-coral hover:underline inline-flex items-center gap-1"
                  >
                    View <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="overflow-hidden rounded-xl border border-border bg-secondary/50 transform translate-z-6">
                  <img
                    src={work2}
                    alt="Praxis Studio website"
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-auto group-hover:scale-[1.015] transition-transform duration-[1.2s] ease-out"
                  />
                </div>
              </article>
            </Tilt3D>

            <Tilt3D maxTilt={6} scale={1.02} className="w-full">
              <article className="group glass-card-3d p-6 rounded-3xl h-full flex flex-col justify-between">
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline gap-2 transform translate-z-10">
                    <span className="text-xs text-muted-foreground">03 — Editorial</span>
                    <h3 className="font-serif text-xl md:text-2xl">Meridian Daily</h3>
                  </div>
                  <Link
                    to="/work"
                    className="text-xs uppercase tracking-widest text-coral hover:underline inline-flex items-center gap-1"
                  >
                    View <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="overflow-hidden rounded-xl border border-border bg-secondary/50 transform translate-z-6">
                  <img
                    src={work3}
                    alt="Meridian Daily website"
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-auto group-hover:scale-[1.015] transition-transform duration-[1.2s] ease-out"
                  />
                </div>
              </article>
            </Tilt3D>
          </div>

          <div className="text-center mt-6">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              View more work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/20 border-y border-border/40 relative">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium">
              What we do
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">
              From first idea to long after launch.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A complete offering, end-to-end. Every project includes the strategy, content, design,
              development, and AI integration needed to launch a great website, along with the
              reliable support that keeps it working for years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Tilt3D key={s.title} maxTilt={8} scale={1.03} className="h-full">
                <div className="group h-full rounded-2xl glass-card-3d p-8 flex flex-col justify-between preserve-3d">
                  <div>
                    <div
                      className="h-12 w-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6 group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-300 shadow-md"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3
                      className="font-serif text-2xl transform translate-z-10"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-3 text-sm text-muted-foreground leading-relaxed"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      {s.body}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm" style={{ transform: "translateZ(15px)" }}>
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-coral" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt3D>
            ))}
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium">Why Afero</div>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            Three reasons clients stay with us.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <Tilt3D key={r.n} maxTilt={6} scale={1.02}>
              <div className="rounded-2xl border border-border p-8 bg-card h-full glass-card-3d preserve-3d">
                <div
                  className="font-serif text-coral text-4xl transform translate-z-10"
                  style={{ transform: "translateZ(25px)" }}
                >
                  {r.n}
                </div>
                <h3
                  className="font-serif text-2xl mt-4 transform translate-z-6"
                  style={{ transform: "translateZ(15px)" }}
                >
                  {r.title}
                </h3>
                <p
                  className="mt-3 text-sm text-muted-foreground leading-relaxed transform translate-z-2"
                  style={{ transform: "translateZ(8px)" }}
                >
                  {r.body}
                </p>
              </div>
            </Tilt3D>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-foreground text-background relative overflow-hidden">
        {/* Glow behind testimonial */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-coral/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center relative z-10">
          <Quote className="h-12 w-12 text-coral mx-auto" />
          <p className="font-serif text-3xl md:text-4xl leading-tight mt-8 tracking-tight max-w-3xl mx-auto">
            “Afero understood our business and our audience in days, then turned it into a site
            that's beautiful, strategic and obvious. They went above and beyond. Highly recommend.”
          </p>
          <div className="mt-10 text-xs uppercase tracking-[0.2em] text-background/60 font-medium">
            Martin Richard — Director, Coast Enterprise
          </div>
        </div>
      </section>

      {/* TEAM / STATS */}
      <section className="relative overflow-hidden mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        {/* Arc Image */}
        <img
          src={arc}
          alt=""
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] opacity-80 pointer-events-none select-none"
        />

        <div className="relative z-10 mt-16 md:mt-24">
          <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium">About us</div>

          <h2 className="font-serif text-4xl md:text-5xl mt-4">Meet the crew.</h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Afero is a small team of developers and designers focused on building modern, scalable,
            and high-performing digital experiences for growing businesses and startups.
          </p>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Tilt3D maxTilt={4} scale={1.01} className="mt-16 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-6 rounded-2xl glass-card-3d p-8 md:p-10 backdrop-blur-md">
              {[
                { n: "10+", l: "Projects Built" },
                { n: "24/7", l: "Technical Support" },
                { n: "100%", l: "On-time delivery" },
              ].map((s) => (
                <div key={s.l} className="preserve-3d">
                  <div
                    className="font-serif text-4xl md:text-5xl text-coral transform translate-z-10"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium transform translate-z-2"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Tilt3D>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-6xl leading-tight">
          Ready for a website <br /> that <em className="text-coral">actually</em> works?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Tell us about your project. We respond quickly, and we'll tell you straight whether we're
          the right fit.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-8 py-4 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors glow-coral"
        >
          Let's talk <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
