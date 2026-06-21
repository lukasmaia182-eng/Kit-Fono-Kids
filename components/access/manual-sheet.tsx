import {
  Target,
  Printer,
  Hand,
  Layers,
  HomeIcon,
  Star,
  Heart,
  ListChecks,
  AlertTriangle,
} from "lucide-react"

const passos = [
  {
    icon: Target,
    titulo: "Escolha o objetivo da sessão",
    texto:
      "Antes de imprimir, defina se a prioridade será vocabulário, linguagem, fonemas, comunicação funcional, rimas, rotina ou partes do corpo.",
  },
  {
    icon: Printer,
    titulo: "Imprima ou use no tablet",
    texto:
      "Para uso físico, imprima em A4. Para maior durabilidade, plastifique as páginas mais usadas ou coloque em pasta catálogo.",
  },
  {
    icon: Hand,
    titulo: "Aplique com mediação",
    texto:
      "Mostre as imagens, leia os comandos em voz alta, dê tempo para a criança responder e reforce cada tentativa de comunicação.",
  },
  {
    icon: Layers,
    titulo: "Adapte ao nível da criança",
    texto:
      "Use poucas opções no início. Depois aumente a quantidade de cards, perguntas e desafios conforme a evolução.",
  },
  {
    icon: HomeIcon,
    titulo: "Envie para casa quando fizer sentido",
    texto:
      "As páginas mais simples podem ser usadas como reforço entre uma sessão e outra, com instruções curtas para a família.",
  },
]

export function ManualSheet() {
  return (
    <article className="mx-auto max-w-3xl rounded-[2rem] border-4 border-primary bg-primary p-2 shadow-sm sm:p-3 print:shadow-none">
      <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-dashed border-white/40 bg-card">
        {/* Cabeçalho */}
        <header className="relative overflow-hidden bg-brand-cream px-6 pb-6 pt-7">
          <Confetti />
          <div className="relative flex flex-col items-center text-center">
            <span className="rounded-full bg-brand-blue px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-white shadow-sm">
              Manual de uso
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight text-primary text-balance sm:text-4xl">
              Como usar o seu kit
            </h1>
            <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-primary shadow-sm">
              Clareza · Organização · Segurança
            </span>
          </div>
        </header>

        <div className="grid gap-5 px-6 py-6">
          {/* Objetivo */}
          <section className="rounded-2xl border-2 border-brand-blue/25 bg-brand-blue/5 p-4">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-brand-blue text-white shadow-sm">
                <Target className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-base font-bold text-brand-blue">Objetivo do material</h2>
            </div>
            <p className="mt-3 leading-relaxed text-foreground">
              Apoiar sessões, atendimentos, atividades pedagógicas e práticas em casa com recursos visuais simples,
              lúdicos e organizados.
            </p>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Indicado para fonoaudiólogos, psicopedagogos, terapeutas, professores, ATs, pais e cuidadores que desejam
              recursos práticos para trabalhar linguagem, comunicação, vocabulário, sequência lógica e consciência
              fonológica.
            </p>
          </section>

          {/* Passos */}
          <section className="rounded-2xl border-2 border-brand-green/40 bg-brand-green/10 p-4">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-brand-green text-white shadow-sm">
                <ListChecks className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-base font-bold text-brand-green-dark">Passo a passo</h2>
            </div>
            <ol className="mt-3 grid gap-3">
              {passos.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-2xl border-2 border-dashed border-brand-green/30 bg-white p-3"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                    <p.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-primary">
                      {i + 1}. {p.titulo}
                    </p>
                    <p className="mt-0.5 leading-relaxed text-muted-foreground">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Aviso importante */}
          <section className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-amber-500 text-white">
                <AlertTriangle className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-base font-bold text-amber-600">Aviso importante</h2>
            </div>
            <p className="mt-2 leading-relaxed text-foreground">
              Este material é um recurso de apoio educacional e terapêutico. Ele não substitui avaliação, diagnóstico,
              plano terapêutico individualizado ou acompanhamento profissional.
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
