import type { Metadata } from "next"
import type { SeoServicePage } from "@/lib/seo-service-pages"

const SITE_URL = "https://rentbyte.cl"

export function getSeoPageMetadata(page: SeoServicePage): Metadata {
  const canonical = `${SITE_URL}/${page.slug}`
  const socialImage = `/${page.slug}/opengraph-image`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical,
      languages: {
        "es-CL": canonical,
      },
    },
    openGraph: {
      title: `${page.metaTitle} | RentByte`,
      description: page.metaDescription,
      url: canonical,
      siteName: "RentByte",
      locale: "es_CL",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: page.metaTitle,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} | RentByte`,
      description: page.metaDescription,
      images: [socialImage],
    },
  }
}
