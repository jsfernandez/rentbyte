const SITE_URL = "https://rentbyte.cl"
const EMAIL = "contacto@rentbyte.cl"

const faqItems = [
  {
    question: "¿RentByte arrienda computadores, notebooks y servidores para empresas?",
    answer:
      "Sí. RentByte entrega computadores, notebooks, servidores e infraestructura TI para empresas en Chile, con equipos configurados según los requerimientos de cada organización.",
  },
  {
    question: "¿El arriendo incluye soporte y mantención?",
    answer:
      "Sí. Los contratos pueden incluir soporte técnico, mantención, configuración inicial y reemplazo de equipos para mantener la continuidad operativa.",
  },
  {
    question: "¿Puedo arrendar equipos por proyecto o por varios meses?",
    answer:
      "Sí. Los plazos se ajustan a proyectos temporales, expansión de equipos, reemplazos, capacitaciones, licitaciones o necesidades operativas de mediano plazo.",
  },
  {
    question: "¿Atienden empresas fuera de Santiago?",
    answer:
      "RentByte evalúa requerimientos de empresas en Chile según cantidad de equipos, ubicación, plazos, soporte requerido y condiciones de entrega.",
  },
]

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "RentByte",
        alternateName: "RentByte Chile",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/placeholder-logo.png`,
          contentUrl: `${SITE_URL}/placeholder-logo.png`,
          width: 600,
          height: 600,
        },
        description:
          "Empresa chilena especializada en arriendo de computadores, notebooks, servidores e infraestructura TI para empresas.",
        email: EMAIL,
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: EMAIL,
            contactType: "sales",
            availableLanguage: ["es-CL", "es"],
            areaServed: "CL",
          },
          {
            "@type": "ContactPoint",
            email: EMAIL,
            contactType: "customer support",
            availableLanguage: ["es-CL", "es"],
            areaServed: "CL",
          },
        ],
        areaServed: {
          "@type": "Country",
          name: "Chile",
          identifier: "CL",
        },
        knowsAbout: [
          "Arriendo de computadores para empresas",
          "Arriendo de notebooks para empresas",
          "Arriendo de servidores para empresas",
          "Infraestructura TI bajo demanda",
          "Licitaciones públicas en Chile",
          "Convenios marco",
          "Soporte y mantención de equipos informáticos",
        ],
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "RentByte",
        url: SITE_URL,
        description:
          "Arriendo de computadores, notebooks y servidores para empresas en Chile.",
        inLanguage: "es-CL",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Arriendo de computadores, notebooks y servidores para empresas | RentByte",
        description:
          "Landing corporativa de RentByte para solicitar cotización de arriendo de computadores, notebooks y servidores para empresas en Chile.",
        inLanguage: "es-CL",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#service`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/#breadcrumb`,
        },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        name: "Arriendo de computadores, notebooks y servidores para empresas",
        alternateName: [
          "Arriendo de computadores para empresas",
          "Arriendo de notebooks para empresas",
          "Arriendo de servidores para empresas",
          "Arriendo de infraestructura TI",
        ],
        serviceType: "Arriendo de equipos informáticos B2B y B2G",
        category: "IT equipment rental",
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        url: SITE_URL,
        description:
          "Servicio de arriendo de computadores, notebooks, servidores, estaciones de trabajo e infraestructura TI para empresas en Chile.",
        areaServed: {
          "@type": "Country",
          name: "Chile",
          identifier: "CL",
        },
        audience: [
          {
            "@type": "BusinessAudience",
            audienceType: "Empresas privadas",
          },
          {
            "@type": "Audience",
            audienceType: "Instituciones públicas y organismos del Estado",
          },
          {
            "@type": "Audience",
            audienceType: "Equipos de compras, operaciones y TI",
          },
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: SITE_URL,
          availableLanguage: ["es-CL", "es"],
        },
        termsOfService: `${SITE_URL}/#process`,
        hasOfferCatalog: {
          "@id": `${SITE_URL}/#offer-catalog`,
        },
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/#offer-catalog`,
        name: "Servicios de arriendo tecnológico RentByte",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Arriendo de computadores para empresas",
              description:
                "Computadores de escritorio configurados para organizaciones, con soporte y mantención incluida.",
              url: `${SITE_URL}/arriendo-computadores-empresas`,
            },
            areaServed: "CL",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Arriendo de notebooks para empresas",
              description:
                "Notebooks corporativos para equipos híbridos, proyectos, capacitaciones y reemplazos temporales.",
              url: `${SITE_URL}/arriendo-notebooks-empresas`,
            },
            areaServed: "CL",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Arriendo de servidores para empresas",
              description:
                "Servidores e infraestructura TI para continuidad operativa, pruebas e implementación de sistemas.",
              url: `${SITE_URL}/arriendo-servidores-empresas`,
            },
            areaServed: "CL",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Implementación y configuración de equipos",
              description:
                "Entrega de equipos listos para operar con dominio, políticas de seguridad, software corporativo y perfiles de usuario.",
            },
            areaServed: "CL",
            availability: "https://schema.org/InStock",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
