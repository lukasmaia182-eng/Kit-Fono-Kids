import { cn } from "@/lib/utils"

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQDAQ8"

export function CtaButton({
  children,
  className,
  subtitle,
  href = CHECKOUT_URL,
}: {
  children: React.ReactNode
  className?: string
  subtitle?: string
  href?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex w-full max-w-xl flex-col items-center justify-center rounded-full bg-brand-green px-8 py-5 text-center font-heading text-lg font-bold uppercase tracking-wide text-white shadow-[0_8px_0_0_var(--brand-green-dark)] transition-all hover:translate-y-1 hover:shadow-[0_4px_0_0_var(--brand-green-dark)] sm:text-xl",
        className,
      )}
    >
      <span className="leading-tight text-balance">{children}</span>
      {subtitle ? (
        <span className="mt-1 text-xs font-semibold normal-case tracking-normal text-white/90">{subtitle}</span>
      ) : null}
    </a>
  )
}
