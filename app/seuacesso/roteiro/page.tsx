import type { Metadata } from "next"
import { PosterPageShell } from "@/components/access/poster-page-shell"
import { RoteiroSheet } from "@/components/access/roteiro-sheet"

export const metadata: Metadata = {
  title: "Roteiro de aplicação | Kit Fono Kids",
  robots: { index: false, follow: false },
}

export default function RoteiroPage() {
  return (
    <PosterPageShell>
      <RoteiroSheet />
    </PosterPageShell>
  )
}
