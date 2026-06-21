import { PlayCircle, Repeat, MessageCircle, ThumbsUp, Sparkles, Star, Heart, Printer, Tag } from "lucide-react"

const momentos = [
  {
    icon: PlayCircle,
    cor: "bg-brand-blue",
    momento: "Abertura",
    texto: "Mostre a página, diga o tema e convide a criança a observar as figuras.",
  },
  {
    icon: Repeat,
    cor: "bg-brand-green",
    momento: "Modelagem",
    texto: "Fale a palavra ou frase primeiro e peça para a criança repetir, apontar ou escolher.",
  },
  {
    icon: MessageCircle,
    cor: "bg-orange-500",
    momento: "Resposta",
    texto: "Aceite respostas por fala, apontar, olhar, gesto ou aproximação vocal, conforme o nível da criança.",
  },
  {
    icon: ThumbsUp,
    cor: "bg-brand-pink",
    momento: "Reforço",
    texto: "Elogie tentativas: “Muito bem”, “Você conseguiu escolher”, “Vamos tentar de novo”.",
  },
  {
    icon: Sparkles,
    cor: "bg-sky-500",
    momento: "Generalização",
    texto: "Use as mesmas palavras na rotina real: água, ajuda, pausa, brincar, feliz, triste, escola, casa.",
  },
]

export function RoteiroSheet() {
  return (
    <article className="mx-auto max-w-3xl rounded-[2rem] border-4 border-primary bg-primary p-2 shadow-sm sm:p-3 print:shadow-none">
      <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-dashed border-white/40 bg-card">
        {/* Cabeçalho */}
        <header className="relative overflow-hidden bg-brand-cream px-6 pb-6 pt-7">
          <Confetti />
          <div className="relative flex flex-col items-center text-center">
            <span className="rounded-full bg-brand-pink px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-white shadow-sm">
              Roteiro de aplicação
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight text-primary text-balance sm:text-4xl">
              Roteiro rápido
            </h1>
            <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-primary shadow-sm">
              5 momentos para guiar a sessão
            </span>
          </div>
        </header>

        <div className="grid gap-5 px-6 py-6">
          {/* Momentos */}
          <ol className="grid gap-3">
            {momentos.map((m, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-2xl border-2 border-dashed border-primary/15 bg-white p-3"
              >
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${m.cor} text-white shadow-sm`}
                >
                  <m.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold uppercase tracking-wide text-primary">{m.momento}</p>
                  <p className="mt-0.5 leading-relaxed text-muted-foreground">{m.texto}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Dica de impressão */}
          <section className="rounded-2xl border-2 border-brand-blue/25 bg-brand-blue/5 p-4">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-brand-blue text-white">
                <Printer className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-base font-bold text-brand-blue">Dica de impressão</h2>
            </div>
            <p className="mt-2 leading-relaxed text-foreground">
              Use tamanho A4, orientação vertical, escala 100% ou “ajustar à página”. Para cards que serão manuseados,
              imprima em papel mais firme ou plastifique.
            </p>
          </section>

          {/* Dica comercial */}
          <section className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-amber-500 text-white">
                <Tag className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-base font-bold text-amber-600">Dica de valor</h2>
            </div>
            <p className="mt-2 leading-relaxed text-foreground">
              Entregue este manual junto com os flashcards para aumentar a percepção de valor e facilitar o uso do
              produto por profissionais, educadores e famílias.
            </p>
          </section>
        </div>

        <Faixa />
      </div>
    </article>
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
