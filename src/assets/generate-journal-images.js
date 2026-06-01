import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "journal");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function makeSVG(title, category, content) {
  let bg = "#FAF8F5"; // cream
  let textPrimary = "#111111";
  let textSecondary = "#666666";
  let accent = "#E05A36"; // coral
  let gridOpacity = "0.04";

  if (
    category === "Development" ||
    category === "AI & Automation" ||
    title === "The case against the homepage hero"
  ) {
    bg = "#111111";
    textPrimary = "#FAF8F5";
    textSecondary = "#999999";
    accent = "#FF6B3D";
    gridOpacity = "0.08";
  } else if (category === "Design") {
    bg = "#F0EEF4"; // lavender
    textPrimary = "#111111";
    textSecondary = "#555555";
    accent = "#E05A36";
    gridOpacity = "0.06";
  } else if (category === "Branding") {
    bg = "#F5F2EB"; // sand
    textPrimary = "#1A1A1A";
    textSecondary = "#555555";
    accent = "#E05A36";
    gridOpacity = "0.06";
  } else if (category === "Strategy") {
    bg = "#F7EFE9"; // peach
    textPrimary = "#111111";
    textSecondary = "#555555";
    accent = "#E05A36";
    gridOpacity = "0.06";
  } else if (category === "Studio Notes") {
    bg = "#EAEAE6"; // warm gray
    textPrimary = "#111111";
    textSecondary = "#555555";
    accent = "#E05A36";
    gridOpacity = "0.06";
  }

  let gridLines = "";
  for (let x = 50; x < 800; x += 50) {
    gridLines += `<line x1="${x}" y1="0" x2="${x}" y2="500" stroke="${textPrimary}" stroke-opacity="${gridOpacity}" stroke-width="1" />`;
  }
  for (let y = 50; y < 500; y += 50) {
    gridLines += `<line x1="0" y1="${y}" x2="800" y2="${y}" stroke="${textPrimary}" stroke-opacity="${gridOpacity}" stroke-width="1" />`;
  }

  const escapedCategory = category.toUpperCase().replace(/&/g, "&amp;");
  const escapedTitle = title.toUpperCase().replace(/&/g, "&amp;");

  return `
    <svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="500" fill="${bg}" />
      <circle cx="400" cy="250" r="300" fill="${accent}" fill-opacity="0.03" filter="blur(60px)" />
      ${gridLines}
      <rect x="25" y="25" width="750" height="450" fill="none" stroke="${textPrimary}" stroke-opacity="0.1" stroke-width="1" />
      <line x1="15" y1="25" x2="35" y2="25" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1.5" />
      <line x1="25" y1="15" x2="25" y2="35" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1.5" />
      <line x1="765" y1="25" x2="785" y2="25" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1.5" />
      <line x1="775" y1="15" x2="775" y2="35" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1.5" />
      <line x1="15" y1="475" x2="35" y2="475" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1.5" />
      <line x1="25" y1="465" x2="25" y2="485" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1.5" />
      <line x1="765" y1="475" x2="785" y2="475" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1.5" />
      <line x1="775" y1="465" x2="775" y2="485" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1.5" />

      <text x="45" y="50" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="800" fill="${accent}" letter-spacing="3" opacity="0.8">${escapedCategory}</text>
      <text x="755" y="50" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" fill="${textSecondary}" letter-spacing="1" text-anchor="end" opacity="0.6">AFERO DISPATCH VOL. IV</text>
      
      <g transform="translate(0, 30)">
        ${content}
      </g>
      
      <text x="45" y="455" font-family="monospace" font-size="9" fill="${textSecondary}" opacity="0.5">// SECTION: ${escapedCategory} // LATENCY: 0.0ms // RESOLUTION: 800X500 WebP</text>
      <text x="755" y="455" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="700" fill="${textPrimary}" letter-spacing="1.5" text-anchor="end" opacity="0.8">${escapedTitle}</text>
    </svg>
  `;
}

