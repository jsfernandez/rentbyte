import { createSocialImage, socialImageSize } from "@/components/social-image"

export const alt = "RentByte - Arriendo TI para empresas en Chile"
export const size = socialImageSize
export const contentType = "image/png"

export default function Image() {
  return createSocialImage({
    eyebrow: "Arriendo TI · B2B & B2G · Chile",
    title: "Arriendo TI para empresas en Chile",
    description: "Computadores, notebooks y servidores con soporte tecnico, mantencion y propuesta en 48 horas.",
  })
}
