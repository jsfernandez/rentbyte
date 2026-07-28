import type { Metadata } from "next"
import { SeoServicePage } from "@/components/seo-service-page"
import { seoServicePages } from "@/lib/seo-service-pages"

const page = seoServicePages["arriendo-notebooks-empresas"]
const canonical = `https://rentbyte.cl/${page.slug}`

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical,
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
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: page.metaTitle,
      },
    ],
  },
}

export default function ArriendoNotebooksEmpresasPage() {
  return <SeoServicePage page={page} />
}
