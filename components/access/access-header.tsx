import Image from "next/image"
import { Sparkles } from "lucide-react"

export function AccessHeader() {
  return (
    <header className="bg-primary px-4 py-10 text-primary-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide">
          <Sparkles className="size-4" aria-hidden="true" />
          Área de acesso
        </span>
        <h1 className="font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl">
          Bem-vinda ao seu Kit Fono Kids!
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-white/90 text-pretty sm:text-lg">
          Seu acesso está liberado. Baixe, imprima e aplique mais de 100 atividades lúdicas com objetivo terapêutico.
          Role a página para ver tudo o que você recebeu.
        </p>
        <div className="w-full max-w-md overflow-hidden rounded-3xl bg-brand-cream shadow-xl ring-4 ring-white/20">
          <Image
            src="/kit/mock-clean.png"
            alt="Kit Fono Kids completo com livro de atividades e materiais digitais"
            width={800}
            height={800}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </header>
  )
}
