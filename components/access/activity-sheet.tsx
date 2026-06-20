import Image from "next/image"
import * as Icons from "lucide-react"
import { Target, FolderOpen, Scissors, Trophy, Lightbulb, Star, Heart } from "lucide-react"
import type { Atividade, Categoria } from "@/lib/activities"

function CardIcon({ name, className }: { name: string; className?: string }) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? Icons.Star
  return <Icon className={className} />
}

type Tema = {
  border: string
  bg: string
  chip: string
  title: string
}

const temas: Record<string, Tema> = {
  blue: { border: "border-brand-blue/25", bg: "bg-brand-blue/5", chip: "bg-brand-blue text-white", title: "text-brand-blue" },
  green: { border: "border-brand-green/40", bg: "bg-brand-green/10", chip: "bg-brand-green text-white", title: "text-brand-green-dark" },
  orange: { border: "border-orange-300", bg: "bg-orange-50", chip: "bg-orange-500 text-white", title: "text-orange-600" },
  pink: { border: "border-brand-pink/30", bg: "bg-brand-pink/5", chip: "bg-brand-pink text-white", title: "text-brand-pink" },
  sky: { border: "border-sky-300", bg: "bg-sky-50", chip: "bg-sky-500 text-white", title: "text-sky-600" },
  amber: { border: "border-amber-300", bg: "bg-amber-50", chip: "bg-amber-500 text-white", title: "text-amber-600" },
}

// Cores que se alternam nos cartões de recorte, no estilo do cartaz
const coresCartao = [
  "bg-brand-green text-white",
  "bg-amber-400 text-primary",
  "bg-brand-pink text-white",
  "bg-brand-blue text-white",
  "bg-sky-500 text-white",
  "bg-orange-500 text-white",
]

