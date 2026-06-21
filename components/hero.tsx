import Image from "next/image"
import { CtaButton } from "@/components/cta-button"

export function Hero() {
  return (
    <section className="bg-brand-cream px-4 pb-12 pt-8 sm:pt-10">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-2xl font-bold uppercase leading-tight text-primary text-balance sm:text-3xl md:text-4xl">
          Pare de perder tempo preparando materiais para fonoaudiologia infantil
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          Receba um kit com mais de 100 atividades lúdicas, ilustradas e com objetivo terapêutico, prontas para
          imprimir e aplicar com crianças. Tenha mais variedade nas suas sessões sem perder tempo criando materiais do
          zero.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl">
        <Image
          src="/kit/hero-banner.png"
          alt="Mais de 100 atividades de Fonoaudiologia Infantil — material terapêutico para sessões de fonoaudiologia. De R$ 97,00 por apenas R$ 10,00. Pagamento seguro e acesso por e-mail."
          width={1232}
          height={1232}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
          fetchPriority="high"
        />
      </div>

      <div className="mx-auto mt-6 flex max-w-xl flex-col items-center">
        <CtaButton>Quero acessar agora</CtaButton>
        <p className="mt-4 text-center text-sm font-semibold text-muted-foreground">
          Acesso imediato e 100% digital — comece a usar hoje mesmo nas suas sessões.
        </p>
      </div>
    </section>
  )
}
