import type { Metadata } from "next"
import { PrintAll } from "@/components/access/print-all"

export const metadata: Metadata = {
  title: "Imprimir kit completo · Kit Fono Kids",
  robots: { index: false, follow: false },
}

export default function ImprimirTudoPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <PrintAll />
    </main>
  )
}
