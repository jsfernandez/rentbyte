import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Mail } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"
import type { SeoServicePage } from "@/lib/seo-service-pages"

const SITE_URL = "https://rentbyte.cl"
const EMAIL = "contacto@rentbyte.cl"
const MAILTO = `mailto:${EMAIL}`

type SeoServicePageProps = {
  page: SeoServicePage
}

function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 text-[#10141c]" aria-label="RentByte">
      <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[#1656c9] font-display text-base font-extrabold text-white tracking-[-0.02em]">
        R
      </span>
      <span className="font-display text-[19px] font-bold tracking-[-0.02em]">RentByte</span>
    </span>
  )
}

export function SeoServicePage({ page }: SeoServicePageProps) {
  const pageUrl = `${SITE_URL}/${page.slug}`
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "RentByte",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        email: EMAIL,
        areaServed: {
          "@type": "Country",
          name: "Chile",
          identifier: "CL",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "RentByte",
        url: SITE_URL,
        inLanguage: "es-CL",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `${page.h1} | RentByte`,
        description: page.metaDescription,
        datePublished: "2025-01-01",
        dateModified: "2026-08-22",
        inLanguage: "es-CL",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${pageUrl}/#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: page.title,
        serviceType: page.title,
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Chile",
          identifier: "CL",
        },
        url: pageUrl,
        description: page.metaDescription,
        termsOfService: `${SITE_URL}/terminos`,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <div className="min-h-dvh bg-white font-sans text-[#10141c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="sticky top-0 z-50 h-[68px] border-b border-[#e7ebf2] bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
          <Link href="/" aria-label="Ir al inicio">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-7 sm:flex" aria-label="Navegacion del servicio">
            <Link href="/#services" className="text-[15px] font-medium text-[#4a5568] hover:text-[#1656c9]">
              Servicios
            </Link>
            <Link href="/#scenarios" className="text-[15px] font-medium text-[#4a5568] hover:text-[#1656c9]">
              Escenarios
            </Link>
            <Link href="/contacto" className="text-[15px] font-medium text-[#4a5568] hover:text-[#1656c9]">
              Contacto
            </Link>
            <a
              href={MAILTO}
              className="rounded-[9px] bg-[#1656c9] px-[18px] py-2.5 text-[15px] font-semibold text-white hover:bg-[#0f3d8f]"
            >
              Solicitar cotizacion
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-[#f6f8fc] to-white px-6 py-[72px]">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1656c9] hover:text-[#0f3d8f]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver a RentByte
              </Link>
              <p className="mt-6 inline-flex rounded-full border border-[#d6e2f7] bg-[#eaf0fb] px-3.5 py-2 text-[13px] font-semibold text-[#1656c9]">
                {page.kicker}
              </p>
              <h1 className="mt-6 max-w-[720px] text-balance font-display text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#10141c] sm:text-[46px] lg:text-[54px] lg:leading-[1.03]">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-[590px] text-[17px] leading-[1.6] text-[#4a5568] sm:text-[19px]">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#1656c9] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(22,86,201,0.5)] hover:bg-[#0f3d8f]"
                >
                  Solicitar cotizacion
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#detalles"
                  className="inline-flex items-center justify-center rounded-[10px] border border-[#d6dde8] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#2d3748] hover:border-[#1656c9] hover:text-[#1656c9]"
                >
                  Ver detalles
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-[#e4e9f1] bg-[#eaf0fb] shadow-[0_30px_60px_-30px_rgba(16,20,28,0.3)]">
                <Image
                  src={page.image}
                  alt={page.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="detalles" className="px-6 py-[84px]" aria-labelledby="details-heading">
          <div className="mx-auto grid max-w-[1200px] gap-12 min-[900px]:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">Que incluye</p>
              <h2
                id="details-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Servicio de {page.title.toLowerCase()} con soporte corporativo
              </h2>
              <div className="mt-7 space-y-3">
                {page.benefits.map((benefit) => (
                  <p key={benefit} className="flex gap-2 text-[15.5px] leading-[1.65] text-[#4a5568]">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#1656c9]" aria-hidden="true" />
                    {benefit}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-5 min-[640px]:grid-cols-3">
              {page.details.map((detail) => (
                <article key={detail.title} className="rounded-2xl border border-[#e7ebf2] bg-white p-6">
                  <h3 className="font-display text-[19px] font-bold tracking-[-0.02em] text-[#14181f]">
                    {detail.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[#556072]">{detail.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafd] px-6 py-[84px]" aria-labelledby="proof-heading">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[720px]">
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">
                Alcance y confianza
              </p>
              <h2
                id="proof-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Informacion concreta para compras, operaciones y TI
              </h2>
            </div>
            <div className="mt-10 grid gap-5 min-[720px]:grid-cols-2 min-[1040px]:grid-cols-4">
              {page.proofPoints.map((item) => (
                <article key={item.label} className="rounded-2xl border border-[#e7ebf2] bg-white p-6">
                  <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">{item.label}</p>
                  <p className="mt-4 text-[15px] leading-[1.65] text-[#556072]">{item.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f1a2e] px-6 py-[84px]" aria-labelledby="cases-heading">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[720px]">
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#7fa8f5]">Casos de uso</p>
              <h2
                id="cases-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[36px]"
              >
                Escenarios donde conviene arrendar
              </h2>
            </div>
            <div className="mt-10 grid gap-3 min-[640px]:grid-cols-2 min-[960px]:grid-cols-4">
              {page.useCases.map((useCase) => (
                <div key={useCase} className="rounded-2xl border border-[#24324c] bg-[#12203a] p-5">
                  <p className="text-[15px] font-semibold leading-[1.55] text-white">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafd] px-6 py-[84px]" aria-labelledby="faq-heading">
          <div className="mx-auto grid max-w-[1200px] gap-10 min-[900px]:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">Preguntas frecuentes</p>
              <h2
                id="faq-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Preguntas sobre {page.title.toLowerCase()}
              </h2>
            </div>
            <div className="space-y-3">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-[#e7ebf2] bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-[18px] font-bold tracking-[-0.02em] text-[#14181f] marker:hidden">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf0fb] text-[#1656c9] transition-transform duration-150 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[15.5px] leading-[1.65] text-[#556072]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#e7ebf2] bg-white px-6 py-[60px]" aria-labelledby="related-heading">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">Tambien te puede interesar</p>
            <h2
              id="related-heading"
              className="mt-3 font-display text-[24px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[30px]"
            >
              Otras paginas relacionadas
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.relatedPages.map((related) => (
                <Link
                  key={related.href}
                  href={related.href}
                  className="rounded-2xl border border-[#e7ebf2] bg-[#f8fafd] p-6 transition-all hover:border-[#1656c9] hover:shadow-[0_8px_24px_-12px_rgba(22,86,201,0.2)]"
                >
                  <h3 className="font-display text-[17px] font-bold tracking-[-0.02em] text-[#14181f]">{related.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#556072]">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="quote-form" className="px-6 py-[84px]" aria-labelledby="contact-heading">
          <div className="mx-auto grid max-w-[1200px] gap-8 rounded-[22px] bg-[#0f1a2e] p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div>
              <h2
                id="contact-heading"
                className="font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[40px]"
              >
                Solicita una cotizacion para tu empresa
              </h2>
              <p className="mt-4 max-w-[560px] text-[18px] leading-[1.6] text-[#b9c5da]">
                Comparte cantidad, plazo, ubicacion y requerimientos tecnicos. RentByte responde por correo con una propuesta comercial y tecnica.
              </p>
              <div className="mt-8 space-y-3 text-[15px] leading-[1.65] text-[#cdd8ea]">
                <p>Correo comercial: <a href={MAILTO} className="font-semibold text-white hover:text-[#7fa8f5]">{EMAIL}</a></p>
                <p>Respuesta estimada: propuesta inicial en menos de 48 horas habiles.</p>
                <p>Cobertura: Santiago y evaluacion de requerimientos a nivel nacional.</p>
                <p>
                  Enlaces utiles: <Link href="/contacto" className="font-semibold text-white hover:text-[#7fa8f5]">Contacto</Link>,{" "}
                  <Link href="/privacy" className="font-semibold text-white hover:text-[#7fa8f5]">Privacidad</Link> y{" "}
                  <Link href="/terminos" className="font-semibold text-white hover:text-[#7fa8f5]">Terminos</Link>.
                </p>
              </div>
            </div>
            <QuoteForm defaultEquipmentType={page.defaultEquipmentType} />
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e7ebf2] bg-white px-6 py-10" role="contentinfo">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[320px]">
              <Logo />
              <p className="mt-4 text-sm leading-[1.65] text-[#6b7688]">
                Soluciones tecnologicas de arriendo para empresas, licitaciones e instituciones en Chile.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Navegacion del pie de pagina">
              <Link href="/" className="text-sm font-medium text-[#4a5568] transition-colors duration-150 hover:text-[#1656c9]">
                Inicio
              </Link>
              <Link href="/contacto" className="text-sm font-medium text-[#4a5568] transition-colors duration-150 hover:text-[#1656c9]">
                Contacto
              </Link>
              <Link href="/privacy" className="text-sm font-medium text-[#4a5568] transition-colors duration-150 hover:text-[#1656c9]">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-sm font-medium text-[#4a5568] transition-colors duration-150 hover:text-[#1656c9]">
                Terminos
              </Link>
            </nav>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-[#e7ebf2] pt-6 text-[13px] text-[#8593ac] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 RentByte · Chile</p>
            <p>Arriendo de equipos informaticos · B2B · B2G</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
