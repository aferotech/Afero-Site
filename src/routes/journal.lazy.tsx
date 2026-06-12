import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
// Nav imported globally in __root.tsx
import { Footer } from "@/components/site/Footer";
import { Tilt3D } from "@/components/ui/Tilt3D";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Compass,
  PenTool,
  Code2,
  Sparkles,
  Bot,
  Clock,
  Check,
  Mail,
  TrendingUp,
  Newspaper,
} from "lucide-react";

// Import unique WebP editorial assets for the 18 Journal articles
import strategyHeroImg from "@/assets/journal/strategy-hero.webp";
import devCssImg from "@/assets/journal/dev-css.webp";
import designNonprofitImg from "@/assets/journal/design-nonprofit.webp";
import studioPricingImg from "@/assets/journal/studio-pricing.webp";
import aiGenuiImg from "@/assets/journal/ai-genui.webp";
import brandingLuxuryImg from "@/assets/journal/branding-luxury.webp";
import devSsrImg from "@/assets/journal/dev-ssr.webp";
import strategyBoutiqueImg from "@/assets/journal/strategy-boutique.webp";
import strategyCopyImg from "@/assets/journal/strategy-copy.webp";
import devEdgeImg from "@/assets/journal/dev-edge.webp";
import designWebglImg from "@/assets/journal/design-webgl.webp";
import aiLlmImg from "@/assets/journal/ai-llm.webp";
import brandingTypoImg from "@/assets/journal/branding-typo.webp";
import studioTemplatesImg from "@/assets/journal/studio-templates.webp";
import caseQaImg from "@/assets/journal/case-qa.webp";
import designMinimalismImg from "@/assets/journal/design-minimalism.webp";
import devLcpImg from "@/assets/journal/dev-lcp.webp";
import brandingFintechImg from "@/assets/journal/branding-fintech.webp";

export const Route = createLazyFileRoute("/journal")({
  component: JournalPage,
});

