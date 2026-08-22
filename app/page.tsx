import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { QuoteForm } from "@/components/quote-form"
import {
  ArrowRight,
  Check,
  ClipboardList,
  Database,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Server,
  Settings,
  ShieldCheck,
} from "lucide-react"

const SITE_URL = "https://rentbyte.cl"
const EMAIL = "contacto@rentbyte.cl"
const MAILTO = `mailto:${EMAIL}`

export const metadata: Metadata = {
  title: "Arriendo TI para Empresas en Chile",
  description:
    "Arrienda computadores, notebooks y servidores para tu empresa en Chile. Equipos configurados, soporte tecnico, mantencion y propuesta en 48 horas.",
  keywords: [
    "arriendo ti para empresas chile",
    "arriendo de computadores para empresas",
    "arriendo de notebooks para empresas",
    "arriendo de servidores para empresas",
    "arriendo equipos computacionales",
    "arriendo equipos ti santiago",
    "arriendo infraestructura ti chile",
    "licitacion arriendo computadores",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Arriendo TI para Empresas en Chile | RentByte",
    description:
      "Arrienda computadores, notebooks y servidores para tu empresa en Chile con soporte tecnico, mantencion y propuesta en 48 horas.",
    url: SITE_URL,
    siteName: "RentByte",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RentByte - Arriendo TI para empresas en Chile",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arriendo TI para Empresas en Chile | RentByte",
    description:
      "Arrienda computadores, notebooks y servidores para tu empresa en Chile con soporte tecnico, mantencion y propuesta en 48 horas.",
    images: ["/twitter-image"],
  },
}

const navItems = [
  { label: "Servicios", href: "#services" },
  { label: "Escenarios", href: "#scenarios" },
  { label: "Por que RentByte", href: "#why" },
  { label: "Contacto", href: "#quote-form" },
]

const audiences = [
  { title: "Empresas", subtitle: "Sector privado" },
  { title: "Instituciones publicas", subtitle: "Organismos del Estado" },
  { title: "Licitaciones", subtitle: "Procesos formales" },
  { title: "Convenios", subtitle: "Abastecimiento y compras" },
]

const services = [
  {
    icon: Monitor,
    title: "Arriendo para puestos de trabajo",
    description:
      "Computadores y notebooks configurados segun el perfil del usuario, el plazo del proyecto y la politica TI de tu empresa.",
  },
  {
    icon: ClipboardList,
    title: "Licitaciones y compras formales",
    description:
      "Propuestas tecnicas y comerciales pensadas para areas de compras, abastecimiento, auditoria y procesos de evaluacion.",
  },
  {
    icon: Database,
    title: "Infraestructura TI bajo demanda",
    description:
      "Servidores y capacidad temporal para continuidad operativa, pruebas, migraciones e implementaciones de sistemas.",
  },
  {
    icon: Settings,
    title: "Configuracion y despliegue",
    description:
      "Entrega de equipos listos para operar, con preparacion corporativa, inventario y coordinacion de soporte.",
  },
]

const equipmentServices = [
  {
    icon: Monitor,
    title: "Arriendo de computadores para empresas",
    href: "/arriendo-computadores-empresas",
    description:
      "Equipos de escritorio, all-in-one y estaciones de trabajo para puestos administrativos, operativos y tecnicos.",
  },
  {
    icon: Laptop,
    title: "Arriendo de notebooks para empresas",
    href: "/arriendo-notebooks-empresas",
    description:
      "Notebooks corporativos para trabajo hibrido, capacitaciones, onboarding y crecimiento temporal de dotacion.",
  },
  {
    icon: Server,
    title: "Arriendo de servidores para empresas",
    href: "/arriendo-servidores-empresas",
    description:
      "Infraestructura TI para continuidad operativa, pruebas, migraciones y ambientes dedicados bajo demanda.",
  },
]

