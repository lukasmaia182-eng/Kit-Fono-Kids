import { Baby, Printer, Sparkles, MessagesSquare } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const items = [
  { icon: Baby, text: "Atende crianças em consultório, clínica ou atendimento domiciliar" },
  { icon: Printer, text: "Quer atividades prontas para imprimir e aplicar" },
  { icon: Sparkles, text: "Busca tornar a sessão mais leve e participativa" },
  { icon: MessagesSquare, text: "Precisa de materiais para complementar sua abordagem clínica" },
]

export function IdealForSection() {
  return (
    <section className="bg-brand-soft px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>Este kit é ideal para a fonoaudióloga que...</SectionHeading>
        <ul className="mx-auto mt-10 grid max-w-2xl gap-4">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <li key={i} className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </span>
                <span className="font-semibold leading-relaxed text-foreground">{item.text}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
