import { createFileRoute } from "@tanstack/react-router";
import groomvyImg from "@/assets/groomvy.webp";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work - Afero Studio" },
      {
        name: "description",
        content:
          "Explore selected case studies and digital experiences designed and engineered by Afero.",
      },
      { property: "og:title", content: "Selected Work - Afero Studio" },
      { property: "og:image", content: groomvyImg },
    ],
  }),
});