const scenarioPages = [
  {
    href: "/arriendo-equipos-computacionales",
    title: "Equipos computacionales",
    description: "Cobertura general para computadores, notebooks y equipamiento TI en empresas.",
  },
  {
    href: "/arriendo-computadores-santiago",
    title: "Computadores en Santiago",
    description: "Despachos y soporte coordinados para oficinas, sucursales y proyectos en la RM.",
  },
  {
    href: "/arriendo-notebooks-santiago",
    title: "Notebooks en Santiago",
    description: "Movilidad corporativa para trabajo hibrido, onboarding y capacitacion en la RM.",
  },
  {
    href: "/arriendo-equipos-para-licitaciones",
    title: "Equipos para licitaciones",
    description: "Propuestas para procesos formales de compra, abastecimiento y evaluacion tecnica.",
  },
  {
    href: "/arriendo-equipos-para-capacitaciones",
    title: "Equipos para capacitaciones",
    description: "Lotes temporales para cursos, talleres, onboarding y programas de entrenamiento.",
  },
  {
    href: "/arriendo-equipos-para-trabajo-hibrido",
    title: "Trabajo hibrido",
    description: "Equipos preparados para usuarios remotos, mixtos y operaciones distribuidas.",
  },
  {
    href: "/arriendo-infraestructura-ti",
    title: "Infraestructura TI",
    description: "Capacidad dedicada para continuidad, pruebas, implementaciones y soporte temporal.",
  },
  {
    href: "/arriendo-computadores-sector-publico",
    title: "Sector publico",
    description: "Arriendo de computadores para instituciones con procesos formales y trazabilidad.",
  },
  {
    href: "/arriendo-equipos-por-proyecto",
    title: "Equipos por proyecto",
    description: "Dotacion temporal para implementaciones, aperturas, campanas y picos operativos.",
  },
]

const trustSignals = [
  {
    icon: Mail,
    title: "Propuesta inicial en 48 horas",
    description: "Respuesta comercial y tecnica para acelerar evaluaciones internas y compras corporativas.",
  },
  {
    icon: MapPin,
    title: "Cobertura desde Santiago",
    description: "Atencion de requerimientos en la RM y evaluacion de despliegues en otras comunas y regiones.",
  },
  {
    icon: ShieldCheck,
    title: "Soporte y continuidad",
    description: "Mantencion, reemplazo y seguimiento segun el alcance definido para cada contrato o proyecto.",
  },
  {
    icon: ClipboardList,
    title: "Compras y licitaciones",
    description: "Condiciones claras para areas de compras, operaciones, TI y procesos formales de abastecimiento.",
  },
]

const configurationProfiles = [
  {
    title: "Computadores corporativos",
    description:
      "Perfiles administrativos, operativos, all-in-one y estaciones de trabajo segun uso, monitores y perifericos requeridos.",
  },
  {
    title: "Notebooks por perfil",
    description:
      "Equipos para usuarios administrativos, ejecutivos, desarrollo, capacitacion, terreno y trabajo remoto con estandar corporativo.",
  },
  {
    title: "Infraestructura temporal",
    description:
      "Servidores y capacidad bajo demanda para continuidad operativa, laboratorios, migraciones y proyectos de implementacion.",
  },
]

const reasons = [
  {
    number: "01",
    title: "Cumplimiento comercial",
    description:
      "Propuestas claras, documentacion de alcance y un modelo pensado para compras corporativas y procesos formales.",
  },
  {
    number: "02",
    title: "Soporte dedicado",
    description:
      "Coordinacion de incidencias, mantencion y reemplazo para sostener continuidad operacional durante el arriendo.",
  },
  {
    number: "03",
    title: "Plazos ajustables",
    description:
      "Desde eventos o capacitaciones de corta duracion hasta proyectos de varios meses o renovaciones por etapas.",
  },
  {
    number: "04",
    title: "Capex a Opex",
    description:
      "Reduce compra de activos para necesidades temporales y mejora la flexibilidad presupuestaria del negocio.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Levantamiento",
    description: "Revisamos cantidad, tipo de equipo, plazo, comuna y cualquier requerimiento tecnico o comercial.",
  },
  {
    number: "02",
    title: "Propuesta",
    description: "Enviamos una cotizacion con alcance, perfiles de equipos, soporte y condiciones relevantes del servicio.",
  },
  {
    number: "03",
    title: "Preparacion y entrega",
    description: "Coordinamos configuracion, etiquetado, despacho y habilitacion segun el cronograma del cliente.",
  },
  {
    number: "04",
    title: "Soporte durante el arriendo",
    description: "Seguimiento, mantencion y reemplazo acordado para sostener la operacion de la empresa.",
  },
]

