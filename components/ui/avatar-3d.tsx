"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export function Avatar3D() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const bounceVariants = {
    hidden: { y: 0 },
    visible: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  return (
    <div ref={ref} className="relative">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-70 blur-xl animate-pulse" />
      <motion.div variants={bounceVariants} initial="hidden" animate={controls} className="relative">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl relative">
          {/* 3D effect layers */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
          <div className="absolute -inset-2 bg-gradient-to-bl from-primary/10 to-transparent z-0 blur-sm"></div>

          {/* Avatar */}
              <img
                src="/akshat.jpg"
                alt="Akshat"
                className="w-full h-full object-cover"
              />

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-30 animate-shine"></div>
        </div>
      </motion.div>
    </div>
  )
}
