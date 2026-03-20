import { stat } from 'fs/promises';
import { join, extname, dirname, basename } from 'path';
import sharp from 'sharp';

const files = [
  "c:\\workspace\\wedding-website\\public\\images\\bride.jpg",
  "c:\\workspace\\wedding-website\\public\\images\\groom-portrait.jpg",
  "c:\\workspace\\wedding-website\\public\\images\\groom.jpg",
  "c:\\workspace\\wedding-website\\public\\images\\hero_bg.jpg",
  "c:\\workspace\\wedding-website\\public\\images\\hero-bg.jpg",
  "c:\\workspace\\wedding-website\\public\\images\\story\\story-1.jpg",
  "c:\\workspace\\wedding-website\\public\\images\\story\\story-2.jpg",
  "c:\\workspace\\wedding-website\\public\\images\\story\\story-3.jpg"
];

async function main() {
  for (const file of files) {
    try {
      // check if source file exists
      await stat(file);
      
      const ext = extname(file);
      const dir = dirname(file);
      const name = basename(file, ext);
      const newPath = join(dir, `${name}.webp`);
      
      console.log(`Converting ${file} -> ¹ ${newPath}`);
      await sharp(file)
        .rotate() // Automatically rotates the image based on EXIF orientation
        .webp({ quality: 85 })
        .toFile(newPath);
        
      console.log(`✅ Successfully re-converted ${name}.webp with correct orientation.`);
    } catch (e) {
      if (e.code === 'ENOENT') {
        console.warn(`⚠️ Source file not found: ${file}. Perhaps it was not restored?`);
      } else {
        console.error(`❌ Failed to convert ${file}:`, e);
      }
    }
  }
}

main().catch(console.error);
