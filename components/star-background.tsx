"use client"

import { useEffect, useRef, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
  baseAlpha: number
  pulseSpeed: number
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 })

  useEffect(() => {
    setMounted(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null
    if (!ctx) return
    const context: CanvasRenderingContext2D = ctx

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX
      mouseRef.current.targetY = e.clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX
        mouseRef.current.targetY = e.touches[0].clientY
      }
    }

    window.addEventListener("resize", handleResize, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })

    // Palette of subtle celestial colors (violet, cyan, indigo, soft white)
    const colors = [
      "rgba(147, 51, 234, ",  // purple
      "rgba(99, 102, 241, ",  // indigo
      "rgba(59, 130, 246, ",  // blue
      "rgba(6, 182, 212, ",   // cyan
      "rgba(255, 255, 255, ", // white
    ]

    const particles: Particle[] = []
    const particleCount = isMobile ? 22 : 48
    const connectionDistance = isMobile ? 50 : 85
    const mouseRadius = isMobile ? 70 : 120

    function initParticles() {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        const baseAlpha = Math.random() * 0.4 + 0.15
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.8 + 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: baseAlpha,
          baseAlpha: baseAlpha,
          pulseSpeed: Math.random() * 0.02 + 0.008,
        })
      }
    }

    initParticles()

    let time = 0
    let animationFrameId: number

    // Shooting stars
    const shootingStars: Array<{
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
      life: number
      maxLife: number
    }> = []

    function addShootingStar() {
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.2
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.4),
        length: Math.random() * 80 + 60,
        speed: Math.random() * 8 + 10,
        angle: angle,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 25 + 25,
      })
    }

    function render() {
      context.clearRect(0, 0, width, height)
      time += 0.015

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05
      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y

      // Draw subtle ambient nebula clouds
      const ambientGradient = context.createRadialGradient(
        width * 0.5 + Math.sin(time * 0.3) * 100,
        height * 0.35 + Math.cos(time * 0.2) * 80,
        50,
        width * 0.5,
        height * 0.35,
        Math.max(width, height) * 0.6
      )
      ambientGradient.addColorStop(0, "rgba(95, 39, 205, 0.06)")
      ambientGradient.addColorStop(0.5, "rgba(59, 130, 246, 0.03)")
      ambientGradient.addColorStop(1, "rgba(0, 0, 0, 0)")
      context.fillStyle = ambientGradient
      context.fillRect(0, 0, width, height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Natural pulse
        p.alpha = p.baseAlpha + Math.sin(time * p.pulseSpeed * 60) * 0.2

        // Mouse avoidance/attraction
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius
          const angle = Math.atan2(dy, dx)
          p.x -= Math.cos(angle) * force * 1.5
          p.y -= Math.sin(angle) * force * 1.5
        }

        // Move
        p.x += p.vx
        p.y += p.vy

        // Wrap around boundaries
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Draw particle with glow
        context.beginPath()
        context.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        context.fillStyle = `${p.color}${Math.max(0, Math.min(1, p.alpha))})`
        context.fill()

        // Draw connections between nearby particles (constellation effect)
        const maxDistSq = connectionDistance * connectionDistance
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx2 = p.x - p2.x
          const dy2 = p.y - p2.y
          const distSq = dx2 * dx2 + dy2 * dy2

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq)
            const lineAlpha = (1 - dist / connectionDistance) * 0.16
            context.beginPath()
            context.moveTo(p.x, p.y)
            context.lineTo(p2.x, p2.y)
            context.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`
            context.lineWidth = 0.6
            context.stroke()
          }
        }
      }

      // Handle shooting stars
      if (Math.random() < 0.006 && shootingStars.length < 2) {
        addShootingStar()
      }

      for (let k = shootingStars.length - 1; k >= 0; k--) {
        const s = shootingStars[k]
        s.life++
        s.x += Math.cos(s.angle) * s.speed
        s.y += Math.sin(s.angle) * s.speed
        s.opacity = 1 - s.life / s.maxLife

        if (s.life >= s.maxLife || s.x > width + 100 || s.y > height + 100) {
          shootingStars.splice(k, 1)
          continue
        }

        const headX = s.x
        const headY = s.y
        const tailX = s.x - Math.cos(s.angle) * s.length
        const tailY = s.y - Math.sin(s.angle) * s.length

        const starGrad = context.createLinearGradient(tailX, tailY, headX, headY)
        starGrad.addColorStop(0, "rgba(255, 255, 255, 0)")
        starGrad.addColorStop(0.8, `rgba(168, 85, 247, ${s.opacity * 0.6})`)
        starGrad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity * 0.95})`)

        context.beginPath()
        context.moveTo(tailX, tailY)
        context.lineTo(headX, headY)
        context.strokeStyle = starGrad
        context.lineWidth = 2
        context.stroke()

        // Glowing star head
        context.beginPath()
        context.arc(headX, headY, 2.2, 0, Math.PI * 2)
        context.fillStyle = `rgba(255, 255, 255, ${s.opacity})`
        context.shadowColor = "#a855f7"
        context.shadowBlur = 8
        context.fill()
        context.shadowBlur = 0
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId)
      } else {
        animationFrameId = requestAnimationFrame(render)
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  )
}
