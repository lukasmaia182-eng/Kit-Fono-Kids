"use client"

import Link from "next/link"
import { Printer, ArrowLeft } from "lucide-react"
import type { Atividade, Categoria } from "@/lib/activities"
import { ActivitySheet } from "./activity-sheet"

export function PrintableActivity({ atividade, categoria }: { atividade: Atividade; categoria: Categoria }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Barra de ações - oculta na impressão */}
      <div className="mb-6 flex items-center justify-between gap-3 print:hidden">
        <Link
          href="/seuacesso"
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 font-heading text-sm font-bold text-secondary-foreground transition hover:bg-secondary/70"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar ao painel
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 font-heading text-sm font-bold text-white shadow-sm transition hover:brightness-105"
        >
          <Printer className="size-4" aria-hidden="true" />
          Imprimir / Salvar PDF
        </button>
      </div>

      <ActivitySheet atividade={atividade} categoria={categoria} />
    </div>
  )
}
