import { Zap, Dices, FolderOpen, Handshake } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { CountdownTimer } from "@/components/countdown-timer"
import { CtaButton } from "@/components/cta-button"

const benefits = [
  {
    icon: Zap,
    color: "text-brand-pink",
    title: "Menos tempo preparando materiais",
    text: "Você não precisa criar atividades do zero antes de cada atendimento.",
  },
  {
    icon: Dices,
    color: "text-primary",
    title: "Sessões mais lúdicas",
    text: "As atividades visuais ajudam a criança a participar melhor da sessão.",
  },
  {
    icon: FolderOpen,
    color: "text-brand-green-dark",
    title: "Material organizado",
    text: "Ajuda você a encontrar o recurso certo sem depender da improvisação.",
  },
  {
    icon: Handshake,
    color: "text-brand-pink",
    title: "Complementa sua abordagem",
    text: "Use como apoio prático dentro do seu planejamento profissional.",
  },
]

export function BenefitsSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>
          Você recebe um material único, totalmente ilustrado e organizado para facilitar suas sessões
        </SectionHeading>
        <p className="mt-4 text-center text-lg text-muted-foreground text-pretty">
          Mais praticidade para você e mais participação para a criança.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
        {benefits.map((b, i) => {
          const Icon = b.icon
          return (
            <div
              key={i}
              className="rounded-3xl border-2 border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft">
                <Icon className={`size-6 ${b.color}`} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-primary">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          )
        })}
      </div>

      <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-brand-soft p-8 text-center">
        <p className="font-heading text-sm font-bold uppercase tracking-wide text-muted-foreground">
          A oferta termina em:
        </p>
        <div className="mt-4">
          <CountdownTimer />
        </div>
        <h3 className="mt-8 font-heading text-2xl font-bold uppercase leading-tight text-primary text-balance">
          Hoje mesmo você pode ter um material lúdico, ilustrado e organizado para transformar suas sessões
        </h3>
        <div className="mt-6 flex justify-center">
          <CtaButton>Quero meu Kit Fono Kids</CtaButton>
        </div>
      </div>
    </section>
  )
}
