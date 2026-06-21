import type { Metadata } from "next"
import { PosterPageShell } from "@/components/access/poster-page-shell"
import { ManualSheet } from "@/components/access/manual-sheet"

export const metadata: Metadata = {
  title: "Manual de uso | Kit Fono Kids",
  robots: { index: false, follow: false },
}

export default function ManualPage() {
  return (
    <PosterPageShell>
      <ManualSheet />
    </PosterPageShell>
  )
}
