import { ChevronDown } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { CtaButton } from "@/components/cta-button"

const faqs = [
  {
    q: "O material é físico ou digital?",
    a: "O material é 100% digital, em PDF. Após a confirmação do pagamento, você recebe o acesso no e-mail cadastrado, baixa os arquivos e pode imprimir quando quiser.",
  },
  {
    q: "Este kit é para fonoaudiólogas ou para pais?",
    a: "O kit foi criado para fonoaudiólogas que atendem crianças e precisam de atividades prontas para usar na rotina de atendimento. Alguns bônus também ajudam na orientação às famílias, mas o kit é focado no uso profissional.",
  },
  {
    q: "Preciso criar as atividades do zero?",
    a: "Não. As atividades já vêm prontas em PDF. Você só precisa baixar, imprimir e usar conforme o objetivo do atendimento. A ideia é economizar tempo na preparação de materiais.",
  },
  {
    q: "Posso imprimir mais de uma vez?",
    a: "Sim. Você pode imprimir novamente sempre que precisar usar os materiais nas suas sessões.",
  },
  {
    q: "Para qual idade é indicado o Kit Fono Kids?",
    a: "Recomendamos o Kit Fono Kids para crianças de 4 a 10 anos. Em alguns casos, a fonoaudióloga também pode adaptar as atividades para crianças maiores, até os 14 anos, dependendo do nível de linguagem, atenção, compreensão e dos objetivos terapêuticos de cada criança.",
  },
  {
    q: "O kit serve para crianças com TEA?",
    a: "Sim. As atividades podem ser adaptadas para crianças com TEA, principalmente em objetivos como comunicação, nomeação, vocabulário, compreensão de instruções, atenção, sequência lógica e linguagem oral. O uso deve ser ajustado pela fonoaudióloga conforme a necessidade de cada criança.",
  },
  {
    q: "Este material substitui a avaliação ou o planejamento terapêutico?",
    a: "Não. O kit não substitui a avaliação, o diagnóstico nem a intervenção profissional. Funciona como um conjunto de materiais prontos para apoiar a fonoaudióloga na aplicação de atividades durante os atendimentos.",
  },
  {
    q: "Sou recém-formada ou estou começando. Posso usar?",
    a: "Sim. As atividades foram pensadas para serem simples, visuais e fáceis de aplicar.",
  },
  {
    q: "Em quanto tempo recebo o acesso?",
    a: "O acesso é enviado automaticamente para o e-mail informado na compra após a confirmação do pagamento.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Você tem 15 dias de garantia. Se o material não atender às suas expectativas, pode solicitar o reembolso dentro desse prazo pelo e-mail de suporte.",
  },
]

export function FaqSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>Perguntas frequentes</SectionHeading>

        <div className="mt-10 grid gap-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-card p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-heading text-base font-bold text-primary">
                {faq.q}
                <ChevronDown
                  className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton>Já resolvi minhas dúvidas e quero meu Kit Fono Kids</CtaButton>
        </div>
      </div>
    </section>
  )
}
