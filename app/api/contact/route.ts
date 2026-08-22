import { NextResponse } from "next/server"
import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contacto@rentbyte.cl"
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "RentByte <onboarding@resend.dev>"

type ContactPayload = {
  nombre?: string
  empresa?: string
  email?: string
  telefono?: string
  tipo?: string
  cantidad?: string
  plazo?: string
  comuna?: string
  requerimientos?: string
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json({ error: "Falta configurar RESEND_API_KEY." }, { status: 500 })
  }

  const body = (await request.json().catch(() => null)) as ContactPayload | null

  if (!body) {
    return NextResponse.json({ error: "Solicitud invalida." }, { status: 400 })
  }

  const nombre = normalize(body.nombre)
  const empresa = normalize(body.empresa)
  const email = normalize(body.email)
  const telefono = normalize(body.telefono)
  const tipo = normalize(body.tipo)
  const cantidad = normalize(body.cantidad)
  const plazo = normalize(body.plazo)
  const comuna = normalize(body.comuna)
  const requerimientos = normalize(body.requerimientos)

  if (!nombre || !empresa || !email || !tipo || !cantidad || !plazo || !comuna || !requerimientos) {
    return NextResponse.json({ error: "Completa todos los campos obligatorios." }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `Cotizacion RentByte - ${tipo} - ${empresa}`,
      text: [
        "Nueva solicitud de cotizacion desde rentbyte.cl",
        "",
        `Nombre: ${nombre}`,
        `Empresa: ${empresa}`,
        `Email: ${email}`,
        `Telefono: ${telefono || "No informado"}`,
        `Tipo de equipo: ${tipo}`,
        `Cantidad estimada: ${cantidad}`,
        `Plazo: ${plazo}`,
        `Comuna o ciudad: ${comuna}`,
        "",
        "Requerimientos:",
        requerimientos,
      ].join("\n"),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error sending contact email", error)
    return NextResponse.json({ error: "No se pudo enviar la solicitud." }, { status: 500 })
  }
}
