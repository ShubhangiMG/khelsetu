import fs from "fs";
import path from "path";
import { imageSize } from "image-size";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const HEIC_HEADER = Buffer.from([0x00, 0x00, 0x00, 0x24, 0x66, 0x74, 0x79, 0x70]);

export interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

/**
 * Reads image filenames from a folder under public/images/ at build time.
 * Returns an array of public URL paths (e.g. "/images/playfree/photo.jpg").
 * Drop new photos into the folder and rebuild — they appear automatically.
 * Skips HEIC files mislabeled with .jpeg/.jpg extension.
 */
export function getProjectImages(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "images", folder);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => {
      if (!IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase())) return false;
      // Skip HEIC files disguised as JPEG
      const filePath = path.join(dir, f);
      const buf = Buffer.alloc(8);
      const fd = fs.openSync(filePath, "r");
      fs.readSync(fd, buf, 0, 8, 0);
      fs.closeSync(fd);
      if (buf.equals(HEIC_HEADER)) return false;
      return true;
    })
    .sort()
    .map((f) => `/images/${folder}/${f}`);
}

/** Returns a map of folder name → image paths for all project folders. */
export function getAllProjectImages(): Record<string, string[]> {
  const projectFolders = [
    "playfree",
    "endorphin",
    "lifeready",
    "life-ready",
    "readrise",
    "mukti",
    "second-innings",
  ];

  const result: Record<string, string[]> = {};
  for (const folder of projectFolders) {
    const images = getProjectImages(folder);
    if (images.length > 0) result[folder] = images;
  }
  return result;
}

/** Returns image paths from the general gallery folder. */
export function getGalleryImages(): string[] {
  return getProjectImages("gallery");
}

/** Like getProjectImages but also returns width/height for each image. */
export function getProjectImagesWithSize(folder: string): ImageInfo[] {
  const dir = path.join(process.cwd(), "public", "images", folder);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => {
      if (!IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase())) return false;
      const filePath = path.join(dir, f);
      const buf = Buffer.alloc(8);
      const fd = fs.openSync(filePath, "r");
      fs.readSync(fd, buf, 0, 8, 0);
      fs.closeSync(fd);
      if (buf.equals(HEIC_HEADER)) return false;
      return true;
    })
    .sort()
    .map((f) => {
      const filePath = path.join(dir, f);
      const buffer = fs.readFileSync(filePath);
      const dims = imageSize(buffer);
      return {
        src: `/images/${folder}/${f}`,
        width: dims.width ?? 800,
        height: dims.height ?? 600,
      };
    });
}
