import { execSync } from "child_process";
import { existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

const locales = [
  {
    lang: "en",
    title: ["Predict and Prevent Diabetes", "Complications with", "Artificial Intelligence"],
    description: [
      "Connect your CGM and wearables so AI analyzes",
      "your biomarkers, detects complication risks,",
      "and keeps your doctor informed in real time.",
    ],
  },
  {
    lang: "es",
    title: ["Predice y Previene Complicaciones", "de la Diabetes con", "Inteligencia Artificial"],
    description: [
      "Conecta tu CGM y wearables para que la IA",
      "analice tus biomarcadores, detecte riesgos de",
      "complicaciones y mantenga a tu médico informado.",
    ],
  },
];

const TITLE_FONT = "Helvetica";
const TITLE_SIZE = 36;
const DESC_SIZE = 17;
const TITLE_X = 50;
let TITLE_TOP = 127;
const DESC_GAP = 42;
const DESC_X = 50;
const LABEL_TOP_OFFSET = 13;

const WEB_IMG = join(__dirname, "..", "public/assets/images/web/features/dashboard.png");
const MOBILE_IMG = join(__dirname, "..", "public/assets/images/mobile/dashboard.png");

function sq(text) {
  return text.replace(/'/g, "'\\''");
}

for (const locale of locales) {
  const { lang } = locale;
  const svgPath = join(distDir, lang, "og-image.svg");
  const pngPath = join(distDir, lang, "og-image.png");
  const tmpBase = join(distDir, lang, "_og_base.png");

  if (!existsSync(svgPath)) {
    console.log(`No SVG found for ${lang}, skipping`);
    continue;
  }

  console.log(`\nGenerating OG image for ${lang}...`);

  const cmds = [];

  cmds.push(`magick "${svgPath}" -depth 16 "${tmpBase}"`);

  let cy = TITLE_TOP;
  for (let i = 0; i < locale.title.length; i++) {
    const labelPath = join(distDir, lang, `_og_l${i}.png`);
    cmds.push(
      `magick -background none -fill white -font ${TITLE_FONT} -pointsize ${TITLE_SIZE} label:"${locale.title[i]}" -define png:color-type=6 PNG32:"${labelPath}"`
    );
    cmds.push(
      `magick "${tmpBase}" "${labelPath}" -geometry +${TITLE_X}+${cy} -composite -depth 16 "${tmpBase}"`
    );
    cmds.push(`rm -f "${labelPath}"`);
    cy += 50;
  }

  let dcy = TITLE_TOP + locale.title.length * 50 + DESC_GAP;
  const descLabelPath = join(distDir, lang, `_og_d.png`);
  const descText = locale.description.join("\\n");
  cmds.push(
    `printf "${locale.description[0]}\\n${locale.description[1]}\\n${locale.description[2]}" > "${join(distDir, lang, "_desc.txt")}"`
  );
  cmds.push(
    `magick -background none -fill "rgba(255,255,255,0.75)" -font ${TITLE_FONT} -pointsize ${DESC_SIZE} label:@"${join(distDir, lang, "_desc.txt")}" -define png:color-type=6 PNG32:"${descLabelPath}"`
  );
  cmds.push(
    `magick "${tmpBase}" "${descLabelPath}" -geometry +${DESC_X}+${dcy} -composite -depth 16 "${tmpBase}"`
  );
  cmds.push(`rm -f "${descLabelPath}" "${join(distDir, lang, "_desc.txt")}"`);

  const webResized = join(distDir, lang, "_og_web.png");
  const mobileResized = join(distDir, lang, "_og_mob.png");
  cmds.push(
    `magick "${WEB_IMG}" -resize 430x330^ -gravity center -extent 430x330 "${webResized}"`
  );
  cmds.push(
    `magick "${MOBILE_IMG}" -resize 170x290^ -gravity center -extent 170x290 "${mobileResized}"`
  );
  cmds.push(
    `magick "${tmpBase}" "${webResized}" -geometry +580+80 -composite "${tmpBase}"`
  );
  cmds.push(
    `magick "${tmpBase}" "${mobileResized}" -geometry +880+260 -composite "${tmpBase}"`
  );
  cmds.push(`rm -f "${webResized}" "${mobileResized}"`);

  cmds.push(
    `magick "${tmpBase}" -font ${TITLE_FONT} -pointsize 24 -fill white -annotate +98+60 "dabetai" "${tmpBase}"`
  );
  cmds.push(
    `magick "${tmpBase}" -fill "rgba(255,255,255,0.15)" -draw "roundrectangle 50,35 86,71 8,8" "${tmpBase}"`
  );
  cmds.push(
    `magick "${tmpBase}" -font ${TITLE_FONT} -pointsize 16 -fill "rgba(255,255,255,0.3)" -annotate +50+585 "dabetai.org" "${pngPath}"`
  );

  for (const cmd of cmds) {
    try {
      execSync(cmd, { stdio: "pipe", shell: "/bin/bash" });
    } catch (e) {
      const stderr = e.stderr?.toString() || "";
      if (stderr) process.stderr.write(stderr);
    }
  }

  try {
    execSync(`rm -f "${tmpBase}"`);
  } catch {}

  const size = existsSync(pngPath) ? readFileSync(pngPath).length : 0;
  console.log(`  ✓ ${lang} OG image: ${(size / 1024).toFixed(0)}KB`);
}

console.log("\nOG image conversion complete");
