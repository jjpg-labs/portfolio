import { MetadataRoute } from 'next';

const SITE = 'https://jjpg.dev';

// `lastModified` used to be `new Date()`, which stamped every URL with the
// build time on every deploy — so a typo fix in the footer claimed all four
// pages had changed. Google learns to distrust a lastmod that always moves and
// then ignores it, which is worse than not sending one. These are real content
// dates: bump the entry when that page's copy actually changes (a refactor or
// a dependency bump is not a content change).
const ROUTES = [
  { path: '', lastModified: '2026-08-19', changeFrequency: 'monthly', priority: 1 },
  { path: '/projects', lastModified: '2026-08-22', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/skills', lastModified: '2026-08-22', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', lastModified: '2026-08-22', changeFrequency: 'yearly', priority: 0.5 },
] as const satisfies readonly {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}[];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${SITE}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}
