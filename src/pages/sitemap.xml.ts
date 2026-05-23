import type { APIRoute } from "astro";

const siteUrl = "https://dabetai.netlify.app";

const locales = ["es", "en"];

export const GET: APIRoute = () => {
  const urls = locales.map(
    (lang) => `
  <url>
    <loc>${lang === "es" ? siteUrl : `${siteUrl}/${lang}`}</loc>
    <changefreq>monthly</changefreq>
    <priority>${lang === "es" ? "1.0" : "0.9"}</priority>
  </url>`
  ).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
