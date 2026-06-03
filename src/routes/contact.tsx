import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Afero Studio" },
      {
        name: "description",
        content: "Tell us about your project. We respond within one business day.",
      },
      { property: "og:title", content: "Contact - Afero Studio" },
      { property: "og:url", content: "https://afero.in/contact" },
    ],
    links: [{ rel: "canonical", href: "https://afero.in/contact" }],
  }),
});

// Simple in-memory sliding window rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getClientIp(): string {
  try {
    return getRequestIP({ xForwardedFor: true }) || "unknown";
  } catch (e) {
    console.error("Failed to get client IP:", e);
    return "unknown";
  }
}

function isRateLimited(ip: string): boolean {
  if (ip === "unknown") return false;
  const LIMIT = 5; // max 5 submissions
  const WINDOW = 10 * 60 * 1000; // per 10 minutes
  const now = Date.now();
  const data = rateLimitMap.get(ip);

  if (!data) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW });
    return false;
  }

  if (now > data.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW });
    return false;
  }

  if (data.count >= LIMIT) {
    return true;
  }

  data.count++;
  return false;
}

// eslint-disable-next-line react-refresh/only-export-components
export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(
    (input: unknown) =>
      input as {
        name: string;
        email: string;
        company: string;
        message: string;
        honeypot: string;
      },
  )
  .handler(async ({ data }) => {
    // 1. Honeypot check (anti-spam)
    if (data.honeypot) {
      console.warn("Honeypot triggered, silently ignoring submission.");
      return { success: true };
    }

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const company = (data.company || "").trim();
    const message = (data.message || "").trim();

    // 2. Server-side validation
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields (Name, Email, Message).",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Please provide a valid email address." };
    }

    // 3. Rate limiting check
    const clientIp = getClientIp();
    if (isRateLimited(clientIp)) {
      console.warn(`Rate limit triggered for IP: ${clientIp}`);
      return {
        success: false,
        error: "Too many submissions. Please wait a few minutes before trying again.",
      };
    }

    // 4. Send email via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "hello@afero.in";
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev";

    if (!resendApiKey || resendApiKey === "re_placeholder") {
      console.error("Resend API key is not configured.");
      return {
        success: false,
        error: "Mail service is temporarily unavailable. Please try again later.",
      };
    }

    try {
      const htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #ff6b3d; font-family: serif; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
          <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 15px 0;"><strong>Company:</strong> ${company || "N/A"}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #ff6b3d;">
            <p style="margin: 0; font-weight: bold; margin-bottom: 8px;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `;

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Afero Studio <${senderEmail}>`,
          to: recipientEmail,
          reply_to: email,
          subject: `New Contact Submission from ${name}`,
          html: htmlContent,
        }),
      });

      if (!response.ok) {
        const errorDetails = await response.json().catch(() => ({}));
        console.error("Resend API call failed:", errorDetails);
        return { success: false, error: "Failed to send message. Please try again later." };
      }

      return { success: true };
    } catch (error) {
      console.error("Failed to execute Resend email send:", error);
      return { success: false, error: "An unexpected error occurred. Please try again later." };
    }
  });