const imagesData = [
  {
    filename: "strategy-hero.webp",
    title: "The case against the homepage hero",
    category: "Strategy",
    content: (textPrimary, textSecondary, accent, bg) => `
      <rect x="150" y="80" width="500" height="300" rx="8" fill="none" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="2" />
      <circle cx="170" cy="95" r="4" fill="${textPrimary}" fill-opacity="0.3" />
      <circle cx="180" cy="95" r="4" fill="${textPrimary}" fill-opacity="0.3" />
      <circle cx="190" cy="95" r="4" fill="${textPrimary}" fill-opacity="0.3" />
      
      <rect x="175" y="120" width="450" height="90" rx="4" fill="${accent}" fill-opacity="0.05" stroke="${accent}" stroke-opacity="0.4" stroke-width="1.5" />
      <line x1="175" y1="120" x2="625" y2="210" stroke="${accent}" stroke-width="2" stroke-dasharray="4,4" />
      <line x1="625" y1="120" x2="175" y2="210" stroke="${accent}" stroke-width="2" stroke-dasharray="4,4" />
      <text x="400" y="165" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="${accent}" text-anchor="middle" letter-spacing="2">CONVENTIONAL HERO HEADER</text>
      
      <path d="M 400 220 L 400 250" stroke="${textPrimary}" stroke-width="2" fill="none" stroke-dasharray="3,3" />
      
      <rect x="180" y="270" width="130" height="85" rx="4" fill="none" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1" />
      <text x="245" y="315" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="${textPrimary}" text-anchor="middle">1. NARRATIVE FLOW</text>
      
      <rect x="335" y="270" width="130" height="85" rx="4" fill="none" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1" />
      <text x="400" y="315" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="${textPrimary}" text-anchor="middle">2. DIRECT TELEMETRY</text>
      
      <rect x="490" y="270" width="130" height="85" rx="4" fill="none" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1" />
      <text x="555" y="315" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="${textPrimary}" text-anchor="middle">3. PERSISTENT CTA</text>
    `,
  },
  {
    filename: "dev-css.webp",
    title: "Why we still hand-write CSS in 2026",
    category: "Development",
    content: (textPrimary, textSecondary, accent) => `
      <rect x="150" y="70" width="500" height="310" rx="8" fill="none" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1.5" />
      <rect x="150" y="70" width="500" height="30" rx="8" fill="${textPrimary}" fill-opacity="0.03" />
      <circle cx="175" cy="85" r="4" fill="#FF5F56" />
      <circle cx="187" cy="85" r="4" fill="#FFBD2E" />
      <circle cx="199" cy="85" r="4" fill="#27C93F" />
      <text x="400" y="89" font-family="monospace" font-size="11" fill="${textSecondary}" text-anchor="middle" opacity="0.7">src/styles/luxury-core.css</text>
      
      <g font-family="monospace" font-size="12" fill="${textPrimary}">
        <text x="180" y="130" opacity="0.6">.premium-editorial-card {</text>
        <text x="200" y="160"><tspan fill="${accent}" font-weight="bold">transition:</tspan> transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);</text>
        <text x="200" y="190"><tspan fill="${accent}" font-weight="bold">transform-style:</tspan> preserve-3d;</text>
        <text x="200" y="220"><tspan fill="${accent}" font-weight="bold">will-change:</tspan> transform, filter;</text>
        <text x="200" y="250"><tspan fill="${accent}" font-weight="bold">backdrop-filter:</tspan> blur(12px) saturate(102%);</text>
        <text x="200" y="280"><tspan fill="${accent}" font-weight="bold">background:</tspan> linear-gradient(135deg, rgba(250,248,245,0.8), rgba(245,242,235,0.5));</text>
        <text x="200" y="310"><tspan fill="${accent}" font-weight="bold">border:</tspan> 1px solid rgba(17,17,17,0.06);</text>
        <text x="180" y="340" opacity="0.6">}</text>
      </g>
      
      <path d="M 520 220 C 580 180, 570 320, 620 280" fill="none" stroke="${accent}" stroke-width="2" stroke-linecap="round" opacity="0.6" />
      <text x="590" y="240" font-family="monospace" font-size="10" fill="${accent}" opacity="0.6">handcrafted curve</text>
    `,
  },
  {
    filename: "design-nonprofit.webp",
    title: "Designing for nonprofits without making it sad",
    category: "Design",
    content: (textPrimary, textSecondary, accent) => `
      <circle cx="330" cy="220" r="110" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-width="2" />
      <circle cx="470" cy="220" r="110" fill="${textPrimary}" fill-opacity="0.03" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="1.5" />
      
      <path d="M 400 135 A 110 110 0 0 1 440 220 A 110 110 0 0 1 400 305 A 110 110 0 0 1 360 220 A 110 110 0 0 1 400 135" fill="${accent}" fill-opacity="0.25" stroke="${accent}" stroke-width="1.5" />
      
      <path d="M 220 220 Q 300 100, 400 135 Q 500 100, 580 220" fill="none" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="1.5" stroke-dasharray="3,3" />
      <path d="M 220 220 Q 300 340, 400 305 Q 500 340, 580 220" fill="none" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="1.5" stroke-dasharray="3,3" />
      
      <circle cx="220" cy="220" r="5" fill="${textPrimary}" />
      <circle cx="580" cy="220" r="5" fill="${accent}" />
      <text x="220" y="245" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="${textPrimary}" text-anchor="middle" letter-spacing="1">DIGNITY</text>
      <text x="580" y="245" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="${accent}" text-anchor="middle" letter-spacing="1">ACTION</text>
      <text x="400" y="225" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="${textPrimary}" text-anchor="middle" letter-spacing="1.5">INTEGRATION</text>
    `,
  },
  {
    filename: "studio-pricing.webp",
    title: "A small studio's pricing model, in full",
    category: "Studio Notes",
    content: (textPrimary, textSecondary, accent) => `
      <rect x="180" y="70" width="440" height="300" rx="8" fill="none" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1.5" />
      <line x1="180" y1="120" x2="620" y2="120" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1.5" />
      <line x1="180" y1="310" x2="620" y2="310" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1.5" />
      
      <g font-family="monospace" font-size="12" fill="${textPrimary}">
        <text x="210" y="100" font-weight="bold">DEVELOPMENT SPRINT PHASE</text>
        <text x="590" y="100" font-weight="bold" text-anchor="end">UNIT VALUE</text>
        
        <text x="210" y="160">Sprint 01: Systems Design &amp; Schema Setup</text>
        <text x="590" y="160" text-anchor="end" fill="${accent}">$12,500.00</text>
        
        <text x="210" y="200">Sprint 02: Core Frontend Handcrafted Dev</text>
        <text x="590" y="200" text-anchor="end" fill="${accent}">$14,000.00</text>
        
        <text x="210" y="240">Sprint 03: custom APIs, CMS &amp; Edge Routing</text>
        <text x="590" y="240" text-anchor="end" fill="${accent}">$11,500.00</text>
        
        <text x="210" y="280">Sprint 04: Interactive WebGL &amp; Performance QA</text>
        <text x="590" y="280" text-anchor="end" fill="${accent}">$9,000.00</text>
        
        <text x="210" y="345" font-weight="bold">TOTAL DEDICATED VALUE BUDGET</text>
        <text x="590" y="345" font-weight="bold" text-anchor="end" fill="${accent}">$47,000.00</text>
        
        <text x="210" y="360" font-size="9" fill="${textSecondary}" opacity="0.6">* ZERO SALES COMMISSION. 100% PRODUCT VALUE SCOPE.</text>
      </g>
    `,
  },
  {
    filename: "ai-genui.webp",
    title: "Generative UI: The next design frontier",
    category: "AI & Automation",
    content: (textPrimary, textSecondary, accent) => `
      <circle cx="250" cy="220" r="40" fill="none" stroke="${accent}" stroke-width="2.5" />
      <circle cx="250" cy="220" r="10" fill="${accent}" />
      <path d="M 250 140 L 250 180" stroke="${accent}" stroke-dasharray="3,3" stroke-width="1.5" />
      <path d="M 250 260 L 250 300" stroke="${accent}" stroke-dasharray="3,3" stroke-width="1.5" />
      <path d="M 290 220 L 330 220" stroke="${accent}" stroke-dasharray="3,3" stroke-width="1.5" />
      <text x="250" y="280" font-family="monospace" font-size="10" fill="${accent}" text-anchor="middle">GENERATIVE CORE</text>
      
      <rect x="420" y="90" width="220" height="75" rx="6" fill="none" stroke="${textPrimary}" stroke-opacity="0.25" stroke-width="1.5" />
      <text x="440" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="${textPrimary}">Adaptive Search Card</text>
      <line x1="440" y1="140" x2="600" y2="140" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="2" />
      
      <rect x="440" y="180" width="220" height="75" rx="6" fill="none" stroke="${accent}" stroke-opacity="0.4" stroke-width="1.5" fill-opacity="0.02" />
      <text x="460" y="215" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="${accent}">Fintech Checkout Block</text>
      <rect x="460" y="230" width="100" height="12" rx="3" fill="${accent}" fill-opacity="0.2" />
      <rect x="580" y="230" width="60" height="12" rx="3" fill="${accent}" />
      
      <rect x="400" y="270" width="220" height="75" rx="6" fill="none" stroke="${textPrimary}" stroke-opacity="0.25" stroke-width="1.5" />
      <text x="420" y="305" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="${textPrimary}">Dynamic Data telemetry</text>
      <path d="M 420 330 L 460 320 L 500 335 L 560 322 L 600 330" fill="none" stroke="${textPrimary}" stroke-opacity="0.4" stroke-width="2" />
      
      <path d="M 290 200 L 420 130" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1.5" stroke-dasharray="4,4" />
      <path d="M 290 220 L 440 220" stroke="${accent}" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="4,4" />
      <path d="M 290 240 L 400 310" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1.5" stroke-dasharray="4,4" />
    `,
  },
  {
    filename: "branding-luxury.webp",
    title: "The visual language of luxury digital products",
    category: "Branding",
    content: (textPrimary, textSecondary, accent) => `
      <line x1="150" y1="120" x2="650" y2="120" stroke="${accent}" stroke-opacity="0.3" stroke-width="1" />
      <line x1="150" y1="180" x2="650" y2="180" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1" stroke-dasharray="2,2" />
      <line x1="150" y1="280" x2="650" y2="280" stroke="${accent}" stroke-opacity="0.3" stroke-width="1" />
      
      <text x="140" y="123" font-family="monospace" font-size="8" fill="${accent}" opacity="0.6">ASCENDER</text>
      <text x="140" y="183" font-family="monospace" font-size="8" fill="${textSecondary}" opacity="0.6">MEAN LINE</text>
      <text x="140" y="283" font-family="monospace" font-size="8" fill="${accent}" opacity="0.6">BASELINE</text>
      
      <text x="250" y="280" font-family="'Instrument Serif', serif, 'Georgia'" font-size="200" font-weight="normal" fill="${textPrimary}" opacity="0.95">Af</text>
      
      <circle cx="218" cy="275" r="14" fill="none" stroke="${accent}" stroke-width="1.5" />
      <line x1="218" y1="261" x2="218" y2="289" stroke="${accent}" stroke-width="1" />
      <line x1="204" y1="275" x2="232" y2="275" stroke="${accent}" stroke-width="1" />
      
      <circle cx="340" cy="115" r="14" fill="none" stroke="${accent}" stroke-width="1.5" />
      
      <g font-family="system-ui, sans-serif" font-size="10" fill="${textSecondary}">
        <text x="430" y="150" font-weight="700" fill="${textPrimary}">METRIC SPECS:</text>
        <text x="430" y="175">Letter spacing: -0.04em track</text>
        <text x="430" y="195">Baseline alignment: Strict 0.618</text>
        <text x="430" y="215">Dynamic Stroke Ratio: 1:12 thick</text>
        <text x="430" y="235">Chromatic Tone: Warm OKLCH Spectrum</text>
      </g>
    `,
  },
  {
    filename: "dev-ssr.webp",
    title: "Next.js 16: An honest engineering audit",
    category: "Development",
    content: (textPrimary, textSecondary, accent) => `
      <rect x="150" y="80" width="500" height="260" rx="6" fill="none" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1.5" />
      <text x="170" y="110" font-family="monospace" font-size="11" font-weight="bold" fill="${textPrimary}">SSR STREAMING LATENCY WATERFALL</text>
      
      <line x1="200" y1="150" x2="600" y2="150" stroke="${textPrimary}" stroke-opacity="0.08" stroke-width="1" />
      <line x1="200" y1="210" x2="600" y2="210" stroke="${textPrimary}" stroke-opacity="0.08" stroke-width="1" />
      <line x1="200" y1="270" x2="600" y2="270" stroke="${textPrimary}" stroke-opacity="0.08" stroke-width="1" />
      <line x1="200" y1="130" x2="200" y2="300" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1" />
      <line x1="200" y1="300" x2="620" y2="300" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1" />
      
      <path d="M 200 290 Q 250 140, 320 220 T 450 160 T 600 135" fill="none" stroke="${accent}" stroke-width="2.5" />
      <text x="605" y="132" font-family="monospace" font-size="9" fill="${accent}" font-weight="bold">Server Actions (185ms)</text>
      
      <path d="M 200 295 L 300 260 L 400 262 L 500 258 L 600 260" fill="none" stroke="${textPrimary}" stroke-opacity="0.5" stroke-width="2" />
      <text x="605" y="263" font-family="monospace" font-size="9" fill="${textPrimary}" fill-opacity="0.6">Edge HTML Streaming (42ms)</text>
      
      <g font-family="monospace" font-size="10" fill="${textSecondary}">
        <text x="210" y="325">0ms</text>
        <text x="300" y="325">100ms</text>
        <text x="400" y="325">200ms</text>
        <text x="500" y="325">300ms</text>
        <text x="600" y="325">400ms</text>
      </g>
    `,
  },
  {
    filename: "strategy-boutique.webp",
    title: "Brand positioning for boutique studios",
    category: "Strategy",
    content: (textPrimary, textSecondary, accent) => `
      <circle cx="340" cy="200" r="100" fill="${accent}" fill-opacity="0.08" stroke="${accent}" stroke-opacity="0.4" stroke-width="1.5" />
      <circle cx="460" cy="200" r="100" fill="${textPrimary}" fill-opacity="0.02" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="1.5" />
      <circle cx="400" cy="290" r="100" fill="${textPrimary}" fill-opacity="0.02" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="1.5" />
      
      <text x="290" y="160" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="${accent}" text-anchor="middle">ELITE DEV</text>
      <text x="510" y="160" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="${textPrimary}" opacity="0.7" text-anchor="middle">LUXURY DESIGN</text>
      <text x="400" y="360" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="${textPrimary}" opacity="0.7" text-anchor="middle">BOUTIQUE SPEED</text>
      
      <circle cx="400" cy="230" r="8" fill="${accent}" />
      <path d="M 400 230 L 400 110 L 460 110" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="2,2" />
      <text x="470" y="114" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="${accent}">AFERO SWEET SPOT</text>
      
      <text x="400" y="248" font-family="monospace" font-size="9" font-weight="bold" fill="${textPrimary}" text-anchor="middle">ALIGNMENT</text>
    `,
  },
  {
    filename: "strategy-copy.webp",
    title: "The power of micro-copy on conversion",
    category: "Strategy",
    content: (textPrimary, textSecondary, accent) => `
      <rect x="180" y="100" width="190" height="220" rx="8" fill="none" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1.5" />
      <text x="275" y="130" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${textPrimary}" text-anchor="middle" opacity="0.6">VARIANT A</text>
      <rect x="205" y="180" width="140" height="35" rx="17.5" fill="none" stroke="${textPrimary}" stroke-opacity="0.3" stroke-width="1.5" />
      <text x="275" y="202" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="${textPrimary}" text-anchor="middle" opacity="0.6">Submit Form</text>
      <text x="275" y="280" font-family="monospace" font-size="28" font-weight="bold" fill="${textPrimary}" text-anchor="middle" opacity="0.4">11.8%</text>
      <text x="275" y="295" font-family="system-ui, sans-serif" font-size="9" fill="${textSecondary}" text-anchor="middle" opacity="0.6">Base conversion</text>
      
      <rect x="430" y="100" width="190" height="220" rx="8" fill="${accent}" fill-opacity="0.03" stroke="${accent}" stroke-opacity="0.4" stroke-width="2" />
      <text x="525" y="130" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${accent}" text-anchor="middle">VARIANT B (MICRO-COPY)</text>
      <rect x="455" y="180" width="140" height="35" rx="17.5" fill="${accent}" />
      <text x="525" y="202" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#FAF8F5" text-anchor="middle">Build With Us -></text>
      <text x="525" y="280" font-family="monospace" font-size="28" font-weight="bold" fill="${accent}" text-anchor="middle">41.6%</text>
      <text x="525" y="295" font-family="system-ui, sans-serif" font-size="9" fill="${accent}" text-anchor="middle" font-weight="bold">+252% LIFT INDEX</text>
      
      <path d="M 370 210 L 430 210" stroke="${accent}" stroke-width="1.5" stroke-dasharray="3,3" fill="none" />
    `,
  },
  {
    filename: "dev-edge.webp",
    title: "Cloudflare Pages vs. Vercel at the Edge",
    category: "Development",
    content: (textPrimary, textSecondary, accent) => `
      <rect x="150" y="80" width="500" height="260" rx="6" fill="none" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1.5" />
      <text x="175" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${textPrimary}">EDGE TTFB (TIME TO FIRST BYTE)</text>
      
      <line x1="200" y1="140" x2="600" y2="140" stroke="${textPrimary}" stroke-opacity="0.08" stroke-width="1" />
      <line x1="200" y1="200" x2="600" y2="200" stroke="${textPrimary}" stroke-opacity="0.08" stroke-width="1" />
      <line x1="200" y1="260" x2="600" y2="260" stroke="${textPrimary}" stroke-opacity="0.08" stroke-width="1" />
      <line x1="200" y1="120" x2="200" y2="300" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="1" />
      <line x1="200" y1="300" x2="610" y2="300" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="1" />
      
      <path d="M 200 240 Q 300 110, 400 190 T 600 160" fill="none" stroke="${textPrimary}" stroke-opacity="0.4" stroke-width="2" />
      <circle cx="600" cy="160" r="4" fill="${textPrimary}" fill-opacity="0.5" />
      <text x="605" y="163" font-family="monospace" font-size="9" fill="${textSecondary}">Vercel Edge (78ms avg)</text>
      
      <path d="M 200 280 L 300 285 L 400 282 L 500 286 L 600 283" fill="none" stroke="${accent}" stroke-width="3" />
      <circle cx="600" cy="283" r="4" fill="${accent}" />
      <text x="605" y="286" font-family="monospace" font-size="9" fill="${accent}" font-weight="bold">Cloudflare Pages (11ms avg)</text>
      
      <text x="180" y="145" font-family="monospace" font-size="9" fill="${textSecondary}" text-anchor="end">100ms</text>
      <text x="180" y="205" font-family="monospace" font-size="9" fill="${textSecondary}" text-anchor="end">50ms</text>
      <text x="180" y="265" font-family="monospace" font-size="9" fill="${textSecondary}" text-anchor="end">10ms</text>
    `,
  },
  {
    filename: "design-webgl.webp",
    title: "WebGL and Spline without page lag",
    category: "Design",
    content: (textPrimary, textSecondary, accent) => `
      <g stroke="${textPrimary}" stroke-opacity="0.25" stroke-width="1" fill="none">
        <polygon points="400,90 490,160 450,280 350,280 310,160" />
        <polygon points="400,90 400,190 450,280" />
        <polygon points="400,190 350,280" />
        <polygon points="310,160 400,190 490,160" />
        
        <circle cx="400" cy="90" r="3.5" fill="${accent}" stroke="none" />
        <circle cx="490" cy="160" r="3.5" fill="${accent}" stroke="none" />
        <circle cx="450" cy="280" r="3.5" fill="${accent}" stroke="none" />
        <circle cx="350" cy="280" r="3.5" fill="${accent}" stroke="none" />
        <circle cx="310" cy="160" r="3.5" fill="${accent}" stroke="none" />
        <circle cx="400" cy="190" r="3.5" fill="${accent}" stroke="none" />
      </g>
      
      <line x1="310" y1="160" x2="250" y2="120" stroke="${textPrimary}" stroke-opacity="0.2" stroke-dasharray="2,2" />
      <text x="240" y="115" font-family="monospace" font-size="9" fill="${textSecondary}" text-anchor="end">Vertex: (x: -0.42, y: 1.25)</text>
      
      <line x1="490" y1="160" x2="550" y2="120" stroke="${textPrimary}" stroke-opacity="0.2" stroke-dasharray="2,2" />
      <text x="560" y="115" font-family="monospace" font-size="9" fill="${textSecondary}">Render: GPU WebGL Buffer</text>
      
      <rect x="340" y="320" width="120" height="40" rx="4" fill="${accent}" fill-opacity="0.05" stroke="${accent}" stroke-width="1.5" />
      <text x="400" y="344" font-family="monospace" font-size="14" font-weight="900" fill="${accent}" text-anchor="middle">60.0 FPS</text>
      <text x="400" y="375" font-family="system-ui, sans-serif" font-size="9" fill="${textSecondary}" text-anchor="middle">JITTER RATIO: 0.00%</text>
    `,
  },
  {
    filename: "ai-llm.webp",
    title: "Integrating custom LLMs in enterprise tools",
    category: "AI & Automation",
    content: (textPrimary, textSecondary, accent, bg) => `
      <g font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="${textPrimary}" text-anchor="middle">
        <rect x="120" y="180" width="110" height="50" rx="6" fill="none" stroke="${textPrimary}" stroke-opacity="0.25" stroke-width="1.5" />
        <text x="175" y="205">USER QUERY</text>
        <text x="175" y="220" font-family="monospace" font-size="8" font-weight="normal" fill="${textSecondary}">[Prompt Stream]</text>
        
        <rect x="290" y="180" width="110" height="50" rx="6" fill="${accent}" fill-opacity="0.04" stroke="${accent}" stroke-opacity="0.4" stroke-width="1.5" />
        <text x="345" y="205" fill="${accent}">VECTOR CONTEXT</text>
        <text x="345" y="220" font-family="monospace" font-size="8" font-weight="normal" fill="${accent}">[98.2% Similarity]</text>
        
        <rect x="460" y="180" width="110" height="50" rx="6" fill="none" stroke="${textPrimary}" stroke-opacity="0.25" stroke-width="1.5" />
        <text x="515" y="205">LLM GENERATIVE</text>
        <text x="515" y="220" font-family="monospace" font-size="8" font-weight="normal" fill="${textSecondary}">[Edge Decoupled]</text>
        
        <rect x="630" y="180" width="50" height="50" rx="25" fill="${textPrimary}" />
        <text x="655" y="210" fill="${bg}" font-size="16">-&gt;</text>
      </g>
      
      <path d="M 230 205 L 290 205" stroke="${textPrimary}" stroke-width="1.5" />
      <path d="M 400 205 L 460 205" stroke="${accent}" stroke-width="1.5" />
      <path d="M 570 205 L 630 205" stroke="${textPrimary}" stroke-width="1.5" />
      
      <ellipse cx="345" cy="110" rx="30" ry="12" fill="none" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="1.5" />
      <path d="M 315 110 L 315 140 A 30 12 0 0 0 375 140 L 375 110" fill="none" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="1.5" />
      <path d="M 345 140 L 345 180" stroke="${textPrimary}" stroke-opacity="0.2" stroke-dasharray="3,3" />
      <text x="345" y="90" font-family="monospace" font-size="9" fill="${textSecondary}" text-anchor="middle">Corporate DB</text>
    `,
  },
  {
    filename: "branding-typo.webp",
    title: "Custom typography as brand equity",
    category: "Branding",
    content: (textPrimary, textSecondary, accent) => `
      <line x1="100" y1="120" x2="700" y2="120" stroke="${textPrimary}" stroke-opacity="0.1" stroke-width="1" />
      <line x1="100" y1="170" x2="700" y2="170" stroke="${accent}" stroke-opacity="0.25" stroke-width="1" stroke-dasharray="3,3" />
      <line x1="100" y1="270" x2="700" y2="270" stroke="${textPrimary}" stroke-opacity="0.1" stroke-width="1" />
      
      <text x="150" y="270" font-family="'Instrument Serif', 'Georgia', serif" font-size="170" fill="${textPrimary}" opacity="0.9">E</text>
      <text x="280" y="270" font-family="'Instrument Serif', 'Georgia', serif" font-size="170" fill="${textPrimary}" opacity="0.9">g</text>
      <text x="400" y="270" font-family="'Instrument Serif', 'Georgia', serif" font-size="170" fill="${accent}" opacity="0.9">R</text>
      <text x="540" y="270" font-family="'Instrument Serif', 'Georgia', serif" font-size="170" fill="${textPrimary}" opacity="0.9">q</text>
      
      <circle cx="490" cy="180" r="10" fill="none" stroke="${accent}" stroke-width="1" />
      <line x1="490" y1="170" x2="490" y2="190" stroke="${accent}" stroke-width="1" />
      <line x1="480" y1="180" x2="500" y2="180" stroke="${accent}" stroke-width="1" />
      
      <text x="400" y="340" font-family="monospace" font-size="10" fill="${textSecondary}" text-anchor="middle">GLYPH ANCHOR VECTORS &amp; INTEGRITY BOUNDING PATHS</text>
      <text x="400" y="360" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="${textPrimary}" text-anchor="middle">Afero Display Light Custom (400 Weight)</text>
    `,
  },
  {
    filename: "studio-templates.webp",
    title: "Why templates cost more in the long run",
    category: "Studio Notes",
    content: (textPrimary, textSecondary, accent) => `
      <rect x="150" y="80" width="500" height="260" rx="6" fill="none" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1.5" />
      <text x="175" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${textPrimary}">COST ACCUMULATION OVER TIME (36 MONTHS)</text>
      
      <line x1="200" y1="140" x2="600" y2="140" stroke="${textPrimary}" stroke-opacity="0.06" stroke-width="1" />
      <line x1="200" y1="200" x2="600" y2="200" stroke="${textPrimary}" stroke-opacity="0.06" stroke-width="1" />
      <line x1="200" y1="260" x2="600" y2="260" stroke="${textPrimary}" stroke-opacity="0.06" stroke-width="1" />
      <line x1="200" y1="120" x2="200" y2="300" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="1" />
      <line x1="200" y1="300" x2="610" y2="300" stroke="${textPrimary}" stroke-opacity="0.2" stroke-width="1" />
      
      <path d="M 200 280 Q 300 270, 400 220 T 550 110" fill="none" stroke="${accent}" stroke-width="2.5" />
      <circle cx="550" cy="110" r="4.5" fill="${accent}" />
      <text x="560" y="114" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="${accent}">Template Build (High Debt)</text>
      
      <path d="M 200 210 L 300 210 L 400 210 L 500 210 L 580 210" fill="none" stroke="${textPrimary}" stroke-opacity="0.5" stroke-width="2" />
      <circle cx="580" cy="210" r="4.5" fill="${textPrimary}" fill-opacity="0.6" />
      <text x="590" y="214" font-family="system-ui, sans-serif" font-size="10" fill="${textPrimary}" fill-opacity="0.6">Bespoke Custom Build</text>
      
      <text x="200" y="325" font-family="monospace" font-size="9" fill="${textSecondary}">0m</text>
      <text x="388" y="325" font-family="monospace" font-size="9" fill="${textSecondary}">18m</text>
      <text x="575" y="325" font-family="monospace" font-size="9" fill="${textSecondary}">36m</text>
    `,
  },
  {
    filename: "case-qa.webp",
    title: "Visual QA checklists for agency launches",
    category: "Case Studies",
    content: (textPrimary, textSecondary, accent) => `
      <rect x="180" y="80" width="440" height="260" rx="8" fill="none" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1.5" />
      
      <g font-family="monospace" font-size="11" fill="${textPrimary}">
        <g transform="translate(210, 120)">
          <rect x="0" y="0" width="12" height="12" rx="2" fill="none" stroke="${accent}" stroke-width="1.5" />
          <path d="M 3 6 L 5 8 L 9 3" fill="none" stroke="${accent}" stroke-width="1.5" />
          <text x="25" y="10" font-weight="bold">RESPONSIVE VIEWPORT BOUNDS (320px - 2560px)</text>
        </g>
        
        <g transform="translate(210, 165)">
          <rect x="0" y="0" width="12" height="12" rx="2" fill="none" stroke="${accent}" stroke-width="1.5" />
          <path d="M 3 6 L 5 8 L 9 3" fill="none" stroke="${accent}" stroke-width="1.5" />
          <text x="25" y="10" font-weight="bold">LCP CACHE RESPONSE HEADERS (EDGE TTL)</text>
        </g>
        
        <g transform="translate(210, 210)">
          <rect x="0" y="0" width="12" height="12" rx="2" fill="none" stroke="${accent}" stroke-width="1.5" />
          <path d="M 3 6 L 5 8 L 9 3" fill="none" stroke="${accent}" stroke-width="1.5" />
          <text x="25" y="10" font-weight="bold">ACCESSIBILITY CONTRAST RATIO (WCAG AAA)</text>
        </g>
        
        <g transform="translate(210, 255)">
          <rect x="0" y="0" width="12" height="12" rx="2" fill="none" stroke="${accent}" stroke-width="1.5" />
          <path d="M 3 6 L 5 8 L 9 3" fill="none" stroke="${accent}" stroke-width="1.5" />
          <text x="25" y="10" font-weight="bold">OPTIMIZED EXCLUSIVE WebP COMPRESSION</text>
        </g>
      </g>
      
      <circle cx="550" cy="270" r="40" fill="none" stroke="${accent}" stroke-width="1.5" stroke-dasharray="3,3" />
      <text x="550" y="274" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="${accent}" text-anchor="middle">QA PASSED</text>
    `,
  },
  {
    filename: "design-minimalism.webp",
    title: "The philosophy of functional minimalism",
    category: "Design",
    content: (textPrimary, textSecondary, accent) => `
      <line x1="200" y1="220" x2="600" y2="220" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="0.75" />
      <line x1="400" y1="100" x2="400" y2="340" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="0.75" />
      
      <circle cx="400" cy="220" r="100" fill="none" stroke="${textPrimary}" stroke-opacity="0.05" stroke-width="0.5" />
      <circle cx="400" cy="220" r="161.8" fill="none" stroke="${textPrimary}" stroke-opacity="0.05" stroke-width="0.5" />
      
      <circle cx="400" cy="220" r="6" fill="${accent}" />
      <circle cx="400" cy="220" r="18" fill="none" stroke="${accent}" stroke-opacity="0.4" stroke-width="1" />
      
      <text x="400" y="375" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="${textPrimary}" text-anchor="middle" letter-spacing="3" opacity="0.6">FUNCTIONAL BOUNDARIES</text>
    `,
  },
  {
    filename: "dev-lcp.webp",
    title: "Optimizing LCP to under 1.0 seconds",
    category: "Development",
    content: (textPrimary, textSecondary, accent) => `
      <rect x="150" y="80" width="500" height="260" rx="6" fill="none" stroke="${textPrimary}" stroke-opacity="0.15" stroke-width="1.5" />
      <text x="175" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="${textPrimary}">WEB VITALS METRICS (LOAD PIPELINE)</text>
      
      <g font-family="monospace" font-size="10" fill="${textPrimary}">
        <text x="170" y="160">TTFB (Edge API)</text>
        <rect x="300" y="150" width="60" height="15" fill="${textPrimary}" fill-opacity="0.25" rx="2" />
        <text x="370" y="162">62ms</text>
        
        <text x="170" y="200">FCP (HTML Stream)</text>
        <rect x="300" y="190" width="180" height="15" fill="${textPrimary}" fill-opacity="0.25" rx="2" />
        <text x="490" y="202">280ms</text>
        
        <text x="170" y="240">LCP (Optimized WebP)</text>
        <rect x="300" y="230" width="310" height="15" fill="${accent}" rx="2" />
        <text x="620" y="242" fill="${accent}" font-weight="bold">680ms</text>
      </g>
      
      <line x1="450" y1="130" x2="450" y2="280" stroke="${accent}" stroke-width="1.5" stroke-dasharray="3,3" />
      <text x="450" y="300" font-family="system-ui, sans-serif" font-size="9" fill="${accent}" font-weight="bold" text-anchor="middle">OPTIMAL 1.0s THRESHOLD</text>
    `,
  },
  {
    filename: "branding-fintech.webp",
    title: "The psychology of Fintech color palettes",
    category: "Branding",
    content: (textPrimary, textSecondary, accent, bg) => `
      <g transform="translate(140, 110)">
        <rect x="0" y="0" width="110" height="120" rx="8" fill="#0A0E17" stroke="${textPrimary}" stroke-opacity="0.1" />
        <rect x="0" y="90" width="110" height="30" fill="${bg}" rx="8" />
        <text x="10" y="105" font-family="monospace" font-size="9" font-weight="bold" fill="#0A0E17">#0A0E17</text>
        <text x="10" y="116" font-family="system-ui, sans-serif" font-size="8" fill="${textSecondary}">SECURITY</text>
        
        <rect x="140" y="0" width="110" height="120" rx="8" fill="#8BA88D" stroke="${textPrimary}" stroke-opacity="0.1" />
        <rect x="140" y="90" width="110" height="30" fill="${bg}" rx="8" />
        <text x="150" y="105" font-family="monospace" font-size="9" font-weight="bold" fill="#0A0E17">#8BA88D</text>
        <text x="150" y="116" font-family="system-ui, sans-serif" font-size="8" fill="${textSecondary}">STABILITY</text>
        
        <rect x="280" y="0" width="110" height="120" rx="8" fill="#2D5D7B" stroke="${textPrimary}" stroke-opacity="0.1" />
        <rect x="280" y="90" width="110" height="30" fill="${bg}" rx="8" />
        <text x="290" y="105" font-family="monospace" font-size="9" font-weight="bold" fill="#0A0E17">#2D5D7B</text>
        <text x="290" y="116" font-family="system-ui, sans-serif" font-size="8" fill="${textSecondary}">TRUST</text>
        
        <rect x="420" y="0" width="110" height="120" rx="8" fill="${accent}" stroke="${textPrimary}" stroke-opacity="0.1" />
        <rect x="420" y="90" width="110" height="30" fill="${bg}" rx="8" />
        <text x="430" y="105" font-family="monospace" font-size="9" font-weight="bold" fill="${accent}">#E05A36</text>
        <text x="430" y="116" font-family="system-ui, sans-serif" font-size="8" fill="${accent}" font-weight="bold">ACTION</text>
      </g>
      
      <text x="400" y="285" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="${textPrimary}" text-anchor="middle">CHROMATIC TRUST SPECTRUM FOR TRANSACTIONS</text>
    `,
  },
];

