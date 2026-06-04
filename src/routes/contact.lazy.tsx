import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
// Nav imported globally in __root.tsx
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { submitContactForm } from "@/routes/contact";

export const Route = createLazyFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await submitContactForm({
        data: {
          name,
          email,
          company,
          message,
          honeypot,
        },
      });

      if (response.success) {
        setSuccess(true);
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setHoneypot("");
      } else {
        setError(response.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-coral/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-96 h-96 bg-coral/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 grid md:grid-cols-2 gap-16 relative z-10">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-coral font-medium">
            Let's talk
          </div>
          <h1 className="font-serif text-5xl md:text-6xl mt-6 leading-[0.95] tracking-tight">
            Tell us about <br /> your <em className="text-coral italic font-normal">project.</em>
          </h1>
          <p className="mt-8 text-muted-foreground max-w-md leading-relaxed text-sm md:text-base">
            We respond within one business day, and we'll tell you straight whether we're the right
            fit. No pitch decks, no follow-up sequence.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                Email
              </div>
              <a
                href="mailto:hello@afero.in"
                className="font-serif text-2xl md:text-3xl text-foreground hover:text-coral transition-colors"
              >
                hello@afero.in
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                Phone
              </div>
              <a
                href="tel:+917397102011"
                className="font-serif text-2xl md:text-3xl text-foreground hover:text-coral transition-colors"
              >
                (+91)-73971-02011
              </a>
            </div>
          </div>
        </div>

        <div>
          <Tilt3D maxTilt={4} scale={1.01} className="w-full">
            {success ? (
              <div className="rounded-2xl glass-card-3d p-8 space-y-6 preserve-3d min-h-[460px] flex flex-col justify-center items-center text-center">
                <div
                  className="h-12 w-12 rounded-full bg-coral/10 text-coral flex items-center justify-center mb-4 shadow-sm"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3
                  className="font-serif text-3xl text-foreground transform translate-z-10"
                  style={{ transform: "translateZ(20px)" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-muted-foreground text-sm leading-relaxed max-w-sm transform translate-z-2"
                  style={{ transform: "translateZ(10px)" }}
                >
                  Thank you for reaching out. We have received your project details and will get
                  back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl glass-card-3d p-8 space-y-6 preserve-3d"
              >
                {/* Honeypot field (hidden visually and from screen readers) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company_website">Website</label>
                  <input
                    id="company_website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="transform translate-z-4" style={{ transform: "translateZ(10px)" }}>
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-widest text-muted-foreground font-semibold"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    disabled={loading}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full bg-transparent border-b border-border/80 py-2 outline-none focus:border-coral transition duration-300 placeholder:text-muted-foreground/30 disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div className="transform translate-z-4" style={{ transform: "translateZ(10px)" }}>
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest text-muted-foreground font-semibold"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    disabled={loading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full bg-transparent border-b border-border/80 py-2 outline-none focus:border-coral transition duration-300 placeholder:text-muted-foreground/30 disabled:opacity-50"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="transform translate-z-4" style={{ transform: "translateZ(10px)" }}>
                  <label
                    htmlFor="company"
                    className="text-xs uppercase tracking-widest text-muted-foreground font-semibold"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    disabled={loading}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="mt-2 w-full bg-transparent border-b border-border/80 py-2 outline-none focus:border-coral transition duration-300 placeholder:text-muted-foreground/30 disabled:opacity-50"
                    placeholder="Optional"
                  />
                </div>
                <div className="transform translate-z-4" style={{ transform: "translateZ(10px)" }}>
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-widest text-muted-foreground font-semibold"
                  >
                    About the project
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    disabled={loading}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 w-full bg-transparent border-b border-border/80 py-2 outline-none focus:border-coral transition duration-300 resize-none placeholder:text-muted-foreground/30 disabled:opacity-50"
                    placeholder="Goals, timeline, anything we should know…"
                  />
                </div>

                {error && (
                  <div
                    className="text-xs font-semibold text-[#ff6b3d] bg-coral/5 border border-coral/10 p-3.5 rounded-xl transform translate-z-2"
                    style={{ transform: "translateZ(5px)" }}
                  >
                    {error}
                  </div>
                )}

                <div className="transform translate-z-10" style={{ transform: "translateZ(20px)" }}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-7 py-3.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send message"} <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </Tilt3D>
        </div>
      </section>
      <Footer />
    </div>
  );
}
