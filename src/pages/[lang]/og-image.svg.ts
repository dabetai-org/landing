import type { APIRoute } from "astro";
import { getDictionary, type Locale } from "../../i18n/config";

export const prerender = true;

export async function getStaticPaths() {
  return [
    { params: { lang: "es" } },
    { params: { lang: "en" } },
  ];
}

export const GET: APIRoute = async ({ params }) => {
  const { lang } = params;
  const locale = (lang as Locale) || "en";
  const dict = await getDictionary(locale);

  const title =
    dict.hero.titleBefore.trim() + dict.hero.highlightedText;

  const description = dict.hero.description;

  const descLines = (() => {
    const words = description.split(" ");
    const lines: string[] = [];
    let current = "";
    for (const word of words) {
      if ((current + " " + word).length > 80) {
        lines.push(current);
        current = word;
      } else {
        current = current ? current + " " + word : word;
      }
    }
    if (current) lines.push(current);
    return lines.slice(0, 2);
  })();

  const titleParts = (() => {
    if (title.length <= 45) return [title];
    const mid = Math.ceil(title.length / 2);
    const spaceIdx = title.indexOf(" ", mid);
    if (spaceIdx === -1 || spaceIdx > mid + 20) return [title];
    return [title.slice(0, spaceIdx), title.slice(spaceIdx + 1)];
  })();

  const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E88E5" />
      <stop offset="100%" stop-color="#2196F3" />
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.08)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0)" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Decorative circles -->
  <circle cx="1000" cy="100" r="250" fill="rgba(255,255,255,0.03)" />
  <circle cx="1100" cy="450" r="180" fill="rgba(255,255,255,0.04)" />
  <circle cx="800" cy="500" r="120" fill="rgba(255,255,255,0.03)" />
  <circle cx="150" cy="500" r="200" fill="rgba(255,255,255,0.02)" />

  <!-- Subtle dot pattern -->
  <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
    <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.04)" />
  </pattern>
  <rect width="1200" height="630" fill="url(#dots)" />

  <!-- Brand / logo area -->
  <rect x="60" y="50" width="42" height="42" rx="10" fill="white" fill-opacity="0.15" />
  <text x="118" y="78" font-family="sans-serif" font-size="28" font-weight="700" fill="white">dabetai</text>

  <!-- Title -->
  ${titleParts
    .map(
      (part, i) => `
  <text x="60" y="${200 + i * 72}" font-family="sans-serif" font-size="${titleParts.length > 1 ? 52 : 60}" font-weight="700" fill="white">
    ${escapeXml(part)}
  </text>`,
    )
    .join("")}

  <!-- Description -->
  ${descLines
    .map(
      (line, i) => `
  <text x="60" y="${titleParts.length > 1 ? titleParts.length * 72 + 230 : 290 + i * 36}" font-family="sans-serif" font-size="22" font-weight="400" fill="rgba(255,255,255,0.75)">
    ${escapeXml(line)}
  </text>`,
    )
    .join("")}

  <!-- URL -->
  <text x="60" y="565" font-family="sans-serif" font-size="18" font-weight="600" fill="rgba(255,255,255,0.3)">dabetai.org</text>

  <!-- Decorative line -->
  <line x1="60" y1="585" x2="200" y2="585" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-linecap="round" />
</svg>`;

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
