"use client"

import type { FormEvent } from "react"
import { useState } from "react"

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
  const initialEquipmentType = equipmentOptions.includes(defaultEquipmentType) ? defaultEquipmentType : "Computadores"
  const [equipmentType, setEquipmentType] = useState(initialEquipmentType)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<{ type: "success" | "error"; message: string } | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const nombre = String(formData.get("nombre") ?? "").trim()
    const empresa = String(formData.get("empresa") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const telefono = String(formData.get("telefono") ?? "").trim()
    const tipo = String(formData.get("tipo") ?? equipmentType).trim()
    const cantidad = String(formData.get("cantidad") ?? "").trim()
    const plazo = String(formData.get("plazo") ?? "").trim()
    const comuna = String(formData.get("comuna") ?? "").trim()
    const requerimientos = String(formData.get("requerimientos") ?? "").trim()

    setIsSubmitting(true)
    setSubmitState(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          empresa,
          email,
          telefono,
          tipo,
          cantidad,
          plazo,
          comuna,
          requerimientos,
        }),
      })

      const result = (await response.json().catch(() => null)) as { error?: string } | null

      if (!response.ok) {
        throw new Error(result?.error || "No se pudo enviar la solicitud.")
      }

      form.reset()
      setEquipmentType(initialEquipmentType)
      setSubmitState({
        type: "success",
        message: "Solicitud enviada. Te contactaremos con una propuesta inicial.",
      })
    } catch (error) {
      setSubmitState({
        type: "error",
        message: error instanceof Error ? error.message : "No se pudo enviar la solicitud.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[22px] border border-[#24324c] bg-[#12203a] p-6 sm:p-7">
      <div>
        <h3 className="font-display text-[24px] font-extrabold tracking-[-0.02em] text-white">{title}</h3>
        <p className="mt-2 text-[14.5px] leading-[1.6] text-[#9fabc2]">
          Envia tu solicitud y nuestro equipo comercial la recibira directamente para preparar la cotizacion.
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
        disabled={isSubmitting}
        className="mt-5 inline-flex items-center justify-center rounded-[10px] bg-[#1656c9] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2f6fe0]"
      >
        {isSubmitting ? "Enviando solicitud..." : "Enviar solicitud de cotizacion"}
      </button>

      {submitState ? (
        <p className={`mt-4 text-sm ${submitState.type === "success" ? "text-[#8fd6a6]" : "text-[#ffb4b4]"}`}>
          {submitState.message}
        </p>
      ) : null}
    </form>
  )
}
