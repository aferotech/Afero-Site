import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal - Afero Studio" },
      {
        name: "description",
        content:
          "Notes, essays, and field reports from the Afero studio on design, strategy, and the craft of making websites.",
      },
      { property: "og:title", content: "Journal - Afero Studio" },
      { property: "og:url", content: "https://afero.in/journal" },
    ],
    links: [{ rel: "canonical", href: "https://afero.in/journal" }],
  }),
});
