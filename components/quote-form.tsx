"use client"

import type { FormEvent } from "react"
import { useState } from "react"

const EMAIL = "contacto@rentbyte.cl"

const equipmentOptions = [
  "Computadores",
  "Notebooks",
  "Servidores",
  "Infraestructura TI",
  "Capacitaciones",
  "Licitacion",
  "Proyecto",
  "Otro",
]

const termOptions = [
  "Dias",
  "1 a 4 semanas",
  "1 a 3 meses",
  "3 a 12 meses",
  "Mas de 12 meses",
]

type QuoteFormProps = {
  defaultEquipmentType?: string
  title?: string
}

export function QuoteForm({ defaultEquipmentType = "Computadores", title = "Solicita una cotizacion" }: QuoteFormProps) {
  const [equipmentType, setEquipmentType] = useState(
    equipmentOptions.includes(defaultEquipmentType) ? defaultEquipmentType : "Computadores"
  )

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const nombre = String(formData.get("nombre") ?? "").trim()
    const empresa = String(formData.get("empresa") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const telefono = String(formData.get("telefono") ?? "").trim()
    const tipo = String(formData.get("tipo") ?? equipmentType).trim()
    const cantidad = String(formData.get("cantidad") ?? "").trim()
    const plazo = String(formData.get("plazo") ?? "").trim()
    const comuna = String(formData.get("comuna") ?? "").trim()
    const requerimientos = String(formData.get("requerimientos") ?? "").trim()

    const subject = `Cotizacion RentByte - ${tipo} - ${empresa}`
    const body = [
      "Hola RentByte,",
      "",
      "Quiero solicitar una cotizacion con los siguientes datos:",
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
    ].join("\n")

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[22px] border border-[#24324c] bg-[#12203a] p-6 sm:p-7">
      <div>
        <h3 className="font-display text-[24px] font-extrabold tracking-[-0.02em] text-white">{title}</h3>
        <p className="mt-2 text-[14.5px] leading-[1.6] text-[#9fabc2]">
          El formulario abre tu cliente de correo con la solicitud prellenada para agilizar la cotizacion.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-[#d6deed]">Nombre</span>
          <input
            name="nombre"
            required
            className="mt-2 h-11 w-full rounded-[10px] border border-[#31405c] bg-[#0f1a2e] px-3 text-sm text-white outline-none transition-colors focus:border-[#7fa8f5]"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#d6deed]">Empresa</span>
          <input
            name="empresa"
            required
            className="mt-2 h-11 w-full rounded-[10px] border border-[#31405c] bg-[#0f1a2e] px-3 text-sm text-white outline-none transition-colors focus:border-[#7fa8f5]"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#d6deed]">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-2 h-11 w-full rounded-[10px] border border-[#31405c] bg-[#0f1a2e] px-3 text-sm text-white outline-none transition-colors focus:border-[#7fa8f5]"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#d6deed]">Telefono</span>
          <input
            name="telefono"
            className="mt-2 h-11 w-full rounded-[10px] border border-[#31405c] bg-[#0f1a2e] px-3 text-sm text-white outline-none transition-colors focus:border-[#7fa8f5]"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#d6deed]">Tipo de equipo</span>
          <select
            name="tipo"
            value={equipmentType}
            onChange={(event) => setEquipmentType(event.target.value)}
            className="mt-2 h-11 w-full rounded-[10px] border border-[#31405c] bg-[#0f1a2e] px-3 text-sm text-white outline-none transition-colors focus:border-[#7fa8f5]"
          >
            {equipmentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#d6deed]">Cantidad estimada</span>
          <input
            name="cantidad"
            required
            placeholder="Ej: 25 equipos"
            className="mt-2 h-11 w-full rounded-[10px] border border-[#31405c] bg-[#0f1a2e] px-3 text-sm text-white outline-none transition-colors focus:border-[#7fa8f5]"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#d6deed]">Plazo</span>
          <select
            name="plazo"
            required
            defaultValue=""
            className="mt-2 h-11 w-full rounded-[10px] border border-[#31405c] bg-[#0f1a2e] px-3 text-sm text-white outline-none transition-colors focus:border-[#7fa8f5]"
          >
            <option value="" disabled>
              Selecciona un plazo
            </option>
            {termOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#d6deed]">Comuna o ciudad</span>
          <input
            name="comuna"
            required
            placeholder="Ej: Las Condes"
            className="mt-2 h-11 w-full rounded-[10px] border border-[#31405c] bg-[#0f1a2e] px-3 text-sm text-white outline-none transition-colors focus:border-[#7fa8f5]"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-medium text-[#d6deed]">Requerimientos tecnicos o contexto</span>
        <textarea
          name="requerimientos"
          required
          rows={5}
          placeholder="Ej: notebooks para onboarding con Microsoft 365, entrega en Santiago y soporte durante 3 meses"
          className="mt-2 w-full rounded-[10px] border border-[#31405c] bg-[#0f1a2e] px-3 py-3 text-sm text-white outline-none transition-colors focus:border-[#7fa8f5]"
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex items-center justify-center rounded-[10px] bg-[#1656c9] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2f6fe0]"
      >
        Preparar correo de cotizacion
      </button>
    </form>
  )
}
