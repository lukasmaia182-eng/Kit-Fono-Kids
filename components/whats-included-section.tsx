import { Target, BookOpen, Printer, Smartphone, Check } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const items = [
  {
    icon: Target,
    title: "Mais de 100 atividades lúdicas e ilustradas",
    subtitle: "Materiais organizados em 6 categorias diferentes",
    points: [
      "Atividades de linguagem oral",
      "Atividades de vocabulário e categorias",
      "Atividades de fala e articulação",
      "Atividades de consciência fonológica",
      "Atividades de atenção e memória auditiva",
      "Atividades de sequência lógica e narrativa",
    ],
  },
  {
    icon: BookOpen,
    title: "Instruções de uso detalhadas",
    subtitle: "Para facilitar a aplicação do material",
    points: ["Objetivo da atividade", "Materiais incluídos", "Como preparar", "Como aplicar", "Variação simples"],
  },
  {
    icon: Printer,
    title: "Materiais lúdicos prontos para imprimir",
    subtitle: "Materiais coloridos e ilustrados",
    points: [
      "Formato A4 pronto para imprimir",
      "Fácil de imprimir e recortar",
      "Pode imprimir quantas vezes quiser",
      "Imprima em papel A4 ou ofício",
    ],
  },
  {
    icon: Smartphone,
    title: "Acesso imediato e vitalício",
    subtitle: "Receba imediatamente após o pagamento",
    points: [
      "Receba por e-mail",
      "Baixe no celular ou computador",
      "Download liberado na hora",
      "Acesse sempre que precisar",
    ],
  },
]

export function WhatsIncludedSection() {
  return (
    <section className="bg-brand-soft px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>O que você recebe ao adquirir o Kit Fono Kids hoje</SectionHeading>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                <Icon className="size-6 text-primary" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-primary text-balance">{item.title}</h3>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">{item.subtitle}</p>
              <ul className="mt-4 grid gap-2">
                {item.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-green-dark" aria-hidden="true" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
