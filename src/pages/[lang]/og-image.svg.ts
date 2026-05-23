import type { APIRoute } from "astro";
import { getDictionary, type Locale } from "../../i18n/config";
import { readFileSync } from "node:fs";
import { join } from "node:path";

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

  const projectRoot = process.cwd();
  const webImgPath = join(projectRoot, "public/assets/images/web/features/dashboard.png");
  const mobileImgPath = join(projectRoot, "public/assets/images/mobile/dashboard.png");

  const webImgB64 = readFileSync(webImgPath).toString("base64");
  const mobileImgB64 = readFileSync(mobileImgPath).toString("base64");

  const titleParts = splitText(
    `${dict.hero.titleBefore}${dict.hero.highlightedText}`,
    32,
  );
  const descLines = splitText(dict.hero.description, 52).slice(0, 3);

  const hlStart = dict.hero.titleBefore.length;

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

  <rect x="50" y="35" width="36" height="36" rx="8" fill="rgba(255,255,255,0.15)" />
  <text x="98" y="60" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="bold" fill="white">dabetai</text>

  ${titleParts
    .map((line, i) => {
      const charOffset = getCharOffset(titleParts, i);
      const beforeHl = line.slice(0, Math.max(0, hlStart - charOffset));
      const inHl = line.slice(Math.max(0, hlStart - charOffset), Math.max(0, hlStart - charOffset + line.length));
      const y = 130 + i * 52;
      let result = "";
      if (charOffset + line.length <= hlStart) {
        result = `  <text x="50" y="${y}" font-family="Helvetica, Arial, sans-serif" font-size="38" font-weight="bold" fill="rgba(255,255,255,0.9)">${escapeXml(line)}</text>`;
      } else if (charOffset >= hlStart) {
        result = `  <text x="50" y="${y}" font-family="Helvetica, Arial, sans-serif" font-size="38" font-weight="bold" fill="white">${escapeXml(line)}</text>`;
      } else {
        const beforeW = estimateWidth(beforeHl);
        result = `  <text x="50" y="${y}" font-family="Helvetica, Arial, sans-serif" font-size="38" font-weight="bold" fill="rgba(255,255,255,0.9)">${escapeXml(beforeHl)}</text>`;
        if (inHl) {
          result += `\n  <text x="${50 + beforeW}" y="${y}" font-family="Helvetica, Arial, sans-serif" font-size="38" font-weight="bold" fill="white">${escapeXml(inHl)}</text>`;
        }
      }
      return result;
    })
    .join("\n")}

  ${descLines
    .map((line, i) => {
      const y = 130 + titleParts.length * 52 + 30 + i * 28;
      return `  <text x="50" y="${y}" font-family="Helvetica, Arial, sans-serif" font-size="17" fill="rgba(255,255,255,0.8)">${escapeXml(line)}</text>`;
    })
    .join("\n")}

  <rect x="570" y="70" width="450" height="350" rx="12" fill="url(#cardBg)" />
  <image href="data:image/png;base64,${webImgB64}" x="580" y="80" width="430" height="330" preserveAspectRatio="xMidYMid slice" />
  <rect x="570" y="70" width="450" height="350" rx="12" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" />

  <rect x="870" y="250" width="190" height="310" rx="12" fill="url(#cardBg)" />
  <image href="data:image/png;base64,${mobileImgB64}" x="880" y="260" width="170" height="290" preserveAspectRatio="xMidYMid slice" />
  <rect x="870" y="250" width="190" height="310" rx="12" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" />

  <text x="50" y="585" font-family="Helvetica, Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.3)">dabetai.org</text>
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

function splitText(text: string, maxLen: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? cur + " " + w : w;
    if (next.length > maxLen && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = next;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function getCharOffset(lines: string[], idx: number): number {
  let off = 0;
  for (let i = 0; i < idx && i < lines.length; i++) {
    off += lines[i].length + 1;
  }
  return off;
}

function estimateWidth(text: string): number {
  return text.length * 21;
}
