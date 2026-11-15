import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Đổi thành tên miền thật khi đưa lên mạng (dùng cho sitemap, thẻ canonical, ảnh chia sẻ).
export default defineConfig({
  site: 'https://dieukhactransam.vn',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/admin') && !p.includes('/cam-on') })],
  build: { inlineStylesheets: 'auto' },
});
