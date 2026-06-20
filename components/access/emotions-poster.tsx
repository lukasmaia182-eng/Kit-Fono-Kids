import Image from "next/image"

type Emotion = {
  label: string
  description: string
  img: string
  border: string
  pill: string
}

const emotions: Emotion[] = [
  {
    label: "Feliz",
    description: "Quando algo bom acontece.",
    img: "/kit/emo-feliz.png",
    border: "border-[oklch(0.72_0.17_140)]",
    pill: "bg-[oklch(0.72_0.17_140)]",
  },
  {
    label: "Triste",
    description: "Quando algo não sai como esperamos.",
    img: "/kit/emo-triste.png",
    border: "border-[oklch(0.82_0.16_90)]",
    pill: "bg-[oklch(0.82_0.16_90)]",
  },
  {
    label: "Bravo",
    description: "Quando algo nos incomoda.",
    img: "/kit/emo-bravo.png",
    border: "border-[oklch(0.62_0.21_28)]",
    pill: "bg-[oklch(0.62_0.21_28)]",
  },
  {
    label: "Com medo",
    description: "Quando algo nos assusta.",
    img: "/kit/emo-medo.png",
    border: "border-[oklch(0.58_0.18_300)]",
    pill: "bg-[oklch(0.58_0.18_300)]",
  },
  {
    label: "Surpreso",
    description: "Quando algo inesperado acontece.",
    img: "/kit/emo-surpreso.png",
    border: "border-[oklch(0.7_0.18_350)]",
    pill: "bg-[oklch(0.7_0.18_350)]",
  },
  {
    label: "Calmo",
    description: "Quando estamos tranquilos e relaxados.",
    img: "/kit/emo-calmo.png",
    border: "border-[oklch(0.7_0.12_200)]",
    pill: "bg-[oklch(0.7_0.12_200)]",
  },
]

export function EmotionsPoster() {
  return (
    <div className="mx-auto w-full max-w-[820px] rounded-[2rem] bg-primary p-2.5 shadow-xl">
      <div className="relative overflow-hidden rounded-[1.6rem] border-2 border-dashed border-white/40 bg-card px-5 py-8 sm:px-8">
        {/* Cabeçalho */}
        <header className="text-center">
          <span className="inline-block rounded-2xl bg-primary px-6 py-2 font-heading text-lg font-bold uppercase tracking-wide text-primary-foreground sm:text-xl">
            Emoções
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold uppercase leading-none text-primary text-balance sm:text-5xl">
            Como você <span className="text-brand-pink">está</span> se sentindo?
          </h1>
          <span className="mt-4 inline-block rounded-2xl bg-brand-yellow px-5 py-2 font-heading text-sm font-bold uppercase tracking-wide text-primary sm:text-base">
            Identifique, nomeie e expresse!
          </span>
        </header>

        {/* Grade de emoções */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {emotions.map((e) => (
            <article
              key={e.label}
              className={`flex flex-col items-center rounded-2xl border-2 ${e.border} bg-card p-2 text-center`}
            >
              <div className="w-full overflow-hidden rounded-xl">
                <Image
                  src={e.img || "/placeholder.svg"}
                  alt={`Criança demonstrando a emoção: ${e.label}`}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <span
                className={`-mt-3 inline-block rounded-xl ${e.pill} px-4 py-1.5 font-heading text-base font-bold uppercase text-white shadow-sm sm:text-lg`}
              >
                {e.label}
              </span>
              <p className="mt-2 px-1 pb-1 text-xs leading-snug text-muted-foreground text-pretty sm:text-sm">
                {e.description}
              </p>
            </article>
          ))}
        </div>

        {/* Faixa inferior */}
        <footer className="mt-8 rounded-2xl bg-primary px-5 py-3 text-center">
          <p className="font-heading text-sm font-bold uppercase leading-tight text-primary-foreground sm:text-base">
            Reconhecer emoções é o primeiro passo para{" "}
            <span className="text-brand-yellow">se comunicar melhor!</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
