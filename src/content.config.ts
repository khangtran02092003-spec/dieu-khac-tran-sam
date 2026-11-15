import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categorySlugs = [
  'phu-dieu', 'phat-giao', 'bao-tang', 'chan-dung', 'co-dien',
  'mo-hinh', 'xuyen-sang', 'noi-that', 'quan-co', 'mat-na',
] as const;

const tacPham = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tac-pham' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(categorySlugs),
    material: z.string().optional(),
    size: z.string().optional(),
    location: z.string().optional(),
    year: z.number().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    summary: z.string().optional(),
    images: z.array(z.string()).min(1),
    video: z.string().optional(),
  }),
});

const tinTuc = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tin-tuc' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    topic: z.enum(['Kiến thức chất liệu', 'Quy trình', 'Xu hướng', 'Bảo quản', 'Công trình', 'Tin xưởng']),
    excerpt: z.string(),
    cover: z.string(),
    coverAlt: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});

export const collections = { 'tac-pham': tacPham, 'tin-tuc': tinTuc };
