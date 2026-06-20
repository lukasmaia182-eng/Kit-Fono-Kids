import type { Metadata } from "next"
import { PosterPageShell } from "@/components/access/poster-page-shell"
import { EmotionsPoster } from "@/components/access/emotions-poster"

export const metadata: Metadata = {
  title: "Cartaz: Como você está se sentindo? | Kit Fono Kids",
  robots: { index: false, follow: false },
}

export default function CartazEmocoesPage() {
  return (
    <PosterPageShell>
      <EmotionsPoster />
    </PosterPageShell>
  )
}
