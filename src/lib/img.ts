import meta from '../data/image-meta.json';

type Meta = { w: number; h: number; widths: number[]; color: string };
const M = meta as Record<string, Meta>;

export interface ResolvedImage {
  src: string;
  srcset?: string;
  width?: number;
  height?: number;
  color?: string;
}

/**
 * Nhận tên ảnh gốc ("bao-tang-02"), đường dẫn ảnh đã tối ưu ("/images/bao-tang-02-960.webp")
 * hoặc ảnh tải lên qua CMS ("/uploads/abc.jpg") và trả về src/srcset phù hợp.
 */
export function resolveImage(ref: string): ResolvedImage {
  const name = ref.match(/^\/images\/(.+)-\d+\.webp$/)?.[1] ?? (ref.startsWith('/') || ref.startsWith('http') ? null : ref);
  const m = name ? M[name] : undefined;
  if (!name || !m) return { src: ref };
  const largest = m.widths[m.widths.length - 1];
  const def = m.widths.includes(960) ? 960 : largest;
  return {
    src: `/images/${name}-${def}.webp`,
    srcset: m.widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', '),
    width: m.w,
    height: m.h,
    color: m.color,
  };
}

export const imageUrl = (ref: string, w = 1600) => {
  const r = resolveImage(ref);
  if (!r.srcset) return r.src;
  const name = r.src.replace(/^\/images\//, '').replace(/-\d+\.webp$/, '');
  const ws = M[name].widths;
  const pick = ws.find((x) => x >= w) ?? ws[ws.length - 1];
  return `/images/${name}-${pick}.webp`;
};
