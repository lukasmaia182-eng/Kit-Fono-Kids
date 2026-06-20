import { cn } from "@/lib/utils"

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "text-center font-heading text-3xl font-bold uppercase leading-tight text-primary text-balance sm:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  )
}
