import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Afero Studio" },
      {
        name: "description",
        content:
          "Afero is a small, senior studio in Lisbon. We make websites that work -for the people who use them and the people who run them.",
      },
      { property: "og:title", content: "About - Afero Studio" },
    ],
  }),
});
