import { execSync } from "child_process";
import { existsSync, readdirSync, renameSync } from "fs";
import { join } from "path";

const distDir = new URL("../dist", import.meta.url).pathname;

function findSvgs(dir) {
  const results = [];
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        results.push(...findSvgs(fullPath));
      } else if (entry.name === "og-image.svg") {
        results.push(fullPath);
      }
    }
  } catch {}
  return results;
}

const svgs = findSvgs(distDir);

if (svgs.length === 0) {
  console.log("No OG SVG files found, skipping conversion");
  process.exit(0);
}

for (const svgPath of svgs) {
  const pngPath = svgPath.replace(/\.svg$/, ".png");
  console.log(`Converting ${svgPath} → ${pngPath}`);

  const tools = [
    { cmd: "rsvg-convert", args: ["rsvg-convert", "-f", "png", "-o", pngPath, svgPath] },
    { cmd: "magick", args: ["magick", "convert", svgPath, pngPath] },
    { cmd: "convert", args: ["convert", svgPath, pngPath] },
  ];

  let converted = false;
  for (const tool of tools) {
    try {
      execSync(tool.args.join(" "), { stdio: "pipe" });
      if (existsSync(pngPath)) {
        console.log(`  ✓ converted with ${tool.cmd}`);
        converted = true;
        break;
      }
    } catch {}
  }

  if (!converted) {
    console.log(`  ✗ no conversion tool available, keeping SVG as fallback`);
  }
}

console.log("OG image conversion complete");
