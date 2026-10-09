"use client"

import { useState, useEffect, useCallback } from "react"

export function useResumeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    window.addEventListener("open-resume-modal", handleOpen)
    window.addEventListener("close-resume-modal", handleClose)

    return () => {
      window.removeEventListener("open-resume-modal", handleOpen)
      window.removeEventListener("close-resume-modal", handleClose)
    }
  }, [])

  const openResume = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-resume-modal"))
  }, [])

  const closeResume = useCallback(() => {
    window.dispatchEvent(new CustomEvent("close-resume-modal"))
  }, [])

  return {
    isOpen,
    openResume,
    closeResume,
    setIsOpen,
  }
}

export function triggerOpenResume() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-resume-modal"))
  }
}
