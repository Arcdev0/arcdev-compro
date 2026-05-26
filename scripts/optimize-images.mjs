import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../public/portfolio/', import.meta.url));
const imageExt = new Set(['.jpg', '.jpeg', '.png']);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(fullPath);
      if (imageExt.has(path.extname(entry.name).toLowerCase())) return [fullPath];
      return [];
    }),
  );
  return files.flat();
}

const files = await walk(root);

await Promise.all(
  files.map(async (file) => {
    const parsed = path.parse(file);
    const output = path.join(parsed.dir, `${parsed.name}.webp`);
    const metadata = await sharp(file).metadata();
    const isMobileShot = file.includes(`${path.sep}dompetarc${path.sep}`) && metadata.height > metadata.width;
    const maxWidth = isMobileShot ? 560 : 1280;

    await sharp(file)
      .resize({
        width: Math.min(metadata.width ?? maxWidth, maxWidth),
        withoutEnlargement: true,
      })
      .webp({
        quality: isMobileShot ? 74 : 72,
        effort: 6,
      })
      .toFile(output);
  }),
);

console.log(`Optimized ${files.length} portfolio images to WebP.`);
