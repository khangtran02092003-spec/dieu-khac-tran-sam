// Sinh src/content/tac-pham/*.md từ works-def.mjs. Không ghi đè file đã có (để giữ bản đã sửa qua CMS).
import fs from 'node:fs';
import path from 'node:path';
import { works } from './works-def.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const meta = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/image-meta.json'), 'utf8'));
const dir = path.join(ROOT, 'src/content/tac-pham');
fs.mkdirSync(dir, { recursive: true });

const img = (name) => {
  const m = meta[name];
  const w = m.widths.includes(960) ? 960 : m.widths[m.widths.length - 1];
  return `/images/${name}-${w}.webp`;
};
const q = (s) => JSON.stringify(s);

let n = 0;
works.forEach((w, i) => {
  const file = path.join(dir, w.slug + '.md');
  if (fs.existsSync(file)) return;
  const lines = [
    '---',
    `title: ${q(w.title)}`,
    `category: ${w.category}`,
    `material: ${q(w.material)}`,
    w.size ? `size: ${q(w.size)}` : null,
    `featured: ${!!w.featured}`,
    `order: ${i + 1}`,
    `summary: ${q(w.summary)}`,
    'images:',
    ...w.images.map((x) => `  - ${img(x)}`),
    w.video ? `video: /images/${w.video}.mp4` : null,
    '---',
    '',
  ].filter((l) => l !== null);
  fs.writeFileSync(file, lines.join('\n'));
  n++;
});
console.log(`Đã tạo ${n} tác phẩm`);
