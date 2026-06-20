"use client"

import { AlertTriangle, Clock } from "lucide-react"
import { useEffect, useState } from "react"

function formatarData(data: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(data)
}

function calcularRestante() {
  const agora = new Date()
  const fimDoDia = new Date()
  fimDoDia.setHours(23, 59, 59, 999)
  const diff = Math.max(0, fimDoDia.getTime() - agora.getTime())

  const horas = Math.floor(diff / (1000 * 60 * 60))
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const segundos = Math.floor((diff % (1000 * 60)) / 1000)

  return { horas, minutos, segundos }
}

function doisDigitos(n: number) {
  return n.toString().padStart(2, "0")
}

export function OfferBanner() {
  const [montado, setMontado] = useState(false)
  const [dataHoje, setDataHoje] = useState("")
  const [restante, setRestante] = useState({ horas: 0, minutos: 0, segundos: 0 })

  useEffect(() => {
    setMontado(true)
    setDataHoje(formatarData(new Date()))
    setRestante(calcularRestante())

    const intervalo = setInterval(() => {
      setRestante(calcularRestante())
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-brand-pink via-primary to-brand-pink py-3 text-center">
      <div className="flex flex-col items-center justify-center gap-1.5 px-4 sm:flex-row sm:gap-3">
        <p className="flex items-center justify-center gap-2 font-heading text-sm font-semibold text-white sm:text-base">
          <AlertTriangle className="size-4 shrink-0" aria-hidden="true" />
          <span className={montado ? "" : "opacity-0"}>
            {montado ? `Oferta válida só hoje, ${dataHoje}` : "Oferta por tempo limitado"}
          </span>
        </p>

        <span
          className={`flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 font-heading text-sm font-bold tabular-nums text-white sm:text-base ${
            montado ? "" : "opacity-0"
          }`}
          aria-label="Tempo restante da oferta"
        >
          <Clock className="size-4 shrink-0" aria-hidden="true" />
          {`Encerra em ${doisDigitos(restante.horas)}:${doisDigitos(restante.minutos)}:${doisDigitos(restante.segundos)}`}
        </span>
      </div>
    </div>
  )
}
