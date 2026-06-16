import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Lightbulb,
  Target,
  Gauge,
  Heart,
  MessageSquare,
  Sparkles,
  Code2,
  TrendingUp,
  Clock,
  ShieldCheck,
  Users,
  Linkedin,
  Instagram,
  Star,
  ExternalLink,
  Compass,
  Rocket,
} from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { FadeIn } from "@/components/ui/FadeIn";
import paulImg from "@/assets/team/paul.webp";
import azarImg from "@/assets/team/azar.webp";
import akashImg from "@/assets/team/akash.webp";
import rohithImg from "@/assets/team/rohith.webp";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});

// ─── Counter Animation Hook ───────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // Cubic Out
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── Animated Metric Card Component ───────────────────────────────────────────
function MetricCard({
  label,
  value,
  suffix = "",
  delay = 0,
}: {
  label: string;
  value: number;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCounter(value, 1600, started);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="group p-6 rounded-2xl glass-card-3d border border-border/30 hover:border-coral/30 transition-all duration-500 flex flex-col gap-2 relative overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow background indicator on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-coral/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <span className="font-serif text-5xl md:text-6xl text-coral font-normal tracking-tight relative z-10">
        {count}
        {suffix}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mt-2 leading-relaxed relative z-10">
        {label}
      </span>
    </div>
  );
}

// ─── Custom Vector SVG Brand Logos (Tech Stack) ──────────────────────────────
function HtmlLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 5l1.5 14 8.5 3 8.5-3L22 5z" />
      <path d="M12 6v11M16 9h-4M8 13h4M8 9h2" />
    </svg>
  );
}

function CssLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 5l1.5 14 8.5 3 8.5-3L22 5z" />
      <path d="M12 6v11M16 11h-4M8 8h4" />
    </svg>
  );
}

function JsLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M15 9h-2v4a2 2 0 0 0 4 0M10 15a2 2 0 0 0 2-2V9" />
    </svg>
  );
}

function ReactLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
    </svg>
  );
}

function TailwindLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3c-2.4 0-4 1.6-4 4 0 2.4 1.6 4 4 4 2.4 0 4-1.6 4-4 0-2.4-1.6-4-4-4z" />
      <path d="M8 12c-2.4 0-4 1.6-4 4 0 2.4 1.6 4 4 4 2.4 0 4-1.6 4-4 0-2.4-1.6-4-4-4z" />
      <path d="M16 12c-2.4 0-4 1.6-4 4 0 2.4 1.6 4 4 4 2.4 0 4-1.6 4-4 0-2.4-1.6-4-4-4z" />
    </svg>
  );
}

function NodeLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function ExpressLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M12 8l4 4-4 4" />
    </svg>
  );
}

function MySqlLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

function GitLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 15V9a4 4 0 0 0-4-4H9" />
      <path d="M6 9v6" />
    </svg>
  );
}

function GitHubLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function FigmaLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3h3v5h-3A2.5 2.5 0 0 1 5 5.5z" />
      <path d="M13.5 3h3a2.5 2.5 0 0 1 0 5h-3V3z" />
      <path d="M5 12.5A2.5 2.5 0 0 1 7.5 10h3v5h-3A2.5 2.5 0 0 1 5 12.5z" />
      <path d="M13.5 10h3a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-3v-5z" />
      <path d="M7.5 17h3v2a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 2-2z" />
    </svg>
  );
}

function VercelLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 20h20L12 2z" />
    </svg>
  );
}

// ─── Component Data ─────────────────────────────────────────────────────────

const philosophy = [
  {
    icon: Lightbulb,
    title: "Clarity Over Complexity",
    body: "We strip away everything unnecessary. Clean architecture, readable code, and interfaces that just make sense without distracting clutter.",
  },
  {
    icon: Target,
    title: "Design With Purpose",
    body: "Every visual decision serves a function. We design for people first -not just screens, ensuring utility goes hand-in-hand with luxury aesthetics.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    body: "Speed is a primary feature. We build for lightning-fast load times, smooth interactions, and optimized delivery from day one.",
  },
  {
    icon: Heart,
    title: "Long-Term Partnerships",
    body: "We think beyond launch. Clients return because we stay genuinely invested in their long-term growth and technical stability.",
  },
];

