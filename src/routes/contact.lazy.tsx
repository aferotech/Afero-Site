import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
// Nav imported globally in __root.tsx
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight, Check } from "lucide-react";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { submitContactForm } from "@/routes/contact";

export const Route = createLazyFileRoute("/contact")({
  component: ContactPage,
});

const projectTypes = ["Web Development", "Custom Software", "Branding & Design"] as const;

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleToggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

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
      // Prepend selected project types to the message context
      const finalMessage =
        selectedTypes.length > 0
          ? `[Project Types: ${selectedTypes.join(", ")}]\n\n${message}`
          : message;

      const response = await submitContactForm({
        data: {
          name,
          email,
          company,
          message: finalMessage,
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
        setSelectedTypes([]);
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[120px] pointer-events-none" />

      <main className="mx-auto max-w-6xl px-6 pt-28 pb-28 md:pt-36 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Minimal editorial display and context */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              {/* Pulsing Availability Status Indicator */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Select Bookings</span>
              </div>

              {/* Large Display Header */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-6 leading-[0.95] tracking-tight">
                Let's start <br />a{" "}
                <span className="text-coral italic font-normal">conversation.</span>
              </h1>

              <p className="mt-8 text-muted-foreground leading-relaxed text-sm md:text-base max-w-md">
                We build high-performance web experiences, tailored software, and digital products.
                Share your vision and we'll reply within one business day.
              </p>
            </div>

            {/* Simplified Editorial Text Blocks for Contact Info */}
            <div className="pt-8 border-t border-border/30 space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  Email
                </div>
                <a
                  href="mailto:afero.tech@gmail.com"
                  className="font-serif text-2xl md:text-3xl text-foreground hover:text-coral transition-colors"
                >
                  afero.tech@gmail.com
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

          {/* Right Column: Hero Form Card */}
          <div className="lg:col-span-7">
            <Tilt3D maxTilt={2} scale={1.005} className="w-full">
              {success ? (
                /* Success View State */
                <div className="rounded-2xl glass-card-3d p-8 md:p-12 min-h-[500px] flex flex-col justify-center items-center text-center preserve-3d">
                  <div
                    className="h-16 w-16 rounded-full bg-coral/10 text-coral flex items-center justify-center mb-6 shadow-sm"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <Check className="h-8 w-8" />
                  </div>

                  <h3
                    className="font-serif text-4xl text-foreground"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    Brief Received!
                  </h3>

                  <p
                    className="text-muted-foreground text-sm leading-relaxed max-w-sm mt-4"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    Thank you for reaching out. We have logged your project criteria and will get in
                    touch within one business day.
                  </p>

                  <button
                    onClick={() => setSuccess(false)}
                    style={{ transform: "translateZ(15px)" }}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs font-semibold hover:border-coral transition-colors"
                  >
                    Submit another brief
                  </button>
                </div>
              ) : (
                /* Simplified Project Brief Builder Form */
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl glass-card-3d p-8 md:p-10 space-y-8 preserve-3d"
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

                  {/* Project Type Selectors */}
                  <div
                    className="space-y-3 transform translate-z-2"
                    style={{ transform: "translateZ(5px)" }}
                  >
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                      What are we building?
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {projectTypes.map((type) => {
                        const isSelected = selectedTypes.includes(type);
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleToggleType(type)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
                              isSelected
                                ? "bg-coral border-coral text-coral-foreground shadow-sm shadow-coral/20"
                                : "border-border/60 bg-transparent hover:border-foreground/50 text-foreground/75"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-6">
                    {/* Name Input with Floating Label */}
                    <div
                      className="relative group transform translate-z-4"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      <input
                        id="name"
                        required
                        disabled={loading}
                        value={name}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setName(e.target.value)}
                        className="peer w-full bg-transparent border-b border-border/60 py-3 outline-none focus:border-coral transition-all duration-300 placeholder-transparent disabled:opacity-50 text-sm font-medium"
                        placeholder="Your name"
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                          focusedField === "name" || name
                            ? "-top-3.5 text-xs text-coral font-semibold"
                            : "top-3 text-sm text-muted-foreground/60 group-hover:text-foreground/80"
                        }`}
                      >
                        Name *
                      </label>
                    </div>

                    {/* Email Input with Floating Label */}
                    <div
                      className="relative group transform translate-z-4"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      <input
                        id="email"
                        required
                        type="email"
                        disabled={loading}
                        value={email}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setEmail(e.target.value)}
                        className="peer w-full bg-transparent border-b border-border/60 py-3 outline-none focus:border-coral transition-all duration-300 placeholder-transparent disabled:opacity-50 text-sm font-medium"
                        placeholder="you@company.com"
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                          focusedField === "email" || email
                            ? "-top-3.5 text-xs text-coral font-semibold"
                            : "top-3 text-sm text-muted-foreground/60 group-hover:text-foreground/80"
                        }`}
                      >
                        Email *
                      </label>
                    </div>

                    {/* Company Input with Floating Label */}
                    <div
                      className="relative group transform translate-z-4"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      <input
                        id="company"
                        disabled={loading}
                        value={company}
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setCompany(e.target.value)}
                        className="peer w-full bg-transparent border-b border-border/60 py-3 outline-none focus:border-coral transition-all duration-300 placeholder-transparent disabled:opacity-50 text-sm font-medium"
                        placeholder="Optional"
                      />
                      <label
                        htmlFor="company"
                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                          focusedField === "company" || company
                            ? "-top-3.5 text-xs text-coral font-semibold"
                            : "top-3 text-sm text-muted-foreground/60 group-hover:text-foreground/80"
                        }`}
                      >
                        Company
                      </label>
                    </div>

                    {/* Project Details Input with Floating Label */}
                    <div
                      className="relative group transform translate-z-4"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      <textarea
                        id="message"
                        required
                        rows={4}
                        disabled={loading}
                        value={message}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setMessage(e.target.value)}
                        className="peer w-full bg-transparent border-b border-border/60 py-3 outline-none focus:border-coral transition-all duration-300 resize-none placeholder-transparent disabled:opacity-50 text-sm font-medium leading-relaxed"
                        placeholder="Goals, timeline, details..."
                      />
                      <label
                        htmlFor="message"
                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                          focusedField === "message" || message
                            ? "-top-3.5 text-xs text-coral font-semibold"
                            : "top-3 text-sm text-muted-foreground/60 group-hover:text-foreground/80"
                        }`}
                      >
                        About the project *
                      </label>
                    </div>
                  </div>

                  {/* Submission Error Banner */}
                  {error && (
                    <div
                      className="text-xs font-semibold text-[#ff6b3d] bg-coral/5 border border-coral/10 p-4 rounded-xl transform translate-z-2"
                      style={{ transform: "translateZ(5px)" }}
                    >
                      {error}
                    </div>
                  )}

                  {/* CTA Submit Button */}
                  <div
                    className="transform translate-z-10 pt-2"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-8 py-4 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer w-full sm:w-auto justify-center"
                    >
                      {loading ? "Sending..." : "Send message"} <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </Tilt3D>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
