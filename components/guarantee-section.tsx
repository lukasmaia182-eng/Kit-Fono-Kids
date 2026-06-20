import Image from "next/image"

export function GuaranteeSection() {
  return (
    <section className="bg-brand-soft px-4 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 sm:flex-row sm:gap-12">
        <div className="shrink-0">
          <Image
            src="/kit/selo-garantia-15-dias.png"
            alt="Selo de garantia incondicional de 15 dias"
            width={320}
            height={320}
            sizes="(max-width: 640px) 224px, 288px"
            className="h-auto w-56 sm:w-72"
          />
        </div>

        <div className="text-center sm:text-left">
          <h2 className="font-heading text-2xl font-bold text-primary text-balance sm:text-3xl">
            Garantia de 15 Dias
          </h2>
          <div className="mt-5 grid gap-4 leading-relaxed text-muted-foreground text-pretty">
            <p>Essa garantia existe porque acreditamos no valor prático do material.</p>
            <p>Você não está comprando uma promessa abstrata.</p>
            <p>
              Está recebendo{" "}
              <strong className="font-semibold text-foreground">
                atividades visuais prontas, organizadas e pensadas para imprimir e aplicar
              </strong>{" "}
              com a criança no dia a dia.
            </p>
            <p>Se o material não fizer sentido para você, o risco fica totalmente do nosso lado.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
