import type { Metadata } from "next"
import Link from "next/link"

const SITE_URL = "https://rentbyte.cl"

export const metadata: Metadata = {
  title: "Politica de Privacidad",
  description:
    "Politica de privacidad de RentByte para solicitudes de cotizacion, formularios de contacto y comunicaciones comerciales.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
}

export default function PrivacyPage() {
  return (
    <main className="bg-white px-6 py-[72px] text-[#10141c]">
      <div className="mx-auto max-w-[860px]">
        <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">Legal</p>
        <h1 className="mt-4 font-display text-[40px] font-extrabold tracking-[-0.02em] text-[#10141c] sm:text-[48px]">
          Politica de privacidad
        </h1>
        <p className="mt-5 text-[17px] leading-[1.7] text-[#4a5568]">
          Esta politica explica como RentByte trata los datos enviados a traves de formularios, correo electronico y solicitudes de cotizacion relacionadas con arriendo de equipos TI.
        </p>

        <div className="mt-10 space-y-8 text-[16px] leading-[1.75] text-[#2d3748]">
          <section>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[#10141c]">1. Datos que recopilamos</h2>
            <p className="mt-3">
              Podemos recibir nombre, empresa, correo, telefono, comuna, cantidad de equipos, plazo estimado y requerimientos tecnicos cuando una empresa solicita una cotizacion o contacto comercial.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[#10141c]">2. Finalidad del tratamiento</h2>
            <p className="mt-3">
              Utilizamos estos datos para evaluar requerimientos, responder cotizaciones, coordinar conversaciones comerciales y dar seguimiento a solicitudes relacionadas con arriendo de computadores, notebooks, servidores o infraestructura TI.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[#10141c]">3. Base de uso comercial</h2>
            <p className="mt-3">
              El envio de una solicitud implica que la empresa interesada autoriza a RentByte a responder por correo u otros medios compartidos por el solicitante en el contexto de esa consulta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[#10141c]">4. Conservacion y acceso</h2>
            <p className="mt-3">
              La informacion comercial se conserva por el tiempo necesario para atender la consulta, respaldar la relacion comercial y mantener trazabilidad basica de propuestas emitidas.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.02em] text-[#10141c]">5. Derechos y contacto</h2>
            <p className="mt-3">
              Si deseas corregir o actualizar informacion compartida en una solicitud comercial, puedes escribir a <a className="font-semibold text-[#1656c9]" href="mailto:contacto@rentbyte.cl">contacto@rentbyte.cl</a>.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-[#6b7688]">
          Tambien puedes revisar nuestros <Link href="/terminos" className="font-semibold text-[#1656c9]">terminos del servicio</Link>.
        </p>
      </div>
    </main>
  )
}
