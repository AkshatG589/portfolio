"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Computer Teacher",
      company: "Grades 9–12",
      period: "",
      description: "Teaching computer science to high school students.",
    },
    {
      title: "Teacher",
      company: "Elite Infosystem",
      period: "3 months",
      description: "Provided instruction on computer science and programming concepts.",
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      period: "",
      description: "Created multiple projects and offered development services to clients.",
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <p className="text-muted-foreground">My professional journey</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-xl overflow-hidden bg-card dark:bg-gray-800/90 dark:border dark:border-gray-700">
                <div className="h-1.5 bg-gradient-to-r from-primary to-primary/50" />
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary z-10">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} {exp.period && `• ${exp.period}`}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
