import Image from "next/image"
import { Star } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const testimonials = [
  {
    name: "Valentina Reis",
    img: "/kit/testi1.png",
    text: "Antes eu improvisava muitas sessões. Com o Fono Kids chego com atividades prontas, visuais e fáceis de aplicar. As crianças se envolvem muito mais rápido.",
  },
  {
    name: "Lúcia Martins",
    img: "/kit/testi2.png",
    text: "Gostei porque não é só um PDF bonito. As atividades têm objetivo, instruções e variações. Me ajuda a economizar tempo toda semana.",
  },
  {
    name: "Camila Torres",
    img: "/kit/testi3.png",
    text: "Trabalho com crianças que se distraem fácil e essas atividades me ajudaram a mantê-las mais atentas. É prático, visual e muito fácil de usar.",
  },
  {
    name: "Ana Sofia Herrera",
    img: "/kit/testi4.png",
    text: "Como recém-formada, me sentia insegura preparando sessões. O kit me deu materiais prontos e me ajudou a atender com mais confiança.",
  },
  {
    name: "Gabriela Souto",
    img: "/kit/testi5.png",
    text: "Uso tanto em sessões presenciais quanto online. As ilustrações ajudam muito e as famílias entendem melhor as atividades.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>+1.473 fonoaudiólogas já usaram o Fono Kids</SectionHeading>
        <p className="mt-4 text-center text-lg text-muted-foreground text-pretty">
          Veja alguns depoimentos de profissionais que já usam o material nas sessões:
        </p>
      </div>

      <div className="mt-10 flex snap-x gap-5 overflow-x-auto px-4 pb-6 [scrollbar-width:thin]">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="flex w-80 shrink-0 snap-center flex-col rounded-3xl bg-card p-6 shadow-md ring-1 ring-border"
          >
            <div className="flex items-center gap-3">
              <Image
                src={t.img || "/placeholder-user.jpg"}
                alt={`Foto de ${t.name}`}
                width={56}
                height={56}
                sizes="48px"
                className="size-12 shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">Fonoaudióloga</p>
              </div>
            </div>
            <div className="mt-3 flex gap-0.5" aria-label="5 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-4 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-3 leading-relaxed text-muted-foreground">{t.text}</blockquote>
          </figure>
        ))}
      </div>
      <p className="px-4 text-center text-sm text-muted-foreground">Arraste para o lado para ver mais depoimentos →</p>
    </section>
  )
}
