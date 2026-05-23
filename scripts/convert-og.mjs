import { execSync } from "child_process";
import { existsSync, readdirSync, statSync } from "fs";
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

const tools = [
  { name: "rsvg-convert", cmd: (s, p) => `rsvg-convert -f png -o "${p}" "${s}"` },
  { name: "magick", cmd: (s, p) => `magick "${s}" "${p}"` },
  { name: "convert", cmd: (s, p) => `convert "${s}" "${p}"` },
];

let converter = null;
for (const tool of tools) {
  try {
    execSync(`${tool.name} --version`, { stdio: "pipe" });
    converter = tool;
    break;
  } catch {}
}

if (!converter) {
  console.log("No SVG→PNG converter available (tried rsvg-convert, magick, convert)");
  console.log("Keeping SVGs as fallback");
  process.exit(0);
}

console.log(`Using ${converter.name} for SVG→PNG conversion`);

for (const svgPath of svgs) {
  const pngPath = svgPath.replace(/\.svg$/, ".png");
  console.log(`  ${svgPath} → ${pngPath}`);
  try {
    execSync(converter.cmd(svgPath, pngPath), { stdio: "pipe" });
    if (existsSync(pngPath)) {
      const size = statSync(pngPath).size;
      console.log(`    ✓ ${(size / 1024).toFixed(0)}KB`);
    }
  } catch (e) {
    console.log(`    ✗ ${e.stderr?.toString() || e.message}`);
  }
}

console.log("OG image conversion complete");
