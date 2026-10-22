"use client"

import { useEffect, useState } from "react"

/**
 * Tracks which section is currently in view so navigation can show an
 * accurate active state. Uses the section id as the public value.
 */
export function useActiveSection(ids: readonly string[]) {
  const [activeSection, setActiveSection] = useState<string>("")
  const key = ids.join("|")

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
    // `key` captures the contents of ids without depending on array identity.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return activeSection
}
