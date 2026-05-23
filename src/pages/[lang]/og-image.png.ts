import type { APIRoute } from "astro";
import satori from "satori";
import { html } from "satori-html";
import sharp from "sharp";
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

const projectRoot = process.cwd();

function loadImage(relativePath: string): string {
  const absPath = join(projectRoot, "public", relativePath);
  const data = readFileSync(absPath);
  const ext = relativePath.split(".").pop()?.toLowerCase() || "png";
  const mime = ext === "svg" ? "image/svg+xml" : `image/${ext}`;
  return `data:${mime};base64,${data.toString("base64")}`;
}

async function loadFont(
  weight: number,
): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&display=swap`;
  const cssResp = await fetch(cssUrl);
  const css = await cssResp.text();

  const urlMatch = css.match(/url\(([^)]+)\)/);
  if (!urlMatch) throw new Error(`Could not find font URL in Google Fonts CSS for Inter ${weight}`);

  const fontResp = await fetch(urlMatch[1]);
  return fontResp.arrayBuffer();
}

export const GET: APIRoute = async ({ params }) => {
  const { lang } = params;
  const locale = (lang as Locale) || "en";
  const dict = await getDictionary(locale);

  const webImg = loadImage("/assets/images/web/features/dashboard.png");
  const mobileImg = loadImage("/assets/images/mobile/dashboard.png");

  const [interRegular, interBold] = await Promise.all([
    loadFont(400),
    loadFont(700),
  ]);

  const markup = html`
    <div
      style="display:flex;width:1200px;height:630px;background:linear-gradient(135deg,#1565C0 0%,#1E88E5 100%);position:relative;overflow:hidden;font-family:Inter"
    >
      <div
        style="display:flex;position:absolute;right:-200px;top:-200px;width:640px;height:640px;border-radius:50%;background:rgba(255,255,255,0.03)"
      ></div>
      <div
        style="display:flex;position:absolute;right:100px;bottom:-100px;width:440px;height:440px;border-radius:50%;background:rgba(255,255,255,0.04)"
      ></div>
      <div
        style="display:flex;position:absolute;left:-100px;bottom:-80px;width:500px;height:500px;border-radius:50%;background:rgba(255,255,255,0.02)"
      ></div>
      <div
        style="display:flex;position:absolute;top:0;right:0;bottom:0;left:0;background-image:radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px);background-size:30px 30px"
      ></div>

      <div
        style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:60px;width:100%"
      >
        <div
          style="display:flex;flex-direction:column;max-width:520px;flex-shrink:0"
        >
          <span
            style="font-size:36px;font-weight:700;color:rgba(255,255,255,0.9);line-height:1.3;display:flex;flex-wrap:wrap"
          >
            <span>${dict.hero.titleBefore}</span>
            <span
              style="color:#FFFFFF;text-shadow:0px 0px 8px rgba(255,255,255,0.15),0px 0px 20px rgba(33,150,243,0.15)"
            >
              ${dict.hero.highlightedText}
            </span>
          </span>

          <span
            style="font-size:18px;font-weight:500;color:rgba(255,255,255,0.8);line-height:1.5;margin-top:24px;display:flex;flex-wrap:wrap"
          >
            ${dict.hero.description}
          </span>
        </div>

        <div
          style="display:flex;align-items:flex-end;justify-content:center;position:relative;width:480px"
        >
          <img
            src="${webImg}"
            style="display:flex;width:340px;border-radius:12px"
          />
          <img
            src="${mobileImg}"
            style="display:flex;position:absolute;right:10px;bottom:0px;width:160px;border-radius:12px"
          />
        </div>
      </div>

      <span
        style="display:flex;position:absolute;bottom:24px;left:60px;font-size:14px;color:rgba(255,255,255,0.3)"
      >
        dabetai.org
      </span>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Inter", data: interRegular, weight: 400, style: "normal" },
      { name: "Inter", data: interBold, weight: 700, style: "normal" },
    ],
  });

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
