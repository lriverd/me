export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Luis Riveros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
