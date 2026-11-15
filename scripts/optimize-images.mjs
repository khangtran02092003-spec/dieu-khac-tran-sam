// Tối ưu ảnh gốc trong _raw/ thành WebP nhiều kích thước ở public/images/,
// và ghi kích thước vào src/data/image-meta.json để component <Picture> dựng srcset.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { works } from './works-def.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const RAW = path.join(ROOT, '_raw');
const OUT = path.join(ROOT, 'public', 'images');
const WIDTHS = [480, 960, 1600, 2400];

const used = new Set(works.flatMap((w) => w.images));
const findRaw = (name) => {
  const cat = name.replace(/-\d+$/, '');
  const dir = path.join(RAW, cat);
  const f = fs.readdirSync(dir).find((x) => x.replace(/\.\w+$/, '') === name && /\.(jpe?g|png)$/i.test(x));
  if (!f) throw new Error('Không thấy ảnh gốc: ' + name);
  return path.join(dir, f);
};

fs.mkdirSync(OUT, { recursive: true });
const metaPath = path.join(ROOT, 'src', 'data', 'image-meta.json');
const meta = fs.existsSync(metaPath) ? JSON.parse(fs.readFileSync(metaPath, 'utf8')) : {};

let done = 0;
for (const name of used) {
  const src = findRaw(name);
  const base = sharp(src).rotate();
  const { width, height } = await base.metadata().then(async (m) => {
    // metadata() trả kích thước trước khi xoay; lấy từ ảnh đã xoay
    const buf = await sharp(src).rotate().toBuffer({ resolveWithObject: true });
    return buf.info;
  });
  const widths = WIDTHS.filter((w) => w < width).concat(width <= 2400 ? [width] : []);
  const uniq = [...new Set(widths)].sort((a, b) => a - b);
  for (const w of uniq) {
    const file = path.join(OUT, `${name}-${w}.webp`);
    if (!fs.existsSync(file)) await sharp(src).rotate().resize({ width: w }).webp({ quality: 78, effort: 5 }).toFile(file);
  }
  // màu trung bình làm nền chờ (tránh ô trắng khi ảnh chưa tải)
  const { dominant } = await sharp(src).stats();
  const hex = '#' + [dominant.r, dominant.g, dominant.b].map((c) => c.toString(16).padStart(2, '0')).join('');
  meta[name] = { w: width, h: height, widths: uniq, color: hex };
  done++;
}

// video
for (const w of works.filter((w) => w.video)) {
  const src = path.join(RAW, w.video.replace(/-\d+$/, ''), w.video + '.mp4');
  const dst = path.join(OUT, w.video + '.mp4');
  if (!fs.existsSync(dst)) fs.copyFileSync(src, dst);
}

fs.mkdirSync(path.dirname(metaPath), { recursive: true });
fs.writeFileSync(metaPath, JSON.stringify(meta, null, 1));
console.log(`Đã xử lý ${done} ảnh → public/images/`);
