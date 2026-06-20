import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PrintableActivity } from "@/components/access/printable-activity"
import { atividades, getAtividade, getCategoria } from "@/lib/activities"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export function generateStaticParams() {
  return atividades.map((a) => ({ slug: a.slug }))
}

export default async function AtividadePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const atividade = getAtividade(slug)
  if (!atividade) notFound()
  const categoria = getCategoria(atividade.categoriaSlug)
  if (!categoria) notFound()

  return (
    <main className="min-h-screen bg-background">
      <PrintableActivity atividade={atividade} categoria={categoria} />
    </main>
  )
}