export function ActivitySheet({ atividade, categoria }: { atividade: Atividade; categoria: Categoria }) {
  return (
    <article className="rounded-[2rem] border-4 border-primary bg-primary p-2 shadow-sm sm:p-3 print:shadow-none">
      {/* Moldura interna tracejada */}
      <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-dashed border-white/40 bg-card">
        {/* Cabeçalho */}
        <header className="relative overflow-hidden bg-brand-cream px-6 pb-6 pt-7">
          <Confetti />
          <div className="relative flex flex-col items-center text-center">
            <span
              className={`rounded-full ${categoria.cor} px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-white shadow-sm`}
            >
              {categoria.nome}
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight text-primary text-balance sm:text-4xl">
              {atividade.titulo}
            </h1>
            <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-primary shadow-sm">
              Atividade {String(atividade.numero).padStart(2, "0")} · Pronta para aplicar
            </span>
          </div>
          <div className="relative mt-5 overflow-hidden rounded-2xl ring-2 ring-white">
            <Image
              src={categoria.ilustracao || "/placeholder.svg"}
              alt={`Ilustração da categoria ${categoria.nome}`}
              width={1024}
              height={420}
              className="h-40 w-full object-cover sm:h-48"
            />
          </div>
        </header>

        <div className="grid gap-5 px-6 py-6">
          <Bloco tema="blue" icon={<Target className="size-5" aria-hidden="true" />} numero="1" titulo="Objetivo da atividade">
            <p className="leading-relaxed text-foreground">{atividade.objetivo}</p>
          </Bloco>

          <Bloco tema="green" icon={<FolderOpen className="size-5" aria-hidden="true" />} numero="2" titulo="Materiais incluídos">
            <ul className="grid gap-1.5">
              {atividade.materiais.map((m, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed text-foreground">
                  <Heart className="mt-1 size-3.5 shrink-0 fill-brand-pink text-brand-pink" aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
          </Bloco>

          <Bloco tema="orange" icon={<Scissors className="size-5" aria-hidden="true" />} numero="3" titulo="Como preparar">
            <ol className="grid gap-2">
              {atividade.comoPreparar.map((p, i) => (
                <li key={i} className="flex items-start gap-3 leading-relaxed text-foreground">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-500 font-heading text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {p}
                </li>
              ))}
            </ol>
          </Bloco>

          <Bloco tema="pink" icon={<Trophy className="size-5" aria-hidden="true" />} numero="4" titulo="Como aplicar">
            <ol className="grid gap-2">
              {atividade.comoAplicar.map((p, i) => (
                <li key={i} className="flex items-start gap-3 leading-relaxed text-foreground">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-pink font-heading text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {p}
                </li>
              ))}
            </ol>
          </Bloco>

          {/* Cartões de figuras para recortar */}
          {atividade.cartoes && atividade.cartoes.length > 0 && (
            <Bloco tema="sky" icon={<Scissors className="size-5" aria-hidden="true" />} titulo="Cartões para recortar">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {atividade.cartoes.map((c, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center overflow-hidden rounded-2xl border-2 border-dashed border-sky-300 bg-white"
                  >
                    <div className="flex w-full items-center justify-center bg-brand-cream/70 py-5">
                      <CardIcon name={c.icone} className="size-10 text-primary" />
                    </div>
                    <span
                      className={`w-full ${coresCartao[i % coresCartao.length]} py-1.5 text-center font-heading text-sm font-bold uppercase tracking-wide`}
                    >
                      {c.palavra}
                    </span>
                  </div>
                ))}
              </div>
            </Bloco>
          )}

          {/* Variação - destaque amarelo */}
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-amber-500 text-white">
                <Lightbulb className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-base font-bold text-amber-600">Variação simples</h2>
            </div>
            <p className="mt-2 leading-relaxed text-foreground">{atividade.variacao}</p>
          </div>
        </div>

        {/* Faixa inferior (estilo cartaz) */}
        <footer className="bg-primary px-6 py-4 text-center">
          <p className="flex items-center justify-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-white">
            <Star className="size-4 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
            Kit Fono Kids · Fonoaudiologia Infantil
            <Heart className="size-4 fill-brand-pink text-brand-pink" aria-hidden="true" />
          </p>
        </footer>
      </div>
    </article>
  )
}

function Bloco({
  tema,
  icon,
  numero,
  titulo,
  children,
}: {
  tema: keyof typeof temas
  icon: React.ReactNode
  numero?: string
  titulo: string
  children: React.ReactNode
}) {
  const t = temas[tema]
  return (
    <section className={`rounded-2xl border-2 ${t.border} ${t.bg} p-4`}>
      <div className="flex items-center gap-2.5">
        <span className={`flex size-9 items-center justify-center rounded-full ${t.chip} shadow-sm`}>{icon}</span>
        <h2 className={`font-heading text-base font-bold ${t.title}`}>
          {numero ? `${numero}. ` : ""}
          {titulo}
        </h2>
      </div>
      <div className="mt-3">{children}</div>
    </section>
  )
}

// Decorações de confete no cabeçalho (estrelas, corações, traços e bolinhas)
function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Star className="absolute left-4 top-4 size-5 fill-brand-yellow text-brand-yellow" />
      <Star className="absolute right-6 top-10 size-4 fill-brand-blue text-brand-blue" />
      <Heart className="absolute left-10 top-12 size-4 fill-brand-pink text-brand-pink" />
      <Heart className="absolute right-4 top-4 size-5 fill-brand-pink text-brand-pink" />
      <span className="absolute left-1/4 top-3 h-1 w-5 -rotate-45 rounded-full bg-brand-pink/70" />
      <span className="absolute right-1/4 top-6 h-1 w-5 rotate-45 rounded-full bg-brand-blue/70" />
      <span className="absolute right-12 top-16 size-2 rounded-full bg-brand-yellow" />
      <span className="absolute left-16 top-6 size-2 rounded-full bg-brand-blue/70" />
    </div>
  )
}
