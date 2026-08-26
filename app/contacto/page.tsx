import type { Metadata } from "next"
import Link from "next/link"
import { Mail } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"

const SITE_URL = "https://rentbyte.cl"
const EMAIL = "contacto@rentbyte.cl"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto RentByte. Solicita una cotizacion de arriendo de computadores, notebooks, servidores o infraestructura TI para tu empresa.",
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
  openGraph: {
    title: "Contacto RentByte | Cotizacion de arriendo TI",
    description:
      "Solicita una cotizacion a RentByte indicando cantidad, plazo, comuna y tipo de equipo requerido.",
    url: `${SITE_URL}/contacto`,
    siteName: "RentByte",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contacto RentByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto RentByte | Cotizacion de arriendo TI",
    description:
      "Solicita una cotizacion a RentByte indicando cantidad, plazo, comuna y tipo de equipo requerido.",
    images: ["/twitter-image"],
  },
}

export default function ContactoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto RentByte",
    url: `${SITE_URL}/contacto`,
    description:
      "Pagina de contacto y cotizacion de RentByte para empresas que buscan arriendo de equipos TI en Chile.",
    mainEntity: {
      "@type": "Organization",
      name: "RentByte",
      url: SITE_URL,
      email: EMAIL,
      contactPoint: {
        "@type": "ContactPoint",
        email: EMAIL,
        contactType: "sales",
        areaServed: "CL",
        availableLanguage: ["es-CL", "es"],
      },
    },
  }

  return (
    <div className="min-h-dvh bg-white text-[#10141c]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main>
        <section className="bg-gradient-to-b from-[#f6f8fc] to-white px-6 py-[72px]">
          <div className="mx-auto max-w-[1200px]">
            <p className="inline-flex rounded-full border border-[#d6e2f7] bg-[#eaf0fb] px-3.5 py-2 text-[13px] font-semibold text-[#1656c9]">
              Contacto comercial
            </p>
            <h1 className="mt-6 max-w-[720px] font-display text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#10141c] sm:text-[52px]">
              Solicita una cotizacion a RentByte
            </h1>
            <p className="mt-5 max-w-[700px] text-[18px] leading-[1.6] text-[#4a5568]">
              Indica cantidad, tipo de equipo, plazo y comuna. La solicitud llega directo a nuestro correo comercial para responder con una propuesta tecnica y comercial.
            </p>
          </div>
        </section>

        <section className="px-6 pb-[84px]">
          <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[22px] bg-[#0f1a2e] p-6 sm:p-8">
              <h2 className="font-display text-[28px] font-extrabold tracking-[-0.02em] text-white">Canales y alcance</h2>
              <div className="mt-6 space-y-5 text-[15px] leading-[1.7] text-[#cdd8ea]">
                <p>
                  <span className="block text-[13px] font-bold uppercase tracking-[0.08em] text-[#7fa8f5]">Correo</span>
                  <a href={`mailto:${EMAIL}`} className="mt-1 inline-flex items-center gap-2 font-semibold text-white hover:text-[#7fa8f5]">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {EMAIL}
                  </a>
                </p>
                <p>
                  <span className="block text-[13px] font-bold uppercase tracking-[0.08em] text-[#7fa8f5]">Tiempo de respuesta</span>
                  Propuesta inicial en menos de 48 horas habiles para requerimientos con informacion suficiente.
                </p>
                <p>
                  <span className="block text-[13px] font-bold uppercase tracking-[0.08em] text-[#7fa8f5]">Cobertura</span>
                  Atencion comercial desde Santiago con evaluacion de despliegues para empresas en otras comunas y regiones de Chile.
                </p>
                <p>
                  <span className="block text-[13px] font-bold uppercase tracking-[0.08em] text-[#7fa8f5]">Que ayuda a cotizar mejor</span>
                  Cantidad de equipos, perfil tecnico, plazo, comuna, fecha estimada y si necesitas soporte, configuracion o documentacion para compras formales.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-[#24324c] bg-[#12203a] p-5 text-[14.5px] leading-[1.65] text-[#b9c5da]">
                <p>
                  Disenamos propuestas a medida desde 5 equipos y con contratos de arriendo desde 6 meses en adelante, lo que nos permite asegurar una
                  implementacion ordenada, equipos correctamente preparados y una entrega alineada con tu operacion. Ademas, ofrecemos garantia y cambio
                  de equipo ante defectos de fabrica, para dar continuidad a tu operacion. En proyectos de mayor escala, especialmente desde 50 equipos o
                  mas, coordinamos disponibilidad, configuracion y despliegue con la anticipacion necesaria para cumplir bien, por lo que los plazos se
                  evaluan caso a caso. No trabajamos arriendos por menos de 6 meses.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-[#24324c] bg-[#12203a] p-5 text-[14.5px] leading-[1.65] text-[#b9c5da]">
                <p>
                  Enlaces utiles: <Link href="/privacy" className="font-semibold text-white hover:text-[#7fa8f5]">Politica de privacidad</Link> y{" "}
                  <Link href="/terminos" className="font-semibold text-white hover:text-[#7fa8f5]">Terminos del servicio</Link>.
                </p>
              </div>
            </div>

            <QuoteForm title="Preparar solicitud de cotizacion" />
          </div>
        </section>
      </main>
    </div>
  )
}