const trustReasons = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Direct Communication",
    desc: "You collaborate directly with the designers and engineers building your product. No middle management, no communication leaks.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "Custom Solutions",
    desc: "Every project is designed and custom-coded from scratch to match your brand vision. We do not use template shortcuts.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Modern Technology",
    desc: "We build using robust, modern, and highly maintainable frameworks that are fully scalable and ready for high traffic.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Business-Oriented Thinking",
    desc: "We don't just build beautiful interfaces. We engineer tools, optimization plans, and structures that impact your bottom line.",
  },
  {
    num: "05",
    icon: Clock,
    title: "Fast & Focused Delivery",
    desc: "Refined agile sprints and deep engineering expertise keep deadlines tight, ensuring your project launches perfectly on time.",
  },
  {
    num: "06",
    icon: ShieldCheck,
    title: "Transparent Execution",
    desc: "From scoped hours to live staging updates, you always have full visibility into what we are building, when, and why.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep research into your target audience, business goals, and competitive space.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Mapping out structure, technical architecture, and creating a crystal-clear execution roadmap.",
    icon: Target,
  },
  {
    num: "03",
    title: "Design",
    desc: "Crafting beautiful high-fidelity interfaces that are responsive, modern, and tailored.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Development",
    desc: "Writing semantic, production-grade, highly performant custom code.",
    icon: Code2,
  },
  {
    num: "05",
    title: "Launch",
    desc: "Rigorous system testing, visual QA, final optimizations, and seamless live hosting setup.",
    icon: Rocket,
  },
  {
    num: "06",
    title: "Support",
    desc: "Constant health monitoring, version updates, and scaling optimizations.",
    icon: ShieldCheck,
  },
];

const team = [
  {
    name: "Paul Benjamin Felix",
    role: "Lead Developer",
    expertise: "Frontend Development & UI Engineering",
    image: paulImg,
    instagram: "https://instagram.com/iamfelix.s",
    linkedin: "https://www.linkedin.com/in/paul-benjamin-felix-b8b481249",
  },
  {
    name: "Mohammad Azarudeen",
    role: "Lead Developer",
    expertise: "Backend Architecture & API Systems",
    image: azarImg,
    instagram: "https://instagram.com/call_me_chaco",
    linkedin: "https://www.linkedin.com/in/mohammed-azarudeen-j-971940275",
  },
  {
    name: "Akash Vaishnudev",
    role: "HR / Tech Lead",
    expertise: "Performance Optimization & Team Leadership",
    image: akashImg,
    instagram: "https://instagram.com/vaishnu_1418",
    linkedin: "https://www.linkedin.com/in/akash-vaishnu-dev-4431a1287",
  },
  {
    name: "Rohith Raj",
    role: "Editor & Content Strategist",
    expertise: "Content Strategy & Brand Communication",
    image: rohithImg,
    instagram: "https://instagram.com/renz.avro",
    linkedin: "https://www.linkedin.com/in/sgrohithraj",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML",
        logo: HtmlLogo,
        hoverColor:
          "group-hover:text-[#E34F26] group-hover:border-[#E34F26]/30 group-hover:bg-[#E34F26]/5",
      },
      {
        name: "CSS",
        logo: CssLogo,
        hoverColor:
          "group-hover:text-[#1572B6] group-hover:border-[#1572B6]/30 group-hover:bg-[#1572B6]/5",
      },
      {
        name: "JavaScript",
        logo: JsLogo,
        hoverColor:
          "group-hover:text-[#F7DF1E] group-hover:border-[#F7DF1E]/30 group-hover:bg-[#F7DF1E]/5",
      },
      {
        name: "React",
        logo: ReactLogo,
        hoverColor:
          "group-hover:text-[#61DAFB] group-hover:border-[#61DAFB]/30 group-hover:bg-[#61DAFB]/5",
      },
      {
        name: "Tailwind",
        logo: TailwindLogo,
        hoverColor:
          "group-hover:text-[#06B6D4] group-hover:border-[#06B6D4]/30 group-hover:bg-[#06B6D4]/5",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        logo: NodeLogo,
        hoverColor:
          "group-hover:text-[#339933] group-hover:border-[#339933]/30 group-hover:bg-[#339933]/5",
      },
      {
        name: "Express",
        logo: ExpressLogo,
        hoverColor:
          "group-hover:text-foreground group-hover:border-foreground/30 group-hover:bg-foreground/5",
      },
      {
        name: "MySQL",
        logo: MySqlLogo,
        hoverColor:
          "group-hover:text-[#4479A1] group-hover:border-[#4479A1]/30 group-hover:bg-[#4479A1]/5",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        logo: GitLogo,
        hoverColor:
          "group-hover:text-[#F05032] group-hover:border-[#F05032]/30 group-hover:bg-[#F05032]/5",
      },
      {
        name: "GitHub",
        logo: GitHubLogo,
        hoverColor:
          "group-hover:text-foreground group-hover:border-foreground/30 group-hover:bg-foreground/5",
      },
      {
        name: "Figma",
        logo: FigmaLogo,
        hoverColor:
          "group-hover:text-[#F24E1E] group-hover:border-[#F24E1E]/30 group-hover:bg-[#F24E1E]/5",
      },
      {
        name: "Vercel",
        logo: VercelLogo,
        hoverColor:
          "group-hover:text-foreground group-hover:border-foreground/30 group-hover:bg-foreground/5",
      },
    ],
  },
];

