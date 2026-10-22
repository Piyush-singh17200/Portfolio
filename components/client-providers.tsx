"use client"

import type React from "react"
import dynamic from "next/dynamic"
import { MotionConfig } from "framer-motion"

const StarBackground = dynamic(() => import("@/components/star-background"), { ssr: false })

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <StarBackground />
      {children}
    </MotionConfig>
  )
}
