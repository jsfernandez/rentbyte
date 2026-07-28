export type SeoServicePage = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  kicker: string
  intro: string
  image: string
  imageAlt: string
  benefits: string[]
  useCases: string[]
  details: Array<{
    title: string
    description: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const seoServicePages: Record<string, SeoServicePage> = {
  "arriendo-computadores-empresas": {
    slug: "arriendo-computadores-empresas",
    title: "Arriendo de computadores para empresas",
    metaTitle: "Arriendo de Computadores para Empresas en Chile",
    metaDescription:
      "Arriendo de computadores para empresas en Chile. Equipos de escritorio configurados, soporte, mantención, contratos flexibles y cotización rápida.",
    h1: "Arriendo de computadores para empresas en Chile",
    kicker: "Computadores corporativos",
    intro:
      "RentByte arrienda computadores de escritorio para empresas que necesitan habilitar puestos de trabajo, proyectos temporales, reemplazos o crecimiento operacional sin comprar hardware.",
    image: "/images/hero.jpg",
    imageAlt: "Computadores preparados para arriendo corporativo",
    benefits: [
      "Equipos configurados según el estándar de la empresa",
      "Soporte y mantención durante la vigencia del contrato",
      "Contratos flexibles para proyectos de corto o mediano plazo",
      "Cotización técnica y comercial según cantidad, plazo y configuración",
    ],
    useCases: [
      "Puestos administrativos y operativos",
      "Capacitaciones y salas de entrenamiento",
      "Reemplazo temporal de equipos propios",
      "Expansión rápida de dotación",
    ],
    details: [
      {
        title: "Configuración lista para operar",
        description:
          "Los computadores pueden entregarse con sistema, software corporativo, perfiles de usuario y políticas definidas por el área TI.",
      },
      {
        title: "Continuidad operacional",
        description:
          "El servicio puede considerar mantención, diagnóstico y reemplazo para reducir interrupciones en la operación diaria.",
      },
      {
        title: "Arriendo sin inversión inicial",
        description:
          "Permite transformar compra de hardware en gasto operacional predecible, ajustado al ciclo de vida del proyecto.",
      },
    ],
    faqs: [
      {
        question: "¿Qué tipo de computadores se pueden arrendar?",
        answer:
          "Se evalúan computadores de escritorio para tareas administrativas, operación, atención, capacitación o proyectos específicos, según requerimientos técnicos.",
      },
      {
        question: "¿Los computadores se entregan configurados?",
        answer:
          "Sí. La propuesta puede considerar configuración inicial, software, políticas de seguridad y perfiles definidos por la empresa.",
      },
      {
        question: "¿El arriendo incluye soporte técnico?",
        answer:
          "Sí. El alcance puede incluir soporte, mantención y reemplazo de equipos durante el contrato.",
      },
    ],
  },
  "arriendo-notebooks-empresas": {
    slug: "arriendo-notebooks-empresas",
    title: "Arriendo de notebooks para empresas",
    metaTitle: "Arriendo de Notebooks para Empresas en Chile",
    metaDescription:
      "Arriendo de notebooks para empresas en Chile. Equipos portátiles corporativos para proyectos, trabajo híbrido, capacitaciones y reemplazos temporales.",
    h1: "Arriendo de notebooks para empresas en Chile",
    kicker: "Notebooks corporativos",
    intro:
      "RentByte entrega notebooks en arriendo para empresas que necesitan movilidad, trabajo híbrido, dotación temporal o equipos listos para operar en proyectos internos.",
    image: "/images/hero.jpg",
    imageAlt: "Notebooks corporativos preparados para arriendo",
    benefits: [
      "Notebooks configurados para usuarios corporativos",
      "Solución para trabajo híbrido, proyectos y capacitaciones",
      "Soporte y mantención durante el arriendo",
      "Plazos ajustados a la necesidad operativa",
    ],
    useCases: [
      "Trabajo remoto o híbrido",
      "Equipos para capacitaciones",
      "Onboarding de nuevos colaboradores",
      "Reemplazos por contingencia o renovación",
    ],
    details: [
      {
        title: "Movilidad empresarial",
        description:
          "Los notebooks permiten habilitar equipos de trabajo distribuidos sin comprometer capital en compra de hardware.",
      },
      {
        title: "Entrega con estándar corporativo",
        description:
          "Cada equipo puede prepararse con software, usuarios, seguridad y configuración solicitada por el área TI.",
      },
      {
        title: "Escalabilidad por demanda",
        description:
          "El arriendo permite aumentar o cubrir dotación temporal según proyectos, temporadas o licitaciones.",
      },
    ],
    faqs: [
      {
        question: "¿Arriendan notebooks para empresas por periodos cortos?",
        answer:
          "Sí. Se evalúan periodos según cantidad de equipos, configuración, ubicación y alcance de soporte requerido.",
      },
      {
        question: "¿Sirve para capacitaciones o proyectos temporales?",
        answer:
          "Sí. El arriendo de notebooks es útil para capacitaciones, implementaciones, trabajo híbrido y necesidades temporales de dotación.",
      },
      {
        question: "¿Incluye mantención o reemplazo?",
        answer:
          "La propuesta puede incluir soporte técnico, mantención y reemplazo según las condiciones acordadas.",
      },
    ],
  },
  "arriendo-servidores-empresas": {
    slug: "arriendo-servidores-empresas",
    title: "Arriendo de servidores para empresas",
    metaTitle: "Arriendo de Servidores para Empresas en Chile",
    metaDescription:
      "Arriendo de servidores para empresas en Chile. Infraestructura TI bajo demanda para continuidad operativa, pruebas, sistemas y proyectos corporativos.",
    h1: "Arriendo de servidores para empresas en Chile",
    kicker: "Servidores e infraestructura TI",
    intro:
      "RentByte arrienda servidores e infraestructura TI para empresas que necesitan capacidad bajo demanda, continuidad operativa o ambientes temporales sin adquirir equipamiento propio.",
    image: "/images/differentiators.jpg",
    imageAlt: "Servidor e infraestructura TI para empresas",
    benefits: [
      "Infraestructura para proyectos de corto y mediano plazo",
      "Apoyo técnico para definición y configuración",
      "Alternativa flexible frente a compra de hardware",
      "Cotización según capacidad, plazo y requerimientos técnicos",
    ],
    useCases: [
      "Ambientes de prueba o implementación",
      "Continuidad operativa",
      "Migraciones y proyectos TI",
      "Capacidad temporal para sistemas internos",
    ],
    details: [
      {
        title: "Capacidad bajo demanda",
        description:
          "El arriendo permite disponer de infraestructura para periodos acotados sin asumir compra, depreciación ni almacenamiento posterior.",
      },
      {
        title: "Soporte técnico especializado",
        description:
          "La propuesta puede incluir configuración, validación de requerimientos y apoyo técnico durante la vigencia del contrato.",
      },
      {
        title: "Enfoque en continuidad",
        description:
          "Los servidores se pueden orientar a continuidad operativa, contingencias, pruebas o implementación de nuevos sistemas.",
      },
    ],
    faqs: [
      {
        question: "¿Qué servidores se pueden arrendar?",
        answer:
          "Se evalúan servidores e infraestructura TI según capacidad, uso, plazo, ubicación y requerimientos técnicos de la empresa.",
      },
      {
        question: "¿Sirve para proyectos temporales?",
        answer:
          "Sí. El arriendo de servidores es útil para pruebas, migraciones, continuidad operativa y proyectos de implementación.",
      },
      {
        question: "¿Incluye configuración?",
        answer:
          "La propuesta puede incluir configuración inicial y apoyo técnico según el alcance acordado.",
      },
    ],
  },
}

export const seoServicePageList = Object.values(seoServicePages)
