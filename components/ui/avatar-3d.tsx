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