const commitments = [
  "Clean Code",
  "Responsive Design",
  "SEO-Friendly Structure",
  "Performance Optimization",
  "Modern User Experience",
  "Scalable Architecture",
  "Transparent Communication",
  "Post-Launch Support",
];

const timeline = [
  {
    year: "2025",
    desc: "Started building professional client projects, establishing our name through pixel-perfect development and solid engineering standards.",
  },
  {
    year: "2026",
    desc: "Expanded into complete web solutions, bringing full product strategy, advanced performance systems, and brand craftsmanship under one roof.",
  },
  {
    year: "Today",
    desc: "Building modern digital experiences for ambitiously growing businesses, digital startups, and luxury brands worldwide.",
  },
];

// ─── AboutPage Redesign ───────────────────────────────────────────────────────
function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-coral selection:text-coral-foreground overflow-x-hidden">
      {/* ── SECTION 01: ABOUT HERO ───────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 border-b border-border/40 overflow-hidden">
        {/* Animated 3D Perspective Grid Background */}
        <div className="grid-3d-container opacity-40">
          <div className="grid-3d-plane" />
        </div>

        {/* Floating gradient lights */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-coral/3 rounded-full blur-[110px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-8">
                  <span className="h-px w-6 bg-coral" /> About Afero
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                  Building{" "}
                  <em className="text-coral italic font-normal font-serif">digital products</em>{" "}
                  that help businesses grow.
                </h1>
                <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Afero is a modern web development studio helping startups, businesses, and growing
                  brands create fast, scalable, and meaningful digital experiences.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-7 py-3.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors glow-coral shadow-lg shadow-coral/10"
                  >
                    Start Your Project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
                  >
                    See our work <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Column (5 cols) - Floating Metrics */}
            <div className="lg:col-span-5">
              <FadeIn delay={200} direction="right">
                <div className="grid grid-cols-2 gap-4">
                  <MetricCard label="Projects Delivered" value={10} suffix="+" delay={0} />
                  <MetricCard label="Client-Focused Approach" value={100} suffix="%" delay={100} />
                  <MetricCard label="Custom Built Solutions" value={10} suffix="+" delay={200} />
                  <MetricCard label="Performance Driven" value={100} suffix="%" delay={300} />
                </div>
                {/* Visual authenticity indicators */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Zero outsourcing", "Fully bespoke code", "Zero templates"].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 text-xs text-muted-foreground border border-border/40 rounded-full px-4 py-2 bg-card/40 backdrop-blur-sm shadow-sm"
                    >
                      <Check className="h-3.5 w-3.5 text-coral shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: OUR STORY ────────────────────────────────────────── */}
      <section className="py-24 md:py-36 border-b border-border/40 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24">
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5">
              <FadeIn direction="left">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-6">
                  <span className="h-px w-6 bg-coral" /> Our Story
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                  Why Afero Exists
                </h2>
                <div className="mt-8 h-px w-16 bg-coral/40" />
              </FadeIn>
            </div>

            {/* Right Column (7 cols) */}
            <div className="lg:col-span-7">
              <FadeIn delay={150} direction="right">
                <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
                  <p>
                    Afero was born out of a genuine passion for digital craftsmanship. We observed
                    too many ambitious businesses struggling with generic templates, bloated code
                    bases, and sluggish loading speeds that failed to convey their actual quality.
                  </p>
                  <p>
                    We set out to create a studio that places engineering excellence and
                    user-oriented design at the center. By prioritizing absolute performance and
                    high-fidelity layouts, we build tools that elevate startups and enterprises
                    alike, turning clicks into customer relationships.
                  </p>
                  <p>
                    Every solution we deploy is built with a deep long-term partnership mindset. We
                    believe that transparency, collaboration, and continuous delivery are the
                    pillars of digital success.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Elegant Horizontal Timeline (Desktop) & Vertical (Mobile) */}
          <div className="relative pt-12">
            {/* Horizontal Timeline Connector Line */}
            <div className="absolute top-[28px] left-[4%] right-[4%] h-[2px] bg-gradient-to-r from-transparent via-border/50 to-transparent hidden md:block" />

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {timeline.map((item, idx) => (
                <FadeIn key={item.year} delay={idx * 150}>
                  <div className="relative pl-6 md:pl-0 md:pt-12 md:text-center group">
                    {/* Animated dot indicator */}
                    <div className="absolute left-0 top-[6px] md:left-1/2 md:top-[-16px] md:-translate-x-1/2 h-4 w-4 rounded-full border-2 border-background bg-coral group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(224,90,54,0.4)]" />

                    <span className="font-serif text-3xl md:text-4xl text-coral/80 block mb-3 font-normal">
                      {item.year}
                    </span>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm md:mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: OUR PHILOSOPHY ────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-secondary/15 border-b border-border/40 relative">
        {/* Subtle decorative vector mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,90,54,0.03),transparent_75%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-4">
              <span className="h-px w-6 bg-coral" /> Philosophy{" "}
              <span className="h-px w-6 bg-coral" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
              What We Believe
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={idx} delay={idx * 100} className="h-full">
                  <Tilt3D maxTilt={5} scale={1.02} className="h-full">
                    <div className="group h-full rounded-2xl glass-card-3d p-8 flex flex-col justify-between preserve-3d">
                      <div>
                        <div
                          className="h-12 w-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-8 group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-300 shadow-sm"
                          style={{ transform: "translateZ(20px)" }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3
                          className="font-serif text-xl md:text-2xl mb-4 text-foreground group-hover:text-coral transition-colors duration-300 font-normal"
                          style={{ transform: "translateZ(15px)" }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-sm md:text-base text-muted-foreground leading-relaxed"
                          style={{ transform: "translateZ(10px)" }}
                        >
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Tilt3D>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: WHY CLIENTS CHOOSE US ─────────────────────────── */}
      <section className="py-24 md:py-36 border-b border-border/40 relative">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-20">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-4">
              <span className="h-px w-6 bg-coral" /> Why Afero
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl leading-[1.05]">
                Why Businesses Choose Afero
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs">
                Premium digital execution built on clarity, custom engineering, and transparent
                partnership.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustReasons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={idx} delay={idx * 80} className="h-full">
                  <div className="group h-full rounded-2xl border border-border/40 bg-card p-8 hover:border-coral/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-coral/[0.02] transition-all duration-500 flex flex-col gap-6 relative overflow-hidden">
                    {/* Floating watermarked backdrop number */}
                    <span className="absolute top-4 right-6 font-serif text-6xl text-border/20 select-none pointer-events-none group-hover:text-coral/8 group-hover:scale-110 transition-all duration-500">
                      {item.num}
                    </span>

                    <div className="h-10 w-10 rounded-xl bg-coral/8 text-coral flex items-center justify-center group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-300 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="space-y-3 relative z-10">
                      <h3 className="font-serif text-xl text-foreground group-hover:text-coral transition-colors duration-300 font-normal">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: HOW WE WORK (PROCESS) ────────────────────────────── */}
      <section className="py-24 md:py-36 bg-secondary/15 border-b border-border/40 relative overflow-hidden">
        {/* Subtle warm layout aura */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(224,90,54,0.03),transparent_65%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-4">
              <span className="h-px w-6 bg-coral" /> Our Process{" "}
              <span className="h-px w-6 bg-coral" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Our Process
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm md:text-base leading-relaxed">
              A structured, highly communicative roadmap designed to eliminate uncertainty and
              deliver premium results.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.num} delay={idx * 100} className="h-full">
                  <Tilt3D maxTilt={5} scale={1.02} className="h-full">
                    <div className="group h-full rounded-2xl glass-card-3d p-8 md:p-10 flex flex-col justify-between preserve-3d relative overflow-hidden">
                      {/* Floating watermarked backdrop number */}
                      <span className="absolute top-4 right-6 font-serif text-7xl text-border/25 select-none pointer-events-none group-hover:text-coral/10 group-hover:scale-110 transition-all duration-500 font-normal">
                        {step.num}
                      </span>

                      <div>
                        {/* Elegant Icon Badge */}
                        <div
                          className="h-12 w-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-8 group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-300 shadow-md"
                          style={{ transform: "translateZ(20px)" }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        {/* Title and Description */}
                        <div className="space-y-3" style={{ transform: "translateZ(15px)" }}>
                          <h3 className="font-serif text-2xl text-foreground group-hover:text-coral transition-colors duration-300 font-normal">
                            {step.title}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Tilt3D>
                </FadeIn>
              );
            })}
          </div>

          {/* CTA Link to complete interactive roadmap */}
          <FadeIn delay={300} className="text-center mt-16">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              Learn about our roadmap <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 06: MEET THE TEAM ────────────────────────────────────── */}
      <section className="py-24 md:py-36 border-b border-border/40 relative">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-20">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-4">
              <span className="h-px w-6 bg-coral" /> The Team
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                The People Behind Afero
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xs leading-relaxed">
                A highly aligned core team committed to absolute technical performance and creative
                brilliance.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <FadeIn key={member.name} delay={idx * 100} className="h-full">
                <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                  <div className="group h-full rounded-2xl glass-card-3d p-6 flex flex-col justify-between preserve-3d overflow-hidden relative">
                    <div>
                      {/* Premium Portrait Wrap */}
                      <div
                        className="overflow-hidden rounded-xl bg-secondary/40 border border-border/30 mb-6 relative aspect-[3/4]"
                        style={{ transform: "translateZ(10px)" }}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Elegant overlay screen */}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>

                      {/* Name and Role */}
                      <div className="space-y-1 mb-3" style={{ transform: "translateZ(15px)" }}>
                        <h3 className="font-serif text-xl text-foreground group-hover:text-coral transition-colors duration-300 font-normal">
                          {member.name}
                        </h3>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-bold">
                          {member.role}
                        </div>
                      </div>

                      {/* Short expertise description */}
                      <p
                        className="text-xs text-muted-foreground leading-relaxed mb-6"
                        style={{ transform: "translateZ(8px)" }}
                      >
                        {member.expertise}
                      </p>
                    </div>

                    {/* Social connection handles */}
                    <div
                      className="flex items-center gap-2 border-t border-border/30 pt-4 mt-auto"
                      style={{ transform: "translateZ(12px)" }}
                    >
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="h-8 w-8 rounded-lg border border-border/40 flex items-center justify-center text-muted-foreground hover:text-coral hover:bg-coral/5 transition-all duration-300"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Instagram`}
                        className="h-8 w-8 rounded-lg border border-border/40 flex items-center justify-center text-muted-foreground hover:text-coral hover:bg-coral/5 transition-all duration-300"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </Tilt3D>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 07: TECHNOLOGY STACK ─────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-secondary/15 border-b border-border/40 relative">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-24">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-4">
              <span className="h-px w-6 bg-coral" /> Studio Tech Stack{" "}
              <span className="h-px w-6 bg-coral" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Built With Modern Technology
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm md:text-base leading-relaxed">
              Industry-standard developer languages and tools designed for high page speeds,
              rock-solid security, and seamless scaling.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((stack, idx) => (
              <FadeIn key={idx} delay={idx * 120} className="h-full">
                <Tilt3D maxTilt={4} scale={1.02} className="h-full">
                  <div className="group h-full rounded-2xl glass-card-3d p-8 preserve-3d flex flex-col justify-between">
                    <div>
                      <h3
                        className="font-serif text-2xl text-foreground mb-8 border-b border-border/30 pb-4 font-normal"
                        style={{ transform: "translateZ(15px)" }}
                      >
                        {stack.category}
                      </h3>

                      <div
                        className="grid grid-cols-2 gap-3"
                        style={{ transform: "translateZ(8px)" }}
                      >
                        {stack.items.map((item) => {
                          const Logo = item.logo;
                          return (
                            <div
                              key={item.name}
                              className={`group/item flex items-center gap-3 px-4 py-3 rounded-xl border border-border/30 bg-card/60 transition-all duration-300 cursor-default ${item.hoverColor}`}
                            >
                              <Logo className="w-5 h-5 text-muted-foreground transition-all duration-300 group-hover/item:scale-110" />
                              <span className="text-xs font-semibold text-foreground tracking-wide">
                                {item.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Tilt3D>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 08: OUR COMMITMENT (Dark Premium Section) ─────────────── */}
      <section className="py-24 md:py-36 bg-[#111111] text-background relative overflow-hidden border-b border-border/10">
        {/* Luminous circular ambient lights for dark background depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-coral/8 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/4 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-5">
              <FadeIn direction="left">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-6">
                  <span className="h-px w-6 bg-coral" /> Our Commitment
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white font-normal">
                  What You Can Expect From Every Project
                </h2>
                <p className="mt-8 text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                  We maintain uncompromising quality standards across all projects. These eight
                  pillars are built directly into our baseline delivery guidelines.
                </p>
              </FadeIn>
            </div>

            {/* Right Checklist Column */}
            <div className="lg:col-span-7">
              <FadeIn delay={200} direction="right">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {commitments.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 px-6 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-coral/40 transition-all duration-300 group"
                    >
                      <div className="h-7 w-7 rounded-full bg-coral/20 flex items-center justify-center shrink-0 group-hover:bg-coral transition-all duration-300">
                        <Check className="h-4 w-4 text-coral group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm md:text-base font-semibold text-white/80 group-hover:text-white transition-colors duration-300 tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 09: CLIENT CONFIDENCE SECTION ────────────────────────── */}
      <section className="py-24 md:py-36 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(224,90,54,0.04),transparent_65%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left Column - Visual Elements */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <FadeIn direction="left">
                <div className="relative">
                  {/* Decorative Card with 3D tilts */}
                  <Tilt3D maxTilt={4} scale={1.01}>
                    <div className="rounded-3xl glass-card-3d p-8 md:p-10 preserve-3d border border-border/40 relative">
                      <div
                        className="text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-6"
                        style={{ transform: "translateZ(10px)" }}
                      >
                        Partnership First
                      </div>
                      <h3
                        className="font-serif text-2xl md:text-3xl text-foreground mb-8 leading-snug font-normal"
                        style={{ transform: "translateZ(15px)" }}
                      >
                        "Every project receives the same rigorous attention to quality, direct
                        communication, and pixel-perfect execution."
                      </h3>

                      {/* Growth & Quality Indicators */}
                      <div
                        className="border-t border-border/30 pt-8 mt-6 grid grid-cols-3 gap-4"
                        style={{ transform: "translateZ(8px)" }}
                      >
                        {[
                          { icon: Star, label: "Quality Focus" },
                          { icon: Users, label: "Collaboration" },
                          { icon: TrendingUp, label: "Business Growth" },
                        ].map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={i}
                              className="flex flex-col items-center gap-3 text-center group/indicator"
                            >
                              <div className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center group-hover/indicator:bg-coral group-hover/indicator:text-coral-foreground transition-all duration-300">
                                <Icon className="h-4 w-4" />
                              </div>
                              <span className="text-[10px] md:text-xs text-muted-foreground font-bold tracking-wide leading-tight">
                                {item.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </Tilt3D>

                  {/* Floating Badges */}
                  <div className="absolute -top-4 -right-4 bg-coral text-coral-foreground text-[10px] md:text-xs font-semibold px-4 py-2 rounded-full shadow-lg shadow-coral/20 tracking-wider uppercase">
                    Trusted Partner
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-card border border-border/50 text-[10px] md:text-xs text-foreground font-bold px-4 py-2 rounded-full shadow-md tracking-wide">
                    Long-term thinking
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Persuasive content */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <FadeIn delay={200} direction="right">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-6">
                  <span className="h-px w-6 bg-coral" /> Client Confidence
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                  More Than A Service Provider
                </h2>
                <p className="mt-8 text-muted-foreground text-sm md:text-base leading-relaxed">
                  We believe successful digital applications are built through mutual alignment,
                  constant updates, and clear architecture. Every project receives the exact same
                  focus on detail and design logic.
                </p>
                <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                  When you work with Afero, you gain an active engineering team genuinely aligned
                  with your commercial growth. We ensure smooth deployments, optimized pages, and
                  technical clarity.
                </p>

                {/* Growth indicator list */}
                <div className="mt-10 space-y-4">
                  {[
                    "We respond quickly and communicate with absolute clarity.",
                    "We push back constructively when custom code serves you better than templating.",
                    "We monitor post-launch performance indicators continuously.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-coral/15 flex items-center justify-center shrink-0 mt-1">
                        <Check className="h-3 w-3 text-coral" />
                      </div>
                      <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA ────────────────────────────────────────── */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        {/* Perspective grid overlay */}
        <div className="grid-3d-container opacity-35">
          <div className="grid-3d-plane" />
        </div>

        {/* Ambient background glow circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-coral/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-8">
              <span className="h-px w-6 bg-coral" /> Start a Project{" "}
              <span className="h-px w-6 bg-coral" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Let's Build Something Your{" "}
              <em className="text-coral italic font-normal font-serif">Customers</em> Will Remember.
            </h2>
            <p className="mt-8 text-muted-foreground text-sm md:text-lg leading-relaxed max-w-xl mx-auto">
              Whether you're launching a startup, redesigning a website, or building a new digital
              product, we'd love to hear your vision.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-8 py-4 text-sm font-semibold hover:bg-foreground hover:text-background transition-all duration-300 glow-coral shadow-lg shadow-coral/20"
              >
                Start Your Project{" "}
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-4 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
              >
                See how we work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Direct communication support note */}
            <p className="mt-10 text-xs text-muted-foreground/60 tracking-wider">
              No commitment required · Direct communication with lead engineers · Response within 24
              hours
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
