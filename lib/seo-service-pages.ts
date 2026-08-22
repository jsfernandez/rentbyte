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
  keywords: string[]
  benefits: string[]
  useCases: string[]
  details: Array<{
    title: string
    description: string
  }>
  proofPoints: Array<{
    label: string
    value: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
  relatedPages: Array<{
    href: string
    title: string
    description: string
  }>
  defaultEquipmentType: string
}

export const seoServicePages: Record<string, SeoServicePage> = {
  "arriendo-computadores-empresas": {
    slug: "arriendo-computadores-empresas",
    title: "Arriendo de computadores para empresas",
    metaTitle: "Arriendo de Computadores para Empresas en Chile",
    metaDescription:
      "Arriendo de computadores para empresas en Chile. Equipos de escritorio, all-in-one y estaciones de trabajo con soporte, mantencion y contratos flexibles.",
    h1: "Arriendo de computadores para empresas en Chile",
    kicker: "Computadores corporativos",
    intro:
      "RentByte arrienda computadores de escritorio para empresas que necesitan habilitar puestos administrativos, operativos o tecnicos sin inmovilizar capital en compra de hardware.",
    image: "/images/hero.jpg",
    imageAlt: "Computadores preparados para arriendo corporativo",
    keywords: [
      "arriendo de computadores para empresas",
      "arriendo computadores empresas chile",
      "computadores corporativos en arriendo",
      "arriendo de equipos computacionales",
      "arriendo de estaciones de trabajo",
    ],
    benefits: [
      "Equipos de escritorio, all-in-one o estaciones de trabajo segun perfil del usuario.",
      "Entrega con imagen corporativa, software base y configuracion lista para operar.",
      "Soporte, mantencion y reemplazo coordinado para continuidad operacional.",
      "Cotizacion segun cantidad, plazo, comuna de entrega y nivel de configuracion.",
    ],
    useCases: [
      "Puestos administrativos y de atencion.",
      "Salas de capacitacion con despliegue temporal.",
      "Reemplazo de equipos propios durante renovaciones o fallas.",
      "Estaciones de trabajo para areas tecnicas o de disenio.",
    ],
    details: [
      {
        title: "Tipos de equipos",
        description:
          "Se evalua arriendo de torres de escritorio, all-in-one y workstations, segun uso, perifericos requeridos y espacio disponible en cada puesto.",
      },
      {
        title: "Configuraciones referenciales",
        description:
          "Las propuestas pueden considerar procesadores Intel Core o equivalentes, SSD, 8 a 32 GB de RAM, doble monitor y accesorios segun disponibilidad y perfil de uso.",
      },
      {
        title: "Arrendar versus comprar",
        description:
          "El arriendo reduce CAPEX, acelera habilitacion de puestos y permite ajustar dotacion por proyecto, crecimiento o contingencia sin gestionar depreciacion.",
      },
    ],
    proofPoints: [
      {
        label: "Cantidad y plazo",
        value: "Se cotiza desde necesidades puntuales hasta despliegues por proyecto o renovacion de dotacion.",
      },
      {
        label: "Cobertura",
        value: "Despachos y soporte coordinados desde Santiago, con evaluacion de requerimientos en otras regiones.",
      },
      {
        label: "Logistica",
        value: "Preparacion de usuarios, etiquetado, inventario y entrega alineada al proceso de TI del cliente.",
      },
      {
        label: "Compras corporativas",
        value: "Documentacion comercial y condiciones de servicio pensadas para areas de compras, operaciones y TI.",
      },
    ],
    faqs: [
      {
        question: "Que tipo de computadores se pueden arrendar?",
        answer:
          "Se evalua arriendo de computadores de escritorio, all-in-one y estaciones de trabajo segun el perfil tecnico, la cantidad requerida y el plazo del proyecto.",
      },
      {
        question: "Los computadores se entregan configurados?",
        answer:
          "Si. La propuesta puede considerar sistema operativo, software base, perfiles de usuario, politicas de seguridad y accesorios definidos por la empresa.",
      },
      {
        question: "Conviene arrendar en vez de comprar para proyectos temporales?",
        answer:
          "Si. El arriendo suele ser una mejor alternativa cuando la dotacion cambia rapido, el proyecto tiene plazo acotado o se requiere continuidad sin inmovilizar presupuesto.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-equipos-computacionales",
        title: "Arriendo de equipos computacionales",
        description: "Cobertura general para puestos de trabajo, movilidad y soporte corporativo.",
      },
      {
        href: "/arriendo-computadores-santiago",
        title: "Arriendo de computadores en Santiago",
        description: "Despliegues y soporte para empresas que operan en la RM.",
      },
      {
        href: "/arriendo-equipos-por-proyecto",
        title: "Arriendo de equipos por proyecto",
        description: "Dotacion temporal para implementaciones, picos operativos o continuidad.",
      },
    ],
    defaultEquipmentType: "Computadores",
  },
  "arriendo-notebooks-empresas": {
    slug: "arriendo-notebooks-empresas",
    title: "Arriendo de notebooks para empresas",
    metaTitle: "Arriendo de Notebooks para Empresas en Chile",
    metaDescription:
      "Arriendo de notebooks para empresas en Chile. Notebooks corporativos para trabajo hibrido, capacitaciones, onboarding y proyectos temporales.",
    h1: "Arriendo de notebooks para empresas en Chile",
    kicker: "Notebooks corporativos",
    intro:
      "RentByte entrega notebooks en arriendo para empresas que necesitan movilidad, trabajo remoto, capacitaciones o crecimiento de dotacion con equipos listos para operar.",
    image: "/images/hero.jpg",
    imageAlt: "Notebooks corporativos preparados para arriendo",
    keywords: [
      "arriendo de notebooks para empresas",
      "notebooks corporativos",
      "arriendo temporal de notebooks",
      "notebooks para capacitacion",
      "notebooks para trabajo hibrido",
    ],
    benefits: [
      "Notebooks corporativos para perfiles administrativos, ejecutivos, desarrollo, disenio y terreno.",
      "Entrega con software, usuarios, politicas y accesorios segun el estandar del cliente.",
      "Alternativa flexible para onboarding, reemplazos, licitaciones y proyectos temporales.",
      "Soporte, mantencion y coordinacion de reemplazos durante el arriendo.",
    ],
    useCases: [
      "Trabajo remoto o hibrido.",
      "Notebooks para capacitacion y entrenamiento.",
      "Onboarding de nuevos colaboradores.",
      "Cobertura de contingencias o renovaciones por etapas.",
    ],
    details: [
      {
        title: "Perfiles de uso",
        description:
          "Se puede estructurar una propuesta para usuarios administrativos, ejecutivos, desarrollo, disenio, fuerza en terreno o capacitaciones masivas.",
      },
      {
        title: "Preparacion corporativa",
        description:
          "Los equipos pueden entregarse con cuentas, cifrado, VPN, herramientas colaborativas y configuracion alineada a la politica de TI de la empresa.",
      },
      {
        title: "Escalabilidad temporal",
        description:
          "El arriendo ayuda a cubrir picos de contratacion, aperturas, proyectos y equipos remotos sin sobredimensionar compras permanentes.",
      },
    ],
    proofPoints: [
      {
        label: "Plazos",
        value: "Se revisan periodos cortos, medianos o renovables segun cantidad de notebooks y alcance de soporte.",
      },
      {
        label: "Categorias",
        value: "Propuestas para notebooks de productividad, ejecutivos, desarrollo y capacitacion segun disponibilidad.",
      },
      {
        label: "Cobertura",
        value: "Coordinacion de entrega en Santiago y evaluacion de despliegues fuera de la region Metropolitana.",
      },
      {
        label: "Operaciones distribuidas",
        value: "Pensado para empresas con trabajo remoto, sucursales, proyectos itinerantes o equipos hibridos.",
      },
    ],
    faqs: [
      {
        question: "Arriendan notebooks para empresas por periodos cortos?",
        answer:
          "Si. Se evalua cada requerimiento segun cantidad de equipos, configuracion, ubicacion y soporte esperado para el plazo solicitado.",
      },
      {
        question: "Sirve para capacitaciones o proyectos temporales?",
        answer:
          "Si. Es una alternativa habitual para capacitaciones, onboarding, proyectos de implementacion, equipos remotos y reemplazos de contingencia.",
      },
      {
        question: "Que perfiles de notebooks pueden considerar?",
        answer:
          "Se pueden cotizar perfiles referenciales para uso administrativo, ejecutivo, desarrollo, disenio o terreno, siempre segun disponibilidad y necesidad tecnica.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-notebooks-santiago",
        title: "Arriendo de notebooks en Santiago",
        description: "Soluciones para equipos hibridos, oficinas y despliegues en la RM.",
      },
      {
        href: "/arriendo-equipos-para-capacitaciones",
        title: "Arriendo de equipos para capacitaciones",
        description: "Preparacion de lotes temporales para cursos, talleres y entrenamientos.",
      },
      {
        href: "/arriendo-equipos-para-trabajo-hibrido",
        title: "Arriendo para trabajo hibrido",
        description: "Equipos configurados para usuarios remotos y operaciones distribuidas.",
      },
    ],
    defaultEquipmentType: "Notebooks",
  },
  "arriendo-servidores-empresas": {
    slug: "arriendo-servidores-empresas",
    title: "Arriendo de servidores para empresas",
    metaTitle: "Arriendo de Servidores para Empresas en Chile",
    metaDescription:
      "Arriendo de servidores para empresas en Chile. Infraestructura TI para continuidad operativa, pruebas, migraciones y ambientes dedicados bajo demanda.",
    h1: "Arriendo de servidores para empresas en Chile",
    kicker: "Servidores e infraestructura TI",
    intro:
      "RentByte evalua arriendo de servidores e infraestructura TI para empresas que necesitan capacidad temporal, continuidad operativa o ambientes dedicados sin adquirir hardware propio.",
    image: "/images/differentiators.jpg",
    imageAlt: "Servidor e infraestructura TI para empresas",
    keywords: [
      "arriendo de servidores para empresas",
      "arriendo infraestructura ti",
      "servidores para continuidad operativa",
      "servidores para pruebas y migraciones",
      "hardware dedicado en arriendo",
    ],
    benefits: [
      "Evaluacion de proyectos con hardware fisico, ambientes dedicados o infraestructura temporal segun alcance.",
      "Alternativa para pruebas, continuidad, migraciones e implementaciones sin compra de activos.",
      "Definicion tecnica segun CPU, RAM, almacenamiento, conectividad y sistemas compatibles.",
      "Apoyo comercial y tecnico para coordinar plazos, entrega, soporte y reemplazo.",
    ],
    useCases: [
      "Ambientes de prueba o QA.",
      "Continuidad operativa y contingencia.",
      "Migraciones o implementaciones de sistemas.",
      "Capacidad temporal para proyectos TI o licitaciones.",
    ],
    details: [
      {
        title: "Alcance del servicio",
        description:
          "La evaluacion puede considerar servidores fisicos o infraestructura dedicada segun objetivo del proyecto, capacidad requerida y condiciones de operacion.",
      },
      {
        title: "Variables tecnicas",
        description:
          "Se define una propuesta segun procesamiento, memoria, almacenamiento, conectividad, respaldo y compatibilidad con Windows Server, Linux o esquemas de virtualizacion.",
      },
      {
        title: "Continuidad y reemplazo",
        description:
          "El arriendo permite planificar contingencia, ambientes temporales y continuidad con soporte acordado para reducir riesgo operativo.",
      },
    ],
    proofPoints: [
      {
        label: "Capacidad",
        value: "Cotizacion segun requerimientos de CPU, RAM, almacenamiento y conectividad definidos con el cliente.",
      },
      {
        label: "Ubicacion y despliegue",
        value: "Se revisa destino, condiciones de operacion y soporte para ambientes en oficinas, proyectos o escenarios de contingencia.",
      },
      {
        label: "Compatibilidad",
        value: "Analisis de sistemas operativos, respaldos y virtualizacion necesarios para el servicio esperado.",
      },
      {
        label: "Casos empresariales",
        value: "Enfoque en continuidad operativa, pruebas, migraciones y proyectos de infraestructura temporal.",
      },
    ],
    faqs: [
      {
        question: "Arriendan hardware fisico, infraestructura dedicada o ambos?",
        answer:
          "Cada requerimiento se revisa segun el objetivo del proyecto. RentByte puede evaluar alternativas de hardware fisico o ambientes dedicados conforme a capacidad, plazo y soporte solicitado.",
      },
      {
        question: "Sirve para migraciones o continuidad operativa?",
        answer:
          "Si. El arriendo de servidores es util para contingencia, pruebas, migraciones y ambientes temporales que no justifican una compra permanente.",
      },
      {
        question: "Se puede definir compatibilidad tecnica antes de cotizar?",
        answer:
          "Si. La cotizacion considera informacion de sistemas, recursos y restricciones tecnicas para proponer una alternativa adecuada al proyecto.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-infraestructura-ti",
        title: "Arriendo de infraestructura TI",
        description: "Cobertura para capacidad dedicada, continuidad y proyectos de implementacion.",
      },
      {
        href: "/arriendo-equipos-por-proyecto",
        title: "Arriendo de equipos por proyecto",
        description: "Recursos temporales para implementaciones, pruebas y picos operativos.",
      },
      {
        href: "/arriendo-equipos-para-licitaciones",
        title: "Arriendo para licitaciones",
        description: "Documentacion y propuesta tecnica para procesos formales de compra.",
      },
    ],
    defaultEquipmentType: "Servidores",
  },
  "arriendo-equipos-computacionales": {
    slug: "arriendo-equipos-computacionales",
    title: "Arriendo de equipos computacionales",
    metaTitle: "Arriendo de Equipos Computacionales para Empresas en Chile",
    metaDescription:
      "Arriendo de equipos computacionales para empresas en Chile. Computadores, notebooks y equipos TI para proyectos, crecimiento operativo y continuidad.",
    h1: "Arriendo de equipos computacionales para empresas en Chile",
    kicker: "Cobertura comercial amplia",
    intro:
      "RentByte entrega soluciones de arriendo de equipos computacionales para empresas que necesitan habilitar puestos de trabajo, movilidad o infraestructura TI con soporte y plazos flexibles.",
    image: "/images/hero.jpg",
    imageAlt: "Equipos computacionales para empresas",
    keywords: [
      "arriendo de equipos computacionales",
      "arriendo equipos computacionales empresas",
      "arriendo de hardware empresarial",
      "arriendo de equipos ti chile",
      "arriendo equipos informaticos chile",
    ],
    benefits: [
      "Cobertura para computadores, notebooks y equipamiento asociado segun proyecto.",
      "Preparacion de lotes con configuracion corporativa y documentacion comercial.",
      "Soporte y mantencion para reducir friccion operativa durante el contrato.",
      "Modelo flexible para proyectos, expansiones, capacitaciones y contingencias.",
    ],
    useCases: [
      "Habilitacion rapida de nuevos puestos.",
      "Recambio temporal de dotacion.",
      "Implementaciones por proyecto o licitacion.",
      "Capacitaciones y operaciones distribuidas.",
    ],
    details: [
      {
        title: "Que equipos se evalua arrendar",
        description:
          "Segun el caso se pueden considerar computadores, notebooks y equipamiento complementario necesario para dejar los puestos operativos.",
      },
      {
        title: "Modelo comercial",
        description:
          "Cada propuesta se arma segun cantidad, perfil tecnico, plazo, ubicacion, soporte y nivel de preparacion requerido por la empresa.",
      },
      {
        title: "Continuidad operacional",
        description:
          "El arriendo ayuda a responder ante crecimiento, reemplazos o picos de demanda sin detener la operacion por falta de equipos.",
      },
    ],
    proofPoints: [
      {
        label: "Escenarios",
        value: "Pensado para compras corporativas, TI, operaciones, capacitacion y proyectos especiales.",
      },
      {
        label: "Cobertura",
        value: "Atencion de requerimientos desde Santiago con evaluacion de despliegues en otras comunas y regiones.",
      },
      {
        label: "Propuesta",
        value: "Cotizacion tecnica y comercial alineada a cantidad de equipos, plazo y nivel de servicio.",
      },
      {
        label: "Documentacion",
        value: "Condiciones claras para areas de compras, auditoria interna y procesos formales.",
      },
    ],
    faqs: [
      {
        question: "Incluye computadores y notebooks?",
        answer:
          "Si. RentByte puede evaluar requerimientos de computadores, notebooks y otros equipos relacionados segun el alcance del proyecto empresarial.",
      },
      {
        question: "Puedo cotizar equipos por proyecto o por renovacion de dotacion?",
        answer:
          "Si. El servicio se adapta tanto a proyectos temporales como a despliegues planificados para crecimiento o renovacion operativa.",
      },
      {
        question: "Que informacion conviene enviar para cotizar?",
        answer:
          "Cantidad, tipo de equipo, plazo, comuna, fecha estimada de entrega y cualquier requerimiento de software o soporte.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-computadores-empresas",
        title: "Arriendo de computadores para empresas",
        description: "Equipos de escritorio y estaciones de trabajo para puestos corporativos.",
      },
      {
        href: "/arriendo-notebooks-empresas",
        title: "Arriendo de notebooks para empresas",
        description: "Movilidad corporativa para equipos hibridos y temporales.",
      },
      {
        href: "/arriendo-infraestructura-ti",
        title: "Arriendo de infraestructura TI",
        description: "Capacidad dedicada y soporte para continuidad operativa.",
      },
    ],
    defaultEquipmentType: "Computadores",
  },
  "arriendo-computadores-santiago": {
    slug: "arriendo-computadores-santiago",
    title: "Arriendo de computadores en Santiago",
    metaTitle: "Arriendo de Computadores en Santiago para Empresas",
    metaDescription:
      "Arriendo de computadores en Santiago para empresas. Equipos de escritorio y workstations con despacho, preparacion corporativa y soporte coordinado en la RM.",
    h1: "Arriendo de computadores en Santiago para empresas",
    kicker: "Cobertura RM",
    intro:
      "Pagina orientada a empresas que operan en Santiago y necesitan computadores en arriendo para oficinas, proyectos, reemplazos o aperturas con tiempos de respuesta acotados.",
    image: "/images/hero.jpg",
    imageAlt: "Arriendo de computadores para oficinas en Santiago",
    keywords: [
      "arriendo computadores santiago",
      "arriendo de computadores en santiago",
      "computadores para empresas santiago",
      "arriendo equipos ti santiago",
    ],
    benefits: [
      "Coordinacion de despliegues para oficinas, sucursales y proyectos dentro de Santiago.",
      "Computadores preparados segun perfil de usuario y estandar del cliente.",
      "Alternativa util para aperturas, recambios y contingencias dentro de la RM.",
      "Soporte y logistica considerando plazos de entrega y retiro acordados.",
    ],
    useCases: [
      "Apertura de oficinas en Santiago.",
      "Capacidad adicional para periodos de alta demanda.",
      "Renovacion por etapas de puestos de trabajo.",
      "Equipos de respaldo para continuidad en la RM.",
    ],
    details: [
      {
        title: "Cobertura metropolitana",
        description:
          "La planificacion considera comunas, ventanas de entrega, acceso a edificio y coordinacion con TI o facilities del cliente.",
      },
      {
        title: "Preparacion antes del despacho",
        description:
          "Los computadores pueden salir inventariados, etiquetados y listos para habilitar usuarios desde el primer dia de uso.",
      },
      {
        title: "Soporte cercano",
        description:
          "El enfoque en Santiago favorece una coordinacion mas rapida de entregas, cambios y soporte segun el alcance contratado.",
      },
    ],
    proofPoints: [
      {
        label: "Comunas",
        value: "Cotizacion considerando ubicacion de oficinas, accesos y cronograma del cliente en la region Metropolitana.",
      },
      {
        label: "Logistica",
        value: "Entrega, retiro y reemplazo definidos con anticipacion para no interrumpir la operacion.",
      },
      {
        label: "Perfiles",
        value: "Equipos administrativos, operativos y tecnicos segun el uso esperado por cada area.",
      },
      {
        label: "Respuesta comercial",
        value: "Solicitud estructurada para facilitar comparacion y aprobacion interna del cliente.",
      },
    ],
    faqs: [
      {
        question: "Atienden empresas en distintas comunas de Santiago?",
        answer:
          "Si. La propuesta considera comuna, edificio, cantidad de equipos y ventanas de entrega para coordinar el despliegue en la RM.",
      },
      {
        question: "Pueden despachar equipos listos para conectarse?",
        answer:
          "Si. Los equipos pueden entregarse preconfigurados segun el estandar corporativo definido durante la cotizacion.",
      },
      {
        question: "Sirve para aperturas o recambios rapidos?",
        answer:
          "Si. El arriendo es especialmente util cuando se necesita habilitar puestos en poco tiempo o cubrir renovaciones por etapas.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-computadores-empresas",
        title: "Arriendo de computadores para empresas",
        description: "Servicio corporativo general para puestos de trabajo y proyectos.",
      },
      {
        href: "/arriendo-notebooks-santiago",
        title: "Arriendo de notebooks en Santiago",
        description: "Movilidad y trabajo hibrido para equipos en la region Metropolitana.",
      },
      {
        href: "/contacto",
        title: "Contactar a RentByte",
        description: "Solicita una cotizacion indicando cantidad, plazo y comuna.",
      },
    ],
    defaultEquipmentType: "Computadores",
  },
  "arriendo-notebooks-santiago": {
    slug: "arriendo-notebooks-santiago",
    title: "Arriendo de notebooks en Santiago",
    metaTitle: "Arriendo de Notebooks en Santiago para Empresas",
    metaDescription:
      "Arriendo de notebooks en Santiago para empresas. Equipos corporativos para trabajo hibrido, onboarding, capacitaciones y proyectos en la RM.",
    h1: "Arriendo de notebooks en Santiago para empresas",
    kicker: "Movilidad corporativa en la RM",
    intro:
      "RentByte apoya a empresas de Santiago que necesitan notebooks en arriendo para equipos remotos, capacitaciones, onboarding o proyectos temporales con coordinacion centralizada.",
    image: "/images/hero.jpg",
    imageAlt: "Notebooks corporativos en Santiago",
    keywords: [
      "arriendo notebooks santiago",
      "arriendo de notebooks en santiago",
      "notebooks para empresas santiago",
      "notebooks corporativos santiago",
    ],
    benefits: [
      "Notebooks corporativos preparados para equipos hibridos o moviles.",
      "Despacho y retiro coordinado dentro de Santiago segun cronograma del cliente.",
      "Escalabilidad para capacitaciones, onboarding y proyectos de expansion.",
      "Soporte comercial y operativo para empresas con usuarios distribuidos en la RM.",
    ],
    useCases: [
      "Trabajo hibrido en Santiago.",
      "Capacitaciones presenciales o itinerantes.",
      "Onboarding masivo de colaboradores.",
      "Reemplazo rapido ante contingencias.",
    ],
    details: [
      {
        title: "Despliegues en oficinas y sucursales",
        description:
          "La cotizacion considera si los notebooks se concentran en una sede o deben entregarse por etapas a distintas areas del cliente.",
      },
      {
        title: "Trabajo distribuido",
        description:
          "Es una alternativa practica para equipos que combinan oficina, terreno y teletrabajo con estandares corporativos comunes.",
      },
      {
        title: "Preparacion por perfil",
        description:
          "Se puede definir un lote para perfiles administrativos, ejecutivos o tecnicos segun la necesidad del proyecto.",
      },
    ],
    proofPoints: [
      {
        label: "Comunas y sedes",
        value: "Planificacion segun ubicacion de oficinas, campus, centros de formacion o sucursales dentro de Santiago.",
      },
      {
        label: "Capacitacion",
        value: "Adecuado para lotes temporales con software, usuarios o credenciales predefinidas.",
      },
      {
        label: "Trabajo hibrido",
        value: "Pensado para empresas con usuarios en oficina, casa o terreno dentro de la RM.",
      },
      {
        label: "Escala",
        value: "Se ajusta a requerimientos puntuales o despliegues por etapas segun cronograma del cliente.",
      },
    ],
    faqs: [
      {
        question: "Atienden requerimientos de notebooks en distintas comunas de Santiago?",
        answer:
          "Si. La coordinacion se define segun comuna, cantidad, ventana de entrega y destino final de los equipos dentro de la region Metropolitana.",
      },
      {
        question: "Sirve para capacitaciones de uno o varios dias?",
        answer:
          "Si. Es un uso frecuente cuando una empresa necesita notebooks configurados temporalmente para cursos, talleres o habilitacion de usuarios.",
      },
      {
        question: "Pueden preparar notebooks por perfil de usuario?",
        answer:
          "Si. Durante la cotizacion se puede definir una segmentacion por perfil administrativo, ejecutivo o tecnico, segun la operacion.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-notebooks-empresas",
        title: "Arriendo de notebooks para empresas",
        description: "Servicio general para movilidad corporativa y dotacion temporal.",
      },
      {
        href: "/arriendo-equipos-para-trabajo-hibrido",
        title: "Arriendo para trabajo hibrido",
        description: "Soluciones para equipos remotos, distribuidos y en terreno.",
      },
      {
        href: "/arriendo-equipos-para-capacitaciones",
        title: "Arriendo de equipos para capacitaciones",
        description: "Lotes temporales para entrenamiento, onboarding y cursos.",
      },
    ],
    defaultEquipmentType: "Notebooks",
  },
  "arriendo-equipos-para-licitaciones": {
    slug: "arriendo-equipos-para-licitaciones",
    title: "Arriendo de equipos para licitaciones",
    metaTitle: "Arriendo de Equipos para Licitaciones y Compras Corporativas",
    metaDescription:
      "Arriendo de equipos para licitaciones y procesos formales de compra. Documentacion, configuracion tecnica y soporte para propuestas corporativas o sector publico.",
    h1: "Arriendo de equipos para licitaciones y procesos formales",
    kicker: "Compras y abastecimiento",
    intro:
      "RentByte participa en requerimientos que exigen una propuesta tecnica y comercial clara para licitaciones, convenios o procesos formales de abastecimiento.",
    image: "/images/differentiators.jpg",
    imageAlt: "Equipos para licitaciones y compras corporativas",
    keywords: [
      "arriendo equipos para licitaciones",
      "licitacion arriendo computadores",
      "arriendo equipos sector publico",
      "compras corporativas equipos ti",
    ],
    benefits: [
      "Propuesta estructurada para areas de compras, abastecimiento y TI.",
      "Definicion de equipos, plazos, soporte y alcance segun bases o requerimiento interno.",
      "Alineacion comercial para procesos corporativos y del sector publico.",
      "Escenarios de computadores, notebooks o infraestructura segun el caso.",
    ],
    useCases: [
      "Licitaciones publicas o privadas.",
      "Convenios y procesos de compra formal.",
      "Abastecimiento temporal para adjudicaciones.",
      "Requerimientos con revision tecnica y comercial.",
    ],
    details: [
      {
        title: "Levantamiento del requerimiento",
        description:
          "Se revisan cantidades, perfiles tecnicos, cronograma, cobertura y restricciones operativas para construir una propuesta coherente con el proceso.",
      },
      {
        title: "Documentacion y alcance",
        description:
          "La cotizacion detalla especificaciones, condiciones del servicio, soporte y supuestos relevantes para compras y evaluacion interna.",
      },
      {
        title: "Continuidad de suministro",
        description:
          "El enfoque apunta a que la empresa o institucion reciba equipos preparados y con un esquema de servicio claro para la vigencia del arriendo.",
      },
    ],
    proofPoints: [
      {
        label: "Compras formales",
        value: "Pensado para procesos donde participan areas de abastecimiento, legal, operaciones y TI.",
      },
      {
        label: "Escenarios",
        value: "Aplica a computadores, notebooks e infraestructura temporal segun lo definido en las bases o especificaciones.",
      },
      {
        label: "Trazabilidad",
        value: "Respuesta estructurada para facilitar revision, comparacion y aprobacion interna.",
      },
      {
        label: "Cobertura",
        value: "Se informa alcance geografico y condiciones operativas de acuerdo con cada licitacion.",
      },
    ],
    faqs: [
      {
        question: "Pueden apoyar requerimientos con bases tecnicas o administrativas?",
        answer:
          "Si. La propuesta se estructura con el nivel de detalle comercial y tecnico necesario para procesos de evaluacion interna o licitaciones.",
      },
      {
        question: "Aplica solo a organismos publicos?",
        answer:
          "No. Tambien es util para empresas privadas con procesos de compra formales, matrices de aprobacion o requerimientos comparativos.",
      },
      {
        question: "Que informacion acelera una cotizacion para licitacion?",
        answer:
          "Bases, cantidades, perfil de equipos, cobertura, plazos, condiciones de soporte y fecha objetivo de adjudicacion o despliegue.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-computadores-sector-publico",
        title: "Arriendo de computadores para sector publico",
        description: "Enfoque para instituciones y organismos con procesos formales.",
      },
      {
        href: "/arriendo-equipos-por-proyecto",
        title: "Arriendo de equipos por proyecto",
        description: "Habilitacion temporal tras adjudicaciones o implementaciones.",
      },
      {
        href: "/contacto",
        title: "Solicitar una cotizacion",
        description: "Comparte bases, cantidades y alcance para recibir propuesta.",
      },
    ],
    defaultEquipmentType: "Licitacion",
  },
  "arriendo-equipos-para-capacitaciones": {
    slug: "arriendo-equipos-para-capacitaciones",
    title: "Arriendo de equipos para capacitaciones",
    metaTitle: "Arriendo de Equipos para Capacitaciones Corporativas",
    metaDescription:
      "Arriendo de equipos para capacitaciones corporativas. Notebooks y computadores temporales para cursos, onboarding, talleres y entrenamientos en empresa.",
    h1: "Arriendo de equipos para capacitaciones corporativas",
    kicker: "Cursos, talleres y onboarding",
    intro:
      "RentByte ayuda a preparar lotes temporales de notebooks o computadores para capacitaciones, onboarding, certificaciones y actividades formativas con una ventana de uso definida.",
    image: "/images/hero.jpg",
    imageAlt: "Equipos para capacitaciones corporativas",
    keywords: [
      "arriendo equipos para capacitaciones",
      "notebooks para capacitacion",
      "arriendo temporal de notebooks",
      "equipos para talleres corporativos",
    ],
    benefits: [
      "Equipos temporales para cursos presenciales, inducciones y talleres internos.",
      "Preparacion previa con usuarios, software o accesos definidos para la actividad.",
      "Alternativa practica para evitar mover activos productivos de la empresa.",
      "Escalabilidad segun numero de asistentes, sedes y duracion de la capacitacion.",
    ],
    useCases: [
      "Cursos internos o externos.",
      "Onboarding de nuevas contrataciones.",
      "Talleres tecnicos o comerciales.",
      "Programas de certificacion o entrenamiento.",
    ],
    details: [
      {
        title: "Planificacion por evento",
        description:
          "La propuesta considera fecha, lugar, cantidad de asistentes, software requerido y horario de montaje o retiro.",
      },
      {
        title: "Equipos listos para usar",
        description:
          "Se pueden preparar perfiles o accesos basicos para reducir tiempos de instalacion antes de cada sesion.",
      },
      {
        title: "Proteccion de activos propios",
        description:
          "Arrendar para capacitacion evita detener o trasladar equipos productivos del negocio a un uso temporal.",
      },
    ],
    proofPoints: [
      {
        label: "Volumen",
        value: "Se evalua desde grupos acotados hasta necesidades masivas para sesiones por bloques o jornadas completas.",
      },
      {
        label: "Ubicacion",
        value: "Considera comuna, sede, acceso al lugar y ventanas de entrega o retiro segun el evento.",
      },
      {
        label: "Software",
        value: "Posibilidad de alinear la preparacion de equipos con la herramienta o plataforma usada en la capacitacion.",
      },
      {
        label: "Temporalidad",
        value: "Ideal para jornadas breves, ciclos de onboarding o programas por semanas.",
      },
    ],
    faqs: [
      {
        question: "Puedo arrendar notebooks solo para una capacitacion?",
        answer:
          "Si. El arriendo temporal es una alternativa comun cuando la empresa necesita equipos por uno o varios dias para actividades formativas.",
      },
      {
        question: "Se pueden preparar con software o accesos especificos?",
        answer:
          "Si. Durante la cotizacion se revisa que instalacion o configuracion es necesaria para llegar con los equipos listos a la capacitacion.",
      },
      {
        question: "Que datos conviene enviar para cotizar?",
        answer:
          "Cantidad de asistentes, tipo de equipo, fecha, comuna, duracion del evento y software requerido.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-notebooks-empresas",
        title: "Arriendo de notebooks para empresas",
        description: "Base ideal para capacitaciones, onboarding y trabajo movil.",
      },
      {
        href: "/arriendo-equipos-para-trabajo-hibrido",
        title: "Arriendo para trabajo hibrido",
        description: "Equipos preparados para usuarios distribuidos y remotos.",
      },
      {
        href: "/contacto",
        title: "Solicitar cotizacion para capacitacion",
        description: "Indica asistentes, fecha y comuna para estructurar la propuesta.",
      },
    ],
    defaultEquipmentType: "Capacitaciones",
  },
  "arriendo-equipos-para-trabajo-hibrido": {
    slug: "arriendo-equipos-para-trabajo-hibrido",
    title: "Arriendo de equipos para trabajo hibrido",
    metaTitle: "Arriendo de Equipos para Trabajo Hibrido en Empresas",
    metaDescription:
      "Arriendo de equipos para trabajo hibrido. Notebooks y computadores corporativos para usuarios remotos, mixtos o en terreno con configuracion empresarial.",
    h1: "Arriendo de equipos para trabajo hibrido",
    kicker: "Equipos para operaciones distribuidas",
    intro:
      "RentByte apoya a organizaciones que necesitan habilitar rapidamente usuarios remotos, hibridos o en terreno con equipos corporativos y una preparacion alineada a su entorno de TI.",
    image: "/images/differentiators.jpg",
    imageAlt: "Equipos corporativos para trabajo hibrido",
    keywords: [
      "arriendo equipos trabajo hibrido",
      "notebooks para trabajadores remotos",
      "arriendo notebooks trabajo remoto",
      "equipos para operaciones distribuidas",
    ],
    benefits: [
      "Notebooks y equipos corporativos para usuarios en oficina, casa o terreno.",
      "Preparacion con herramientas colaborativas, seguridad y accesos definidos por el cliente.",
      "Flexibilidad para equipos temporales, expansiones y cambios de modalidad laboral.",
      "Apto para operaciones distribuidas con necesidad de estandar y trazabilidad.",
    ],
    useCases: [
      "Equipos remotos de atencion o backoffice.",
      "Usuarios hibridos con asistencia parcial a oficina.",
      "Profesionales en terreno o visitas tecnicas.",
      "Proyectos con equipos distribuidos por sede.",
    ],
    details: [
      {
        title: "Estandar corporativo",
        description:
          "El arriendo permite desplegar usuarios con una base comun de configuracion, software y seguridad, aun cuando trabajen desde ubicaciones distintas.",
      },
      {
        title: "Elasticidad operacional",
        description:
          "Es util cuando el volumen de usuarios cambia rapido o cuando la empresa necesita responder a proyectos o aperturas sin esperar ciclos de compra.",
      },
      {
        title: "Soporte coordinado",
        description:
          "La propuesta define el nivel de acompanamiento esperado para reposiciones, soporte y seguimiento de la dotacion arrendada.",
      },
    ],
    proofPoints: [
      {
        label: "Usuarios remotos",
        value: "Pensado para empresas con colaboradores fuera de la oficina o con modalidad mixta.",
      },
      {
        label: "Seguridad",
        value: "Puede considerar cifrado, cuentas, VPN y herramientas corporativas segun lineamientos del cliente.",
      },
      {
        label: "Escenarios temporales",
        value: "Cubre crecimiento rapido, nuevos equipos, reemplazos o reorganizaciones internas.",
      },
      {
        label: "Cobertura",
        value: "Coordinacion comercial desde Santiago y evaluacion de despliegues fuera de la RM.",
      },
    ],
    faqs: [
      {
        question: "Sirve para trabajadores remotos o distribuidos?",
        answer:
          "Si. Es una alternativa practica para habilitar usuarios remotos, equipos hibridos o profesionales en terreno con una configuracion comun.",
      },
      {
        question: "Se pueden definir requisitos de seguridad?",
        answer:
          "Si. Durante la cotizacion se revisan politicas de acceso, software base y herramientas necesarias para operar en el entorno del cliente.",
      },
      {
        question: "Que tipo de equipos se recomiendan?",
        answer:
          "Depende del perfil del usuario. En muchos casos se evalua notebooks corporativos, pero tambien puede combinarse con otros equipos segun la operacion.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-notebooks-empresas",
        title: "Arriendo de notebooks para empresas",
        description: "Base principal para trabajo hibrido y remoto.",
      },
      {
        href: "/arriendo-notebooks-santiago",
        title: "Arriendo de notebooks en Santiago",
        description: "Cobertura en la RM para equipos hibridos y moviles.",
      },
      {
        href: "/arriendo-equipos-por-proyecto",
        title: "Arriendo de equipos por proyecto",
        description: "Dotacion temporal para expansiones o implementaciones distribuidas.",
      },
    ],
    defaultEquipmentType: "Trabajo hibrido",
  },
  "arriendo-infraestructura-ti": {
    slug: "arriendo-infraestructura-ti",
    title: "Arriendo de infraestructura TI",
    metaTitle: "Arriendo de Infraestructura TI para Empresas en Chile",
    metaDescription:
      "Arriendo de infraestructura TI para empresas. Capacidad temporal para continuidad operativa, pruebas, migraciones y proyectos de implementacion.",
    h1: "Arriendo de infraestructura TI para empresas",
    kicker: "Capacidad bajo demanda",
    intro:
      "RentByte atiende requerimientos de infraestructura TI en arriendo cuando la empresa necesita capacidad temporal, soporte para continuidad o ambientes dedicados para implementacion.",
    image: "/images/differentiators.jpg",
    imageAlt: "Infraestructura TI en arriendo para empresas",
    keywords: [
      "arriendo infraestructura ti",
      "infraestructura dedicada temporal",
      "capacidad ti bajo demanda",
      "continuidad operativa ti",
    ],
    benefits: [
      "Alternativa para proyectos que requieren capacidad TI por un periodo acotado.",
      "Evaluacion de recursos segun carga, almacenamiento, conectividad y sistemas involucrados.",
      "Enfoque en continuidad operativa, pruebas, migraciones y despliegues temporales.",
      "Coordinacion comercial y tecnica segun alcance del servicio y criticidad del proyecto.",
    ],
    useCases: [
      "Ambientes de implementacion.",
      "Continuidad operacional ante contingencias.",
      "Pruebas y laboratorios temporales.",
      "Capacidad adicional para sistemas internos.",
    ],
    details: [
      {
        title: "Analisis de requerimientos",
        description:
          "Cada propuesta parte por entender la aplicacion, la carga esperada, las restricciones de conectividad y los tiempos que maneja el cliente.",
      },
      {
        title: "Temporalidad y continuidad",
        description:
          "El arriendo es util cuando se necesita una solucion intermedia o de respaldo mientras se ejecuta una migracion, una compra o una renovacion mayor.",
      },
      {
        title: "Compatibilidad operativa",
        description:
          "Se revisan plataformas, sistemas operativos, respaldos y virtualizacion requeridos para asegurar que la propuesta sea viable.",
      },
    ],
    proofPoints: [
      {
        label: "Capacidad",
        value: "CPU, RAM, almacenamiento y conectividad se definen segun el uso real del proyecto.",
      },
      {
        label: "Criticidad",
        value: "Pensado para escenarios donde continuidad, plazos y soporte son relevantes para la operacion.",
      },
      {
        label: "Flexibilidad",
        value: "Permite incorporar capacidad adicional sin iniciar un ciclo completo de adquisicion.",
      },
      {
        label: "Integracion",
        value: "La propuesta considera restricciones tecnicas y operativas propias del entorno del cliente.",
      },
    ],
    faqs: [
      {
        question: "En que casos conviene arrendar infraestructura TI?",
        answer:
          "Cuando la empresa necesita capacidad por un plazo acotado, continuidad ante contingencias o un ambiente temporal para pruebas e implementaciones.",
      },
      {
        question: "Pueden revisar compatibilidad tecnica antes de cotizar?",
        answer:
          "Si. El levantamiento inicial sirve para entender recursos, sistemas y restricciones del proyecto antes de definir una propuesta.",
      },
      {
        question: "Esto reemplaza una compra definitiva?",
        answer:
          "No siempre. En muchos casos funciona como solucion temporal, de respaldo o de capacidad adicional mientras el cliente decide su estrategia de largo plazo.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-servidores-empresas",
        title: "Arriendo de servidores para empresas",
        description: "Infraestructura dedicada para continuidad y proyectos TI.",
      },
      {
        href: "/arriendo-equipos-por-proyecto",
        title: "Arriendo de equipos por proyecto",
        description: "Capacidad temporal para implementaciones y etapas de despliegue.",
      },
      {
        href: "/arriendo-equipos-para-licitaciones",
        title: "Arriendo para licitaciones",
        description: "Propuestas tecnicas y comerciales para procesos formales.",
      },
    ],
    defaultEquipmentType: "Infraestructura TI",
  },
  "arriendo-computadores-sector-publico": {
    slug: "arriendo-computadores-sector-publico",
    title: "Arriendo de computadores para sector publico",
    metaTitle: "Arriendo de Computadores para Sector Publico en Chile",
    metaDescription:
      "Arriendo de computadores para sector publico en Chile. Propuestas para organismos, instituciones y procesos formales con documentacion y soporte corporativo.",
    h1: "Arriendo de computadores para sector publico",
    kicker: "Instituciones y organismos",
    intro:
      "RentByte estructura propuestas de arriendo de computadores para instituciones y organismos que necesitan cumplir procesos formales, trazabilidad y una definicion clara del servicio.",
    image: "/images/differentiators.jpg",
    imageAlt: "Arriendo de computadores para sector publico",
    keywords: [
      "arriendo computadores sector publico",
      "arriendo notebooks instituciones publicas",
      "equipamiento tecnologico estado chile",
      "convenio marco arriendo computadores",
    ],
    benefits: [
      "Propuestas para instituciones con requerimientos de compras y soporte documental.",
      "Equipos preparados para puestos administrativos, atencion y operacion.",
      "Enfoque en condiciones de servicio claras para evaluacion y control interno.",
      "Soporte para escenarios de renovacion, contingencia o crecimiento institucional.",
    ],
    useCases: [
      "Organismos con renovacion por etapas.",
      "Programas temporales o convenios.",
      "Reemplazos de contingencia.",
      "Puestos de atencion y gestion interna.",
    ],
    details: [
      {
        title: "Proceso formal",
        description:
          "La cotizacion puede estructurarse para facilitar revision por abastecimiento, unidad tecnica y otras areas participantes del proceso.",
      },
      {
        title: "Perfiles de equipos",
        description:
          "Se consideran perfiles administrativos, operativos o de atencion segun el uso esperado y la criticidad del puesto.",
      },
      {
        title: "Servicio y continuidad",
        description:
          "El foco esta en habilitar puestos con condiciones claras de soporte y reemplazo para mantener la operacion institucional.",
      },
    ],
    proofPoints: [
      {
        label: "Compras publicas",
        value: "Pensado para procesos con validacion tecnica, comercial y documental.",
      },
      {
        label: "Escenarios",
        value: "Aplica a renovaciones por etapas, contingencias, programas especiales y dotaciones temporales.",
      },
      {
        label: "Trazabilidad",
        value: "Propuesta con supuestos, alcance y condiciones expresadas de forma clara.",
      },
      {
        label: "Soporte",
        value: "Se define en la oferta segun el nivel de continuidad operacional requerido por la institucion.",
      },
    ],
    faqs: [
      {
        question: "Esta pagina esta dirigida solo a organismos del Estado?",
        answer:
          "Su foco principal es el sector publico, pero tambien puede servir como referencia para instituciones con compras altamente formalizadas.",
      },
      {
        question: "Pueden cotizar puestos administrativos y operativos?",
        answer:
          "Si. Se revisan perfiles de uso, cantidad y soporte necesario para definir la alternativa adecuada.",
      },
      {
        question: "Que ayuda a preparar una propuesta?",
        answer:
          "Cantidad de puestos, especificaciones tecnicas, plazos, cobertura, condiciones de soporte y cualquier antecedente del proceso de compra.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-equipos-para-licitaciones",
        title: "Arriendo para licitaciones",
        description: "Propuestas para procesos formales y documentacion de compra.",
      },
      {
        href: "/arriendo-computadores-empresas",
        title: "Arriendo de computadores para empresas",
        description: "Servicio corporativo general para puestos de trabajo.",
      },
      {
        href: "/contacto",
        title: "Enviar requerimiento institucional",
        description: "Comparte cantidad, plazo y antecedentes del proceso para cotizar.",
      },
    ],
    defaultEquipmentType: "Sector publico",
  },
  "arriendo-equipos-por-proyecto": {
    slug: "arriendo-equipos-por-proyecto",
    title: "Arriendo de equipos por proyecto",
    metaTitle: "Arriendo de Equipos por Proyecto para Empresas",
    metaDescription:
      "Arriendo de equipos por proyecto para empresas. Dotacion temporal de computadores, notebooks o infraestructura TI para implementaciones, picos operativos y continuidad.",
    h1: "Arriendo de equipos por proyecto para empresas",
    kicker: "Plazos acotados y dotacion temporal",
    intro:
      "RentByte estructura soluciones de arriendo por proyecto cuando la empresa necesita equipos por semanas o meses para implementaciones, aperturas, pruebas o crecimiento operacional puntual.",
    image: "/images/cta.jpg",
    imageAlt: "Arriendo de equipos por proyecto para empresas",
    keywords: [
      "arriendo equipos por proyecto",
      "equipos temporales para empresas",
      "arriendo por implementacion",
      "dotacion temporal de hardware",
    ],
    benefits: [
      "Pensado para proyectos con fecha de inicio, hitos y cierre definidos.",
      "Escalable segun cantidad de usuarios, sedes y fases del despliegue.",
      "Apto para computadores, notebooks o infraestructura temporal segun el caso.",
      "Reduce compra de activos para necesidades que no permanecen en el tiempo.",
    ],
    useCases: [
      "Implementaciones de sistemas.",
      "Apertura temporal de operaciones.",
      "Picos estacionales o campañas.",
      "Planes de continuidad y contingencia.",
    ],
    details: [
      {
        title: "Planificacion por fases",
        description:
          "La propuesta puede considerar etapas, entregas parciales, ampliaciones o reducciones de dotacion segun el calendario del proyecto.",
      },
      {
        title: "Control presupuestario",
        description:
          "El arriendo permite asociar el costo al proyecto mismo en vez de sumar activos permanentes al balance de la empresa.",
      },
      {
        title: "Cierre ordenado",
        description:
          "Se definen plazos de retiro y condiciones operativas para terminar el proyecto sin dejar equipos ociosos.",
      },
    ],
    proofPoints: [
      {
        label: "Temporalidad",
        value: "Adecuado para proyectos de semanas o meses, con capacidad de ajuste segun avance real.",
      },
      {
        label: "Escala",
        value: "Puede cubrir desde pequenos equipos hasta lotes mayores coordinados por fases.",
      },
      {
        label: "Flexibilidad",
        value: "Permite ampliar o reducir la dotacion cuando cambian los requerimientos del proyecto.",
      },
      {
        label: "Visibilidad",
        value: "La cotizacion se arma con foco en cantidad, plazo, comuna, soporte y supuestos del despliegue.",
      },
    ],
    faqs: [
      {
        question: "Puedo arrendar equipos solo por la duracion de un proyecto?",
        answer:
          "Si. Precisamente es una de las ventajas del modelo: habilitar recursos por un periodo definido sin necesidad de compra permanente.",
      },
      {
        question: "Se puede combinar computadores, notebooks y servidores?",
        answer:
          "Si. El levantamiento del requerimiento permite revisar una propuesta mixta segun la naturaleza del proyecto.",
      },
      {
        question: "Que informacion conviene enviar?",
        answer:
          "Objetivo del proyecto, cantidad de equipos, perfiles de uso, plazo, comuna, cronograma y necesidades de soporte o configuracion.",
      },
    ],
    relatedPages: [
      {
        href: "/arriendo-equipos-computacionales",
        title: "Arriendo de equipos computacionales",
        description: "Cobertura general para puestos de trabajo, movilidad y soporte.",
      },
      {
        href: "/arriendo-infraestructura-ti",
        title: "Arriendo de infraestructura TI",
        description: "Capacidad temporal para continuidad, pruebas y migraciones.",
      },
      {
        href: "/arriendo-equipos-para-licitaciones",
        title: "Arriendo para licitaciones",
        description: "Propuestas tecnicas y comerciales para procesos formales.",
      },
    ],
    defaultEquipmentType: "Proyecto",
  },
}

export const seoServicePageList = Object.values(seoServicePages)
