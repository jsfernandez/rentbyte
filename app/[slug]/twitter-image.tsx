import OpenGraphImage from "./opengraph-image"

export const alt = "RentByte"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function TwitterImage(props: Parameters<typeof OpenGraphImage>[0]) {
  return OpenGraphImage(props)
}
