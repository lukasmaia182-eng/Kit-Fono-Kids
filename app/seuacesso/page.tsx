import type { Metadata } from "next"
import { AccessHeader } from "@/components/access/access-header"
import { AccessContent } from "@/components/access/access-content"

export const metadata: Metadata = {
  title: "Seu Acesso | Kit Fono Kids",
  description: "Área de acesso ao Kit Fono Kids. Baixe e imprima suas atividades e bônus.",
  robots: { index: false, follow: false },
}

export default function SeuAcessoPage() {
  return (
    <>
      <AccessHeader />
      <AccessContent />
    </>
  )
}
