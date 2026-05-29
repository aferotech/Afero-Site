import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Eye,
  Target,
  Code2,
  Rocket,
  Zap,
  Cpu,
  Layers,
  Shield,
  Sparkles,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { useScrollParallax } from "@/hooks/useScrollParallax";

// Import pre-generated assets
import groomvyImg from "@/assets/groomvy.webp";
import tripioImg from "@/assets/tripio.webp";
import eventraImg from "@/assets/eventra.webp";
import optimusImg from "@/assets/optimus.webp";
import novaImg from "@/assets/nova.webp";
import zoraImg from "@/assets/zora.webp";
import work2 from "@/assets/work-2.webp"; // Praxis Studio

function ParallaxImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const imgRef = useScrollParallax(0.06, "up");
  return (
    <div className="overflow-hidden w-full h-full relative aspect-[16/10] sm:aspect-auto">
      <div ref={imgRef} className="w-full h-full will-change-transform scale-110">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export const Route = createLazyFileRoute("/work")({
  component: WorkPage,
});

// A lightweight, highly performant intersection observer wrapper for Framer Motion-like entrance animations
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function WorkPage() {
  const processSteps = [
    {
      num: "01",
      title: "Discovery",
      icon: Eye,
      description:
        "Deep diving into your brand, target audience, and business opportunities to establish a clear project foundation.",
    },
    {
      num: "02",
      title: "Strategy",
      icon: Target,
      description:
        "Architecting user flows, mapping features, and defining the visual system before writing a single line of code.",
    },
    {
      num: "03",
      title: "Design & Dev",
      icon: Code2,
      description:
        "Crafting premium user interfaces and building scalable frontends with absolute attention to detail.",
    },
    {
      num: "04",
      title: "Launch & Support",
      icon: Rocket,
      description:
        "Ensuring a flawless launch, optimizing performance, and providing long-term engineering support.",
    },
  ];

  const valueCards = [
    {
      icon: Zap,
      title: "Fast Iteration",
      description: "Active feedback loops and rapid prototyping to bring ideas to life quickly.",
    },
    {
      icon: Cpu,
      title: "Modern Tech Stack",
      description: "Built with cutting-edge frameworks like React 19, Vite, and Cloudflare Pages.",
    },
    {
      icon: Layers,
      title: "Responsive Systems",
      description: "Pixel-perfect performance across mobile, tablet, and high-res desktops.",
    },
    {
      icon: Shield,
      title: "Long-Term Support",
      description: "Reliable post-launch maintenance, monitoring, and updates.",
    },
    {
      icon: Sparkles,
      title: "Performance Focused",
      description: "Speed optimized with perfect lighthouse scores in mind.",
    },
    {
      icon: Code2,
      title: "Scalable Architecture",
      description: "Clean, modular codebases designed to evolve alongside your business.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-coral selection:text-coral-foreground">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium mb-6">
                <span className="h-px w-6 bg-coral" /> Selected Works
              </div>
              <h1 className="font-serif text-5xl md:text-[5.5rem] tracking-tight leading-[0.95] text-foreground">
                Digital experiences <br />
                crafted with <em className="text-coral italic font-normal">precision.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We partner with startups, creators, and businesses to build scalable,
                high-performing digital experiences that combine strategy, design, and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="py-16 md:py-28 bg-card/10 border-y border-border/40 relative overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-coral/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-coral/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 space-y-28 md:space-y-40 relative z-10">
          {/* CASE STUDY 1: GROOMVY */}
          <FadeIn>
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
              <div className="md:col-span-7">
                <Tilt3D
                  maxTilt={4}
                  scale={1.01}
                  className="rounded-[2rem] overflow-hidden border border-border bg-secondary/50 shadow-lg"
                >
                  <ParallaxImage src={groomvyImg} alt="Groomvy Platform Preview" />
                </Tilt3D>
              </div>
              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="text-coral font-medium">01 - Beauty / SaaS Platform</span>
                  <span>2024</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                  Groomvy - Modern Salon Operations Platform
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  A scalable salon management platform designed to simplify appointments, billing,
                  staff management, and customer engagement through a seamless digital experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Booking System", "Dashboard", "Billing", "SaaS"].map((t) => (
                    <span
                      key={t}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-border bg-background/60 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-6 py-3 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors shadow-md"
                  >
                    Discuss similar project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CASE STUDY 2: TRIPIO */}
          <FadeIn>
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
              <div className="md:col-span-5 flex flex-col gap-6 md:order-1">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="text-coral font-medium">02 - Travel / Hospitality</span>
                  <span>2024</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                  Tripio - Immersive Travel Booking Experience
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  A visually rich travel platform focused on seamless destination discovery,
                  responsive booking flows, and immersive storytelling.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Travel", "Booking", "UI/UX", "Responsive"].map((t) => (
                    <span
                      key={t}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-border bg-background/60 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-6 py-3 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors shadow-md"
                  >
                    Discuss similar project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-7 md:order-2">
                <Tilt3D
                  maxTilt={4}
                  scale={1.01}
                  className="rounded-[2rem] overflow-hidden border border-border bg-secondary/50 shadow-lg"
                >
                  <ParallaxImage src={tripioImg} alt="Tripio Platform Preview" />
                </Tilt3D>
              </div>
            </div>
          </FadeIn>

          {/* CASE STUDY 3: EVENTRA */}
          <FadeIn>
            <div className="bg-ink text-[#FAF8F5] rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
                <div className="lg:col-span-7">
                  <Tilt3D
                    maxTilt={4}
                    scale={1.01}
                    className="rounded-2xl overflow-hidden border border-white/10 bg-[#2C2420] shadow-lg"
                  >
                    <ParallaxImage src={eventraImg} alt="Eventra Platform Preview" />
                  </Tilt3D>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                    <span className="text-coral font-medium">03 - Entertainment / Platform</span>
                    <span className="text-white/60">2023</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight text-white">
                    Eventra - Interactive Event Experience Platform
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    An immersive event platform crafted with cinematic visuals, motion-driven
                    interactions, and modern storytelling to elevate digital experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Motion Design", "Experience", "Branding", "Interactive UI"].map((t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-white/10 bg-white/5 text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-6 py-3 text-sm font-semibold hover:bg-white hover:text-ink transition-colors"
                    >
                      Discuss similar project <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-16 bg-secondary/10 border-b border-border/40 relative">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
              {[
                { stat: "10+", label: "Projects Delivered", desc: "Crafted with absolute quality" },
                { stat: "5+", label: "Industries Served", desc: "Versatile project categories" },
                { stat: "Fast", label: "Turnaround", desc: "No unnecessary delays" },
                { stat: "Modern", label: "Tech Stack", desc: "Next-gen frameworks" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-coral tracking-tight">
                    {item.stat}
                  </div>
                  <div className="font-semibold text-foreground text-sm uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BUSINESS SOLUTIONS SECTION */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-3">
              Scalable Systems
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">Corporate & commerce solutions.</h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-sm md:text-base leading-relaxed">
              Clean and highly performant custom systems engineered to optimize business workflows,
              conversion rates, and brand engagement.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* PROJECT 4 */}
            <FadeIn delay={100}>
              <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                <article className="group flex flex-col justify-between glass-card-3d p-6 rounded-3xl h-full preserve-3d">
                  <div>
                    <div className="overflow-hidden rounded-2xl border border-border bg-secondary/50 shadow-md transform translate-z-6">
                      <ParallaxImage src={optimusImg} alt="Optimus Manpower Recruitment Platform" />
                    </div>
                    <div
                      className="flex flex-col gap-2 mt-6 transform translate-z-10"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Recruitment
                        </span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="text-[10px] uppercase tracking-wider text-coral font-medium">
                          Corporate
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl group-hover:text-coral transition-colors">
                        Optimus Manpower
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A corporate recruitment experience focused on service clarity,
                        trust-building, and scalable lead generation.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-wrap gap-1.5 pt-4 transform translate-z-2"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {["Corporate", "SEO", "Lead Gen"].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold border border-border bg-background"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Tilt3D>
            </FadeIn>

            {/* PROJECT 5 */}
            <FadeIn delay={200}>
              <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                <article className="group flex flex-col justify-between glass-card-3d p-6 rounded-3xl h-full preserve-3d">
                  <div>
                    <div className="overflow-hidden rounded-2xl border border-border bg-secondary/50 shadow-md transform translate-z-6">
                      <ParallaxImage src={novaImg} alt="Nova Commerce Platform" />
                    </div>
                    <div
                      className="flex flex-col gap-2 mt-6 transform translate-z-10"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          E-Commerce
                        </span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="text-[10px] uppercase tracking-wider text-coral font-medium">
                          Product UI
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl group-hover:text-coral transition-colors">
                        Nova Commerce
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A modern commerce platform designed for seamless product discovery,
                        responsive shopping experiences, and scalable architecture.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-wrap gap-1.5 pt-4 transform translate-z-2"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {["E-Commerce", "Product UI", "Responsive"].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold border border-border bg-background"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Tilt3D>
            </FadeIn>

            {/* PROJECT 6 */}
            <FadeIn delay={300}>
              <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                <article className="group flex flex-col justify-between glass-card-3d p-6 rounded-3xl h-full preserve-3d">
                  <div>
                    <div className="overflow-hidden rounded-2xl border border-border bg-secondary/50 shadow-md transform translate-z-6">
                      <ParallaxImage src={work2} alt="Praxis Studio Portfolio" />
                    </div>
                    <div
                      className="flex flex-col gap-2 mt-6 transform translate-z-10"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Portfolio
                        </span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="text-[10px] uppercase tracking-wider text-coral font-medium">
                          Branding
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl group-hover:text-coral transition-colors">
                        Praxis Studio
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A minimalist portfolio crafted with refined typography, visual storytelling,
                        and thoughtful interactions.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-wrap gap-1.5 pt-4 transform translate-z-2"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {["Portfolio", "Branding", "Minimal"].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold border border-border bg-background"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Tilt3D>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* EXPERIMENTAL / PRODUCT UI SECTION */}
      <section className="py-24 bg-secondary/20 border-t border-border/40 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <FadeIn>
            <div className="bg-card rounded-[2.5rem] border border-border p-6 sm:p-12 md:p-16 shadow-lg glass-card-3d">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium">
                    <span className="h-px w-6 bg-coral" /> Experimental Lab
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl leading-tight">
                    Zora - Product Showcase Experience
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    A visually immersive landing page focused on interaction design, motion, and
                    conversion-driven storytelling for high-end physical products.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Product UI", "Landing Page", "Motion Design"].map((t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-border bg-background/60 backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
                    >
                      View Experiment details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <Tilt3D
                    maxTilt={4}
                    scale={1.01}
                    className="rounded-2xl overflow-hidden border border-border bg-secondary/50 shadow-md"
                  >
                    <ParallaxImage src={zoraImg} alt="Zora Futuristic UI Showcase" />
                  </Tilt3D>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 md:py-32 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-3">
              How We Work
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">
              Collaborative process, built on trust.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Our structured workflow ensures predictable delivery, constant communication, and
              exceptional engineering outcomes.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <Tilt3D maxTilt={8} scale={1.03} className="h-full">
                  <div className="group h-full rounded-2xl glass-card-3d p-8 flex flex-col justify-between preserve-3d">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <span
                          className="font-serif text-4xl text-coral/30 group-hover:text-coral transition-colors font-semibold"
                          style={{ transform: "translateZ(20px)" }}
                        >
                          {step.num}
                        </span>
                        <div
                          className="h-10 w-10 rounded-xl bg-secondary text-foreground flex items-center justify-center group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-300 shadow-md"
                          style={{ transform: "translateZ(30px)" }}
                        >
                          <step.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3
                        className="font-serif text-2xl mb-3 transform translate-z-10"
                        style={{ transform: "translateZ(15px)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground leading-relaxed transform translate-z-2"
                        style={{ transform: "translateZ(8px)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Tilt3D>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AFERO SECTION */}
      <section className="py-24 md:py-32 bg-secondary/10 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-3">
                Why Afero
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Built for ambitious brands.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed pt-2">
                We work closely with a limited number of clients to craft digital experiences that
                balance creativity, performance, and scalability. Every component is designed to
                move your brand forward.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueCards.map((card, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                  <div className="rounded-2xl glass-card-3d p-8 h-full preserve-3d">
                    <div
                      className="h-10 w-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center mb-6 shadow-sm"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <card.icon className="h-5 w-5" />
                    </div>
                    <h3
                      className="font-serif text-xl mb-2 transform translate-z-10"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground leading-relaxed transform translate-z-2"
                      style={{ transform: "translateZ(8px)" }}
                    >
                      {card.description}
                    </p>
                  </div>
                </Tilt3D>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-ink text-[#FAF8F5] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,107,61,0.18),transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium mb-6">
              <span className="h-px w-6 bg-coral" /> Start a conversation
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight">
              Have an idea <br /> in mind?
            </h2>
            <p className="mt-6 text-white/70 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
              Let’s build something exceptional together. Tell us about your goals, timeline, and
              scope.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-8 py-4 text-sm font-semibold hover:bg-white hover:text-ink transition-colors shadow-lg shadow-coral/10"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
