import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import site from '../../data/site.json';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async ({ site: base }) => {
  const posts = (await getCollection('tin-tuc', ({ data }) => !data.draft)).sort((a, b) => +b.data.date - +a.data.date);
  const items = posts.map((p) => {
    const url = new URL(`/tin-tuc/${p.id}/`, base).href;
    return `<item><title>${esc(p.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${p.data.date.toUTCString()}</pubDate><category>${esc(p.data.topic)}</category><description>${esc(p.data.excerpt)}</description></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(site.name)} — Tin tức</title><link>${new URL('/tin-tuc/', base).href}</link><description>${esc(site.tagline)}</description><language>vi</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
