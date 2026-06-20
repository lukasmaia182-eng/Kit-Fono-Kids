import Image from "next/image"
import { Check, Lock, Infinity as InfinityIcon, ShieldCheck, Star, Gift } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { CtaButton } from "@/components/cta-button"

const includes = [
  "Kit Fono Kids - Mais de 100 Atividades Prontas",
  "Bônus 1: Kit de atividades para enviar para casa",
  "Bônus 2: Kit de jogos rápidos para crianças dispersas",
  "Bônus 3: Pranchas de comunicação funcional",
  "Bônus 4: Fichas de registro e evolução",
  "Bônus 5: Kit de planejamento de sessões",
  "Bônus 6: Kit extra de fonemas-alvo",
  "Bônus 7: Kit de rotina visual para consultório",
  "Arquivos ilustrados em PDF",
]

const perks = [
  { icon: InfinityIcon, text: "Acesso imediato e vitalício" },
  { icon: ShieldCheck, text: "15 dias de garantia" },
  { icon: Star, text: "Suporte VIP por e-mail" },
  { icon: Gift, text: "Atualizações gratuitas" },
]

export function PricingSection() {
  return (
    <section id="planos" className="scroll-mt-6 bg-brand-soft px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>Recapitulando tudo o que você vai receber hoje</SectionHeading>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-primary bg-card shadow-xl">
          <div className="bg-primary py-3 text-center font-heading text-sm font-bold uppercase tracking-wide text-primary-foreground">
            Mais escolhido
          </div>

          <div className="p-6 sm:p-8">
            <h3 className="text-center font-heading text-2xl font-bold uppercase text-primary">Kit Completo</h3>
            <p className="mt-1 text-center font-semibold text-brand-green-dark">Todos os bônus incluídos hoje</p>

            <div className="mt-6 overflow-hidden rounded-2xl bg-brand-cream">
              <Image
                src="/kit/hero-banner.png"
                alt="Kit Fono Kids completo com todos os bônus"
                width={1000}
                height={1000}
                sizes="(max-width: 768px) 100vw, 600px"
                className="h-auto w-full"
              />
            </div>

            <ul className="mt-6 grid gap-2">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-green-dark" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-4 grid gap-2 border-t border-border pt-4 sm:grid-cols-2">
              {perks.map((perk, i) => {
                const Icon = perk.icon
                return (
                  <li key={i} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                    <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {perk.text}
                  </li>
                )
              })}
            </ul>

            <div className="mt-8 rounded-2xl bg-brand-soft p-6 text-center">
              <p className="text-muted-foreground">
                De <span className="font-bold text-foreground line-through">R$ 97,00</span> por:
              </p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">
                Hoje você tem acesso completo a TUDO isso por apenas
              </p>
              <p className="mt-2 font-heading text-5xl font-bold text-brand-green-dark">R$ 10,00</p>
              <p className="mt-2 inline-block rounded-full bg-brand-green/15 px-4 py-1 text-sm font-bold text-brand-green-dark">
                Você economiza R$ 87,00 hoje
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center">
              <CtaButton subtitle="Pagamento único · acesso imediato">Quero meu Fono Kids completo</CtaButton>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <Lock className="size-4" aria-hidden="true" />
                Pagamento 100% seguro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
