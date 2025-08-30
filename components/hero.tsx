"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Avatar3D } from "@/components/ui/avatar-3d"

export default function Hero() {
  const words = [{ text: "Full" }, { text: "Stack" }, { text: "Web" }, { text: "Developer" }]

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <BackgroundBeams />
      <div className="container relative z-10 py-32 md:py-40">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg md:text-xl text-muted-foreground"
              >
                Hello, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                Akshat Kumar Gupta
              </motion.h1>
              <div className="h-16 md:h-20 pt-2">
                <TypewriterEffect words={words} className="text-2xl md:text-3xl" />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              Enthusiastic and dedicated developer passionate about building impactful digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="rounded-full" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" className="rounded-full gap-2" asChild>
                <a href="https://drive.google.com/file/d/1Juc5c7NbZYkTIjn8BLiWzUqtNvTJIuAF" download>
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/AkshatG589"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/akshat-gupta-59a7b1349"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:akshatg1562004@gmail.com"
                className="bg-muted p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <Avatar3D />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
