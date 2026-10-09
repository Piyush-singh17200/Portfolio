"use client"

import type React from "react"
import dynamic from "next/dynamic"

const StarBackground = dynamic(() => import("@/components/star-background"), { ssr: false })

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StarBackground />
      {children}
    </>
  )
}
