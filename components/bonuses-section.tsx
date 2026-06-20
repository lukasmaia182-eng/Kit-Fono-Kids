import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

const bonuses = [
  {
    img: "/kit/b1.png",
    title: "Atividades para enviar para casa",
    points: [
      "Ajuda a criança a praticar entre uma sessão e outra",
      "Facilita o envio de atividades simples para os pais",
      "Mantém o estímulo em casa sem sobrecarregar a família",
    ],
  },
  {
    img: "/kit/b2.png",
    title: "Pranchas de comunicação funcional",
    points: [
      "Tenha recursos visuais para apoiar crianças com dificuldade de expressão",
      "Ajuda a criança a comunicar necessidades e sentimentos com mais facilidade",
      "Apoia pedidos básicos como ajuda, pausa, água e banheiro",
    ],
  },
  {
    img: "/kit/b3.png",
    title: "Fichas de registro e evolução",
    points: [
      "Registre o que foi trabalhado em cada atendimento",
      "Acompanhe a evolução da criança por objetivo terapêutico",
      "Organize a próxima intervenção com mais clareza e praticidade",
    ],
  },
  {
    img: "/kit/b4.png",
    title: "Jogos rápidos para crianças dispersas",
    points: [
      "Ajuda a recuperar a atenção da criança durante a sessão",
      "Inclui atividades curtas para momentos de agitação ou cansaço",
      "Torna o atendimento mais leve, dinâmico e participativo",
    ],
  },
  {
    img: "/kit/b5.png",
    title: "Kit de planejamento de sessões",
    points: [
      "Planeje objetivos, materiais e observações em um só lugar",
      "Tenha uma visão rápida das sessões da semana",
      "Facilita a escolha de atividades conforme a habilidade trabalhada",
    ],
  },
  {
    img: "/kit/b6.png",
    title: "Kit extra de fonemas-alvo",
    points: [
      "Atividades extras para trabalhar sons específicos na sessão",
      "Cartas, pranchas, bingo e desafios rápidos separados por fonema",
      "Trabalhe os sons /P/, /B/, /T/, /D/, /F/, /V/, /S/, /Z/, /L/ e /R/",
    ],
  },
  {
    img: "/kit/b7.png",
    title: "Kit de rotina visual para consultório",
    points: [
      "Cartazes e apoios visuais para organizar melhor a sessão infantil",
      'Inclui cartaz "Nossa rotina", "Primeiro e depois", "Combinados da sessão" e cartões de transição',
      "Ajuda a criança a entender o que vai acontecer e a lidar com mudanças",
    ],
  },
]

export function BonusesSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>
          Ao adquirir o Kit Completo hoje, você também recebe 7 bônus grátis
        </SectionHeading>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bonuses.map((b, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-3xl border-2 border-brand-pink/30 bg-card shadow-sm"
          >
            <Image
              src={b.img || "/placeholder.svg"}
              alt={`Bônus #${String(i + 1).padStart(2, "0")} grátis: ${b.title}`}
              width={1080}
              height={1350}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
