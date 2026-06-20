"use client"

import Link from "next/link"
import { ArrowLeft, Printer } from "lucide-react"

export function PosterPageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-brand-cream px-4 py-8">
      {/* Barra de ações - oculta na impressão */}
      <div className="mx-auto mb-6 flex max-w-[820px] items-center justify-between print:hidden">
        <Link
          href="/seuacesso"
          className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 font-heading text-sm font-bold text-primary shadow-sm ring-1 ring-border transition hover:bg-secondary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 font-heading text-sm font-bold text-white shadow-sm transition hover:bg-brand-green-dark"
        >
          <Printer className="size-4" aria-hidden="true" />
          Imprimir / Salvar PDF
        </button>
      </div>

      {children}
    </main>
  )
}
