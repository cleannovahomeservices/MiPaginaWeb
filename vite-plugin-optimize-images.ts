import type { Plugin } from "vite";

const IMAGE_REGEX = /\.(png|jpe?g|webp)$/i;
const MAX_WIDTH = 1200;
const JPEG_QUALITY = 82;
const PNG_COMPRESSION = 9;
const WEBP_QUALITY = 82;

/**
 * Vite plugin that optimizes imported image assets at build time:
 * resizes to max 1200px width and compresses to reduce size (especially for huge PNGs).
 */
export function optimizeImagesPlugin(): Plugin {
  return {
    name: "vite-plugin-optimize-images",
    apply: "build",
    async generateBundle(_, bundle) {
      let sharp: typeof import("sharp") | null = null;
      try {
        sharp = (await import("sharp")).default;
      } catch {
        console.warn("[optimize-images] sharp not installed; run: npm install sharp --save-dev");
        return;
      }

      for (const [fileName, output] of Object.entries(bundle)) {
        if (output.type !== "asset" || typeof output.source !== "object") continue;
        if (!IMAGE_REGEX.test(fileName)) continue;

        const buf = Buffer.isBuffer(output.source)
          ? output.source
          : Buffer.from(output.source as ArrayBuffer);
        if (buf.length < 1024) continue; // skip tiny images (e.g. icons)

        try {
          let pipeline = sharp(buf);
          const meta = await pipeline.metadata();
          const width = meta.width ?? 0;
          const needResize = width > MAX_WIDTH;

          pipeline = sharp(buf);
          if (needResize) {
            pipeline = pipeline.resize(MAX_WIDTH, undefined, { withoutEnlargement: true });
          }

          const lower = fileName.toLowerCase();
          if (lower.endsWith(".png")) {
            output.source = await pipeline.png({ compressionLevel: PNG_COMPRESSION }).toBuffer();
          } else if (lower.endsWith(".webp")) {
            output.source = await pipeline.webp({ quality: WEBP_QUALITY }).toBuffer();
          } else {
            output.source = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
          }

          const before = (buf.length / 1024).toFixed(1);
          const after = ((output.source as Buffer).length / 1024).toFixed(1);
          console.log(`[optimize-images] ${fileName}: ${before} KB → ${after} KB`);
        } catch (err) {
          console.warn(`[optimize-images] skip ${fileName}:`, err);
        }
      }
    },
  };
}
