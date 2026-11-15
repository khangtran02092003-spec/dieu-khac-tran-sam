import site from '../data/site.json';

/** Chuỗi chưa điền (còn dạng "[CẦN ĐIỀN] ...") coi như trống. */
export const filled = (s?: string) => !!s && !s.startsWith('[');

/** Danh sách số điện thoại đã điền, dùng chung cho header, footer, liên hệ. */
export const phones = [
  { label: site.phone, href: site.phoneHref },
  { label: site.phone2, href: site.phone2Href },
].filter((p) => filled(p.label) && p.href);

const q = encodeURIComponent(site.mapQuery || site.address);
/** Mở Google Maps (app trên điện thoại, web trên máy tính) tại địa chỉ xưởng. */
export const mapLink = `https://www.google.com/maps/search/?api=1&query=${q}`;
/** Chỉ đường từ vị trí hiện tại của khách. */
export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
/** Bản đồ nhúng: dùng link nhúng trong /admin nếu có, không thì tìm theo địa chỉ (không cần API key). */
export const mapEmbed = site.mapEmbed || `https://maps.google.com/maps?q=${q}&hl=vi&z=16&output=embed`;
