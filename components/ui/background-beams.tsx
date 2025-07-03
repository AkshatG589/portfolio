"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setCursorPosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    controls.start({
      background: `radial-gradient(600px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(var(--primary-rgb)/0.15), transparent 40%)`,
    })
  }, [cursorPosition, controls])

  return (
    <div ref={containerRef} className={cn("pointer-events-none fixed inset-0 z-0 h-full w-full", className)}>
      <motion.div className="h-full w-full" animate={controls} transition={{ duration: 0.3 }} />
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="beams-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <rect width="1" height="1" fill="rgba(var(--muted-foreground-rgb)/0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#beams-pattern)" />
      </svg>
    </div>
  )
}
