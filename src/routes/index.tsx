import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  MessageSquare,
  Sparkles,
  Cpu,
  Workflow,
  Terminal,
  Database,
  Zap,
  Gauge,
  Globe,
  Smartphone,
  TrendingUp,
  LineChart,
  Rocket,
  Store,
  Heart,
  ShoppingCart,
  UserCheck,
  Briefcase,
  GraduationCap,
  Activity,
  ChevronDown,
  Mail,
  MessageCircle,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { ParallaxText } from "@/components/ui/ParallaxText";
import ad from "@/assets/ad.webp";
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
      { property: "og:title", content: "Afero -Websites that actually work" },
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
      "AI-Powered Website Experiences",
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

// ─── Inline SVG Brand Logo Renderers ─────────────────────────────────────────
function ReactLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="-11.5 -10.23174 23 20.46348"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="0.8" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function TsLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="12" fill="#3178C6" />
      <text
        x="50"
        y="68"
        fill="white"
        fontSize="42"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        TS
      </text>
    </svg>
  );
}

function TailwindLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 30C58.3 16.6 73.3 10 95 10C95 31.6 88.3 46.6 75 55C66.6 68.3 51.6 75 30 75C30 53.3 36.6 38.3 50 30Z"
        fill="#38BDF8"
        opacity="0.8"
      />
      <path
        d="M30 50C38.3 36.6 53.3 30 75 30C75 51.6 68.3 66.6 55 75C46.6 88.3 31.6 95 10 95C10 73.3 16.6 58.3 30 50Z"
        fill="#38BDF8"
      />
    </svg>
  );
}

function NodeLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 10L85 30V70L50 90L15 70V30L50 10Z"
        stroke="#5FA04E"
        strokeWidth="6"
        fill="none"
      />
      <path d="M50 25L72 38V63L50 75L28 63V38L50 25Z" fill="#5FA04E" opacity="0.6" />
      <path d="M50 40L60 46V56L50 62L40 56V46L50 40Z" fill="#5FA04E" />
    </svg>
  );
}

function ViteLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 15L50 85L85 15H15Z" fill="url(#vite-grad)" />
      <path d="M45 10L25 55H50L45 90L75 40H50L45 10Z" fill="#FFD600" />
      <defs>
        <linearGradient id="vite-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BD34FE" />
          <stop offset="100%" stopColor="#477FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function OpenaiLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="var(--coral)"
        strokeWidth="3"
        strokeDasharray="6 4"
        fill="none"
      />
      <path
        d="M50 30C40 30 35 38 35 45C35 55 50 70 50 70C50 70 65 55 65 45C65 38 60 30 50 30Z"
        fill="var(--coral)"
        opacity="0.8"
      />
      <circle cx="50" cy="45" r="5" fill="var(--background)" />
    </svg>
  );
}

function VercelLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 15L90 85H10L50 15Z" />
    </svg>
  );
}

// ─── AI Solutions Grid Simulations ─────────────────────────────────────────
function ChatBotSimulation() {
  const [messages, setMessages] = useState<Array<{ sender: "user" | "bot"; text: string }>>([
    { sender: "user", text: "Hey! What is your pricing?" },
  ]);

  const isReset = messages.length === 1;

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Our custom websites start at ₹15,000." },
      ]);
    }, 1500);

    const timer2 = setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "user", text: "Can you build AI chatbots too?" }]);
    }, 4500);

    const timer3 = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Yes! We build automated qualification assistants." },
      ]);
    }, 6000);

    const resetTimer = setTimeout(() => {
      setMessages([{ sender: "user", text: "Hey! What is your pricing?" }]);
    }, 12000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(resetTimer);
    };
  }, [isReset]);

  return (
    <div className="w-full bg-gradient-to-br from-[#14100e] to-[#0a0807] rounded-xl p-4 border border-border/25 font-mono text-[9px] text-left space-y-2 h-[120px] overflow-y-auto scrollbar-none flex flex-col justify-end select-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_24px_rgba(0,0,0,0.5)]">
      {messages.map((m, idx) => (
        <div
          key={idx}
          className={`flex flex-col max-w-[80%] rounded-lg p-2 transition-all duration-300 ${
            m.sender === "user"
              ? "bg-[#221c19] text-[#fbfaf8] self-end border border-border/30"
              : "bg-coral/10 text-coral self-start border border-coral/30 shadow-[0_0_12px_rgba(224,90,54,0.04)]"
          }`}
        >
          <span className="font-bold uppercase text-[7px] text-muted-foreground/60 mb-0.5">
            {m.sender === "user" ? "Client" : "Afero AI"}
          </span>
          <span className="leading-tight">{m.text}</span>
        </div>
      ))}
    </div>
  );
}

