import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SeoServicePage } from "@/components/seo-service-page"
import { getSeoPageMetadata } from "@/lib/seo-page-metadata"
import { seoServicePageList, seoServicePages } from "@/lib/seo-service-pages"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return seoServicePageList.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = seoServicePages[slug]

  if (!page) {
    return {}
  }

  return getSeoPageMetadata(page)
}

export default async function CommercialPage({ params }: PageProps) {
  const { slug } = await params
  const page = seoServicePages[slug]

  if (!page) {
    notFound()
  }

  return <SeoServicePage page={page} />
}
