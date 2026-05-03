// 1회 실행: node scripts/build-favicon.mjs
// favicon.svg 디자인 변경 시 다시 실행 후 commit.
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

const svg = readFileSync("public/favicon.svg");

async function emit(size, name) {
  const png = await sharp(svg, { density: 384 })
    .resize(size, size, { fit: "fill" })
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(`public/${name}`, png);
  console.log(`wrote public/${name} (${png.length.toLocaleString()} bytes)`);
}

await emit(180, "apple-touch-icon.png");
await emit(32, "favicon-32.png");
