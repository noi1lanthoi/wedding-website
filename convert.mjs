import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, dirname, basename } from 'path';
import sharp from 'sharp';

async function walkDir(dir) {
  let results = [];
  const list = await readdir(dir);
  for (const file of list) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) {
      results = results.concat(await walkDir(filePath));
    } else {
      results.push(filePath);
    }
  }
  return results;
}

async function main() {
  const publicDir = join(process.cwd(), 'public');
  const files = await walkDir(publicDir);
  
  const extensionsToConvert = ['.jpg', '.jpeg', '.png'];
  
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (extensionsToConvert.includes(ext)) {
      const dir = dirname(file);
      const name = basename(file, extname(file)); // use original exact extname here to preserve casing
      const newPath = join(dir, `${name}.webp`);
      
      console.log(`Converting ${file} -> ${newPath}`);
      try {
        await sharp(file)
          .webp({ quality: 100 })
          .toFile(newPath);
          
        await unlink(file); // delete old file
        console.log(`Deleted ${file}`);
      } catch (e) {
        console.error(`Failed to convert ${file}:`, e);
      }
    }
  }
}

main().catch(console.error);
