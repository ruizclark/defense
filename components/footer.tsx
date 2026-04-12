import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Doctoral Capstone Defense
            </p>
            <p className="text-sm font-medium text-foreground">
              Harvard Graduate School of Education
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              April 17, 2026
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-muted-foreground">
              Ruiz Clark | EdLD Candidate
            </p>
            <Link 
              href="https://www.ruizclark.com/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