async function generate() {
  console.log(`Generating 18 WebP editorial images in ${outputDir}...`);

  for (const img of imagesData) {
    const outputPath = path.join(outputDir, img.filename);

    // Choose theme values based on category
    let textPrimary = "#111111";
    let textSecondary = "#666666";
    let accent = "#E05A36";
    let bg = "#FAF8F5";

    if (
      img.category === "Development" ||
      img.category === "AI & Automation" ||
      img.title === "The case against the homepage hero"
    ) {
      textPrimary = "#FAF8F5";
      textSecondary = "#999999";
      accent = "#FF6B3D";
      bg = "#111111";
    } else if (img.category === "Design") {
      bg = "#F0EEF4";
      textPrimary = "#111111";
      textSecondary = "#555555";
      accent = "#E05A36";
    } else if (img.category === "Branding") {
      bg = "#F5F2EB";
      textPrimary = "#1A1A1A";
      textSecondary = "#555555";
      accent = "#E05A36";
    } else if (img.category === "Strategy") {
      bg = "#F7EFE9";
      textPrimary = "#111111";
      textSecondary = "#555555";
      accent = "#E05A36";
    } else if (img.category === "Studio Notes") {
      bg = "#EAEAE6";
      textPrimary = "#111111";
      textSecondary = "#555555";
      accent = "#E05A36";
    }

    const svgContent = img.content(textPrimary, textSecondary, accent, bg);
    const fullSvg = makeSVG(img.title, img.category, svgContent);

    try {
      await sharp(Buffer.from(fullSvg)).webp({ quality: 85 }).toFile(outputPath);
      console.log(`Generated: ${img.filename}`);
    } catch (err) {
      console.error(`Failed to generate ${img.filename}:`, err);
    }
  }

  console.log("All 18 WebP images generated successfully.");
}

generate();
