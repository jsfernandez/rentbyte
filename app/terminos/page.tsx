import type { Metadata } from "next"
import Link from "next/link"

const SITE_URL = "https://rentbyte.cl"

export const metadata: Metadata = {
  title: "Terminos del Servicio",
  description:
    "Terminos generales del servicio de RentByte para solicitudes de cotizacion y propuestas de arriendo de equipos TI para empresas.",
  alternates: {
    canonical: `${SITE_URL}/terminos`,
  },
}

export default function TerminosPage() {
  return (
    <main className="bg-white px-6 py-[72px] text-[#10141c]">
      <div className="mx-auto max-w-[860px]">
        <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">Legal</p>
        <h1 className="mt-4 font-display text-[40px] font-extrabold tracking-[-0.02em] text-[#10141c] sm:text-[48px]">
          Terminos del servicio
        </h1>
        <p className="mt-5 text-[17px] leading-[1.7] text-[#4a5568]">
          Estos terminos resumen las condiciones generales aplicables a consultas, cotizaciones y propuestas de arriendo de equipos TI presentadas por RentByte.
        </p>

        <div className="mt-10 space-y-8 text-[16px] leading-[1.75] text-[#2d3748]">
          <section>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[#10141c]">1. Alcance informativo</h2>
            <p className="mt-3">
              La informacion publicada en este sitio es referencial y busca facilitar el levantamiento comercial de requerimientos. Cada propuesta formal se ajusta al caso concreto del cliente.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[#10141c]">2. Cotizaciones</h2>
            <p className="mt-3">
              Las cotizaciones pueden variar segun cantidad, perfil tecnico, plazo, comuna, disponibilidad, nivel de configuracion, soporte y otras condiciones operativas definidas durante el levantamiento.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[#10141c]">3. Soporte y reemplazo</h2>
            <p className="mt-3">
              El alcance de soporte, mantencion y reemplazo depende de lo acordado en la propuesta comercial y, posteriormente, en el contrato aplicable al servicio adjudicado.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[#10141c]">4. Disponibilidad y configuracion</h2>
            <p className="mt-3">
              Modelos, configuraciones y plazos de entrega se confirman en cada propuesta. Las referencias publicadas en el sitio no constituyen promesa automatica de stock o especificacion cerrada.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[#10141c]">5. Relacion contractual</h2>
            <p className="mt-3">
              La prestacion del servicio queda sujeta a aceptacion comercial, validacion del alcance y firma de los documentos contractuales que correspondan para cada cliente o proceso de compra.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-[#6b7688]">
          Si necesitas mas contexto sobre tratamiento de datos, revisa la <Link href="/privacy" className="font-semibold text-[#1656c9]">politica de privacidad</Link>.
        </p>
      </div>
    </main>
  )
}
