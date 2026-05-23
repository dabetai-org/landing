import type { APIRoute } from "astro";

export const prerender = true;

export async function getStaticPaths() {
  return [
    { params: { lang: "es" } },
    { params: { lang: "en" } },
  ];
}

export const GET: APIRoute = async () => {
  const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1565C0" />
      <stop offset="100%" stop-color="#1E88E5" />
    </linearGradient>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.12)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0.05)" />
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />

  <circle cx="1000" cy="80" r="320" fill="rgba(255,255,255,0.03)" />
  <circle cx="1150" cy="480" r="220" fill="rgba(255,255,255,0.04)" />
  <circle cx="800" cy="550" r="180" fill="rgba(255,255,255,0.03)" />
  <circle cx="150" cy="500" r="250" fill="rgba(255,255,255,0.02)" />

  <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
    <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.04)" />
  </pattern>
  <rect width="1200" height="630" fill="url(#dots)" />

  <rect x="570" y="70" width="450" height="350" rx="12" fill="url(#cardBg)" />
  <rect x="570" y="70" width="450" height="350" rx="12" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" />

  <rect x="870" y="250" width="190" height="310" rx="12" fill="url(#cardBg)" />
  <rect x="870" y="250" width="190" height="310" rx="12" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
</svg>`;

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
};
