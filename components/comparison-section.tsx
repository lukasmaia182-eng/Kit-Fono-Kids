import { X, Check } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const rows = [
  {
    without: "Perde tempo procurando atividades antes da sessão",
    with: "Já tem materiais prontos para escolher e aplicar",
  },
  {
    without: "Arquivos espalhados e sem organização",
    with: "Recursos reunidos em um kit prático",
  },
  {
    without: "A criança perde o interesse rapidamente",
    with: "Atividades mais visuais e participativas",
  },
  {
    without: "As famílias sentem que não há avanço",
    with: "As crianças curtem as sessões e querem voltar",
  },
  {
    without: "Sensação de improviso na rotina",
    with: "Mais segurança para conduzir a sessão com recursos prontos",
  },
]

export function ComparisonSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>Como fica sua rotina com o Kit Fono Kids</SectionHeading>
        <p className="mt-4 text-center text-lg text-muted-foreground text-pretty">
          Uma comparação simples entre improvisar e ter recursos prontos.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
        <div className="rounded-3xl border-2 border-destructive/20 bg-card p-6">
          <h3 className="mb-4 text-center font-heading text-lg font-bold uppercase text-destructive">Sem o kit</h3>
          <ul className="grid gap-3">
            {rows.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <X className="mt-0.5 size-5 shrink-0 text-destructive" aria-hidden="true" />
                <span className="leading-relaxed">{r.without}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border-2 border-brand-green/40 bg-brand-green/5 p-6">
          <h3 className="mb-4 text-center font-heading text-lg font-bold uppercase text-brand-green-dark">
            Com o kit
          </h3>
          <ul className="grid gap-3">
            {rows.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <Check className="mt-0.5 size-5 shrink-0 text-brand-green-dark" aria-hidden="true" />
                <span className="font-semibold leading-relaxed">{r.with}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