function SupportAutomationSimulation() {
  const [tickets, setTickets] = useState([
    { id: "TK-402", desc: "API sync error", status: "Active", time: "2m ago" },
    { id: "TK-401", desc: "Stripe hook fix", status: "Resolved", time: "15m ago" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickets((prev) =>
        prev.map((t) =>
          t.id === "TK-402" ? { ...t, status: t.status === "Active" ? "Resolved" : "Active" } : t,
        ),
      );
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-[#14100e] to-[#0a0807] rounded-xl p-3 border border-border/25 font-mono text-[9px] text-left space-y-2 h-[120px] select-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_24px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between text-muted-foreground/60 font-bold border-b border-border/15 pb-1 mb-1 font-mono text-[7px] tracking-wider">
        <span>TICKET LOG</span>
        <span>STATUS</span>
      </div>
      {tickets.map((t) => (
        <div
          key={t.id}
          className="flex justify-between items-center py-1 border-b border-border/5 last:border-0"
        >
          <div className="flex flex-col">
            <span className="font-semibold text-[#FAF7F2]">{t.id}</span>
            <span className="text-[7.5px] text-muted-foreground/80">{t.desc}</span>
          </div>
          <span
            className={`px-2 py-0.5 rounded-[4px] text-[7.5px] border font-bold transition-all duration-500 tracking-wider ${
              t.status === "Resolved"
                ? "bg-green-500/10 text-green-400 border-green-500/30 shadow-[0_0_10px_rgba(74,222,128,0.05)]"
                : "bg-coral/10 text-coral border-coral/30 shadow-[0_0_10px_rgba(224,90,54,0.05)] animate-pulse"
            }`}
          >
            {t.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function LeadQualificationSimulation() {
  const [score, setScore] = useState(65);
  useEffect(() => {
    const timer = setInterval(() => {
      setScore((prev) => (prev >= 98 ? 65 : prev + 11));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-[#14100e] to-[#0a0807] rounded-xl p-3 border border-border/25 font-mono text-[9px] text-left space-y-2.5 h-[120px] select-none flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_24px_rgba(0,0,0,0.5)]">
      <div>
        <div className="flex justify-between items-center mb-1 border-b border-border/15 pb-1">
          <span className="text-[8px] font-bold text-[#f5f0eb] tracking-wider">CRM STREAM</span>
          <span className="text-[7px] text-coral border border-coral/30 px-1.5 py-0.5 rounded-full font-bold bg-coral/5 animate-pulse">
            LIVE INDEX
          </span>
        </div>
        <div className="space-y-1 text-muted-foreground text-[8px] mt-1.5">
          <div>
            NAME: <span className="text-[#FAF7F2] font-semibold">Sarah Connor</span>
          </div>
          <div>
            TARGET: <span className="text-[#FAF7F2] font-semibold">Cyberdyne Inc.</span>
          </div>
          <div>
            BUDGET: <span className="text-coral font-bold">₹50,000+</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center text-[7.5px] mb-1">
          <span className="text-muted-foreground/80">INTENT MATCH SCORE</span>
          <span
            className={`font-bold transition-all duration-300 ${score >= 90 ? "text-green-400 text-[10px]" : "text-coral"}`}
          >
            {score}%
          </span>
        </div>
        <div className="w-full bg-[#1c1815] h-1.5 rounded-full overflow-hidden border border-border/10">
          <div
            className="bg-gradient-to-r from-coral/60 to-coral h-full transition-all duration-300 shadow-[0_0_8px_rgba(224,90,54,0.3)]"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    </div>
  );
}

const knowledgeQueries = [
  { q: "Read PDF config...", res: "Parsed successfully. Found 12 API endpoints." },
  { q: "Vector index query...", res: "Retrieved 3 matching vector segments." },
  { q: "Synthesis response...", res: "Drafted pricing schema with 98% accuracy." },
];

function KnowledgeSimulation() {
  const [queryIndex, setQueryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueryIndex((prev) => (prev + 1) % knowledgeQueries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-[#14100e] to-[#0a0807] rounded-xl p-3 border border-border/25 font-mono text-[8px] text-left space-y-2 h-[120px] select-none flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_24px_rgba(0,0,0,0.5)]">
      <div className="text-[7px] text-muted-foreground/60 font-bold border-b border-border/15 pb-1 flex justify-between tracking-wider">
        <span>SEMANTIC ASSISTANT</span>
        <span className="text-green-400 font-bold">READY</span>
      </div>
      <div className="space-y-1.5 font-mono">
        <div className="text-coral flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-coral animate-ping" />
          <span className="font-semibold text-coral">&gt; {knowledgeQueries[queryIndex].q}</span>
        </div>
        <div className="text-[#e1d8cf] pl-2 border-l border-coral/25 ml-1 leading-relaxed">
          {knowledgeQueries[queryIndex].res}
        </div>
      </div>
      <div className="flex gap-1 border-t border-border/5 pt-1.5">
        <span className="h-1 w-3 bg-coral/40 rounded-full" />
        <span className="h-1 w-2 bg-coral/20 rounded-full" />
        <span className="h-1 w-1 bg-coral/10 rounded-full" />
      </div>
    </div>
  );
}

function WorkflowSimulation() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: "User Form Submit" },
    { label: "Structured JSON" },
    { label: "LLM Qualification" },
    { label: "Slack / CRM Alert" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#14100e] to-[#0a0807] rounded-xl p-3 border border-border/25 font-mono text-[8px] text-left space-y-1.5 h-[120px] select-none flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_24px_rgba(0,0,0,0.5)]">
      <div className="text-[7px] text-muted-foreground/60 font-bold border-b border-border/15 pb-1 tracking-wider">
        AUTOMATED PIPELINE
      </div>
      <div className="space-y-1.5 flex-1 pt-1.5">
        {steps.map((s, idx) => (
          <div key={idx} className="flex items-center gap-2.5">
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                idx === activeStep
                  ? "bg-coral scale-125 shadow-[0_0_10px_rgba(224,90,54,0.75)] border border-coral/30"
                  : "bg-border/20"
              }`}
            />
            <span
              className={`transition-colors duration-300 ${
                idx === activeStep ? "text-[#FAF7F2] font-bold" : "text-muted-foreground/40"
              }`}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
      <div className="text-[7px] text-coral/80 text-right font-semibold">Latency: 250ms</div>
    </div>
  );
}

function ToolsSimulation() {
  const [val, setVal] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev) => (prev >= 10 ? 3 : prev + 1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-[#14100e] to-[#0a0807] rounded-xl p-3 border border-border/25 font-mono text-[9px] text-left space-y-2 h-[120px] select-none flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_24px_rgba(0,0,0,0.5)]">
      <div>
        <div className="text-[7px] text-muted-foreground/60 font-bold border-b border-border/15 pb-1 mb-1.5 tracking-wider">
          ESTIMATION CONSOLE
        </div>
        <div className="flex justify-between items-center text-[8px] font-semibold text-[#f5f0eb]">
          <span>COMPLEXITY WEIGHT</span>
          <span className="text-coral font-bold">{val} / 10</span>
        </div>
        <div className="w-full bg-[#1c1815] h-1.5 rounded-full mt-2 overflow-hidden border border-border/10">
          <div
            className="bg-coral h-full transition-all duration-300 shadow-[0_0_8px_rgba(224,90,54,0.3)]"
            style={{ width: `${val * 10}%` }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-border/15 pt-2 text-[8px] font-mono font-semibold">
        <span className="text-muted-foreground/80">EST. PRODUCTION:</span>
        <span className="text-coral font-bold text-[10px]">{val * 4} Days</span>
      </div>
    </div>
  );
}

function RenderAiSimulation({ type }: { type: string }) {
  switch (type) {
    case "chatbot":
      return <ChatBotSimulation />;
    case "support":
      return <SupportAutomationSimulation />;
    case "leads":
      return <LeadQualificationSimulation />;
    case "knowledge":
      return <KnowledgeSimulation />;
    case "workflows":
      return <WorkflowSimulation />;
    case "tools":
      return <ToolsSimulation />;
    default:
      return null;
  }
}

// ─── Impact Statistics Counter ───────────────────────────────────────────────
function ImpactCounter({
  value,
  suffix = "",
  duration = 1500,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [started, value, duration]);

  const displayVal = value % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <span ref={ref}>
      {displayVal}
      {suffix}
    </span>
  );
}

// ─── Industries We Serve Live Preview ────────────────────────────────────────
function IndustryPreview({ industryId }: { industryId: string }) {
  return (
    <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#14100e] to-[#0a0807] border border-border/25 p-6 flex flex-col justify-between font-mono text-[9px] relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_12px_36px_rgba(0,0,0,0.6)]">
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-coral/10 rounded-full blur-[50px] pointer-events-none" />

      <div className="flex justify-between items-center border-b border-border/20 pb-3">
        <div className="flex items-center gap-1.5 font-mono">
          <span className="h-2 w-2 rounded-full bg-coral animate-pulse" />
          <span className="text-foreground font-bold uppercase tracking-wider">
            Afero Engine v1.0
          </span>
        </div>
        <span className="text-muted-foreground/60 text-[8px]">App Status: ACTIVE</span>
      </div>

      <div className="flex-1 py-4 flex flex-col justify-center font-mono">
        {industryId === "startups" && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#1c1815]/80 p-2.5 rounded-xl border border-border/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                <span className="text-[7px] text-muted-foreground uppercase font-bold tracking-wider">
                  API Requests
                </span>
                <div className="text-lg font-serif text-coral mt-0.5 font-semibold">842.5k</div>
              </div>
              <div className="bg-[#1c1815]/80 p-2.5 rounded-xl border border-border/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                <span className="text-[7px] text-muted-foreground uppercase font-bold tracking-wider">
                  Server Load
                </span>
                <div className="text-lg font-serif text-[#fbfaf8] mt-0.5 font-semibold">14%</div>
              </div>
            </div>
            <div className="bg-[#0e0c0a]/90 p-2.5 rounded-lg border border-border/25 text-[7px] text-[#fbfaf8]/90">
              &gt; npm run dev --mode production
              <div className="text-green-400 mt-1 font-mono font-semibold drop-shadow-[0_0_6px_rgba(74,222,128,0.2)]">
                ✓ Server running on port 443 with Edge distribution.
              </div>
            </div>
          </div>
        )}

        {industryId === "local" && (
          <div className="space-y-2.5">
            <span className="text-[8px] text-muted-foreground uppercase block mb-1 font-bold tracking-wider">
              Today's Appointment Slots
            </span>
            <div className="space-y-1.5">
              <div className="flex justify-between bg-coral/[0.08] border border-coral/25 px-2.5 py-1.5 rounded-lg text-coral shadow-[inset_0_1px_0_rgba(255,255,255,0.02),0_2px_8px_rgba(224,90,54,0.05)]">
                <span>09:00 AM - Discovery Audit</span>
                <span className="font-bold">Booked</span>
              </div>
              <div className="flex justify-between bg-[#1c1815]/60 border border-border/20 px-2.5 py-1.5 rounded-lg text-muted-foreground/80">
                <span>11:30 AM - Design Handover</span>
                <span className="font-semibold">Open</span>
              </div>
              <div className="flex justify-between bg-coral/[0.08] border border-coral/25 px-2.5 py-1.5 rounded-lg text-coral shadow-[inset_0_1px_0_rgba(255,255,255,0.02),0_2px_8px_rgba(224,90,54,0.05)]">
                <span>02:00 PM - Tech Strategy Session</span>
                <span className="font-bold">Booked</span>
              </div>
            </div>
          </div>
        )}

        {industryId === "ecommerce" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-[#1c1815]/80 p-3 rounded-xl border border-border/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_4px_12px_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-coral/10 text-coral border border-coral/20 flex items-center justify-center font-bold">
                  ⚡
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-xs text-[#fbfaf8] font-semibold">
                    Optimus Prime Tee
                  </span>
                  <span className="text-[7px] text-muted-foreground">Size L - Black</span>
                </div>
              </div>
              <span className="font-bold text-coral text-xs">₹2,999.00</span>
            </div>
            <div className="flex justify-between items-center text-[8px] border-t border-border/20 pt-2.5">
              <span className="text-muted-foreground font-medium">Checkout Latency:</span>
              <span className="text-green-400 font-bold drop-shadow-[0_0_6px_rgba(74,222,128,0.25)]">
                142ms (Instant Stripe Check)
              </span>
            </div>
          </div>
        )}

        {industryId === "ngo" && (
          <div className="space-y-3 text-left">
            <div className="bg-[#1c1815]/80 p-3 rounded-xl border border-border/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
              <div className="flex justify-between items-center">
                <span className="text-[8px] uppercase tracking-wider text-muted-foreground font-bold">
                  Donation Campaign
                </span>
                <span className="text-[10px] text-coral font-bold drop-shadow-[0_0_6px_rgba(224,90,54,0.25)]">
                  85% Goal
                </span>
              </div>
              <div className="w-full bg-black/40 border border-border/10 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-coral/70 to-coral h-full w-[85%] shadow-[0_0_8px_rgba(224,90,54,0.4)]" />
              </div>
            </div>
            <div className="text-[7px] text-muted-foreground/60 leading-relaxed">
              * WCAG 2.1 AA Compliant and Screen-Reader friendly donation pipelines built natively.
            </div>
          </div>
        )}

        {industryId === "personal" && (
          <div className="space-y-2 text-left">
            <span className="text-[8px] uppercase text-muted-foreground block font-bold tracking-wider">
              Newsletter Feed
            </span>
            <div className="p-3 bg-[#1c1815]/80 border border-border/25 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
              <h4 className="font-serif text-xs text-[#fbfaf8] leading-tight font-semibold">
                Curation as the Ultimate Edge
              </h4>
              <p className="text-[7px] text-muted-foreground/80 mt-1 leading-relaxed">
                In an era of noise, building a curated personal brand is the ultimate tool...
              </p>
            </div>
          </div>
        )}

        {industryId === "services" && (
          <div className="space-y-2">
            <span className="text-[8px] uppercase text-muted-foreground block text-left font-bold tracking-wider">
              Direct Client Booking Portal
            </span>
            <div className="bg-[#1c1815]/80 p-3 rounded-xl border border-border/25 space-y-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
              <div className="flex justify-between text-[7px] text-muted-foreground/60 border-b border-border/10 pb-1 font-bold">
                <span>CONSULTANT</span>
                <span>AVAILABILITY</span>
              </div>
              <div className="flex justify-between text-[#fbfaf8]">
                <span className="font-semibold">Rohith (Lead Dev)</span>
                <span className="text-green-400 font-bold drop-shadow-[0_0_6px_rgba(74,222,128,0.2)]">
                  Available today
                </span>
              </div>
              <div className="flex justify-between text-[#fbfaf8]">
                <span className="font-semibold">Azar (Creative Dir)</span>
                <span className="text-green-400 font-bold drop-shadow-[0_0_6px_rgba(74,222,128,0.2)]">
                  Available tomorrow
                </span>
              </div>
            </div>
          </div>
        )}

        {industryId === "education" && (
          <div className="space-y-2.5 text-left">
            <span className="text-[8px] uppercase text-muted-foreground block font-bold tracking-wider">
              Module Outline
            </span>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 p-1.5 bg-coral/[0.08] border border-coral/25 rounded-lg text-[8px] text-coral shadow-[0_2px_8px_rgba(224,90,54,0.05)]">
                <span className="text-[6px]">▶</span>
                <span className="font-medium">Module 01: Setup typescript & vite environments</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 bg-[#1c1815]/60 border border-border/20 rounded-lg text-[8px] text-muted-foreground/80">
                <span className="text-[6px]">🔒</span>
                <span>Module 02: Advanced routing schemas & Tanstack Start</span>
              </div>
            </div>
          </div>
        )}

        {industryId === "healthcare" && (
          <div className="space-y-2 text-left">
            <div className="bg-[#1c1815]/80 p-3 rounded-xl border border-border/25 space-y-2.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
              <span className="text-[7px] text-muted-foreground uppercase block font-bold tracking-wider">
                Patient Booking Form
              </span>
              <div className="h-3 bg-border/10 border border-border/5 rounded w-full" />
              <div className="h-3 bg-border/10 border border-border/5 rounded w-5/6" />
            </div>
            <div className="text-[6px] text-muted-foreground/60 leading-normal">
              * Secure client communication pipelines with zero-data retention policies.
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between text-[7px] text-muted-foreground/50 border-t border-border/10 pt-2.5">
        <span>GRID SYSTEM ACTIVE</span>
        <span>LATENCY: 42ms</span>
      </div>
    </div>
  );
}

// ─── Core Configurations ─────────────────────────────────────────────────────
const aiSolutions = [
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    body: "Custom-trained chatbots that understand your brand voice and answer user queries instantly 24/7.",
    interactiveType: "chatbot",
  },
  {
    icon: Cpu,
    title: "Customer Support Automation",
    body: "Auto-resolve repetitive customer queries, routing complex tickets smoothly to live team agents.",
    interactiveType: "support",
  },
  {
    icon: TrendingUp,
    title: "Lead Qualification Systems",
    body: "Engage, qualify, and score incoming traffic instantly, delivering high-intent leads straight to your CRM.",
    interactiveType: "leads",
  },
  {
    icon: Database,
    title: "AI Knowledge Assistants",
    body: "Turn internal wikis, docs, and product manuals into secure conversational assistants for teams.",
    interactiveType: "knowledge",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    body: "Connect your website directly to Slack, email, databases, or CRMs to eliminate manual admin work.",
    interactiveType: "workflows",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Business Tools",
    body: "Bespoke internal calculators, recommendation systems, or text generators built to save you hours.",
    interactiveType: "tools",
  },
];

const industries = [
  {
    id: "startups",
    name: "Startups",
    icon: Rocket,
    tagline: "Move fast, launch cleanly.",
    desc: "Rapid prototypes, high-conversion landing pages, and API-driven web applications built to scale with your user base.",
    features: ["Stripe Subscriptions", "SaaS Dashboards", "Interactive Product Demos"],
  },
  {
    id: "local",
    name: "Local Businesses",
    icon: Store,
    tagline: "Own your local market.",
    desc: "Lightning-fast business pages with optimized local SEO strategies and booking systems designed to drive walk-ins.",
    features: ["Local Schema Markup", "Interactive Booking", "Google Review Triggers"],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: ShoppingCart,
    tagline: "Frictionless online retail.",
    desc: "Headless commerce setups with lightning-fast cart interactions, predictive search filters, and smooth one-click checkouts.",
    features: ["Headless Shopify / Stripe", "Live Cart Sidebars", "Sub-1s Search Filters"],
  },
  {
    id: "ngo",
    name: "NGOs & Nonprofits",
    icon: Heart,
    tagline: "Storytelling that converts.",
    desc: "Highly accessible, impact-driven platforms with clean donor pipelines and interactive visual storytelling grids.",
    features: ["WCAG Accessibility", "Direct Donation Flows", "Global CDN Hosting"],
  },
  {
    id: "personal",
    name: "Personal Brands",
    icon: UserCheck,
    tagline: "Curation of your legacy.",
    desc: "Premium editorial portfolios, responsive typography, newsletter subscription panels, and modular writing layouts.",
    features: ["Newsletter Forms", "Portfolio Showcases", "SEO-Optimized Blogs"],
  },
  {
    id: "services",
    name: "Professional Services",
    icon: Briefcase,
    tagline: "Establish absolute authority.",
    desc: "Tailored lead-capture funnels, client onboarding portals, and automated service booking pipelines.",
    features: ["Secure Client Portals", "Onboarding Automations", "Cal.com Integration"],
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    tagline: "Knowledge, structured beautifully.",
    desc: "Interactive course dashboards, documentation sites, and membership platforms designed for distraction-free learning.",
    features: ["Interactive Docs", "Membership Paywalls", "Video Hosting Delivery"],
  },
  {
    id: "healthcare",
    name: "Healthcare & Wellness",
    icon: Activity,
    tagline: "Trustworthy appointment booking.",
    desc: "Privacy-aligned booking workflows, HIPAA-friendly contact paths, and structured educational hubs.",
    features: ["Secure Webforms", "Dynamic Schedules", "Speed-Optimized Resource Libraries"],
  },
];

function Index() {
  const [activeIndustry, setActiveIndustry] = useState("startups");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                <div className="flex items-baseline gap-3" />
                <Link
                  to="/work"
                  className="text-xs uppercase tracking-widest text-coral hover:underline inline-flex items-center gap-1"
                >
                  View project <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border bg-secondary/50 transform translate-z-6">
                <img
                  src={ad}
                  alt="Afero featured project preview"
                  width={1280}
                  height={800}
                  className="w-full h-auto group-hover:scale-[1.015] transition-transform duration-[1.2s] ease-out object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </article>
          </Tilt3D>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Tilt3D maxTilt={6} scale={1.02} className="w-full h-full">
              <article className="group glass-card-3d p-6 rounded-3xl h-full flex flex-col justify-between">
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline gap-2 transform translate-z-10">
                    <span className="text-xs text-muted-foreground">02 -Architecture</span>
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

            <Tilt3D maxTilt={6} scale={1.02} className="w-full h-full">
              <article className="group glass-card-3d p-6 rounded-3xl h-full flex flex-col justify-between">
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline gap-2 transform translate-z-10">
                    <span className="text-xs text-muted-foreground">03 -Editorial</span>
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

      {/* AI SOLUTIONS & AUTOMATION */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 border-b border-border/40 relative">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-coral/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium">
            <span className="h-px w-6 bg-coral" /> AI Capabilities
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            Next-gen AI Solutions & Automation.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We don't just build static pages. We integrate intelligent conversational interfaces and
            automated database pipelines that capture leads, answer tickets, and streamline your
            operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiSolutions.map((sol) => (
            <Tilt3D key={sol.title} maxTilt={6} scale={1.02} className="h-full">
              <div className="group h-full rounded-2xl glass-card-3d p-6 md:p-8 flex flex-col justify-between preserve-3d border border-border/30 hover:border-coral/25 transition-colors">
                <div>
                  <div
                    className="h-10 w-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6 group-hover:bg-coral group-hover:text-coral-foreground transition-all duration-300 shadow-sm"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    <sol.icon className="h-5 w-5" />
                  </div>
                  <h3
                    className="font-serif text-2xl mb-3"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {sol.title}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed mb-6"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {sol.body}
                  </p>
                </div>
                {/* Active Micro-Simulation Widget */}
                <div style={{ transform: "translateZ(15px)" }}>
                  <RenderAiSimulation type={sol.interactiveType} />
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY & INNOVATION */}
      <section className="bg-secondary/15 border-b border-border/40 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-5 mb-16 lg:mb-0 text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium mb-4">
                <span className="h-px w-6 bg-coral" /> Stack & Standards
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Modern tools. <br />
                Uncompromising <br />
                <span className="text-coral italic font-normal">performance.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                We design and engineer platforms using the fastest runtime engines and modern
                architectures. Zero bloated templates. Pure bespoke code optimized for sub-second
                delivery.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border/30">
                  <div className="font-bold text-foreground text-[10px] uppercase font-mono tracking-wider">
                    Speed Index
                  </div>
                  <div className="text-coral font-serif text-2xl mt-1">99 / 100</div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/30">
                  <div className="font-bold text-foreground text-[10px] uppercase font-mono tracking-wider">
                    SEO Readiness
                  </div>
                  <div className="text-coral font-serif text-2xl mt-1">Perfect</div>
                </div>
              </div>
            </div>

            {/* Right stack visualization */}
            <div className="lg:col-span-7 flex justify-center items-center relative min-h-[360px] md:min-h-[440px]">
              {/* Ambient radial glow backdrop behind the core */}
              <div className="absolute h-80 w-80 rounded-full bg-coral/[0.04] blur-3xl pointer-events-none z-0" />

              {/* Spinning orbital background wireframe circles */}
              <div className="absolute h-72 w-72 border border-border/15 rounded-full animate-[spin_50s_linear_infinite] pointer-events-none z-0" />
              <div className="absolute h-96 w-96 border border-border/10 rounded-full animate-[spin_70s_linear_infinite_reverse] pointer-events-none z-0" />

              {/* Ecosystem Energy Beams Connecting Core to orbiting cards */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="beam-grad-node" x1="50%" y1="50%" x2="50%" y2="8%">
                    <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#5fa04e" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="beam-grad-react" x1="50%" y1="50%" x2="10%" y2="8%">
                    <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#61dafb" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="beam-grad-ts" x1="50%" y1="50%" x2="88%" y2="18%">
                    <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#3178c6" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="beam-grad-tailwind" x1="50%" y1="50%" x2="20%" y2="88%">
                    <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="beam-grad-vite" x1="50%" y1="50%" x2="85%" y2="88%">
                    <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#bd34fe" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="beam-grad-openai" x1="50%" y1="50%" x2="5%" y2="50%">
                    <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="var(--coral)" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="beam-grad-vercel" x1="50%" y1="50%" x2="95%" y2="50%">
                    <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Beams */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="8%"
                  stroke="url(#beam-grad-node)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  className="animate-[dash-crawl_1.5s_linear_infinite]"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="10%"
                  y2="8%"
                  stroke="url(#beam-grad-react)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  className="animate-[dash-crawl_2s_linear_infinite]"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="88%"
                  y2="18%"
                  stroke="url(#beam-grad-ts)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  className="animate-[dash-crawl_1.8s_linear_infinite]"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="20%"
                  y2="88%"
                  stroke="url(#beam-grad-tailwind)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  className="animate-[dash-crawl_2.2s_linear_infinite]"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="88%"
                  stroke="url(#beam-grad-vite)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  className="animate-[dash-crawl_1.6s_linear_infinite]"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="5%"
                  y2="50%"
                  stroke="url(#beam-grad-openai)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  className="animate-[dash-crawl_1.4s_linear_infinite]"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="95%"
                  y2="50%"
                  stroke="url(#beam-grad-vercel)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  className="animate-[dash-crawl_2.5s_linear_infinite]"
                />
              </svg>

              {/* Central Core (Afero Engine centerpiece) */}
              <div className="relative z-10 h-32 w-32 md:h-36 md:w-36 flex items-center justify-center select-none preserve-3d">
                {/* Ring 1: Outer dashed neon indicator */}
                <div className="absolute inset-0 border-2 border-dashed border-coral/30 rounded-full animate-[spin_45s_linear_infinite]" />

                {/* Ring 2: Core scanner line */}
                <div className="absolute inset-2 border border-coral/15 rounded-full animate-[spin_12s_linear_infinite_reverse] pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 bg-coral rounded-full shadow-[0_0_8px_var(--coral)]" />
                </div>

                {/* Ring 3: Holographic backdrop glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-black via-[#120d0a] to-[#201009] border border-coral/25 flex flex-col justify-center items-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_0_50px_rgba(224,90,54,0.18)]">
                  {/* Subtle pulsing background power core */}
                  <div className="absolute inset-6 rounded-full bg-coral/5 animate-pulse blur-sm pointer-events-none" />

                  <span className="text-[10px] uppercase tracking-[0.25em] text-coral font-extrabold font-mono drop-shadow-[0_0_8px_rgba(224,90,54,0.4)]">
                    AFERO
                  </span>
                  <span className="text-[7px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5 font-bold font-mono">
                    ENGINE
                  </span>
                  {/* Pulsing state indicator */}
                  <div className="flex items-center gap-1 mt-1.5">
                    <span className="h-1 w-1 rounded-full bg-green-400 animate-ping" />
                    <span className="text-[5.5px] uppercase tracking-wider text-green-400 font-bold font-mono">
                      SYS ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Cards with Parallax Layering */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 animate-[float-slow_9s_ease-in-out_infinite_0.8s] perspective-1000">
                <Tilt3D maxTilt={15} scale={1.08}>
                  <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0c0a09]/80 border border-[#5fa04e]/30 hover:border-[#5fa04e]/60 backdrop-blur-md shadow-[0_4px_20px_rgba(95,160,78,0.08)] hover:shadow-[0_4px_24px_rgba(95,160,78,0.25)] transition-all duration-300 select-none group preserve-3d">
                    <span style={{ transform: "translateZ(18px)" }} className="inline-flex">
                      <NodeLogo className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <span
                      className="text-xs font-semibold text-[#fbfaf8] group-hover:text-[#83cd6d] transition-colors duration-300"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      Node.js
                    </span>
                  </div>
                </Tilt3D>
              </div>

              <div className="absolute top-2 left-6 z-20 animate-[float-slow_6s_ease-in-out_infinite] perspective-1000">
                <Tilt3D maxTilt={15} scale={1.08}>
                  <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0c0a09]/80 border border-[#61dafb]/30 hover:border-[#61dafb]/60 backdrop-blur-md shadow-[0_4px_20px_rgba(97,218,251,0.08)] hover:shadow-[0_4px_24px_rgba(97,218,251,0.25)] transition-all duration-300 select-none group preserve-3d">
                    <span style={{ transform: "translateZ(18px)" }} className="inline-flex">
                      <ReactLogo className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[20deg] group-hover:scale-110" />
                    </span>
                    <span
                      className="text-xs font-semibold text-[#fbfaf8] group-hover:text-[#9be7fc] transition-colors duration-300"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      React
                    </span>
                  </div>
                </Tilt3D>
              </div>

              <div className="absolute top-10 right-6 z-20 animate-[float-medium_7s_ease-in-out_infinite_1s] perspective-1000">
                <Tilt3D maxTilt={15} scale={1.08}>
                  <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0c0a09]/80 border border-[#3178c6]/30 hover:border-[#3178c6]/60 backdrop-blur-md shadow-[0_4px_20px_rgba(49,120,198,0.08)] hover:shadow-[0_4px_24px_rgba(49,120,198,0.25)] transition-all duration-300 select-none group preserve-3d">
                    <span style={{ transform: "translateZ(18px)" }} className="inline-flex">
                      <TsLogo className="h-6 w-6 rounded-sm overflow-hidden transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <span
                      className="text-xs font-semibold text-[#fbfaf8] group-hover:text-[#7fb5f5] transition-colors duration-300"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      TypeScript
                    </span>
                  </div>
                </Tilt3D>
              </div>

              <div className="absolute bottom-6 left-10 z-20 animate-[float-medium_8s_ease-in-out_infinite_2s] perspective-1000">
                <Tilt3D maxTilt={15} scale={1.08}>
                  <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0c0a09]/80 border border-[#38bdf8]/30 hover:border-[#38bdf8]/60 backdrop-blur-md shadow-[0_4px_20px_rgba(56,189,248,0.08)] hover:shadow-[0_4px_24px_rgba(56,189,248,0.25)] transition-all duration-300 select-none group preserve-3d">
                    <span style={{ transform: "translateZ(18px)" }} className="inline-flex">
                      <TailwindLogo className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <span
                      className="text-xs font-semibold text-[#fbfaf8] group-hover:text-[#7dd3fc] transition-colors duration-300"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      Tailwind CSS
                    </span>
                  </div>
                </Tilt3D>
              </div>

              <div className="absolute bottom-10 right-10 z-20 animate-[float-fast_5s_ease-in-out_infinite_1.5s] perspective-1000">
                <Tilt3D maxTilt={15} scale={1.08}>
                  <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0c0a09]/80 border border-[#bd34fe]/30 hover:border-[#ffd600]/30 backdrop-blur-md shadow-[0_4px_20px_rgba(189,52,254,0.08)] hover:shadow-[0_4px_24px_rgba(189,52,254,0.25)] transition-all duration-300 select-none group preserve-3d">
                    <span style={{ transform: "translateZ(18px)" }} className="inline-flex">
                      <ViteLogo className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <span
                      className="text-xs font-semibold text-[#fbfaf8] group-hover:text-[#d382ff] transition-colors duration-300"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      Vite
                    </span>
                  </div>
                </Tilt3D>
              </div>

              <div className="absolute top-1/2 left-2 z-20 -translate-y-1/2 animate-[float-fast_7s_ease-in-out_infinite_0.5s] perspective-1000">
                <Tilt3D maxTilt={15} scale={1.08}>
                  <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0c0a09]/80 border border-coral/30 hover:border-coral/60 backdrop-blur-md shadow-[0_4px_20px_rgba(224,90,54,0.08)] hover:shadow-[0_4px_24px_rgba(224,90,54,0.25)] transition-all duration-300 select-none group preserve-3d">
                    <span style={{ transform: "translateZ(18px)" }} className="inline-flex">
                      <OpenaiLogo className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg] group-hover:scale-110" />
                    </span>
                    <span
                      className="text-xs font-semibold text-[#fbfaf8] group-hover:text-coral transition-colors duration-300"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      OpenAI
                    </span>
                  </div>
                </Tilt3D>
              </div>

              <div className="absolute top-1/2 right-2 z-20 -translate-y-1/2 animate-[float-slow_8s_ease-in-out_infinite_1.2s] perspective-1000">
                <Tilt3D maxTilt={15} scale={1.08}>
                  <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0c0a09]/80 border border-white/10 hover:border-white/30 backdrop-blur-md shadow-[0_4px_20px_rgba(255,255,255,0.04)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.12)] transition-all duration-300 select-none group preserve-3d">
                    <span style={{ transform: "translateZ(18px)" }} className="inline-flex">
                      <VercelLogo className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <span
                      className="text-xs font-semibold text-[#fbfaf8] group-hover:text-white transition-colors duration-300"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      Vercel
                    </span>
                  </div>
                </Tilt3D>
              </div>
            </div>
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
            <Tilt3D key={r.n} maxTilt={6} scale={1.02} className="h-full">
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

      {/* RESULTS & IMPACT */}
      <section className="bg-secondary/10 border-y border-border/40 relative">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium">
              <span className="h-px w-6 bg-coral" /> Measured Outcomes
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">
              Real metrics. Real business growth.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-sm md:text-base">
              A premium user experience is nothing without numbers to back it up. We design with
              intent, building products that drastically improve conversion paths and load speeds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lighthouse Score",
                val: 98,
                suffix: "+",
                desc: "Instant loading, optimized core web vitals, and search engine preference.",
              },
              {
                title: "Average Latency",
                val: 100,
                prefix: "<",
                suffix: "ms",
                desc: "Global CDN edge-rendered deployments for lightning-fast asset delivery.",
              },
              {
                title: "Traffic Uplift",
                val: 3.2,
                suffix: "x",
                desc: "Average increase in organic search impressions and traffic in 90 days.",
              },
              {
                title: "Conversion Uplift",
                val: 45,
                suffix: "%",
                desc: "Intuitive UX layouts and fast checkout processes turn traffic into sales.",
              },
              {
                title: "Mobile Optimization",
                val: 100,
                suffix: "%",
                desc: "Flawless mobile UX scores verified by continuous automation scripts.",
              },
              {
                title: "Platform Uptime",
                val: 99.9,
                suffix: "%",
                desc: "Serverless distributions with self-healing deployments for zero maintenance.",
              },
            ].map((metric) => (
              <Tilt3D key={metric.title} maxTilt={6} scale={1.02} className="h-full">
                <div className="group h-full rounded-2xl glass-card-3d p-8 flex flex-col justify-between preserve-3d">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6">
                      {metric.title}
                    </h3>
                    <div
                      className="font-serif text-5xl md:text-6xl text-coral font-normal tracking-tight select-none mb-3"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {metric.prefix}
                      <ImpactCounter value={metric.val} suffix={metric.suffix} />
                    </div>
                  </div>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed mt-4"
                    style={{ transform: "translateZ(8px)" }}
                  >
                    {metric.desc}
                  </p>
                </div>
              </Tilt3D>
            ))}
          </div>
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
            Martin Richard -Director, Coast Enterprise
          </div>
        </div>
      </section>

      {/* TEAM / STATS */}
      <section className="relative overflow-hidden mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        {/* Arc Image */}
        <img
          src={arc}
          alt=""
          role="presentation"
          loading="lazy"
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

      {/* INDUSTRIES WE SERVE */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 border-b border-border/40 relative">
        <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-coral/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium">
            <span className="h-px w-6 bg-coral" /> Sectors We Support
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            Tailored digital platforms for every industry.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-sm md:text-base">
            We don't build generic websites. We design workflows and visual systems specific to your
            business model, ensuring your platform addresses the unique expectations of your target
            audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left vertical industry selector */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin text-left">
            {industries.map((ind) => {
              const IconComp = ind.icon;
              const isSelected = activeIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind.id)}
                  onMouseEnter={() => setActiveIndustry(ind.id)}
                  className={`flex items-center gap-4 text-left p-4 rounded-xl border transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-coral ${
                    isSelected
                      ? "bg-card border-coral/30 shadow-[0_4px_20px_-10px_rgba(224,90,54,0.15)]"
                      : "bg-transparent border-transparent hover:bg-card/45 hover:border-border/30"
                  }`}
                >
                  <div
                    className={`h-9 w-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isSelected
                        ? "bg-coral text-coral-foreground"
                        : "bg-secondary text-muted-foreground group-hover:bg-coral/10 group-hover:text-coral"
                    }`}
                  >
                    <IconComp className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span
                      className={`font-serif text-lg block transition-colors ${
                        isSelected
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {ind.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground/60 block mt-0.5 font-medium uppercase tracking-wider">
                      {ind.tagline}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right visual 3D preview console */}
          <div className="lg:col-span-7 h-full">
            {industries.map((ind) => {
              if (ind.id !== activeIndustry) return null;
              return (
                <div key={ind.id} className="animate-fade-in-up">
                  <Tilt3D maxTilt={3} scale={1.005}>
                    <div className="glass-card-3d rounded-3xl p-6 md:p-8 preserve-3d border border-border/30 flex flex-col gap-6">
                      <div className="text-left">
                        <div className="inline-block px-3 py-1 rounded-full bg-coral/10 text-coral text-[10px] font-semibold uppercase tracking-wider mb-3">
                          Featured Blueprint
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                          {ind.name} Platforms
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                          {ind.desc}
                        </p>
                      </div>

                      {/* Mockup Dashboard Preview Component */}
                      <div className="relative z-10" style={{ transform: "translateZ(10px)" }}>
                        <IndustryPreview industryId={ind.id} />
                      </div>

                      {/* Industry Core Deliverables list */}
                      <div className="border-t border-border/20 pt-5 text-left">
                        <div className="text-[9px] uppercase tracking-widest text-muted-foreground/50 font-bold mb-3">
                          Core Integration Features
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {ind.features.map((f, fIdx) => (
                            <span
                              key={fIdx}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border/40 text-xs text-foreground/80 font-medium font-mono"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Tilt3D>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-4xl px-6 py-24 md:py-32 border-b border-border/40 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-medium">
            <span className="h-px w-6 bg-coral" /> Common Inquiries
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Frequently Asked Questions.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-sm md:text-base">
            Everything you need to know about our custom build process, timeline integrations, and
            care support channels.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "How much do your custom websites cost?",
              a: "Afero works on a project basis. Website projects typically start from ₹15,000 and can exceed ₹50,000+ depending on complexity, features, integrations, content requirements, and project scope. We outline complete transparent budgets before beginning any development.",
            },
            {
              q: "How long does a website take to build?",
              a: "Most custom websites are designed, developed, and deployed within 4 to 8 weeks. Projects requiring complex API structures, SaaS dashboard systems, or custom AI chatbots may take slightly longer, but every milestone is delivered strictly on time.",
            },
            {
              q: "What kind of AI chatbot integrations can you build?",
              a: "We develop custom conversational agents and database assistants trained directly on your business documents. They qualify leads, trigger automations, route customer tickets, or send data instantly to Slack channels or CRMs.",
            },
            {
              q: "Can you redesign our existing site?",
              a: "Yes. We audit your existing analytics first to see what works and what doesn't. We then redesign the visuals, optimize load times for search engines, and improve conversion paths while preserving all of your search ranking structures.",
            },
            {
              q: "Where will our website be hosted?",
              a: "We deploy websites on ultra-fast, serverless global edge networks like Vercel, Netlify, or Cloudflare Pages. This guarantees sub-100ms global speeds, 99.9% uptime, and absolute security with zero recurring maintenance fees.",
            },
            {
              q: "What happens after the site is launched?",
              a: "Every project launch includes 30 days of comprehensive QA and maintenance support. Following that, we offer flat-rate monthly Care Packages covering security updates, custom feature adjustments, and performance tuning.",
            },
          ].map((faq, idx) => {
            const isFaqOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border/30 bg-card/45 backdrop-blur-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(isFaqOpen ? null : idx)}
                  aria-expanded={isFaqOpen}
                  className="flex w-full items-center justify-between p-6 text-left font-serif text-lg md:text-xl text-foreground hover:text-coral transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground/60 transition-transform duration-300 shrink-0 ${
                      isFaqOpen ? "rotate-180 text-coral" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isFaqOpen
                      ? "grid-rows-[1fr] opacity-100 py-6 px-6 border-t border-border/25 text-left"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PREMIUM FINAL CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center relative z-10 overflow-hidden">
        {/* Glowing background nebula */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-coral/10 rounded-full blur-[140px] pointer-events-none" />

        <Tilt3D maxTilt={2} scale={1.002}>
          <div className="rounded-[2.5rem] glass-card-3d p-8 md:p-16 border border-border/40 backdrop-blur-md relative overflow-hidden preserve-3d">
            <h2
              className="font-serif text-4xl md:text-6xl leading-tight text-foreground select-none"
              style={{ transform: "translateZ(30px)" }}
            >
              Ready for a website <br /> that{" "}
              <em className="text-coral italic font-normal">actually</em> works?
            </h2>
            <p
              className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm md:text-base"
              style={{ transform: "translateZ(20px)" }}
            >
              Whether you need to capture premium leads, build custom SaaS workflows, or integrate
              automated customer support channels, Afero delivers. Let's work together.
            </p>

            {/* Premium CTA grid actions */}
            <div
              className="grid sm:grid-cols-2 gap-4 mt-12 max-w-3xl mx-auto text-left"
              style={{ transform: "translateZ(15px)" }}
            >
              <Link
                to="/contact"
                className="group p-5 rounded-2xl bg-coral/10 hover:bg-coral transition-all duration-300 border border-coral/30 hover:border-coral flex flex-col justify-between h-[120px]"
              >
                <div className="flex justify-between items-center text-coral group-hover:text-coral-foreground transition-colors">
                  <span className="text-xs uppercase tracking-widest font-semibold font-mono">
                    Inquiry form
                  </span>
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground group-hover:text-coral-foreground transition-colors">
                    Start a Project
                  </h3>
                  <p className="text-[10px] text-muted-foreground group-hover:text-coral-foreground/80 mt-1 leading-normal">
                    Fill in our project brief. Responds in 24 hours.
                  </p>
                </div>
              </Link>

              <Link
                to="/contact"
                className="group p-5 rounded-2xl bg-card border border-border/30 hover:border-coral/40 transition-all duration-300 flex flex-col justify-between h-[120px]"
              >
                <div className="flex justify-between items-center text-muted-foreground/60 group-hover:text-coral transition-colors">
                  <span className="text-xs uppercase tracking-widest font-semibold font-mono">
                    Consultation
                  </span>
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">Book a Discovery Call</h3>
                  <p className="text-[10px] text-muted-foreground mt-1 leading-normal">
                    Discuss strategy, scopes, and estimates directly with developers.
                  </p>
                </div>
              </Link>

              <a
                href="mailto:hello@afero.in"
                className="group p-5 rounded-2xl bg-card border border-border/30 hover:border-coral/40 transition-all duration-300 flex flex-col justify-between h-[120px]"
              >
                <div className="flex justify-between items-center text-muted-foreground/60 group-hover:text-coral transition-colors">
                  <span className="text-xs uppercase tracking-widest font-semibold font-mono">
                    Direct mail
                  </span>
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">Email Us</h3>
                  <p className="text-[10px] text-muted-foreground mt-1 leading-normal">
                    Drop us a line directly at hello@afero.in.
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/#+917397102011"
                className="group p-5 rounded-2xl bg-card border border-border/30 hover:border-coral/40 transition-all duration-300 flex flex-col justify-between h-[120px]"
              >
                <div className="flex justify-between items-center text-muted-foreground/60 group-hover:text-coral transition-colors">
                  <span className="text-xs uppercase tracking-widest font-semibold font-mono">
                    Instant Chat
                  </span>
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">WhatsApp Us</h3>
                  <p className="text-[10px] text-muted-foreground mt-1 leading-normal">
                    Connect instantly with our team for quick text conversations.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Tilt3D>
      </section>

      <Footer />
    </div>
  );
}
