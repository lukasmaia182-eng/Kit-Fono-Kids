import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PosterPageShell } from "@/components/access/poster-page-shell"
import { FlashcardSheet } from "@/components/access/flashcard-sheet"
import { flashcards, getFlashcard } from "@/lib/flashcards"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export function generateStaticParams() {
  return flashcards.map((f) => ({ slug: f.slug }))
}

export default async function FlashcardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const flashcard = getFlashcard(slug)
  if (!flashcard) notFound()

  return (
    <PosterPageShell>
      <FlashcardSheet flashcard={flashcard} />
    </PosterPageShell>
  )
}
