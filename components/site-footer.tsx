export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card px-4 py-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-heading text-lg font-bold text-primary">Kit Fono Kids</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Material digital de apoio para fonoaudiólogas. Este conteúdo não substitui a avaliação, o diagnóstico ou a
          intervenção profissional.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kit Fono Kids. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
