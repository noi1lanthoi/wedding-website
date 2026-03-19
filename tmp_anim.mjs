import fs from 'fs';
import path from 'path';

const dir = 'c:/workspace/wedding-website/src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;
  
  // Replace viewport={{ once: true }} with a bottom margin so it triggers 15% up the screen
  content = content.replace(/viewport=\{\{ once: true \}\}/g, 'viewport={{ once: true, margin: "0px 0px -15% 0px" }}');
  
  // Also catch existing ones with margin defined
  content = content.replace(/viewport=\{\{ once: true, margin: ".*?" \}\}/g, 'viewport={{ once: true, margin: "0px 0px -15% 0px" }}');
  
  // Update transitions to 1.2s and easeOut
  content = content.replace(/transition=\{\{ duration: [\d.]+ \}\}/g, 'transition={{ duration: 1.2, ease: "easeOut" }}');
  content = content.replace(/transition=\{\{ duration: [\d.]+, delay: (.*?) \}\}/g, 'transition={{ duration: 1.2, ease: "easeOut", delay: $1 }}');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
}
