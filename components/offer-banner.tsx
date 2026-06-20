import { AlertTriangle } from "lucide-react"

export function OfferBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-brand-pink via-primary to-brand-pink py-3 text-center">
      <p className="flex items-center justify-center gap-2 px-4 font-heading text-sm font-semibold text-white sm:text-base">
        <AlertTriangle className="size-4 shrink-0" aria-hidden="true" />
        Oferta válida de 15 de junho de 2026 até 19 de junho de 2026
      </p>
    </div>
  )
}
