import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

const categories = [
  { label: "Linguagem oral", img: "/kit/1.png" },
  { label: "Linguagem oral", img: "/kit/2.png" },
  { label: "Vocabulário e categorias", img: "/kit/3.png" },
  { label: "Vocabulário e categorias", img: "/kit/4.png" },
  { label: "Fala e articulação", img: "/kit/6.png" },
  { label: "Fala e articulação", img: "/kit/5.png" },
  { label: "Consciência fonológica", img: "/kit/7.png" },
  { label: "Consciência fonológica", img: "/kit/8.png" },
  { label: "Atenção e memória auditiva", img: "/kit/9.png" },
  { label: "Atenção e memória auditiva", img: "/kit/10.png" },
  { label: "Sequência lógica e narrativa", img: "/kit/11.png" },
  { label: "Sequência lógica e narrativa", img: "/kit/12.png" },
]

export function CategoriesSection() {
  return (
    <section className="bg-brand-soft py-16">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading>Veja um pouco do que você vai receber na prática</SectionHeading>
        <p className="mt-4 text-center text-lg text-muted-foreground text-pretty">
          Materiais visuais, lúdicos e fáceis de aplicar durante a sessão.
        </p>
      </div>

      <div className="mt-10 flex snap-x items-start gap-5 overflow-x-auto px-4 pb-6 [scrollbar-width:thin]">
        {categories.map((cat, i) => (
          <figure
            key={i}
            className="w-64 shrink-0 snap-center overflow-hidden rounded-3xl bg-card p-3 shadow-md ring-1 ring-border"
          >
            <Image
              src={cat.img || "/placeholder.svg"}
              alt={`Prévia da atividade de ${cat.label}`}
              width={400}
              height={560}
              sizes="256px"
              className="aspect-square w-full rounded-2xl bg-brand-cream object-contain"
            />
            <figcaption className="px-2 py-4 text-center font-heading text-sm font-bold uppercase tracking-wide text-primary">
              {cat.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
