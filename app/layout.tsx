import type React from "react"
import type { Metadata, Viewport } from "next"
import { Archivo, Public_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
})

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-archivo",
  display: "swap",
})

const SITE_URL = "https://rentbyte.cl"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RentByte - Arriendo de Computadores, Notebooks y Servidores para Empresas",
    template: "%s | RentByte",
  },
  description:
    "Arriendo de computadores, notebooks y servidores para empresas en Chile. Equipos configurados con soporte, mantención y contratos flexibles.",
  keywords: [
    "arriendo de computadores notebooks y servidores para empresas",
    "arriendo computadores notebooks servidores empresas",
    "arriendo computadores para empresas",
    "arriendo notebooks para empresas",
    "arriendo servidores para empresas",
    "arriendo equipos informaticos empresas",
    "arriendo computadores empresas chile",
    "arriendo notebooks instituciones publicas",
    "arriendo notebooks empresas chile",
    "licitacion arriendo computadores",
    "arriendo equipamiento tecnologico estado chile",
    "arriendo computadores para empresas",
    "arriendo notebook empresas",
    "arriendo servidores empresas",
    "arriendo infraestructura ti chile",
    "soluciones tecnologicas b2b chile",
    "arriendo hardware empresarial",
    "arriendo equipos ti santiago",
    "convenio marco arriendo computadores",
    "proveedor arriendo equipos informaticos chile",
  ],
  applicationName: "RentByte",
  category: "business",
  authors: [{ name: "RentByte" }],
  creator: "RentByte",
  publisher: "RentByte",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE_URL,
    siteName: "RentByte",
    title: "RentByte - Arriendo de Computadores, Notebooks y Servidores para Empresas",
    description:
      "Arriendo de computadores, notebooks y servidores para empresas en Chile, con soporte, mantención y equipos listos para operar.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RentByte - Arriendo de computadores, notebooks y servidores en Chile",
        type: "image/png",
      },
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "RentByte Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RentByteChile",
    title: "RentByte - Arriendo de Computadores, Notebooks y Servidores para Empresas",
    description:
      "Arriendo tecnológico para empresas en Chile con soporte, mantención y cumplimiento normativo.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-CL": SITE_URL,
    },
  },
  verification: {
    // Descomentar y agregar tus códigos de verificación
    // google: "TU_CODIGO_GOOGLE_SEARCH_CONSOLE",
    // yandex: "TU_CODIGO_YANDEX",
    // yahoo: "TU_CODIGO_YAHOO",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/placeholder-logo.svg",
      },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#1656c9",
    "theme-color": "#ffffff",
    "geo.region": "CL",
    "geo.placename": "Chile",
    "business:contact_data:country_name": "Chile",
    "business:contact_data:email": "contacto@rentbyte.cl",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-brand-background font-sans text-brand-foreground antialiased",
          publicSans.variable,
          archivo.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
