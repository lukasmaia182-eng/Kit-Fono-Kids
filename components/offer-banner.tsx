"use client"

import { AlertTriangle } from "lucide-react"
import { useEffect, useState } from "react"

function formatarData(data: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(data)
}

export function OfferBanner() {
  const [periodo, setPeriodo] = useState<string | null>(null)

  useEffect(() => {
    const inicio = new Date()
    const fim = new Date()
    // Janela de 5 dias a partir do dia em que o visitante entra na página
    fim.setDate(fim.getDate() + 4)
    setPeriodo(`Oferta válida de ${formatarData(inicio)} até ${formatarData(fim)}`)
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-brand-pink via-primary to-brand-pink py-3 text-center">
      <p className="flex items-center justify-center gap-2 px-4 font-heading text-sm font-semibold text-white sm:text-base">
        <AlertTriangle className="size-4 shrink-0" aria-hidden="true" />
        {/* Mostra a data apenas após montar no cliente para refletir o "hoje" do visitante */}
        <span className={periodo ? "" : "opacity-0"}>{periodo ?? "Oferta por tempo limitado"}</span>
      </p>
    </div>
  )
}
