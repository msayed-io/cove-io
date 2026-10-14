import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: 'https://cove-landing-page.vercel.app/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }, { url: 'https://cove-landing-page.vercel.app/download', lastModified: new Date(), changeFrequency: 'daily', priority: .8 }]; }
