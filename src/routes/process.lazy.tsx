import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Zap,
  Shield,
  Layers,
  Sparkles,
  Accessibility,
  Globe,
  Lock,
  Rocket,
  Users,
  CheckSquare,
  RefreshCw,
  Calendar,
  MessageSquare,
  TrendingUp,
  ChevronDown,
  Activity,
  Compass,
  GitPullRequest,
  Gauge,
  CalendarDays,
  Award,
  ArrowRight,
  Lightbulb,
  Target,
  PenTool,
  Code,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Tilt3D } from "@/components/ui/Tilt3D";

export const Route = createLazyFileRoute("/process")({
  component: ProcessPage,
});

// A lightweight, performant intersection observer wrapper for entrance animations
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
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
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

// Custom FAQ Accordion Item component with support for smooth height animation and accessibility
function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-border/40 py-4">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-button-${index}`}
        className="flex w-full items-center justify-between py-4 text-left font-serif text-lg md:text-xl text-foreground hover:text-coral transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-md cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180 text-coral" : ""
          }`}
        />
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 py-2" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProcessPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activePhase, setActivePhase] = useState("01");
  const [activeCollabIndex, setActiveCollabIndex] = useState<number | null>(null);

  // IntersectionObserver to sync scroll position with active state highlights
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when the card occupies the middle area
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-phase");
          if (id) {
            setActivePhase(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const cardElements = document.querySelectorAll(".phase-card-trigger");
    cardElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth scroll callback
  const scrollToCard = (num: string) => {
    const element = document.getElementById(`phase-card-${num}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActivePhase(num); // Set immediately for instant response feel
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Journey stages configuration
  const journeyStages = [
    {
      num: "01",
      title: "Idea",
      subtitle: "The Spark",
      desc: "We start with your vision, goals, and opportunities.",
      icon: Lightbulb,
      milestones: ["Vision Mapping", "Scope Discovery", "Feasibility Study"],
    },
    {
      num: "02",
      title: "Strategy",
      subtitle: "The Foundation",
      desc: "Research and planning create a clear direction.",
      icon: Target,
      milestones: ["User Personas", "Technical Architecture", "Interactive Wireframes"],
    },
    {
      num: "03",
      title: "Design",
      subtitle: "The Experience",
      desc: "Crafting intuitive interfaces that users enjoy.",
      icon: PenTool,
      milestones: ["Luxury Visual Identity", "High-Fidelity Mockups", "Responsive Prototypes"],
    },
    {
      num: "04",
      title: "Development",
      subtitle: "The Engineering",
      desc: "Building scalable, high-performing digital products.",
      icon: Code,
      highlight: true,
      milestones: ["Semantic Custom Code", "API & Systems Integration", "Speed & SEO Optimization"],
    },
    {
      num: "05",
      title: "Launch",
      subtitle: "The Release",
      desc: "Testing, refining, and delivering with confidence.",
      icon: Rocket,
      milestones: ["Cross-Browser Visual QA", "System Load Testing", "SSL & Domain Setup"],
    },
    {
      num: "06",
      title: "Growth",
      subtitle: "The Evolution",
      desc: "Continuous optimization and measurable improvement.",
      icon: TrendingUp,
      milestones: ["Performance Analytics", "Continuous UX Refinement", "SEO Rank Monitoring"],
    },
  ];

  // Main Timeline Steps
  const timelineSteps = [
    {
      num: "01",
      name: "Discovery",
      subtitle: "Strategic Foundation",
      description:
        "We begin by understanding your business, audience, goals, and opportunities before making any design or technical decisions.",
      deliverables: [
        "Business Discovery Session",
        "Competitor Analysis",
        "Audience Research",
        "Project Scope Definition",
        "Technical Planning",
      ],
      outcome: "A clear roadmap aligned with business objectives and user needs.",
    },
    {
      num: "02",
      name: "Design",
      subtitle: "Creative Direction",
      description:
        "We transform insights into intuitive experiences and visually compelling interfaces designed to engage users and support conversions.",
      deliverables: [
        "User Flows",
        "Wireframes",
        "Visual Design System",
        "Responsive Layouts",
        "Design Review Sessions",
      ],
      outcome: "A validated design direction ready for development.",
    },
    {
      num: "03",
      name: "Build",
      subtitle: "Engineering Excellence",
      description:
        "Designs are transformed into scalable, high-performing digital products using modern development practices.",
      deliverables: [
        "Frontend Development",
        "Backend Integration",
        "CMS Setup",
        "Performance Optimization",
        "Quality Assurance Testing",
        "Accessibility Review",
      ],
      outcome: "A reliable, production-ready website prepared for launch.",
    },
    {
      num: "04",
      name: "Grow",
      subtitle: "Growth Partnership",
      description:
        "After launch, we monitor performance, gather insights, and identify opportunities for continuous improvement.",
      deliverables: [
        "Analytics Setup",
        "SEO Foundation",
        "Performance Monitoring",
        "Content Guidance",
        "Ongoing Optimization",
      ],
      outcome: "A digital presence that continues improving over time.",
    },
  ];

  // Process Promise Cards
  const promises = [
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      body: "You always know what is happening, what comes next, and why.",
    },
    {
      icon: Layers,
      title: "Clear Deliverables",
      body: "Every phase ends with tangible outcomes and review points.",
    },
    {
      icon: Zap,
      title: "Efficient Collaboration",
      body: "Focused feedback cycles that keep projects moving forward.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Partnership",
      body: "We stay involved beyond launch to support future growth.",
    },
  ];

  // What's Included Feature Cards
  const baselineFeatures = [
    { icon: SmartphoneIcon, title: "Responsive Design" },
    { icon: Globe, title: "SEO Foundations" },
    { icon: Gauge, title: "Performance Optimization" },
    { icon: Accessibility, title: "Accessibility Standards" },
    { icon: Activity, title: "Analytics Integration" },
    { icon: Shield, title: "Security Best Practices" },
    { icon: Layers, title: "Cross-Device Testing" },
    { icon: Rocket, title: "Launch Support" },
  ];

  // Collaboration Horizontal Cards
  const collabCards = [
    {
      icon: CalendarDays,
      title: "Weekly Progress Updates",
      description: "Regular updates and milestone reviews throughout the project.",
    },
    {
      icon: Users,
      title: "Direct Communication",
      description: "Work directly with the people building your product.",
    },
    {
      icon: GitPullRequest,
      title: "Focused Feedback Cycles",
      description: "Structured reviews designed to reduce delays.",
    },
    {
      icon: CheckSquare,
      title: "Transparent Project Tracking",
      description: "Clear visibility into progress and priorities.",
    },
  ];

  // Why Clients Appreciate This Approach
  const benefits = [
    { icon: Calendar, title: "Predictable timelines" },
    { icon: Compass, title: "Clear expectations" },
    { icon: RefreshCw, title: "Fewer revisions" },
    { icon: MessageSquare, title: "Better communication" },
    { icon: Award, title: "Higher quality outcomes" },
    { icon: TrendingUp, title: "Long-term scalability" },
  ];

  // FAQ Data
  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary depending on scope and complexity, but most website projects are completed within a few weeks.",
    },
    {
      q: "Can I request revisions?",
      a: "Yes. Every project includes structured review stages to ensure alignment throughout the process.",
    },
    {
      q: "Will the website work on mobile devices?",
      a: "Absolutely. Every project is designed and developed with responsiveness in mind.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. We continue supporting clients after launch and can assist with future improvements.",
    },
    {
      q: "How do we communicate during the project?",
      a: "Communication is direct, transparent, and consistent throughout every phase.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-coral selection:text-coral-foreground">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden border-b border-border/40">
        {/* Animated 3D Grid Plane */}
        <div className="grid-3d-container">
          <div className="grid-3d-plane" />
        </div>

        {/* Ambient radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-6">
              <span className="h-px w-6 bg-coral" /> How We Work
            </div>

            <h1 className="font-serif text-5xl md:text-[5.5rem] tracking-tight leading-[0.95] text-foreground max-w-4xl mx-auto">
              Built with process. <br />
              Delivered with <em className="text-coral italic font-normal">precision.</em>
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
              Every project follows a structured system designed to eliminate uncertainty, reduce
              delays, and deliver measurable business outcomes.
            </p>

            <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
              From strategy to launch, every phase has a clear purpose, defined deliverables, and
              transparent communication.
            </p>

            {/* Trust Statement */}
            <div className="mt-12 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center py-4 px-6 md:px-8 rounded-full border border-border/60 bg-card/65 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-coral shrink-0" />
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-foreground">
                  No hidden costs
                </span>
              </div>
              <span className="hidden sm:inline h-1.5 w-1.5 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-coral shrink-0" />
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-foreground">
                  No outsourcing
                </span>
              </div>
              <span className="hidden sm:inline h-1.5 w-1.5 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-coral shrink-0" />
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-foreground">
                  No unnecessary complexity
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REDESIGNED PROJECT JOURNEY SECTION */}
      <section className="py-24 md:py-32 bg-secondary/10 border-b border-border/40 relative">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-3">
              Our Visual Project Journey
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] tracking-tight">
              From Idea to <span className="text-coral">Impact</span>.{" "}
              <br className="hidden sm:block" />A Journey with Purpose.
            </h2>
            <p className="text-muted-foreground mt-6 text-sm md:text-base leading-relaxed">
              A clear process helps us move faster, communicate better, and deliver work that
              creates real business value.
            </p>
          </FadeIn>

          {/* Immersive Horizontal Timeline Slider */}
          <FadeIn delay={100}>
            <div className="relative max-w-6xl mx-auto py-8">
              {/* Glowing Pathway Connector (Desktop only, runs behind card icons) */}
              <div className="absolute top-[88px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-coral/5 via-coral/40 to-coral/5 hidden md:block z-0 pointer-events-none" />

              {/* Scrollable Timeline Deck */}
              <div className="flex gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory px-4 md:px-8 pb-10 relative z-10">
                {journeyStages.map((stage, idx) => {
                  const Icon = stage.icon;
                  const isHighlighted = stage.highlight;
                  return (
                    <div
                      key={stage.num}
                      className="flex-shrink-0 w-[290px] sm:w-[360px] md:w-[420px] snap-center select-none"
                    >
                      <Tilt3D maxTilt={4} scale={1.01} className="h-full">
                        <div
                          className={`group h-full rounded-[2rem] glass-card-3d p-8 md:p-10 flex flex-col justify-between preserve-3d relative overflow-hidden transition-all duration-500 border ${
                            isHighlighted
                              ? "border-coral/30 shadow-[0_15px_45px_-15px_rgba(224,90,54,0.15)] bg-gradient-to-br from-card to-[#FAF7F2]/50"
                              : "border-border/40 hover:border-coral/20"
                          }`}
                        >
                          {/* Floating watermarked backdrop number */}
                          <span className="absolute top-4 right-8 font-serif text-8xl text-border/15 group-hover:text-coral/5 select-none pointer-events-none transition-all duration-700 font-normal">
                            {stage.num}
                          </span>

                          <div>
                            {/* Elegant Icon Badge */}
                            <div
                              className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-md ${
                                isHighlighted
                                  ? "bg-coral text-coral-foreground scale-110 shadow-[0_0_20px_rgba(224,90,54,0.25)]"
                                  : "bg-card text-foreground border border-border/60 group-hover:bg-coral group-hover:text-coral-foreground group-hover:border-coral group-hover:scale-105"
                              }`}
                              style={{ transform: "translateZ(20px)" }}
                            >
                              <Icon className="h-6 w-6" />
                            </div>

                            {/* Title & Subtitle */}
                            <div
                              className="mt-8 space-y-1.5"
                              style={{ transform: "translateZ(15px)" }}
                            >
                              <span
                                className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${
                                  isHighlighted ? "text-coral" : "text-muted-foreground/60"
                                }`}
                              >
                                {stage.subtitle}
                              </span>
                              <h3 className="font-serif text-3xl font-normal text-foreground group-hover:text-coral transition-colors duration-300">
                                {stage.title}
                              </h3>
                            </div>

                            {/* Description */}
                            <p
                              className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed"
                              style={{ transform: "translateZ(10px)" }}
                            >
                              {stage.desc}
                            </p>
                          </div>

                          {/* Key Milestones deliverables list */}
                          <div
                            className="border-t border-border/20 pt-6 mt-8 space-y-4"
                            style={{ transform: "translateZ(8px)" }}
                          >
                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-bold">
                              Key Milestones
                            </div>
                            <ul className="space-y-2.5">
                              {stage.milestones?.map((ms, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-2.5 text-xs text-foreground/80"
                                >
                                  <Check className="h-3.5 w-3.5 text-coral shrink-0" />
                                  <span>{ms}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Tilt3D>
                    </div>
                  );
                })}
              </div>

              {/* Swipe Indicator */}
              <div className="text-center mt-4">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground/60 font-semibold bg-secondary/50 px-4 py-2 rounded-full border border-border/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral animate-ping" /> Swipe to
                  explore journey
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Premium Feature Trust Strip */}
          <FadeIn delay={200}>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-border/30 pt-16 max-w-6xl mx-auto">
              {[
                {
                  title: "Clarity at Every Step",
                  desc: "You always know what's happening and what's next.",
                },
                {
                  title: "Collaborative Approach",
                  desc: "Your feedback shapes the project throughout the journey.",
                },
                {
                  title: "Quality Built In",
                  desc: "Best practices, performance, and reliability from day one.",
                },
                {
                  title: "Results That Grow",
                  desc: "Built for long-term business success, not short-term launches.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card p-6 rounded-2xl border border-border/40 shadow-[0_4px_12px_-10px_rgba(0,0,0,0.03)] hover:border-border/80 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <h4 className="font-serif text-lg font-normal text-foreground mb-2 group-hover:text-coral transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROCESS PROMISE SECTION */}
      <section className="py-24 md:py-32 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-3">
              The Afero Advantage
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">What makes our process different</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              We design workflows around transparency, accountability, and high-performance
              outcomes. Here is our promise to you.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((promise, idx) => {
              const Icon = promise.icon;
              return (
                <FadeIn key={idx} delay={idx * 100} className="h-full">
                  <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                    <div className="group h-full rounded-2xl glass-card-3d p-8 flex flex-col justify-between preserve-3d">
                      <div>
                        <div
                          className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6 shadow-sm group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-300"
                          style={{ transform: "translateZ(25px)" }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3
                          className="font-serif text-2xl font-normal mb-3 transform translate-z-10"
                          style={{ transform: "translateZ(15px)" }}
                        >
                          {promise.title}
                        </h3>
                        <p
                          className="text-sm text-muted-foreground leading-relaxed transform translate-z-2"
                          style={{ transform: "translateZ(8px)" }}
                        >
                          {promise.body}
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

      {/* STICKY EXECUTION ROADMAP SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 border-b border-border/40 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* LEFT COLUMN - Sticky Navigation (40% desktop width) */}
          <div className="lg:col-span-5 lg:sticky lg:top-[120px] self-start mb-16 lg:mb-0">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium mb-3">
                <span className="h-px w-6 bg-coral" /> Execution Roadmap
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                Our Structured Workflow
              </h2>

              <p className="text-muted-foreground mt-4 max-w-md text-sm md:text-base leading-relaxed">
                Every phase has a clear purpose, defined deliverables, and measurable outcomes. We
                follow a proven system designed to reduce uncertainty and create better results.
              </p>

              {/* Process Navigation (desktop only) */}
              <nav
                className="mt-12 hidden lg:flex flex-col gap-6 max-w-xs"
                aria-label="Process navigation"
              >
                {timelineSteps.map((step) => {
                  const isActive = activePhase === step.num;
                  return (
                    <button
                      key={step.num}
                      onClick={() => scrollToCard(step.num)}
                      className="flex items-start gap-4 text-left group cursor-pointer focus:outline-none"
                    >
                      {/* Active indicator bar */}
                      <div className="relative w-1 self-stretch py-1 min-h-[48px]">
                        <div
                          className={`absolute inset-y-0 left-0 w-0.5 bg-coral rounded-full transition-all duration-500 origin-top ${
                            isActive
                              ? "scale-y-100 opacity-100"
                              : "scale-y-0 opacity-0 group-hover:scale-y-50 group-hover:opacity-30"
                          }`}
                        />
                        <div className="absolute inset-y-0 left-0 w-[1px] bg-border/40" />
                      </div>

                      <div className="py-1">
                        <span
                          className={`font-serif text-lg block transition-all duration-300 font-normal ${
                            isActive
                              ? "text-coral"
                              : "text-muted-foreground/60 group-hover:text-muted-foreground"
                          }`}
                        >
                          {step.num} {step.name}
                        </span>
                        <span
                          className={`text-xs block mt-1 transition-all duration-300 ${
                            isActive
                              ? "text-foreground font-medium"
                              : "text-muted-foreground/45 group-hover:text-muted-foreground/65"
                          }`}
                        >
                          {step.subtitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* RIGHT COLUMN - Process Cards (60% desktop width) */}
          <div className="lg:col-span-7 space-y-16 lg:space-y-24">
            {/* Mobile sticky tabs (active on mobile, hidden on desktop) */}
            <div className="lg:hidden sticky top-[68px] z-40 bg-background/95 backdrop-blur-md border-b border-border/40 py-4 -mx-6 px-6 overflow-x-auto scrollbar-none flex gap-2 mb-8">
              {timelineSteps.map((step) => {
                const isActive = activePhase === step.num;
                return (
                  <button
                    key={step.num}
                    onClick={() => scrollToCard(step.num)}
                    className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none ${
                      isActive
                        ? "bg-coral text-coral-foreground shadow-md shadow-coral/10"
                        : "bg-secondary text-muted-foreground hover:text-foreground border border-border/40"
                    }`}
                  >
                    {step.num} {step.name}
                  </button>
                );
              })}
            </div>

            {timelineSteps.map((step) => {
              return (
                <div
                  key={step.num}
                  id={`phase-card-${step.num}`}
                  data-phase={step.num}
                  className="phase-card-trigger scroll-mt-24 lg:scroll-mt-36"
                >
                  <FadeIn delay={100}>
                    <Tilt3D maxTilt={2} scale={1.005} className="h-full">
                      <div className="rounded-3xl glass-card-3d p-8 md:p-12 preserve-3d h-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between border-b border-border/30 pb-6 mb-6">
                          <div>
                            <span className="text-xs uppercase tracking-[0.2em] text-coral font-semibold block mb-1">
                              Phase {step.num}
                            </span>
                            <h3 className="font-serif text-3xl md:text-5xl text-foreground">
                              {step.name}
                            </h3>
                            <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground block mt-1">
                              {step.subtitle}
                            </span>
                          </div>

                          <span className="font-serif text-5xl md:text-7xl text-border/40 select-none pointer-events-none">
                            {step.num}
                          </span>
                        </div>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                          {step.description}
                        </p>

                        <div className="border-t border-border/30 pt-6 mb-8">
                          <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground block mb-4">
                            Deliverables:
                          </span>
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {step.deliverables.map((del, dIdx) => (
                              <li
                                key={dIdx}
                                className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-normal"
                              >
                                <Check className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Expected Outcome */}
                        <div className="p-6 rounded-2xl border border-coral/10 bg-coral/[0.02]">
                          <span className="font-semibold text-foreground text-xs md:text-sm block mb-1">
                            Expected Outcome:
                          </span>
                          <span className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                            {step.outcome}
                          </span>
                        </div>
                      </div>
                    </Tilt3D>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED SECTION */}
      <section className="py-24 md:py-32 bg-secondary/15 border-y border-border/40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,90,54,0.03),transparent_50%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-3">
              Standard Suite
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">Included in Every Project</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              Regardless of the project size, we hold ourselves to rigorous standards. These are the
              built-in essentials.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Card 1: Responsive Design (col-span-3) */}
            <FadeIn delay={50} className="md:col-span-3 h-full">
              <Tilt3D maxTilt={4} scale={1.01} className="h-full">
                <div className="group rounded-3xl glass-card-3d p-8 flex flex-col md:flex-row gap-6 justify-between h-full preserve-3d relative overflow-hidden border border-border/40 hover:border-coral/30 transition-all duration-500 shadow-sm min-h-[300px] md:min-h-[260px]">
                  <div className="flex flex-col justify-between z-10 preserve-3d max-w-[200px] md:max-w-[220px]">
                    <div
                      className="flex items-center gap-3 mb-4"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      <div className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shadow-sm group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-500 shrink-0">
                        <SmartphoneIcon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-coral transition-colors duration-300">
                        Responsive Design
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Fluid, high-end layouts built to adapt perfectly to all viewport boundaries
                      and pixel counts.
                    </p>
                  </div>

                  <div
                    className="flex-grow flex items-center justify-center relative min-h-[140px]"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <div className="relative w-full h-[140px] flex items-center justify-center overflow-hidden">
                      {/* Desktop Mock */}
                      <div className="absolute w-[180px] h-[105px] border border-border/60 rounded-lg bg-background/50 backdrop-blur-sm shadow-sm flex flex-col p-1.5 transition-all duration-500 scale-90 group-hover:scale-95 translate-y-[-10px]">
                        <div className="flex items-center gap-1 border-b border-border/30 pb-1 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-border" />
                          <span className="w-1.5 h-1.5 rounded-full bg-border" />
                          <span className="w-1.5 h-1.5 rounded-full bg-border" />
                        </div>
                        <div className="grid grid-cols-3 gap-1 flex-grow">
                          <div className="col-span-1 bg-coral/10 rounded flex items-center justify-center text-[7px] text-coral font-bold font-serif">
                            A
                          </div>
                          <div className="col-span-2 flex flex-col gap-1">
                            <span className="h-1.5 bg-border/40 rounded w-4/5" />
                            <span className="h-1 bg-border/20 rounded w-full" />
                            <span className="h-1 bg-border/20 rounded w-full" />
                            <span className="h-1 bg-border/20 rounded w-3/4" />
                          </div>
                        </div>
                      </div>
                      {/* Tablet Mock */}
                      <div className="absolute w-[100px] h-[75px] border border-coral/30 rounded-md bg-card shadow-md flex flex-col p-1.5 transition-all duration-500 translate-x-12 translate-y-8 group-hover:translate-x-8 group-hover:translate-y-6">
                        <div className="h-1 bg-coral/20 rounded w-1/3 mb-1.5" />
                        <div className="flex-grow flex flex-col gap-1">
                          <div className="h-6 bg-border/30 rounded flex items-center justify-center text-[6px] text-muted-foreground">
                            Image
                          </div>
                          <span className="h-1 bg-border/20 rounded w-full" />
                          <span className="h-1 bg-border/20 rounded w-4/5" />
                        </div>
                      </div>
                      {/* Phone Mock */}
                      <div className="absolute w-[50px] h-[80px] border border-coral/60 rounded-md bg-background shadow-lg flex flex-col p-1 transition-all duration-500 translate-x-24 translate-y-16 group-hover:translate-x-20 group-hover:translate-y-12">
                        <div className="w-1.5 h-1 bg-border/60 rounded-full mx-auto mb-1" />
                        <div className="flex-grow flex flex-col gap-1">
                          <div className="h-6 bg-coral/10 rounded flex items-center justify-center text-[5px] text-coral font-bold font-serif">
                            A
                          </div>
                          <span className="h-1 bg-border/20 rounded w-full" />
                          <span className="h-1 bg-border/20 rounded w-full" />
                          <span className="h-1 bg-border/20 rounded w-2/3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </FadeIn>

            {/* Card 2: SEO Foundations (col-span-3) */}
            <FadeIn delay={100} className="md:col-span-3 h-full">
              <Tilt3D maxTilt={4} scale={1.01} className="h-full">
                <div className="group rounded-3xl glass-card-3d p-8 flex flex-col md:flex-row gap-6 justify-between h-full preserve-3d relative overflow-hidden border border-border/40 hover:border-coral/30 transition-all duration-500 shadow-sm min-h-[300px] md:min-h-[260px]">
                  <div className="flex flex-col justify-between z-10 preserve-3d max-w-[200px] md:max-w-[220px]">
                    <div
                      className="flex items-center gap-3 mb-4"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      <div className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shadow-sm group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-500 shrink-0">
                        <Globe className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-coral transition-colors duration-300">
                        SEO Foundations
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Semantic custom hierarchy structured perfectly for visibility, crawling
                      indexing, and high ranking.
                    </p>
                  </div>

                  <div
                    className="flex-grow flex items-center justify-center relative min-h-[140px]"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <div className="relative w-full max-w-[220px] h-[120px] rounded-xl border border-border/40 bg-background/50 p-3 shadow-inner flex flex-col gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] text-muted-foreground font-mono">
                          https://aferotech.com
                        </span>
                      </div>
                      <div className="h-[1px] bg-border/40 w-full" />
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-semibold text-coral font-serif leading-tight">
                          Afero | Premium Digital Agency
                        </span>
                        <div className="flex flex-col gap-1">
                          <span className="h-1 bg-border/60 rounded w-full" />
                          <span className="h-1 bg-border/40 rounded w-full" />
                          <span className="h-1 bg-border/20 rounded w-4/5" />
                        </div>
                      </div>

                      {/* SEO Radar Pulse Graphic */}
                      <svg
                        className="absolute inset-0 pointer-events-none w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="100%"
                          height="100%"
                          rx="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-coral/10 animate-grid-glow"
                        />
                        <line
                          x1="10%"
                          y1="0"
                          x2="10%"
                          y2="100%"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                          className="text-coral/10"
                        />
                        <line
                          x1="90%"
                          y1="0"
                          x2="90%"
                          y2="100%"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                          className="text-coral/10"
                        />
                        <path
                          d="M 10 90 L 100 90 L 130 50 L 210 50"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                          className="text-coral/40 animate-dash-crawl"
                          style={{ strokeDashoffset: 0 }}
                        />
                        <circle cx="130" cy="50" r="3" className="fill-coral" />
                        <circle
                          cx="130"
                          cy="50"
                          r="6"
                          className="stroke-coral/60 fill-none animate-ping"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </FadeIn>

            {/* Card 3: Performance Optimization (col-span-4) */}
            <FadeIn delay={150} className="md:col-span-4 h-full">
              <Tilt3D maxTilt={4} scale={1.01} className="h-full">
                <div className="group rounded-3xl glass-card-3d p-8 flex flex-col sm:flex-row gap-6 justify-between h-full preserve-3d relative overflow-hidden border border-border/40 hover:border-coral/30 transition-all duration-500 shadow-sm min-h-[300px] md:min-h-[260px]">
                  <div className="flex flex-col justify-between z-10 preserve-3d max-w-[260px]">
                    <div
                      className="flex items-center gap-3 mb-4"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      <div className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shadow-sm group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-500 shrink-0">
                        <Gauge className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-coral transition-colors duration-300">
                        Performance Optimization
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      Ultra-fast page loads engineered using asset optimization, minified
                      structures, and high-performance server delivery.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-semibold">
                        FCP: 0.3s
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-semibold">
                        TBT: 0ms
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex-grow flex items-center justify-center relative min-h-[140px]"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      {/* SVG Gauge Background */}
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="transparent"
                          className="text-border/30"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray="251.2"
                          strokeDashoffset="0"
                          className="text-coral transition-all duration-1000 ease-out"
                          style={{ strokeDashoffset: 25.1 }}
                        />
                      </svg>
                      {/* Text inside */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-serif font-normal text-foreground leading-none">
                          100
                        </span>
                        <span className="text-[7px] tracking-widest uppercase font-semibold text-coral mt-1">
                          Lighthouse
                        </span>
                      </div>

                      {/* Particle lights */}
                      <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-coral rounded-full blur-[2px] animate-ping" />
                      <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-coral rounded-full blur-[1px] opacity-75" />
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </FadeIn>

            {/* Card 4: Accessibility Standards (col-span-2) */}
            <FadeIn delay={200} className="md:col-span-2 h-full">
              <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                <div className="group rounded-3xl glass-card-3d p-8 flex flex-col justify-between h-full preserve-3d relative overflow-hidden border border-border/40 hover:border-coral/30 transition-all duration-500 shadow-sm min-h-[300px]">
                  <div className="flex flex-col z-10 preserve-3d">
                    <div
                      className="flex items-center gap-3 mb-4"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      <div className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shadow-sm group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-500 shrink-0">
                        <Accessibility className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-coral transition-colors duration-300">
                        Accessibility Standards
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Compliant with strict accessibility standards to ensure fully usable
                      environments for everyone.
                    </p>
                  </div>

                  <div
                    className="flex-grow flex items-center justify-center relative min-h-[110px]"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <div className="relative w-full max-w-[150px] py-3.5 px-4 bg-background/50 border border-border/40 rounded-xl flex items-center justify-center gap-3 overflow-hidden shadow-inner">
                      <span className="text-[10px] text-muted-foreground">Tabs:</span>
                      <div className="flex items-center gap-2 relative">
                        <span className="text-[10px] font-semibold text-foreground">Menu</span>
                        <span className="text-[10px] font-semibold text-foreground">About</span>
                        <span className="text-[10px] font-semibold text-foreground">FAQ</span>
                        {/* Keyboard Focus Highlight Border */}
                        <div
                          className="absolute top-[-4px] left-[-6px] height-[22px] border-2 border-coral rounded-md pointer-events-none animate-focus-jump"
                          style={{ height: "22px", top: "-4px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </FadeIn>

            {/* Card 5: Analytics Integration (col-span-2) */}
            <FadeIn delay={250} className="md:col-span-2 h-full">
              <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                <div className="group rounded-3xl glass-card-3d p-8 flex flex-col justify-between h-full preserve-3d relative overflow-hidden border border-border/40 hover:border-coral/30 transition-all duration-500 shadow-sm min-h-[300px]">
                  <div className="flex flex-col z-10 preserve-3d">
                    <div
                      className="flex items-center gap-3 mb-4"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      <div className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shadow-sm group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-500 shrink-0">
                        <Activity className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-coral transition-colors duration-300">
                        Analytics Integration
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Custom configured funnel, event tracking, and metric dashboards for business
                      monitoring.
                    </p>
                  </div>

                  <div
                    className="flex-grow flex items-center justify-center relative min-h-[110px]"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <div className="relative w-full max-w-[160px] h-[75px] border border-border/40 bg-background/50 rounded-xl overflow-hidden p-2 flex flex-col justify-between shadow-inner">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-mono text-muted-foreground">
                          DAILY VISITS
                        </span>
                        <span className="text-[9px] font-mono font-bold text-coral flex items-center gap-0.5">
                          +42.8%
                        </span>
                      </div>
                      {/* SVG Line Graph */}
                      <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" fill="none">
                        <path
                          d="M0,25 C15,22 25,5 40,18 C55,30 65,10 80,12 C95,14 98,2 100,4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          className="text-coral"
                        />
                        <path
                          d="M0,25 C15,22 25,5 40,18 C55,30 65,10 80,12 C95,14 98,2 100,4 L100,30 L0,30 Z"
                          fill="url(#analytics-grad)"
                        />
                        <defs>
                          <linearGradient id="analytics-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.12" />
                            <stop offset="100%" stopColor="var(--coral)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <circle cx="80" cy="12" r="2.5" className="fill-coral" />
                        <line
                          x1="80"
                          y1="12"
                          x2="80"
                          y2="30"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                          className="text-muted-foreground/40"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </FadeIn>

            {/* Card 6: Security Best Practices (col-span-2) */}
            <FadeIn delay={300} className="md:col-span-2 h-full">
              <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                <div className="group rounded-3xl glass-card-3d p-8 flex flex-col justify-between h-full preserve-3d relative overflow-hidden border border-border/40 hover:border-coral/30 transition-all duration-500 shadow-sm min-h-[300px]">
                  <div className="flex flex-col z-10 preserve-3d">
                    <div
                      className="flex items-center gap-3 mb-4"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      <div className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shadow-sm group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-500 shrink-0">
                        <Shield className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-coral transition-colors duration-300">
                        Security Best Practices
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      SSL configurations, strict security headers, and secure code practices
                      protecting core assets.
                    </p>
                  </div>

                  <div
                    className="flex-grow flex items-center justify-center relative min-h-[110px]"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <div className="relative w-20 h-20 flex items-center justify-center bg-background/50 border border-border/40 rounded-full shadow-inner">
                      {/* Radar circle scan */}
                      <div className="absolute inset-1.5 border border-dashed border-coral/30 rounded-full animate-radar-scan" />
                      <div className="absolute inset-4 border border-coral/10 rounded-full" />

                      {/* Shield Core */}
                      <Shield className="h-7 w-7 text-coral z-10 transition-transform duration-500 group-hover:scale-110" />

                      {/* Active Status Ring */}
                      <div className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-emerald-500 animate-status-pulse" />
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </FadeIn>

            {/* Card 7: Cross-Device Testing (col-span-2) */}
            <FadeIn delay={350} className="md:col-span-2 h-full">
              <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                <div className="group rounded-3xl glass-card-3d p-8 flex flex-col justify-between h-full preserve-3d relative overflow-hidden border border-border/40 hover:border-coral/30 transition-all duration-500 shadow-sm min-h-[300px]">
                  <div className="flex flex-col z-10 preserve-3d">
                    <div
                      className="flex items-center gap-3 mb-4"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      <div className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shadow-sm group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-500 shrink-0">
                        <Layers className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-coral transition-colors duration-300">
                        Cross-Device Testing
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Pixel-perfect layouts validated across Apple, Android, Windows platforms and
                      Chrome, Safari, Firefox.
                    </p>
                  </div>

                  <div
                    className="flex-grow flex items-center justify-center relative min-h-[110px]"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <div className="relative w-full max-w-[140px] h-[75px] flex items-center justify-center">
                      {/* Layered Browser frames */}
                      <div className="absolute w-[100px] h-[55px] border border-border/40 rounded bg-background/60 shadow-sm flex items-center justify-start px-2 gap-1.5 transition-all duration-500 translate-x-[-15px] translate-y-[-10px] group-hover:translate-x-[-12px] group-hover:translate-y-[-8px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                        <span className="text-[7px] font-mono text-muted-foreground/60">
                          Chrome
                        </span>
                      </div>
                      <div className="absolute w-[100px] h-[55px] border border-border/60 rounded bg-background/80 shadow flex items-center justify-start px-2 gap-1.5 transition-all duration-500 translate-x-[0px] translate-y-[0px] group-hover:scale-105 z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80" />
                        <span className="text-[7px] font-mono text-muted-foreground">Safari</span>
                      </div>
                      <div className="absolute w-[100px] h-[55px] border border-border/40 rounded bg-background/60 shadow-sm flex items-center justify-start px-2 gap-1.5 transition-all duration-500 translate-x-[15px] translate-y-[10px] group-hover:translate-x-[12px] group-hover:translate-y-[8px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400/80" />
                        <span className="text-[7px] font-mono text-muted-foreground/60">
                          Firefox
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </FadeIn>

            {/* Card 8: Launch Support (col-span-6) */}
            <FadeIn delay={400} className="md:col-span-6 h-full">
              <Tilt3D maxTilt={2} scale={1.005} className="h-full">
                <div className="group rounded-3xl glass-card-3d p-8 flex flex-col md:flex-row gap-6 justify-between h-full preserve-3d relative overflow-hidden border border-border/40 hover:border-coral/30 transition-all duration-500 shadow-sm min-h-[220px] md:min-h-[160px]">
                  <div className="flex flex-col justify-between z-10 preserve-3d max-w-[280px] md:max-w-[320px]">
                    <div
                      className="flex items-center gap-3 mb-3"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      <div className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shadow-sm group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-500 shrink-0">
                        <Rocket className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-coral transition-colors duration-300">
                        Launch Support
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      DNS mapping, SSL initialization, server settings setup, and release monitoring
                      for a flawless transition.
                    </p>
                  </div>

                  <div
                    className="flex-grow flex items-center justify-center relative min-h-[90px]"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <div className="relative w-full max-w-[380px] py-4 px-6 bg-background/50 border border-border/40 rounded-2xl flex flex-col justify-center gap-3 shadow-inner">
                      <div className="flex justify-between items-center text-[8px] font-mono text-muted-foreground">
                        <span>PIPELINE STATUS</span>
                        <span className="text-coral font-bold animate-pulse">
                          DEPLOYING TO PRODUCTION
                        </span>
                      </div>

                      {/* Launch Pipeline Progress Slider */}
                      <div className="relative h-2 w-full bg-border/40 rounded-full overflow-hidden">
                        <div className="absolute inset-y-0 left-0 bg-coral w-4/5 rounded-full transition-all duration-1000 group-hover:w-full" />
                      </div>

                      <div className="flex justify-between text-[9px] font-semibold text-foreground">
                        <span className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                          Build
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                          Visual QA
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                          Staging
                        </span>
                        <span className="flex items-center gap-1 transition-all duration-1000 group-hover:text-coral">
                          <span className="h-1.5 w-1.5 rounded-full bg-border transition-all duration-1000 group-hover:bg-coral" />
                          Live
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* COLLABORATION SECTION */}
      <section className="py-24 md:py-32 border-b border-border/40 relative overflow-hidden">
        {/* Glow Background */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-coral/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <FadeIn className="text-center mb-20">
            <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-3">
              Client Alignment
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">How We Work Together</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              A smooth process requires active integration and transparent routines.
            </p>
          </FadeIn>

          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Pane: 3D Interactive Layer Stack (Desktop only) */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative min-h-[500px]">
              <div className="isometric-stack-container relative w-full h-[400px] flex items-center justify-center">
                {/* Layer 0: Weekly Progress Calendar */}
                <div
                  className={`absolute w-[290px] h-[190px] rounded-2xl glass-card-3d border p-5 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    activeCollabIndex === 0
                      ? "active text-foreground border-coral/30"
                      : "text-muted-foreground border-border/40 opacity-70 scale-95"
                  }`}
                  style={{
                    transform:
                      activeCollabIndex === 0
                        ? "rotateX(50deg) rotateZ(-30deg) translate3d(-10px, -65px, 60px)"
                        : activeCollabIndex !== null
                          ? "rotateX(50deg) rotateZ(-30deg) translate3d(0px, -55px, -60px)"
                          : "rotateX(50deg) rotateZ(-30deg) translate3d(0px, -45px, -45px)",
                    boxShadow:
                      activeCollabIndex === 0
                        ? "-15px 25px 50px rgba(0, 0, 0, 0.15), 0 0 35px rgba(224, 90, 54, 0.3)"
                        : "-5px 10px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex items-center justify-between border-b border-border/20 pb-2">
                    <span className="text-[9px] font-mono tracking-widest uppercase font-semibold text-coral">
                      WEEKLY PROGRESS
                    </span>
                    <span className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-coral/10 text-coral font-sans font-semibold">
                      UPCOMING
                    </span>
                  </div>
                  <div className="grid grid-cols-7 gap-1.5 py-3">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5">
                        <span className="text-[8px] font-mono font-bold text-muted-foreground/60">
                          {d}
                        </span>
                        <div
                          className={`h-5 w-5 rounded-full flex items-center justify-center text-[8px] font-mono font-bold ${
                            i === 1 || i === 3
                              ? "bg-coral text-coral-foreground shadow-sm shadow-coral/30 scale-105"
                              : "bg-border/20 text-muted-foreground/65"
                          }`}
                        >
                          {12 + i}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-[9px] bg-background/50 border border-border/30 rounded px-2.5 py-1.5 flex items-center justify-between">
                    <span className="font-medium text-foreground">Sprint Demo Session</span>
                    <span className="text-[8px] text-coral font-semibold">10:00 AM</span>
                  </div>
                </div>

                {/* Layer 1: Direct Communication */}
                <div
                  className={`absolute w-[290px] h-[190px] rounded-2xl glass-card-3d border p-5 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    activeCollabIndex === 1
                      ? "active text-foreground border-coral/30"
                      : "text-muted-foreground border-border/40 opacity-70 scale-95"
                  }`}
                  style={{
                    transform:
                      activeCollabIndex === 1
                        ? "rotateX(50deg) rotateZ(-30deg) translate3d(-10px, -30px, 75px)"
                        : activeCollabIndex !== null
                          ? "rotateX(50deg) rotateZ(-30deg) translate3d(0px, -25px, -30px)"
                          : "rotateX(50deg) rotateZ(-30deg) translate3d(0px, -15px, -15px)",
                    boxShadow:
                      activeCollabIndex === 1
                        ? "-15px 25px 50px rgba(0, 0, 0, 0.15), 0 0 35px rgba(224, 90, 54, 0.3)"
                        : "-5px 10px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex items-center justify-between border-b border-border/20 pb-2">
                    <span className="text-[9px] font-mono tracking-widest uppercase font-semibold text-coral">
                      COLLABORATION CHANNEL
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[8px] font-mono text-emerald-600">LIVE</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 py-2 flex-grow justify-center">
                    <div className="flex items-start gap-2.5">
                      <div className="h-6 w-6 rounded-full bg-coral text-coral-foreground font-serif text-[9px] font-bold flex items-center justify-center shrink-0 shadow-sm">
                        AF
                      </div>
                      <div className="bg-background/80 border border-border/30 rounded-r-xl rounded-bl-xl px-2.5 py-1.5 text-[9px] text-foreground leading-normal max-w-[190px]">
                        Just updated the interactive prototype. Check the visual qa phase!
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 justify-end">
                      <div className="bg-coral/5 border border-coral/20 rounded-l-xl rounded-tr-xl px-2.5 py-1.5 text-[9px] text-foreground leading-normal max-w-[190px]">
                        Outstanding. Leaving feedback markers now.
                      </div>
                      <div className="h-6 w-6 rounded-full bg-ink text-cream font-serif text-[9px] font-bold flex items-center justify-center shrink-0 shadow-sm">
                        CL
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 2: Focused Feedback */}
                <div
                  className={`absolute w-[290px] h-[190px] rounded-2xl glass-card-3d border p-5 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    activeCollabIndex === 2
                      ? "active text-foreground border-coral/30"
                      : "text-muted-foreground border-border/40 opacity-70 scale-95"
                  }`}
                  style={{
                    transform:
                      activeCollabIndex === 2
                        ? "rotateX(50deg) rotateZ(-30deg) translate3d(-10px, 5px, 90px)"
                        : activeCollabIndex !== null
                          ? "rotateX(50deg) rotateZ(-30deg) translate3d(0px, 5px, 0px)"
                          : "rotateX(50deg) rotateZ(-30deg) translate3d(0px, 15px, 15px)",
                    boxShadow:
                      activeCollabIndex === 2
                        ? "-15px 25px 50px rgba(0, 0, 0, 0.15), 0 0 35px rgba(224, 90, 54, 0.3)"
                        : "-5px 10px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex items-center justify-between border-b border-border/20 pb-2">
                    <span className="text-[9px] font-mono tracking-widest uppercase font-semibold text-coral">
                      FEEDBACK CYCLE
                    </span>
                    <span className="text-[8px] font-mono text-muted-foreground/60">
                      DESKTOP MOCKUP
                    </span>
                  </div>
                  <div className="relative border border-dashed border-border rounded-lg bg-background/30 p-2 flex flex-col gap-1.5 flex-grow justify-center my-1.5 overflow-hidden">
                    <div className="h-2 w-12 bg-border/60 rounded" />
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="h-10 bg-border/20 rounded relative flex items-center justify-center">
                        <span className="text-[6px] text-muted-foreground/60 font-sans">
                          Hero Image
                        </span>
                        <div className="absolute top-1 right-2 h-3.5 w-3.5 rounded-full bg-coral/20 border border-coral text-[7px] text-coral font-bold flex items-center justify-center animate-bounce">
                          1
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="h-1.5 bg-border/40 rounded w-full" />
                        <span className="h-1.5 bg-border/30 rounded w-4/5" />
                        <span className="h-1.5 bg-border/20 rounded w-full" />
                      </div>
                    </div>
                    {/* Floating review card */}
                    <div className="absolute right-1 bottom-1 bg-card border border-coral/30 rounded px-1.5 py-0.5 shadow-sm text-[6px] text-coral font-semibold font-sans">
                      Pin 1: Make header text italic
                    </div>
                  </div>
                </div>

                {/* Layer 3: Transparent Tracking */}
                <div
                  className={`absolute w-[290px] h-[190px] rounded-2xl glass-card-3d border p-5 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    activeCollabIndex === 3
                      ? "active text-foreground border-coral/30"
                      : "text-muted-foreground border-border/40 opacity-70 scale-95"
                  }`}
                  style={{
                    transform:
                      activeCollabIndex === 3
                        ? "rotateX(50deg) rotateZ(-30deg) translate3d(-10px, 40px, 105px)"
                        : activeCollabIndex !== null
                          ? "rotateX(50deg) rotateZ(-30deg) translate3d(0px, 35px, 30px)"
                          : "rotateX(50deg) rotateZ(-30deg) translate3d(0px, 45px, 45px)",
                    boxShadow:
                      activeCollabIndex === 3
                        ? "-15px 25px 50px rgba(0, 0, 0, 0.15), 0 0 35px rgba(224, 90, 54, 0.3)"
                        : "-5px 10px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex items-center justify-between border-b border-border/20 pb-2">
                    <span className="text-[9px] font-mono tracking-widest uppercase font-semibold text-coral">
                      PROJECT TRACKING
                    </span>
                    <span className="text-[8px] font-mono font-bold text-coral">85% COMPLETE</span>
                  </div>
                  <div className="flex flex-col gap-2.5 py-3 flex-grow justify-center font-sans">
                    <div className="flex items-center gap-2 text-[9px] text-foreground font-semibold">
                      <span className="h-3.5 w-3.5 rounded-full bg-coral/10 text-coral flex items-center justify-center text-[8px]">
                        ✓
                      </span>
                      <span>Discovery & Strategy Roadmap</span>
                    </div>
                    <div className="flex items-center gap-2 text-[9px] text-foreground font-semibold">
                      <span className="h-3.5 w-3.5 rounded-full bg-coral/10 text-coral flex items-center justify-center text-[8px]">
                        ✓
                      </span>
                      <span>Visual Identity & Architecture Blueprint</span>
                    </div>
                    <div className="flex items-center gap-2 text-[9px] text-muted-foreground">
                      <span className="h-3.5 w-3.5 rounded-full bg-border/20 text-muted-foreground/60 flex items-center justify-center text-[7px] animate-spin">
                        ⟳
                      </span>
                      <span>Interactive Engineering & Final Visual QA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Pane: Collaboration Info Cards (Spans full width on mobile, 7 cols on desktop) */}
            <div className="lg:col-span-7 col-span-12 flex flex-col gap-6">
              {collabCards.map((card, idx) => {
                const Icon = card.icon;
                const isActive = activeCollabIndex === idx;
                return (
                  <FadeIn key={idx} delay={idx * 50} className="h-full">
                    <div
                      onMouseEnter={() => setActiveCollabIndex(idx)}
                      onMouseLeave={() => setActiveCollabIndex(null)}
                      className={`group flex items-start gap-6 rounded-2xl p-6 border transition-all duration-500 cursor-pointer ${
                        isActive
                          ? "bg-card border-coral/30 shadow-md translate-x-1 scale-[1.01]"
                          : "bg-card/45 border-border/40 hover:bg-card/85 hover:border-border/80"
                      }`}
                    >
                      <div
                        className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${
                          isActive
                            ? "bg-coral text-coral-foreground scale-105"
                            : "bg-coral/10 text-coral group-hover:bg-coral group-hover:text-coral-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3
                          className={`font-serif text-xl font-normal transition-colors duration-300 ${
                            isActive ? "text-coral" : "text-foreground"
                          }`}
                        >
                          {card.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS PROCESS WORKS SECTION */}
      <section className="py-24 md:py-32 bg-secondary/10 border-b border-border/40 relative">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-3">
              Measurable Success
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">
              Why Clients Appreciate This Approach
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              A structured roadmap creates structural benefits for speed, quality, and future
              growth.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={idx} delay={idx * 50} className="h-full">
                  <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                    <div className="group rounded-3xl glass-card-3d p-8 h-full preserve-3d relative overflow-hidden flex flex-col justify-between border border-border/40 hover:border-coral/30 transition-all duration-500 shadow-sm min-h-[340px]">
                      {/* Depth visual accent */}
                      <div className="absolute -right-16 -bottom-16 w-36 h-36 bg-coral/5 rounded-full blur-[60px] pointer-events-none" />

                      <div className="preserve-3d flex flex-col justify-between flex-grow">
                        <div>
                          <div
                            className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6 shadow-sm group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-500 shrink-0"
                            style={{ transform: "translateZ(20px)" }}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3
                            className="font-serif text-2xl font-normal mb-2 text-foreground group-hover:text-coral transition-colors duration-300"
                            style={{ transform: "translateZ(15px)" }}
                          >
                            {benefit.title}
                          </h3>
                          <p
                            className="text-xs text-muted-foreground leading-relaxed mb-6 font-sans"
                            style={{ transform: "translateZ(8px)" }}
                          >
                            Our rigorous methodology prevents layout regressions, streamlines
                            development timelines, and ensures zero resource waste.
                          </p>
                        </div>

                        {/* Interactive Widget Container */}
                        <div
                          className="w-full flex items-center justify-center py-2 relative min-h-[90px] border-t border-border/20 mt-auto"
                          style={{ transform: "translateZ(12px)" }}
                        >
                          {idx === 0 && (
                            /* Predictable Timelines - Timeline chart */
                            <div className="w-full max-w-[200px] flex flex-col gap-2 font-sans">
                              <div className="flex justify-between items-center text-[8px] font-mono text-muted-foreground/60">
                                <span>MILESTONE PROGRESS</span>
                                <span>WEEK 4</span>
                              </div>
                              <div className="relative h-1.5 w-full bg-border/40 rounded-full overflow-hidden">
                                <div className="absolute inset-y-0 left-0 bg-coral w-3/4 rounded-full transition-all duration-1000 group-hover:w-full" />
                              </div>
                              <div className="flex justify-between text-[8px] text-foreground font-mono">
                                <span>Start</span>
                                <span className="text-coral font-bold font-sans">QA Sync</span>
                                <span>Launch</span>
                              </div>
                            </div>
                          )}

                          {idx === 1 && (
                            /* Clear Expectations - Checkbox card list */
                            <div className="w-full max-w-[200px] flex flex-col gap-1.5 font-sans">
                              {[
                                { text: "Scope Document Confirmed", checked: true },
                                { text: "Visual Mockups Approved", checked: true },
                                { text: "Staging Site Validated", checked: false },
                              ].map((item, keyIdx) => (
                                <div
                                  key={keyIdx}
                                  className="flex items-center justify-between bg-background/50 border border-border/20 rounded-md px-2 py-1"
                                >
                                  <span
                                    className={`text-[8px] font-medium ${item.checked ? "text-foreground" : "text-muted-foreground"}`}
                                  >
                                    {item.text}
                                  </span>
                                  <span
                                    className={`text-[8px] font-bold ${item.checked ? "text-coral" : "text-border"}`}
                                  >
                                    {item.checked ? "✓" : "○"}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {idx === 2 && (
                            /* Fewer Revisions - Revision Comparison Chart */
                            <div className="w-full max-w-[200px] flex flex-col gap-2 font-sans">
                              <div className="flex justify-between items-center text-[8px] font-mono text-muted-foreground/60">
                                <span>AVERAGE REVISIONS</span>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                  <span className="text-[7px] font-mono w-10 text-muted-foreground/60">
                                    Standard:
                                  </span>
                                  <div className="h-2 bg-border/30 rounded w-full overflow-hidden">
                                    <div className="h-full bg-border/60 w-5/6" />
                                  </div>
                                  <span className="text-[8px] font-mono text-muted-foreground/60">
                                    5
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[7px] font-mono w-10 text-coral font-semibold">
                                    Afero:
                                  </span>
                                  <div className="h-2 bg-coral/10 rounded w-full overflow-hidden">
                                    <div className="h-full bg-coral w-1/5 transition-all duration-700 group-hover:scale-x-110 origin-left" />
                                  </div>
                                  <span className="text-[8px] font-mono text-coral font-bold">
                                    1
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}

                          {idx === 3 && (
                            /* Better Communication - Sound/chat waves */
                            <div className="w-full max-w-[200px] h-[65px] flex items-center justify-center gap-1.5">
                              {[0.4, 0.7, 0.9, 0.5, 0.8, 0.6, 0.8, 0.9, 0.7, 0.4].map(
                                (height, barIdx) => (
                                  <span
                                    key={barIdx}
                                    className="w-1 bg-coral rounded-full transition-all duration-300"
                                    style={{
                                      height: `${height * 36}px`,
                                      opacity: 0.3 + height * 0.7,
                                      transform: `scaleY(${activeCollabIndex !== null ? 1.2 : 1})`,
                                      animation: `status-pulse ${1 + barIdx * 0.15}s ease-in-out infinite`,
                                    }}
                                  />
                                ),
                              )}
                            </div>
                          )}

                          {idx === 4 && (
                            /* Higher Quality Outcomes - QA Seal badge */
                            <div className="relative w-16 h-16 flex items-center justify-center">
                              {/* Glowing quality outer badge */}
                              <div className="absolute inset-0 bg-coral/5 border border-coral/20 rounded-full animate-radar-scan" />
                              <div className="absolute inset-1.5 border border-dashed border-coral/30 rounded-full" />
                              <div className="absolute inset-3.5 bg-background border border-border rounded-full shadow-sm flex items-center justify-center">
                                <Award className="h-5 w-5 text-coral transition-transform duration-500 group-hover:rotate-[360deg]" />
                              </div>
                              <span className="absolute bottom-[-10px] text-[7px] font-mono tracking-widest text-coral uppercase font-bold bg-background px-1.5 py-0.5 border border-coral/20 rounded font-sans">
                                QA PASSED
                              </span>
                            </div>
                          )}

                          {idx === 5 && (
                            /* Long-term Scalability - Line chart trending up */
                            <div className="relative w-full max-w-[190px] h-[70px] border border-border/30 bg-background/50 rounded-xl p-2.5 flex flex-col justify-between overflow-hidden shadow-inner font-sans">
                              <div className="flex justify-between items-center text-[7px] font-mono text-muted-foreground/60">
                                <span>SCALABILITY TRAJECTORY</span>
                                <span className="text-coral font-bold">OPTIMIZED</span>
                              </div>
                              <svg
                                className="w-full h-8 overflow-visible"
                                viewBox="0 0 100 30"
                                fill="none"
                              >
                                <path
                                  d="M0,28 Q20,28 35,22 T70,10 T100,2"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  className="text-coral"
                                />
                                <path
                                  d="M0,28 Q20,28 35,22 T70,10 T100,2 L100,30 L0,30 Z"
                                  fill="url(#benefits-grad)"
                                />
                                <defs>
                                  <linearGradient id="benefits-grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.12" />
                                    <stop offset="100%" stopColor="var(--coral)" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                                <circle cx="100" cy="2" r="2" className="fill-coral" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Tilt3D>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 md:py-32 border-b border-border/40">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-3">
              FAQ
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-4 text-sm md:text-base">
              Clear answers to help you understand what to expect.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="divide-y divide-border/20 rounded-2xl border border-border/40 bg-card/50 p-6 md:p-8 backdrop-blur-sm">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  index={idx}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaqIndex === idx}
                  onClick={() => toggleFaq(idx)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-ink text-[#FAF8F5]">
        {/* Glow styling */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,107,61,0.18),transparent_60%)] pointer-events-none" />

        <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium mb-6">
              <span className="h-px w-6 bg-coral" /> Start a conversation
            </div>

            <h2 className="font-serif text-5xl md:text-7xl leading-tight text-white">
              Ready to build <br /> something exceptional?
            </h2>

            <p className="mt-6 text-white/70 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
              Whether you're launching a new product, redesigning an existing experience, or growing
              your business online, we'd love to hear about your project.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 w-full sm:w-auto justify-center rounded-full bg-coral text-coral-foreground px-8 py-4 text-sm font-semibold hover:bg-white hover:text-ink transition-colors shadow-lg shadow-coral/10 cursor-pointer"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center gap-2 w-full sm:w-auto justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white hover:bg-white hover:text-ink transition-colors cursor-pointer"
              >
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Private local svg icon to avoid extra layout dependency issues
function SmartphoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </svg>
  );
}
