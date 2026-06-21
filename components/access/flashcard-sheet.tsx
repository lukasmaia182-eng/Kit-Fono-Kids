import Image from "next/image"
import { Target, Trophy, MessageSquare, Lightbulb, Star, Heart, Scissors } from "lucide-react"
import type { Flashcard } from "@/lib/flashcards"

// Cores que se alternam nos cartões de figuras, no estilo do cartaz
const coresCartao = [
  "bg-brand-green text-white",
  "bg-amber-400 text-primary",
  "bg-brand-pink text-white",
  "bg-brand-blue text-white",
  "bg-sky-500 text-white",
  "bg-orange-500 text-white",
]

export function FlashcardSheet({ flashcard }: { flashcard: Flashcard }) {
  return (
    <div className="mx-auto grid max-w-3xl gap-10">
      {/* ---------------- FRENTE ---------------- */}
      <article className="rounded-[2rem] border-4 border-primary bg-primary p-2 shadow-sm sm:p-3 print:shadow-none">
        <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-dashed border-white/40 bg-card">
          <header className="relative overflow-hidden bg-brand-cream px-6 pb-6 pt-7">
            <Confetti />
            <div className="relative flex flex-col items-center text-center">
              <span
                className={`rounded-full ${flashcard.cor} px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-white shadow-sm`}
              >
                Flashcard · Frente
              </span>
              <h1 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight text-primary text-balance sm:text-4xl">
                {flashcard.tema}
              </h1>
              <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-primary shadow-sm">
                Item {String(flashcard.numeroFrente).padStart(2, "0")} · Mostre e nomeie
              </span>
            </div>
          </header>

          {/* Grade de figuras */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {flashcard.cartoes.map((c, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center overflow-hidden rounded-2xl border-2 border-dashed border-primary/25 bg-white"
                >
                  <div className="flex aspect-square w-full items-center justify-center bg-white p-2">
                    <Image
                      src={c.imagem || "/placeholder.svg"}
                      alt={`Ilustração de ${c.palavra}`}
                      width={200}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span
                    className={`w-full ${coresCartao[i % coresCartao.length]} py-2 text-center font-heading text-base font-bold uppercase tracking-wide`}
                  >
                    {c.palavra}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Faixa />
        </div>
      </article>

      {/* ---------------- VERSO ---------------- */}
      <article className="rounded-[2rem] border-4 border-primary bg-primary p-2 shadow-sm sm:p-3 print:shadow-none print:break-before-page">
        <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-dashed border-white/40 bg-card">
          <header className="relative overflow-hidden bg-brand-cream px-6 pb-6 pt-7">
            <Confetti />
            <div className="relative flex flex-col items-center text-center">
              <span
                className={`rounded-full ${flashcard.cor} px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-white shadow-sm`}
              >
                Flashcard · Verso
              </span>
              <h1 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight text-primary text-balance sm:text-3xl">
                {flashcard.tema}
              </h1>
              <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-primary shadow-sm">
                Item {String(flashcard.numeroVerso).padStart(2, "0")} · Como aplicar
              </span>
            </div>
          </header>

          <div className="grid gap-5 px-6 py-6">
            <Bloco
              tema="blue"
              icon={<Target className="size-5" aria-hidden="true" />}
              titulo="Objetivo"
            >
              <p className="leading-relaxed text-foreground">{flashcard.objetivo}</p>
            </Bloco>

            <Bloco
              tema="pink"
              icon={<Trophy className="size-5" aria-hidden="true" />}
              titulo="Como aplicar"
            >
              <ol className="grid gap-2">
                {flashcard.comoAplicar.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 leading-relaxed text-foreground">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-pink font-heading text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {p}
                  </li>
                ))}
              </ol>
            </Bloco>

            <Bloco
              tema="green"
              icon={<MessageSquare className="size-5" aria-hidden="true" />}
              titulo="Comandos sugeridos"
            >
              <ul className="grid gap-1.5">
                {flashcard.comandos.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed text-foreground">
                    <Heart className="mt-1 size-3.5 shrink-0 fill-brand-pink text-brand-pink" aria-hidden="true" />
                    <span className="italic">“{c}”</span>
                  </li>
                ))}
              </ul>
            </Bloco>

            {/* Dica - destaque amarelo */}
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-full bg-amber-500 text-white">
                  <Lightbulb className="size-5" aria-hidden="true" />
                </span>
                <h2 className="font-heading text-base font-bold text-amber-600">Dica do terapeuta</h2>
              </div>
              <p className="mt-2 leading-relaxed text-foreground">{flashcard.dica}</p>
            </div>

            <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Scissors className="size-3.5" aria-hidden="true" />
              Imprima frente e verso, recorte e plastifique para mais durabilidade.
            </p>
          </div>

          <Faixa />
        </div>
      </article>
    </div>
  )
}

const temas = {
  blue: { border: "border-brand-blue/25", bg: "bg-brand-blue/5", chip: "bg-brand-blue text-white", title: "text-brand-blue" },
  green: { border: "border-brand-green/40", bg: "bg-brand-green/10", chip: "bg-brand-green text-white", title: "text-brand-green-dark" },
  pink: { border: "border-brand-pink/30", bg: "bg-brand-pink/5", chip: "bg-brand-pink text-white", title: "text-brand-pink" },
} as const

function Bloco({
  tema,
  icon,
  titulo,
  children,
}: {
  tema: keyof typeof temas
  icon: React.ReactNode
  titulo: string
  children: React.ReactNode
}) {
  const t = temas[tema]
  return (
    <section className={`rounded-2xl border-2 ${t.border} ${t.bg} p-4`}>
      <div className="flex items-center gap-2.5">
        <span className={`flex size-9 items-center justify-center rounded-full ${t.chip} shadow-sm`}>{icon}</span>
        <h2 className={`font-heading text-base font-bold ${t.title}`}>{titulo}</h2>
      </div>
      <div className="mt-3">{children}</div>
    </section>
  )
}

function Faixa() {
  return (
    <footer className="bg-primary px-6 py-4 text-center">
      <p className="flex items-center justify-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-white">
        <Star className="size-4 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
        Kit Fono Kids · Fonoaudiologia Infantil
        <Heart className="size-4 fill-brand-pink text-brand-pink" aria-hidden="true" />
      </p>
    </footer>
  )
}

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
