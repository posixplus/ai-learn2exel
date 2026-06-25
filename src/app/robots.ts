import type { MetadataRoute } from 'next'

const BASE = 'https://learn2exel.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
