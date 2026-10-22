import Link from "next/link"
import { ArrowLeft, Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-gold/[0.07] blur-3xl" />

      <div className="relative z-10 max-w-xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">Error 404</p>
        <h1 className="mt-4 text-6xl font-black tracking-tight sm:text-8xl">
          Lost in <span className="text-primary">space</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          This page drifted out of orbit. The link may be outdated, or the page may have moved.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="gap-2 bg-primary hover:bg-primary/90">
            <Link href="/">
              <Home className="h-4 w-4" /> Back home
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
            <Link href="/#projects">
              <Search className="h-4 w-4" /> Browse projects
            </Link>
          </Button>
        </div>

        <Link
          href="/#contact"
          className="mt-8 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Or get in touch
        </Link>
      </div>
    </div>
  )
}
