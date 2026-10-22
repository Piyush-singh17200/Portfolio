"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Unhandled application error:", error.message)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="max-w-lg text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">Something broke</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          A temporary <span className="text-primary">glitch</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The page hit an unexpected error. Try again, or head back to the homepage.
        </p>
        {error.digest && (
          <p className="mt-3 font-mono text-[11px] text-muted-foreground">Reference: {error.digest}</p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button onClick={reset} className="gap-2 bg-primary hover:bg-primary/90">
            <RefreshCw className="h-4 w-4" /> Try again
          </Button>
          <Button asChild variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
            <Link href="/">
              <Home className="h-4 w-4" /> Back home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
