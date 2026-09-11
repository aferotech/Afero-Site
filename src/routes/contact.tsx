import { createFileRoute } from "@tanstack/react-router";

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
