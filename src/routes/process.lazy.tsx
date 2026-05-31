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
  Code
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
    },
    {
      num: "02",
      title: "Strategy",
      subtitle: "The Foundation",
      desc: "Research and planning create a clear direction.",
      icon: Target,
    },
    {
      num: "03",
      title: "Design",
      subtitle: "The Experience",
      desc: "Crafting intuitive interfaces that users enjoy.",
      icon: PenTool,
    },
    {
      num: "04",
      title: "Development",
      subtitle: "The Engineering",
      desc: "Building scalable, high-performing digital products.",
      icon: Code,
      highlight: true,
    },
    {
      num: "05",
      title: "Launch",
      subtitle: "The Release",
      desc: "Testing, refining, and delivering with confidence.",
      icon: Rocket,
    },
    {
      num: "06",
      title: "Growth",
      subtitle: "The Evolution",
      desc: "Continuous optimization and measurable improvement.",
      icon: TrendingUp,
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

            <p className="mt-8 max-w-2xl mx-auto text-base md:text-xl text-foreground font-medium leading-relaxed">
              Every project follows a structured system designed to eliminate uncertainty, reduce delays, and deliver measurable business outcomes.
            </p>

            <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
              From strategy to launch, every phase has a clear purpose, defined deliverables, and transparent communication.
            </p>

            {/* Trust Statement */}
            <div className="mt-12 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center py-4 px-6 md:px-8 rounded-full border border-border/60 bg-card/65 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-coral shrink-0" />
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-foreground">No hidden costs</span>
              </div>
              <span className="hidden sm:inline h-1.5 w-1.5 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-coral shrink-0" />
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-foreground">No outsourcing</span>
              </div>
              <span className="hidden sm:inline h-1.5 w-1.5 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-coral shrink-0" />
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-foreground">No unnecessary complexity</span>
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
              From Idea to <span className="text-coral">Impact</span>. <br className="hidden sm:block" />
              A Journey with Purpose.
            </h2>
            <p className="text-muted-foreground mt-6 text-sm md:text-base leading-relaxed">
              A clear process helps us move faster, communicate better, and deliver work that creates real business value.
            </p>
          </FadeIn>

          {/* Premium Horizontal Journey timeline */}
          <FadeIn delay={100}>
            <div className="relative max-w-6xl mx-auto py-8">
              {/* Elegant Connector line for desktop */}
              <div className="absolute top-[40px] left-[8%] right-[8%] h-[1px] bg-border/50 hidden md:block z-0" />

              {/* Flex row scrollable on mobile, structured grid on desktop */}
              <div className="flex md:grid md:grid-cols-6 gap-6 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 scrollbar-none snap-x snap-mandatory px-4 md:px-0">
                {journeyStages.map((stage) => {
                  const Icon = stage.icon;
                  const isHighlighted = stage.highlight;
                  return (
                    <div
                      key={stage.num}
                      className="flex-shrink-0 w-[270px] md:w-auto snap-center flex flex-col items-center group relative z-10"
                    >
                      {/* Circular Icon Container */}
                      <div
                        className={`h-[50px] w-[50px] md:h-16 md:w-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border ${
                          isHighlighted
                            ? "bg-coral text-coral-foreground border-coral scale-110 shadow-[0_0_20px_rgba(224,90,54,0.25)]"
                            : "bg-card text-foreground border-border/80 group-hover:border-coral/60 group-hover:shadow-[0_0_12px_rgba(224,90,54,0.08)] group-hover:-translate-y-1"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 md:h-6 md:w-6 ${
                            isHighlighted ? "text-coral-foreground" : "text-foreground group-hover:text-coral transition-colors"
                          }`}
                        />
                      </div>

                      {/* Card Box (clean solid background, avoiding glassmorphism blur cards as per guidelines) */}
                      <div
                        className={`mt-6 w-full text-center p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col justify-between ${
                          isHighlighted
                            ? "bg-[#FAF7F2] border-coral/40 shadow-[0_10px_30px_-15px_rgba(224,90,54,0.18)]"
                            : "bg-card border-border/40 hover:border-border/80 shadow-[0_4px_15px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_-12px_rgba(0,0,0,0.06)] group-hover:-translate-y-0.5"
                        }`}
                      >
                        <div>
                          <span
                            className={`font-serif text-sm block mb-1 font-semibold tracking-wider ${
                              isHighlighted ? "text-coral" : "text-muted-foreground/50"
                            }`}
                          >
                            {stage.num}
                          </span>
                          <h3 className="font-serif text-lg font-bold text-foreground">
                            {stage.title}
                          </h3>
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 block mt-0.5 mb-2 font-medium">
                            {stage.subtitle}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed min-h-[32px] flex items-center justify-center">
                          {stage.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
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
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-coral transition-colors">
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
              We design workflows around transparency, accountability, and high-performance outcomes. Here is our promise to you.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((promise, idx) => {
              const Icon = promise.icon;
              return (
                <FadeIn key={idx} delay={idx * 100}>
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
                          className="font-serif text-2xl mb-3 transform translate-z-10"
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
                Every phase has a clear purpose, defined deliverables, and measurable outcomes. We follow a proven system designed to reduce uncertainty and create better results.
              </p>
              
              {/* Process Navigation (desktop only) */}
              <nav className="mt-12 hidden lg:flex flex-col gap-6 max-w-xs" aria-label="Process navigation">
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
                            isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 group-hover:scale-y-50 group-hover:opacity-30"
                          }`}
                        />
                        <div className="absolute inset-y-0 left-0 w-[1px] bg-border/40" />
                      </div>
                      
                      <div className="py-1">
                        <span
                          className={`font-serif text-lg block transition-all duration-300 font-semibold ${
                            isActive ? "text-coral" : "text-muted-foreground/60 group-hover:text-muted-foreground"
                          }`}
                        >
                          {step.num} {step.name}
                        </span>
                        <span
                          className={`text-xs block mt-1 transition-all duration-300 ${
                            isActive ? "text-foreground font-medium" : "text-muted-foreground/45 group-hover:text-muted-foreground/65"
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
                            <span className="font-serif text-sm font-semibold tracking-[0.2em] text-coral uppercase block mb-1">
                              Phase {step.num}
                            </span>
                            <h3 className="font-serif text-3xl md:text-5xl text-foreground">
                              {step.name}
                            </h3>
                            <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground block mt-1">
                              {step.subtitle}
                            </span>
                          </div>
                          
                          <span className="font-serif text-5xl md:text-7xl font-light text-border/40 select-none pointer-events-none">
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
                              <li key={dIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-normal">
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
              Regardless of the project size, we hold ourselves to rigorous standards. These are the built-in essentials.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {baselineFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={idx} delay={idx * 50}>
                  <Tilt3D maxTilt={8} scale={1.03} className="h-full">
                    <div className="group rounded-2xl glass-card-3d p-6 flex flex-col justify-between h-full preserve-3d">
                      <div
                        className="h-9 w-9 rounded-lg bg-coral/10 text-coral flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-coral group-hover:text-coral-foreground shadow-sm"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3
                        className="font-serif text-lg font-semibold text-foreground transform translate-z-10"
                        style={{ transform: "translateZ(10px)" }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </Tilt3D>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* COLLABORATION SECTION */}
      <section className="py-24 md:py-32 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-3">
              Client Alignment
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">How We Work Together</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              A smooth process requires active integration and transparent routines.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {collabCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <FadeIn key={idx} delay={idx * 100}>
                  <Tilt3D maxTilt={4} scale={1.01} className="h-full">
                    <div className="group flex items-start gap-6 rounded-2xl glass-card-3d p-8 preserve-3d h-full">
                      <div
                        className="h-12 w-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:bg-coral group-hover:text-coral-foreground"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3
                          className="font-serif text-xl font-semibold text-foreground transform translate-z-10"
                          style={{ transform: "translateZ(12px)" }}
                        >
                          {card.title}
                        </h3>
                        <p
                          className="text-sm text-muted-foreground leading-relaxed mt-2 transform translate-z-2"
                          style={{ transform: "translateZ(6px)" }}
                        >
                          {card.description}
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

      {/* WHY THIS PROCESS WORKS SECTION */}
      <section className="py-24 md:py-32 bg-secondary/10 border-b border-border/40 relative">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-3">
              Measurable Success
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">Why Clients Appreciate This Approach</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              A structured roadmap creates structural benefits for speed, quality, and future growth.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={idx} delay={idx * 50}>
                  <Tilt3D maxTilt={6} scale={1.02} className="h-full">
                    <div className="rounded-2xl glass-card-3d p-8 h-full preserve-3d">
                      <div
                        className="h-10 w-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center mb-6 shadow-sm"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3
                        className="font-serif text-xl mb-2 transform translate-z-10 text-foreground"
                        style={{ transform: "translateZ(15px)" }}
                      >
                        {benefit.title}
                      </h3>
                      <p
                        className="text-xs text-muted-foreground leading-relaxed transform translate-z-2"
                        style={{ transform: "translateZ(8px)" }}
                      >
                        Our rigorous methodology prevents layout regressions, streamlines development timelines, and ensures zero resource waste.
                      </p>
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
              Whether you're launching a new product, redesigning an existing experience, or growing your business online, we'd love to hear about your project.
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
