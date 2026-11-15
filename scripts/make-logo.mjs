// Tạo ảnh logo cho website từ file logo gốc S-Decor (_raw/brand/s-decor-logo.webp).
// Chạy: node scripts/make-logo.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const SRC = '_raw/brand/s-decor-logo.webp';
const OUT = 'public/brand';
mkdirSync(OUT, { recursive: true });

// 1) Biểu tượng (chữ S, tượng, vòng cung): cắt khỏi logo, nền trắng -> trong suốt
const { data, info } = await sharp(SRC)
  .extract({ left: 290, top: 120, width: 700, height: 590 })
  .ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const m = Math.min(data[i], data[i + 1], data[i + 2]);
  const a = Math.max(0, Math.min(255, ((250 - m) * 255) / 70));
  if (a > 0 && a < 255) {
    const k = a / 255;
    for (let c = 0; c < 3; c++) data[i + c] = Math.max(0, Math.min(255, Math.round((data[i + c] - 255 * (1 - k)) / k)));
  }
  data[i + 3] = a;
}
const emblem = await sharp(data, { raw: info }).trim().png().toBuffer();
for (const w of [160, 320]) {
  await sharp(emblem).resize({ width: w }).webp({ quality: 90, alphaQuality: 100 }).toFile(`${OUT}/emblem-${w}.webp`);
}

// 2) Logo đầy đủ (có tên công ty) cho trang liên hệ
for (const w of [480, 960]) {
  await sharp(SRC).extract({ left: 80, top: 95, width: 1100, height: 995 }).resize({ width: w }).webp({ quality: 88 }).toFile(`${OUT}/s-decor-${w}.webp`);
}

// 3) Favicon: biểu tượng trên nền trắng ngà, bo tròn
async function icon(size, file, radius) {
  const pad = Math.round(size * 0.12);
  const inner = await sharp(emblem).resize({ width: size - pad * 2, height: size - pad * 2, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  const bg = Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="#fbfaf6"/></svg>`);
  await sharp(bg).composite([{ input: inner, gravity: 'center' }]).png().toFile(file);
}
await icon(48, 'public/favicon-48.png', 10);
await icon(180, 'public/apple-touch-icon.png', 0);
await icon(512, `${OUT}/icon-512.png`, 96);
console.log('Xong: public/brand, favicon-48.png, apple-touch-icon.png');