// ─── 18 Realistic Agency Articles with Visual Assets ───────────────────────
const posts = [
  {
    id: "1",
    title: "The case against the homepage hero",
    excerpt:
      "Why standard hero headers are losing efficacy, and what comes next in modern brand strategy. We explore alternative layout patterns that engage users in the first critical three seconds.",
    date: "May 2026",
    read: "6 min",
    tag: "Strategy",
    author: "Paul Benjamin Felix",
    featured: true,
    pick: false,
    trending: true,
    image: strategyHeroImg,
  },
  {
    id: "2",
    title: "Why we still hand-write CSS in 2026",
    excerpt:
      "Why handcrafted styling remains the differentiator for premium brands. Tailoring transitions, micro-interactions, and visual layouts line by line provides an unmatched sense of luxury.",
    date: "May 2026",
    read: "8 min",
    tag: "Development",
    author: "Mohammad Azarudeen",
    featured: false,
    pick: true,
    trending: true,
    image: devCssImg,
  },
  {
    id: "3",
    title: "Designing for nonprofits without making it sad",
    excerpt:
      "NGOs deserve luxury-tier digital presence. Elevating interfaces into structured, action-oriented, and design-forward systems that inspire hope and prompt immediate support.",
    date: "Apr 2026",
    read: "5 min",
    tag: "Design",
    author: "Rohith Raj",
    featured: false,
    pick: true,
    trending: false,
    image: designNonprofitImg,
  },
  {
    id: "4",
    title: "A small studio's pricing model, in full",
    excerpt:
      "We share our exact pricing sheets, hourly scopes, and project sprint breakdowns. No secret rate cards, no corporate margins -just honest developer and designer values.",
    date: "Apr 2026",
    read: "9 min",
    tag: "Studio Notes",
    author: "Akash Vaishnudev",
    featured: false,
    pick: false,
    trending: true,
    image: studioPricingImg,
  },
  {
    id: "5",
    title: "Generative UI: The next design frontier",
    excerpt:
      "How dynamic AI-generated interfaces will reshape client layout expectations. We analyze frameworks that construct tailored UI blocks on the fly based on user intent.",
    date: "Mar 2026",
    read: "7 min",
    tag: "AI & Automation",
    author: "Paul Benjamin Felix",
    featured: false,
    pick: false,
    trending: false,
    image: aiGenuiImg,
  },
  {
    id: "6",
    title: "The visual language of luxury digital products",
    excerpt:
      "Defining high-end digital aesthetics through strict letterforms, white space, micro-animations, and warm oklch color tones. A checklist for luxury execution.",
    date: "Mar 2026",
    read: "6 min",
    tag: "Branding",
    author: "Rohith Raj",
    featured: false,
    pick: false,
    trending: false,
    image: brandingLuxuryImg,
  },
  {
    id: "7",
    title: "Next.js 16: An honest engineering audit",
    excerpt:
      "A deep dive into the performance impact of server actions and streaming server side components on custom boutique codebases. Lessons from high-traffic launches.",
    date: "Feb 2026",
    read: "10 min",
    tag: "Development",
    author: "Mohammad Azarudeen",
    featured: false,
    pick: false,
    trending: false,
    image: devSsrImg,
  },
  {
    id: "8",
    title: "Brand positioning for boutique studios",
    excerpt:
      "Why specialization beats generalist services every single time. How we aligned our engineering focus to capture luxury-tier digital projects globally.",
    date: "Feb 2026",
    read: "5 min",
    tag: "Strategy",
    author: "Akash Vaishnudev",
    featured: false,
    pick: false,
    trending: false,
    image: strategyBoutiqueImg,
  },
  {
    id: "9",
    title: "The power of micro-copy on conversion",
    excerpt:
      "How minor changes to contact form labels and button actions increase conversions by 40%. A masterclass in high-intent copy structure.",
    date: "Jan 2026",
    read: "4 min",
    tag: "Strategy",
    author: "Rohith Raj",
    featured: false,
    pick: false,
    trending: false,
    image: strategyCopyImg,
  },
  {
    id: "10",
    title: "Cloudflare Pages vs. Vercel at the Edge",
    excerpt:
      "Benchmarking cold starts, asset delivery, and static compilation times across leading serverless platforms. Our developer telemetry results.",
    date: "Jan 2026",
    read: "8 min",
    tag: "Development",
    author: "Mohammad Azarudeen",
    featured: false,
    pick: false,
    trending: false,
    image: devEdgeImg,
  },
  {
    id: "11",
    title: "WebGL and Spline without page lag",
    excerpt:
      "Best practices for embedding interactive 3D assets on mobile devices without dropping below 60fps. Optimization pipelines for modern browsers.",
    date: "Dec 2025",
    read: "7 min",
    tag: "Design",
    author: "Paul Benjamin Felix",
    featured: false,
    pick: false,
    trending: false,
    image: designWebglImg,
  },
  {
    id: "12",
    title: "Integrating custom LLMs in enterprise tools",
    excerpt:
      "Lessons from building secure, retrieval-augmented generation tools for corporate management suites. Minimizing latency and aligning brand context.",
    date: "Dec 2025",
    read: "11 min",
    tag: "AI & Automation",
    author: "Akash Vaishnudev",
    featured: false,
    pick: false,
    trending: false,
    image: aiLlmImg,
  },
  {
    id: "13",
    title: "Custom typography as brand equity",
    excerpt:
      "Why commissioned typography is the single best asset investment a brand can make. Analyzing typography alignment and licensing scopes.",
    date: "Nov 2025",
    read: "6 min",
    tag: "Branding",
    author: "Rohith Raj",
    featured: false,
    pick: false,
    trending: false,
    image: brandingTypoImg,
  },
  {
    id: "14",
    title: "Why templates cost more in the long run",
    excerpt:
      "The hidden developer debt of off-the-shelf templates, theme builders, and custom integrations. Why custom-coded builds retain value.",
    date: "Nov 2025",
    read: "5 min",
    tag: "Studio Notes",
    author: "Paul Benjamin Felix",
    featured: false,
    pick: false,
    trending: false,
    image: studioTemplatesImg,
  },
  {
    id: "15",
    title: "Visual QA checklists for agency launches",
    excerpt:
      "Our internal, pixel-level checklist for responsive validation, asset optimization, and accessibility testing before handing over client sites.",
    date: "Oct 2025",
    read: "9 min",
    tag: "Case Studies",
    author: "Akash Vaishnudev",
    featured: false,
    pick: false,
    trending: false,
    image: caseQaImg,
  },
  {
    id: "16",
    title: "The philosophy of functional minimalism",
    excerpt:
      "Reclaiming the essence of minimalism from empty trendiness. How layout alignment, typography, and contrast shape intent.",
    date: "Oct 2025",
    read: "5 min",
    tag: "Design",
    author: "Paul Benjamin Felix",
    featured: false,
    pick: false,
    trending: false,
    image: designMinimalismImg,
  },
  {
    id: "17",
    title: "Optimizing LCP to under 1.0 seconds",
    excerpt:
      "Practical engineering tips for optimizing large image loads, preloading critical resources, and structuring CSS layout delivery.",
    date: "Sep 2025",
    read: "7 min",
    tag: "Development",
    author: "Mohammad Azarudeen",
    featured: false,
    pick: false,
    trending: false,
    image: devLcpImg,
  },
  {
    id: "18",
    title: "The psychology of Fintech color palettes",
    excerpt:
      "Moving beyond traditional finance blue to design warm, trustworthy, and high-impact fintech spaces that drive user action.",
    date: "Sep 2025",
    read: "6 min",
    tag: "Branding",
    author: "Rohith Raj",
    featured: false,
    pick: false,
    trending: false,
    image: brandingFintechImg,
  },
];

