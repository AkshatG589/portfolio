"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface BackgroundGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientClassName?: string
}

export function BackgroundGradient({ className, gradientClassName, children, ...props }: BackgroundGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

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

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)} {...props}>
      <div
        className={cn("absolute inset-0 transition-opacity duration-300", gradientClassName)}
        style={{
          background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, hsl(var(--primary)/0.5), transparent 40%)`,
          opacity: 0.8,
        }}
      />
      {children}
    </div>
  )
}