const faqs = [
  {
    question: "RentByte arrienda computadores, notebooks y servidores para empresas?",
    answer:
      "Si. RentByte atiende requerimientos de computadores, notebooks, servidores e infraestructura TI para empresas en Chile, segun cantidad, perfil tecnico y plazo.",
  },
  {
    question: "El arriendo incluye soporte y mantencion?",
    answer:
      "Puede incluir soporte tecnico, mantencion y reemplazo, de acuerdo con el alcance definido en la propuesta comercial y el contrato.",
  },
  {
    question: "Puedo arrendar equipos por proyecto, capacitacion o crecimiento temporal?",
    answer:
      "Si. El modelo esta orientado precisamente a escenarios temporales, despliegues por etapas, licitaciones, onboarding, capacitaciones y continuidad operativa.",
  },
  {
    question: "Atienden empresas fuera de Santiago?",
    answer:
      "Si. La evaluacion considera cantidad de equipos, ubicacion, soporte requerido, plazos y condiciones de despliegue para coordinar proyectos fuera de la RM.",
  },
]

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

function Header() {
  return (
    <header className="sticky top-0 z-50 h-[68px] border-b border-[#e7ebf2] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <a href="#top" className="shrink-0" aria-label="Ir al inicio">
          <Logo />
        </a>

        <nav className="hidden items-center gap-[30px] min-[960px]:flex" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-[#4a5568] transition-colors duration-150 hover:text-[#1656c9]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#quote-form"
            className="rounded-[9px] bg-[#1656c9] px-[18px] py-2.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#0f3d8f]"
          >
            Solicitar cotizacion
          </a>
        </nav>

        <details className="group relative min-[960px]:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-[9px] border border-[#d6dde8] bg-white text-[#10141c] marker:hidden">
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Abrir navegacion</span>
          </summary>
          <nav className="absolute right-0 top-12 w-[240px] rounded-2xl border border-[#e7ebf2] bg-white p-3 shadow-[0_18px_40px_-18px_rgba(16,20,28,0.28)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#4a5568] hover:bg-[#f6f8fc] hover:text-[#1656c9]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#quote-form"
              className="mt-2 block rounded-[9px] bg-[#1656c9] px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#0f3d8f]"
            >
              Solicitar cotizacion
            </a>
          </nav>
        </details>
      </div>
    </header>
  )
}

export default function RentBytePage() {
  return (
    <div id="top" className="min-h-dvh bg-white font-sans text-[#10141c]">
      <JsonLd />
      <Header />

      <main>
        <section className="bg-gradient-to-b from-[#f6f8fc] to-white">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-16 pt-[72px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d6e2f7] bg-[#eaf0fb] px-3.5 py-2 text-[13px] font-semibold text-[#1656c9]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#1656c9]" />
                Arriendo TI · B2B &amp; B2G · Chile
              </div>

              <h1 className="mt-6 max-w-[660px] text-balance font-display text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#10141c] sm:text-[46px] lg:text-[54px] lg:leading-[1.03]">
                Arriendo TI para empresas en Chile, con equipos listos para operar
              </h1>

              <p className="mt-6 max-w-[560px] text-[17px] leading-[1.55] text-[#4a5568] sm:text-[19px]">
                Arrienda computadores, notebooks y servidores para proyectos, continuidad operativa, capacitaciones o crecimiento temporal. RentByte prepara, entrega y soporta los equipos segun tu necesidad.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#1656c9] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(22,86,201,0.5)] transition-colors duration-150 hover:bg-[#0f3d8f]"
                >
                  Solicitar cotizacion
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-[10px] border border-[#d6dde8] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#2d3748] transition-all duration-150 hover:border-[#1656c9] hover:text-[#1656c9]"
                >
                  Ver servicios
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#4a5568]">
                {[
                  "Propuesta inicial en 48 horas",
                  "Soporte y mantencion segun alcance",
                  "Cobertura comercial para empresas en Chile",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-[#1656c9]" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-[#e4e9f1] bg-[#eaf0fb] shadow-[0_30px_60px_-30px_rgba(16,20,28,0.3)]">
                <Image
                  src="/images/hero.jpg"
                  alt="Equipos informaticos RentByte"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-[22px] left-4 flex items-center gap-3 rounded-2xl border border-[#e7ebf2] bg-white p-4 shadow-[0_18px_40px_-18px_rgba(16,20,28,0.28)] sm:-left-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-[#eaf0fb] font-display text-[15px] font-extrabold text-[#1656c9]">
                  48h
                </span>
                <span>
                  <strong className="block font-display text-[15px] font-bold tracking-[-0.02em] text-[#10141c]">
                    Propuesta en 48 horas
                  </strong>
                  <span className="text-[13px] text-[#6b7688]">Tecnica y comercial, sin compromiso</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[1200px] px-6 pb-10 pt-2">
            <div className="grid overflow-hidden rounded-[14px] border border-[#e7ebf2] bg-[#eef1f6] min-[560px]:grid-cols-2 min-[900px]:grid-cols-4">
              {audiences.map((audience) => (
                <div key={audience.title} className="bg-white px-5 py-5">
                  <h2 className="font-display text-base font-bold tracking-[-0.02em] text-[#10141c]">{audience.title}</h2>
                  <p className="mt-1 text-[13px] text-[#6b7688]">{audience.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-[84px]" aria-labelledby="services-heading">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">Servicios</p>
            <div className="mt-3 max-w-[760px]">
              <h2
                id="services-heading"
                className="font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Soluciones de arriendo tecnologico para empresas y procesos formales
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#4a5568]">
                Disenamos propuestas segun cantidad de equipos, nivel de configuracion, comuna, plazo y soporte esperado por tu operacion.
              </p>
            </div>

            <div className="mt-11 grid gap-5 min-[720px]:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-[#e7ebf2] bg-white p-[30px] transition-all duration-150 hover:border-[#c9d6ec] hover:shadow-[0_14px_30px_-20px_rgba(16,20,28,0.35)]"
                >
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[11px] bg-[#eaf0fb] text-[#1656c9]">
                    <service.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-[21px] font-bold tracking-[-0.02em] text-[#14181f]">{service.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-[1.65] text-[#556072]">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafd] px-6 py-[84px]" aria-labelledby="equipment-heading">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[760px]">
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">Servicios principales</p>
              <h2
                id="equipment-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Computadores, notebooks y servidores con foco empresarial
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#4a5568]">
                Cada pagina de servicio detalla escenarios, configuraciones referenciales, soporte y preguntas frecuentes para compras, operaciones y TI.
              </p>
            </div>

            <div className="mt-11 grid gap-5 min-[760px]:grid-cols-3">
              {equipmentServices.map((service) => (
                <article
                  key={service.href}
                  className="rounded-2xl border border-[#e7ebf2] bg-white p-[30px] transition-all duration-150 hover:border-[#c9d6ec] hover:shadow-[0_14px_30px_-20px_rgba(16,20,28,0.35)]"
                >
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[11px] bg-[#eaf0fb] text-[#1656c9]">
                    <service.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-[21px] font-bold tracking-[-0.02em] text-[#14181f]">{service.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-[1.65] text-[#556072]">{service.description}</p>
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#1656c9] hover:text-[#0f3d8f]"
                  >
                    Ver servicio
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="scenarios" className="px-6 py-[84px]" aria-labelledby="scenarios-heading">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[820px]">
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">Cobertura SEO y comercial</p>
              <h2
                id="scenarios-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Paginas especificas para escenarios reales de compra empresarial
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#4a5568]">
                En lugar de repetir paginas casi identicas, RentByte ahora cubre escenarios con necesidades, condiciones y casos de uso propios.
              </p>
            </div>

            <div className="mt-11 grid gap-5 min-[720px]:grid-cols-2 min-[1040px]:grid-cols-3">
              {scenarioPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-2xl border border-[#e7ebf2] bg-white p-6 transition-all duration-150 hover:border-[#1656c9] hover:shadow-[0_14px_30px_-20px_rgba(16,20,28,0.28)]"
                >
                  <h3 className="font-display text-[20px] font-bold tracking-[-0.02em] text-[#14181f]">{page.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[#556072]">{page.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#1656c9]">
                    Ver pagina
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafd] px-6 py-[84px]" aria-labelledby="trust-heading">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[760px]">
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">Confianza B2B</p>
              <h2
                id="trust-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Senales visibles para equipos de compras, operaciones y TI
              </h2>
            </div>
            <div className="mt-11 grid gap-5 min-[720px]:grid-cols-2 min-[1040px]:grid-cols-4">
              {trustSignals.map((signal) => (
                <article key={signal.title} className="rounded-2xl border border-[#e7ebf2] bg-white p-6">
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[11px] bg-[#eaf0fb] text-[#1656c9]">
                    <signal.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-[20px] font-bold tracking-[-0.02em] text-[#14181f]">{signal.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[#556072]">{signal.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-[84px]" aria-labelledby="profiles-heading">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[760px]">
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">Configuraciones referenciales</p>
              <h2
                id="profiles-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Equipos segun perfil, proyecto y continuidad operativa
              </h2>
            </div>
            <div className="mt-11 grid gap-5 min-[760px]:grid-cols-3">
              {configurationProfiles.map((profile) => (
                <article key={profile.title} className="rounded-2xl border border-[#e7ebf2] bg-white p-6">
                  <h3 className="font-display text-[20px] font-bold tracking-[-0.02em] text-[#14181f]">{profile.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[#556072]">{profile.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="bg-[#0f1a2e] px-6 py-[84px]" aria-labelledby="why-heading">
          <div className="mx-auto grid max-w-[1200px] gap-12 min-[720px]:grid-cols-[0.85fr_1.15fr] min-[720px]:gap-14">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#7fa8f5]">Por que RentByte</p>
              <h2
                id="why-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[36px]"
              >
                El respaldo de quien conoce el equipo por dentro
              </h2>
              <p className="mt-5 text-[17px] leading-[1.65] text-[#aab6cc]">
                Flexibilidad operacional con una propuesta pensada para areas de compras, TI y operaciones que necesitan velocidad, trazabilidad y soporte real.
              </p>
              <div className="relative mt-8 aspect-[16/11] overflow-hidden rounded-2xl border border-[#24324c] bg-[#12203a]">
                <Image
                  src="/images/differentiators.jpg"
                  alt="Soporte tecnico RentByte"
                  fill
                  sizes="(min-width: 768px) 410px, calc(100vw - 48px)"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid overflow-hidden rounded-2xl bg-[#24324c] min-[560px]:grid-cols-2">
              {reasons.map((reason) => (
                <article key={reason.number} className="bg-[#12203a] p-[30px_26px]">
                  <p className="font-display text-[15px] font-extrabold tracking-[-0.02em] text-[#7fa8f5]">{reason.number}</p>
                  <h3 className="mt-4 font-display text-[19px] font-bold tracking-[-0.02em] text-white">{reason.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-[#9fabc2]">{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-6 py-[84px]" aria-labelledby="process-heading">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto max-w-[720px] text-center">
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1656c9]">Proceso</p>
              <h2
                id="process-heading"
                className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#14181f] sm:text-[38px]"
              >
                Como trabajamos
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#4a5568]">
                Un proceso simple para transformar un requerimiento tecnico en una propuesta de arriendo clara y ejecutable.
              </p>
            </div>

            <div className="mt-11 grid gap-5 min-[560px]:grid-cols-2 min-[900px]:grid-cols-4">
              {processSteps.map((step) => (
                <article key={step.number}>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xl font-extrabold tracking-[-0.02em] text-[#1656c9]">{step.number}</span>
                    <span className="h-px flex-1 bg-[#e7ebf2]" />
                  </div>
                  <h3 className="mt-6 font-display text-[19px] font-bold tracking-[-0.02em] text-[#14181f]">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[#556072]">{step.description}</p>
                </article>
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
                Dudas frecuentes antes de cotizar
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#4a5568]">
                Respuestas rapidas para equipos de compras, operaciones y TI que estan evaluando arriendo tecnologico.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-[#e7ebf2] bg-white p-5 transition-all duration-150 open:border-[#c9d6ec] open:shadow-[0_14px_30px_-20px_rgba(16,20,28,0.25)]"
                >
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

        <section id="quote-form" className="px-6 py-[84px]" aria-labelledby="contact-heading">
          <div className="mx-auto grid max-w-[1200px] gap-8 rounded-[22px] bg-[#0f1a2e] p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div>
              <h2
                id="contact-heading"
                className="font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[40px]"
              >
                Comienza tu cotizacion hoy
              </h2>
              <p className="mt-4 max-w-[620px] text-[18px] leading-[1.6] text-[#b9c5da]">
                Cuentanos las necesidades de tu organizacion, licitacion o proyecto. El formulario deja el correo prearmado con cantidad, tipo de equipo, plazo y comuna.
              </p>
              <div className="mt-8 space-y-4 text-[15px] leading-[1.65] text-[#cdd8ea]">
                <p>
                  <span className="block text-[13px] font-bold uppercase tracking-[0.08em] text-[#7fa8f5]">Correo comercial</span>
                  <a href={MAILTO} className="mt-1 inline-flex items-center gap-2 font-semibold text-white hover:text-[#7fa8f5]">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {EMAIL}
                  </a>
                </p>
                <p>
                  <span className="block text-[13px] font-bold uppercase tracking-[0.08em] text-[#7fa8f5]">Cobertura</span>
                  Atendemos empresas privadas, instituciones publicas y procesos de licitacion en todo Chile, con coordinacion operativa desde Santiago.
                </p>
                <p>
                  <span className="block text-[13px] font-bold uppercase tracking-[0.08em] text-[#7fa8f5]">Enlaces utiles</span>
                  <Link href="/contacto" className="font-semibold text-white hover:text-[#7fa8f5]">Contacto</Link>,{" "}
                  <Link href="/privacy" className="font-semibold text-white hover:text-[#7fa8f5]">Privacidad</Link> y{" "}
                  <Link href="/terminos" className="font-semibold text-white hover:text-[#7fa8f5]">Terminos</Link>.
                </p>
              </div>
            </div>

            <QuoteForm defaultEquipmentType="Computadores" title="Preparar solicitud de cotizacion" />
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e7ebf2] bg-white px-6 py-10" role="contentinfo">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[320px]">
              <Logo />
              <p className="mt-4 text-sm leading-[1.65] text-[#6b7688]">
                Soluciones tecnologicas de arriendo para empresas e instituciones publicas en Chile.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Navegacion del pie de pagina">
              <a href="#services" className="text-sm font-medium text-[#4a5568] transition-colors duration-150 hover:text-[#1656c9]">
                Servicios
              </a>
              <a href="#scenarios" className="text-sm font-medium text-[#4a5568] transition-colors duration-150 hover:text-[#1656c9]">
                Escenarios
              </a>
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