// ─── Premium Muted Background Colors for Hierarchy ─────────────────────────
const colors = [
  "bg-[#F7EFE9]", // Dusty Peach
  "bg-[#F5F2EB]", // Sand/Beige
  "bg-[#F0EEF4]", // Soft Lavender
  "bg-[#EEF2EC]", // Muted Sage
  "bg-[#EAEAE6]", // Warm Gray
  "bg-[#FAF8F5]", // Cream
];

// ─── Categories & Topics Config ──────────────────────────────────────────────
const topics = [
  {
    name: "Strategy",
    count: 4,
    desc: "Business scaling, value positioning, and roadmaps.",
    icon: Compass,
  },
  {
    name: "Design",
    count: 4,
    desc: "Luxury user interfaces, functional minimalism, and micro-copy.",
    icon: PenTool,
  },
  {
    name: "Development",
    count: 4,
    desc: "Custom-coded CSS, next-gen SSR audits, and performance tuning.",
    icon: Code2,
  },
  {
    name: "Branding",
    count: 3,
    desc: "Typography alignments, fintech psychology, and digital presence.",
    icon: Sparkles,
  },
  {
    name: "AI & Automation",
    count: 2,
    desc: "Generative UI blocks and secure LLM enterprise widgets.",
    icon: Bot,
  },
  {
    name: "Studio Notes",
    count: 2,
    desc: "Transparent pricing models and developer workflows.",
    icon: BookOpen,
  },
];

const studioBriefs = [
  { title: "Vite 7 Testing", desc: "Currently testing Vite 7 release candidate on edge builds." },
  { title: "Staff Expansion", desc: "Akash Vaishnudev steps into Tech Lead position." },
  { title: "Afero Journal Issue VI", desc: "Issue VI print release is set for launch next month." },
  {
    title: "Cloudflare Deployments",
    desc: "Successfully migrated 10+ staging projects to workers.",
  },
];

