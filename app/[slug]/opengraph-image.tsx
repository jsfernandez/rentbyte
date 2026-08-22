import { notFound } from "next/navigation"
import { createSocialImage } from "@/components/social-image"
import { seoServicePages } from "@/lib/seo-service-pages"

export const alt = "RentByte"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

type ImageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function Image({ params }: ImageProps) {
  const { slug } = await params
  const page = seoServicePages[slug]

  if (!page) {
    notFound()
  }

  return createSocialImage({
    eyebrow: page.kicker,
    title: page.metaTitle,
    description: page.metaDescription,
  })
}
