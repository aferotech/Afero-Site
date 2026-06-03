import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = "https://afero.in";
        const pages = [
          { url: "/", changefreq: "daily", priority: "1.0" },
          { url: "/about", changefreq: "weekly", priority: "0.8" },
          { url: "/contact", changefreq: "weekly", priority: "0.8" },
          { url: "/journal", changefreq: "daily", priority: "0.9" },
          { url: "/process", changefreq: "weekly", priority: "0.7" },
          { url: "/work", changefreq: "weekly", priority: "0.8" },
        ];

        let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
        sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        pages.forEach((p) => {
          sitemap += "  <url>\n";
          sitemap += `    <loc>${baseUrl}${p.url}</loc>\n`;
          sitemap += `    <changefreq>${p.changefreq}</changefreq>\n`;
          sitemap += `    <priority>${p.priority}</priority>\n`;
          sitemap += "  </url>\n";
        });

        sitemap += "</urlset>";

        return new Response(sitemap, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
          },
        });
      },
    },
  },
});
