"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Lightbulb, Trophy, Users } from "lucide-react"

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
      },
    }),
  }

  const traits = [
    { icon: <Code className="h-5 w-5" />, text: "Problem Solver" },
    { icon: <Layout className="h-5 w-5" />, text: "UI/UX Enthusiast" },
    { icon: <Database className="h-5 w-5" />, text: "Database Expert" },
    { icon: <Lightbulb className="h-5 w-5" />, text: "Innovative" },
    { icon: <Users className="h-5 w-5" />, text: "Team Player" },
    { icon: <Trophy className="h-5 w-5" />, text: "Competitive Coder" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-background to-muted">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">
                  I am a dedicated Web Developer with hands-on experience in JavaScript, React, and Bootstrap. As the
                  co-founder of B.Tech Simplified, I have helped students simplify complex technical concepts. I have
                  also participated in multiple hackathons, where I built projects like Spotify Clone, Netflix Clone,
                  and HackXpert, a learning platform for hackathons. My problem-solving skills are backed by a 275-day
                  LeetCode streak, and I have worked extensively with MongoDB, MySQL, and API integration. I am eager to
                  contribute my skills to a dynamic team and take on new challenges in web development.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">{trait.icon}</div>
                    <p className="font-medium">{trait.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
