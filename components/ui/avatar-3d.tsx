"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Avatar3D() {
  return (
    <div className="relative">
      <Avatar className="size-48 md:size-56 ring-2 ring-primary/20 shadow-sm">
        <AvatarImage src="/akshat.jpg" alt="Akshat profile photo" />
        <AvatarFallback className="text-xl">AK</AvatarFallback>
      </Avatar>
      {/* subtle depth accent; safe no-op if styles differ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
      />
    </div>
  )
}

export default Avatar3D


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
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-5xl font-bold text-white">
            AKG
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-30 animate-shine"></div>
        </div>
      </motion.div>
    </div>
  )
}
