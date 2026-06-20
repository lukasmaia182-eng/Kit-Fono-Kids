"use client"

import Link from "next/link"
import { Printer, ArrowLeft, Star, Heart } from "lucide-react"
import { atividades, getCategoria } from "@/lib/activities"
import { ActivitySheet } from "./activity-sheet"

export function PrintAll() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Barra de ações - oculta na impressão */}
      <div className="mb-6 flex flex-col items-center justify-between gap-3 print:hidden sm:flex-row">
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
          className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 font-heading text-base font-bold text-white shadow-sm transition hover:brightness-105"
        >
          <Printer className="size-5" aria-hidden="true" />
          Imprimir / Salvar o kit completo em PDF
        </button>
      </div>

      {/* Aviso - oculto na impressão */}
      <p className="mb-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 text-center text-sm leading-relaxed text-foreground print:hidden">
        Dica: ao clicar em imprimir, escolha <strong>&quot;Salvar como PDF&quot;</strong> no destino e ative a opção de
        <strong> gráficos de plano de fundo</strong> para manter todas as cores. São {atividades.length} atividades em
        um único arquivo.
      </p>

      {/* Capa */}
      <section className="mb-8 flex break-after-page flex-col items-center justify-center rounded-[2rem] border-4 border-primary bg-primary px-8 py-16 text-center text-primary-foreground">
        <span className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-widest text-brand-yellow">
          <Star className="size-4 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
          Kit Fono Kids
          <Star className="size-4 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
        </span>
        <h1 className="mt-4 font-heading text-4xl font-bold uppercase leading-tight text-balance sm:text-5xl">
          Kit Completo de Fonoaudiologia Infantil
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-white/90 text-pretty">
          {atividades.length} atividades lúdicas, ilustradas e com objetivo terapêutico, prontas para imprimir e
          aplicar.
        </p>
        <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2 font-heading text-sm font-bold uppercase tracking-wide text-primary">
          <Heart className="size-4 fill-primary text-primary" aria-hidden="true" />
          Material 100% digital
        </span>
      </section>

      {/* Todas as atividades, uma por página */}
      <div className="grid gap-10">
        {atividades.map((atividade) => {
          const categoria = getCategoria(atividade.categoriaSlug)
          if (!categoria) return null
          return (
            <div key={atividade.slug} className="break-inside-avoid break-after-page">
              <ActivitySheet atividade={atividade} categoria={categoria} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