function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const articleFeedRef = useRef<HTMLDivElement>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Smooth scroll to feed or top of page if clearing filter
    if (category === "All") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (articleFeedRef.current) {
      articleFeedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "All" ? posts : posts.filter((p) => p.tag === selectedCategory);

  // Extract featured, editors picks and trending
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const editorsPicks = posts.filter((p) => p.pick);
  const trendingPosts = posts.filter((p) => p.trending);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip selection:bg-coral selection:text-coral-foreground">
      <main className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32">
        {/* ── NEWSPAPER NAMEPLATE HEADER ────────────────────────────────────── */}
        <header className="border-t-2 border-b-2 border-foreground py-6 my-10 text-center">
          <div className="flex justify-between items-center text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
            <span>Edition: Vol. IV / Issue VI</span>
            <span className="hidden sm:inline">Price: Bespoke Code</span>
            <span>Published in Tamilnadu, IN</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-[5.5rem] tracking-[0.05em] uppercase leading-[0.95] text-foreground select-none font-normal">
            The Afero Journal
          </h1>

          <div className="border-t border-border mt-6 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
            <span className="font-serif italic font-normal">
              "Websites and brands that move businesses forward."
            </span>
            <span className="uppercase tracking-[0.15em] font-semibold">
              Latest Release:{" "}
              {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
          </div>
        </header>

        {/* ── EDITORIAL GRID LAYOUT ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* LEFT AREA: MAIN CONTENT (8 Columns) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Mobile Sticky Category Navigation */}
            <div className="lg:hidden sticky top-[57px] z-30 bg-background/95 backdrop-blur-md py-3 -mx-6 px-6 border-b border-border/20 overflow-x-auto scrollbar-none flex gap-2 mb-6">
              {["All", ...topics.map((t) => t.name)].map((cat) => {
                const count =
                  cat === "All" ? posts.length : posts.filter((p) => p.tag === cat).length;
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold border transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? "bg-coral text-coral-foreground border-coral"
                        : "bg-secondary/40 text-muted-foreground border-border/40 hover:text-foreground hover:border-border"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-[10px] opacity-60 font-mono">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Category Filter Banner */}
            {selectedCategory !== "All" && (
              <div className="flex items-center justify-between bg-coral/5 border border-coral/20 rounded-xl px-5 py-3 mb-6">
                <span className="text-sm font-semibold tracking-wide">
                  Showing topic:{" "}
                  <span className="text-coral uppercase font-bold">{selectedCategory}</span>
                </span>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="text-xs uppercase tracking-wider text-coral hover:underline font-bold cursor-pointer"
                >
                  Clear Filter [x]
                </button>
              </div>
            )}

            {selectedCategory === "All" && (
              <>
                {/* FEATURED STORY */}
                <section className="border-b border-border/60 pb-12">
                  <div className="text-xs uppercase tracking-[0.2em] text-coral font-bold mb-4">
                    Featured Dispatch
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
                    <div className="md:col-span-7">
                      {/* Premium Featured Image */}
                      <div className="overflow-hidden rounded-2xl border border-border/30 relative aspect-[16/10] shadow-sm bg-secondary">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-coral/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    </div>

                    <div className="md:col-span-5 flex flex-col justify-between h-full min-h-[220px] md:min-h-[280px]">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                          {featuredPost.tag}
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl mt-3 mb-4 text-foreground group-hover:text-coral transition-colors duration-300 font-normal leading-tight">
                          <Link to="/journal">{featuredPost.title}</Link>
                        </h2>

                        {/* Newspaper Drop-cap Excerpt */}
                        <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-coral first-letter:float-left first-letter:mr-2 first-letter:font-normal text-sm md:text-base text-muted-foreground leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 border-t border-border/40 pt-4 mt-6 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{featuredPost.author}</span>
                        <span>·</span>
                        <span>{featuredPost.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {featuredPost.read} read
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* EDITOR'S PICKS */}
                <section className="border-b border-border/60 pb-12">
                  <div className="flex items-center gap-3 border-b border-foreground pb-2 mb-8">
                    <h2 className="font-serif text-2xl font-normal text-foreground uppercase tracking-wider">
                      Editor's Picks
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {editorsPicks.map((pick, idx) => {
                      // Apply alternating light muted backgrounds
                      const cardBg = colors[(idx + 1) % colors.length];
                      return (
                        <article
                          key={pick.id}
                          className={`group flex flex-col justify-between border border-border/45 hover:border-coral/20 rounded-2xl p-6 transition-all duration-300 ${cardBg}`}
                        >
                          <div>
                            {/* Editor's pick Image thumbnail */}
                            <div className="overflow-hidden rounded-xl border border-border/30 mb-5 relative aspect-[16/9] bg-secondary">
                              <img
                                src={pick.image}
                                alt={pick.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>

                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                              <span className="text-coral font-bold uppercase tracking-wider">
                                {pick.tag}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {pick.read} read
                              </span>
                            </div>

                            <h3 className="font-serif text-2xl text-foreground group-hover:text-coral transition-colors duration-300 font-normal mb-3">
                              <Link to="/journal">{pick.title}</Link>
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                              {pick.excerpt}
                            </p>
                          </div>

                          <div className="flex items-center justify-between border-t border-border/20 pt-4 text-xs text-muted-foreground">
                            <span className="font-medium text-foreground">{pick.author}</span>
                            <span>{pick.date}</span>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              </>
            )}

            {/* MAIN ARTICLE FEED */}
            <section ref={articleFeedRef} className="scroll-mt-32 lg:scroll-mt-24">
              <div className="flex items-center gap-3 border-b border-foreground pb-2 mb-8">
                <h2 className="font-serif text-2xl font-normal text-foreground uppercase tracking-wider">
                  {selectedCategory === "All" ? "Dispatches" : `${selectedCategory} Articles`}
                </h2>
                <span className="text-xs text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded border border-border/40 font-medium">
                  {filteredPosts.length} posts
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts
                  .filter((p) => selectedCategory !== "All" || (!p.featured && !p.pick))
                  .map((p, idx) => {
                    // Apply subtle background colors dynamically to create a magazine patchwork grid
                    const cardBg = colors[idx % colors.length];
                    return (
                      <article
                        key={p.id}
                        className={`group flex flex-col justify-between border border-border/40 hover:border-coral/20 rounded-2xl p-6 transition-all duration-300 ${cardBg}`}
                      >
                        <div>
                          {/* Image thumbnail */}
                          <div className="overflow-hidden rounded-xl border border-border/30 mb-5 relative aspect-[16/9] bg-secondary">
                            <img
                              src={p.image}
                              alt={p.title}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-coral/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            <button
                              onClick={() => handleCategorySelect(p.tag)}
                              className="text-xs uppercase tracking-widest text-coral font-bold hover:underline cursor-pointer"
                            >
                              {p.tag}
                            </button>
                            <span className="text-muted-foreground/45 text-[10px]">·</span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {p.read} read
                            </span>
                          </div>

                          <h3 className="font-serif text-2xl text-foreground group-hover:text-coral transition-colors duration-300 font-normal mb-3 leading-tight">
                            <Link to="/journal">{p.title}</Link>
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6">
                            {p.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto border-t border-border/20 pt-4">
                          <span className="font-medium text-foreground">{p.author}</span>
                          <span>{p.date}</span>
                        </div>
                      </article>
                    );
                  })}
              </div>
            </section>
          </div>

          {/* RIGHT AREA: EDITORIAL SIDEBAR (4 Columns, Sticky on scroll) */}
          <aside className="lg:col-span-4 lg:border-l lg:border-border/60 lg:pl-8 space-y-12 sticky top-28 self-start">
            {/* EDITORIAL DESKS */}
            <section className="hidden md:block">
              <h2 className="font-serif text-lg font-normal uppercase tracking-wider text-foreground border-b border-foreground pb-2 mb-6">
                Editorial Desks
              </h2>
              <ul className="space-y-3">
                {["All", ...topics.map((t) => t.name)].map((cat) => {
                  const count =
                    cat === "All" ? posts.length : posts.filter((p) => p.tag === cat).length;
                  const isSelected = selectedCategory === cat;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategorySelect(cat)}
                        className={`w-full flex items-center justify-between text-left py-3 md:py-1.5 border-b border-border/10 text-sm hover:text-coral transition-colors duration-200 cursor-pointer ${
                          isSelected ? "text-coral font-bold" : "text-muted-foreground"
                        }`}
                      >
                        <span className="uppercase tracking-wider text-xs">{cat}</span>
                        <span className="text-[10px] font-mono opacity-60">({count})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* TRENDING ARTICLES */}
            <section>
              <div className="flex items-center gap-2 border-b border-foreground pb-2 mb-6">
                <TrendingUp className="h-4 w-4 text-coral" />
                <h2 className="font-serif text-lg font-normal uppercase tracking-wider text-foreground">
                  Trending
                </h2>
              </div>

              <div className="space-y-6">
                {trendingPosts.map((trend, idx) => (
                  <div key={trend.id} className="group flex gap-4 items-start select-none">
                    <span className="font-serif text-4xl text-coral/25 group-hover:text-coral transition-colors font-normal leading-none shrink-0 w-8">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-muted-foreground/60 font-semibold">
                        {trend.tag}
                      </span>
                      <h3 className="font-serif text-base text-foreground group-hover:text-coral transition-colors duration-300 font-normal leading-tight mt-1">
                        <Link to="/journal">{trend.title}</Link>
                      </h3>
                      <span className="text-[10px] text-muted-foreground block mt-1">
                        {trend.read} read
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* STUDIO BRIEFS (Print-Style Column) */}
            <section className="bg-secondary/20 border border-border/40 rounded-2xl p-6">
              <h2 className="font-serif text-lg font-normal uppercase tracking-wider text-foreground border-b border-foreground pb-2 mb-4">
                Studio Briefs
              </h2>

              <div className="divide-y divide-border/30">
                {studioBriefs.map((brief, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-coral mb-1">
                      {brief.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{brief.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

        {/* ── VINTAGE NEWSLETTER SUBSCRIPTION SLIP ──────────────────────────── */}
        <section className="max-w-4xl mx-auto my-24 border border-dashed border-foreground/45 bg-card/45 p-8 md:p-12 rounded-3xl relative overflow-hidden backdrop-blur-sm">
          {/* Luminous accent lights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-coral/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto text-center">
            <Mail className="h-12 w-12 text-coral mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-foreground font-normal">
              Subscribe to the Journal
            </h2>
            <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Get print-style dispatches, design breakdowns, and technical telemetry summaries
              delivered to your inbox monthly.
            </p>

            {subscribed ? (
              <div className="mt-8 p-4 rounded-xl border border-coral/20 bg-coral/[0.02] flex items-center justify-center gap-2 text-sm text-foreground animate-fadeIn font-semibold">
                <Check className="h-4 w-4 text-coral shrink-0" />
                <span>Subscription recorded. Thank you.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-8 flex flex-col sm:flex-row gap-4 items-end sm:items-center"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-foreground/80 bg-transparent text-foreground placeholder:text-muted-foreground/45 py-3 text-sm focus:outline-none focus:border-coral transition-colors flex-1"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-coral hover:bg-foreground hover:text-background text-coral-foreground px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-colors shrink-0 cursor-pointer shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="mt-6 text-[10px] text-muted-foreground uppercase tracking-widest">
              Zero spam · Opt out anytime
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
