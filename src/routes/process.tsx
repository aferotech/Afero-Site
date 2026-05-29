import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process - Afero Studio" },
      {
        name: "description",
        content:
          "Our four-phase process: Discover, Design, Build, Grow. Predictable, transparent, and on time.",
      },
      { property: "og:title", content: "Process - Afero Studio" },
    ],
  }),
});
