import Image from "next/image"
import Link from "next/link"
import { Download, Gift, Printer, FileText, ArrowRight, BookOpen, ListChecks, Layers } from "lucide-react"
import { categorias, atividadesPorCategoria } from "@/lib/activities"
import { flashcards } from "@/lib/flashcards"

const bonuses = [
  { img: "/kit/b1.png", title: "Atividades para enviar para casa" },
  { img: "/kit/b2.png", title: "Pranchas de comunicação funcional" },
  { img: "/kit/b3.png", title: "Fichas de registro e evolução" },
  { img: "/kit/b4.png", title: "Jogos rápidos para crianças dispersas" },
  { img: "/kit/b5.png", title: "Kit de planejamento de sessões" },
  { img: "/kit/b6.png", title: "Kit extra de fonemas-alvo" },
  { img: "/kit/b7.png", title: "Rotina visual para a sessão" },
]

export function AccessContent() {
  return (
    <main className="bg-brand-cream px-4 py-14">
      <div className="mx-auto max-w-5xl">
        {/* Como usar */}
        <section className="mb-14 rounded-3xl border-2 border-primary/15 bg-card p-6 sm:p-8">
          <h2 className="font-heading text-2xl font-bold text-primary text-balance">Como usar o seu kit</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { icon: FileText, text: "Abra a atividade que quiser usar na sessão de hoje." },
              { icon: Printer, text: "Clique em Imprimir / Salvar PDF para gerar o material." },
              { icon: Gift, text: "Aplique com as crianças e aproveite os 7 bônus." },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl bg-brand-soft p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Manual e orientações */}
        <section className="mb-14" aria-labelledby="manual-title">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-brand-blue">
              <BookOpen className="size-4" aria-hidden="true" />
              Comece por aqui
            </span>
            <h2 id="manual-title" className="mt-3 font-heading text-2xl font-bold text-primary text-balance sm:text-3xl">
              Manual e orientações de uso
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                href: "/seuacesso/manual",
                icon: BookOpen,
                eyebrow: "Manual de uso",
                title: "Como usar o seu kit",
                desc: "Objetivo do material, passo a passo de aplicação e aviso importante para usar com clareza e segurança.",
              },
              {
                href: "/seuacesso/roteiro",
                icon: ListChecks,
                eyebrow: "Roteiro de aplicação",
                title: "Roteiro rápido da sessão",
                desc: "Os 5 momentos da sessão (abertura, modelagem, resposta, reforço e generalização) com dicas de impressão.",
              },
            ].map((item) => (
              <article
                key={item.href}
                className="flex flex-col rounded-3xl border-2 border-brand-blue/15 bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-blue text-white">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="mt-4 font-heading text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  {item.eyebrow}
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-primary text-balance">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Abrir e imprimir
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Imprimir kit completo */}
        <section className="mb-14 flex flex-col items-center gap-4 rounded-3xl bg-primary p-6 text-center text-primary-foreground sm:flex-row sm:justify-between sm:p-8 sm:text-left">
          <div>
            <h2 className="font-heading text-xl font-bold text-balance sm:text-2xl">
              Quer o kit inteiro de uma vez?
            </h2>
            <p className="mt-1 leading-relaxed text-white/90 text-pretty">
              Gere as 100 atividades em um único PDF, prontas para imprimir.
            </p>
          </div>
          <Link
            href="/seuacesso/imprimir-tudo"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3 font-heading text-sm font-bold text-primary transition hover:brightness-105"
          >
            <Printer className="size-5" aria-hidden="true" />
            Imprimir kit completo
          </Link>
        </section>

        {/* Módulos de atividades */}
        <div className="grid gap-14">
          {categorias.map((cat, idx) => {
            const lista = atividadesPorCategoria(cat.slug)
            const numero = String(idx + 1).padStart(2, "0")
            return (
              <section key={cat.slug} aria-labelledby={`mod-${cat.slug}`}>
                <div className="mb-6 flex items-center gap-4">
                  <span
                    className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${cat.cor} font-heading text-xl font-bold text-white`}
                  >
                    {numero}
                  </span>
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Módulo {numero}
                    </p>
                    <h2 id={`mod-${cat.slug}`} className="font-heading text-2xl font-bold text-primary text-balance">
                      {cat.nome}
                    </h2>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  {lista.map((act) => (
                    <article
                      key={act.slug}
                      className="flex flex-col overflow-hidden rounded-3xl border-2 border-primary/10 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="overflow-hidden bg-brand-cream">
                        <Image
                          src={cat.ilustracao || "/placeholder.svg"}
                          alt={`Ilustração da atividade ${act.titulo}`}
                          width={800}
                          height={400}
                          className="aspect-[16/9] w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <span className="font-heading text-xs font-bold uppercase tracking-wide text-muted-foreground">
                          Atividade {String(act.numero).padStart(2, "0")}
                        </span>
                        <h3 className="mt-1 font-heading text-lg font-bold text-primary text-balance">{act.titulo}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{act.objetivo}</p>
                        <Link
                          href={`/seuacesso/atividade/${act.slug}`}
                          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          Abrir atividade
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* Flashcards */}
        <section className="mt-16" aria-labelledby="flashcards-title">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-brand-green-dark">
              <Layers className="size-4" aria-hidden="true" />
              20 itens · frente e verso
            </span>
            <h2
              id="flashcards-title"
              className="mt-3 font-heading text-2xl font-bold text-primary text-balance sm:text-3xl"
            >
              Flashcards para imprimir
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
              10 temas com frente (figuras) e verso (orientações de aplicação). Imprima, recorte e plastifique.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {flashcards.map((f) => (
              <article
                key={f.slug}
                className="flex flex-col rounded-3xl border-2 border-primary/10 bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-heading text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    Itens {String(f.numeroFrente).padStart(2, "0")}–{String(f.numeroVerso).padStart(2, "0")}
                  </span>
                  <span className={`rounded-full ${f.cor} px-3 py-1 font-heading text-[0.65rem] font-bold uppercase tracking-wide text-white`}>
                    Frente + verso
                  </span>
                </div>
                <h3 className="mt-2 font-heading text-lg font-bold text-primary text-balance">{f.tema}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {f.cartoes.slice(0, 4).map((c) => (
                    <span
                      key={c.palavra}
                      className="rounded-full bg-brand-soft px-2.5 py-1 font-heading text-[0.7rem] font-bold text-muted-foreground"
                    >
                      {c.palavra}
                    </span>
                  ))}
                  {f.cartoes.length > 4 && (
                    <span className="rounded-full bg-brand-soft px-2.5 py-1 font-heading text-[0.7rem] font-bold text-muted-foreground">
                      +{f.cartoes.length - 4}
                    </span>
                  )}
                </div>
                <Link
                  href={`/seuacesso/flashcard/${f.slug}`}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Abrir flashcard
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Cartazes */}
        <section className="mt-16" aria-labelledby="cartazes-title">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-primary">
              <Printer className="size-4" aria-hidden="true" />
              Cartazes para a parede
            </span>
            <h2
              id="cartazes-title"
              className="mt-3 font-heading text-2xl font-bold text-primary text-balance sm:text-3xl"
            >
              Cartazes para imprimir
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="flex flex-col overflow-hidden rounded-3xl border-2 border-primary/10 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="grid grid-cols-3 gap-1 bg-brand-cream p-3">
                {["/kit/emo-feliz.png", "/kit/emo-triste.png", "/kit/emo-bravo.png"].map((src) => (
                  <Image
                    key={src}
                    src={src || "/placeholder.svg"}
                    alt=""
                    width={200}
                    height={200}
                    className="aspect-square w-full rounded-lg object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="font-heading text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Cartaz 01
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-primary text-balance">
                  Como você está se sentindo?
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Cartaz de emoções para identificar, nomear e expressar sentimentos.
                </p>
                <Link
                  href="/seuacesso/cartaz/emocoes"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Abrir cartaz
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Bônus */}
        <section className="mt-16" aria-labelledby="bonus-title">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-pink/15 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-brand-pink">
              <Gift className="size-4" aria-hidden="true" />
              Seus 7 bônus
            </span>
            <h2 id="bonus-title" className="mt-3 font-heading text-2xl font-bold text-primary text-balance sm:text-3xl">
              Materiais extras liberados
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bonuses.map((bonus, i) => (
              <article
                key={bonus.title}
                className="flex flex-col overflow-hidden rounded-3xl border-2 border-brand-pink/25 bg-card shadow-sm"
              >
                <div className="overflow-hidden bg-brand-cream">
                  <Image
                    src={bonus.img || "/placeholder.svg"}
                    alt={`Bônus: ${bonus.title}`}
                    width={800}
                    height={800}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-heading text-xs font-bold uppercase tracking-wide text-brand-pink">
                    Bônus #{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-heading text-base font-bold text-primary text-balance">{bonus.title}</h3>
                  <a
                    href={bonus.img}
                    download
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-brand-green-dark"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    Baixar bônus
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Suporte */}
        <section className="mt-16 rounded-3xl bg-primary p-8 text-center text-primary-foreground">
          <h2 className="font-heading text-2xl font-bold text-balance">Precisa de ajuda?</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/90 text-pretty">
            Se tiver qualquer dúvida sobre o acesso ou os materiais, fale com a gente pelo e-mail de suporte. Bons
            atendimentos!
          </p>
        </section>
      </div>
    </main>
  )
}
