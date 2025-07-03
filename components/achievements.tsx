"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Check, Code, Trophy } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "Core Java Certificate",
      description: "Certified in Core Java programming fundamentals",
      color: "from-blue-500 to-blue-300",
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "275-day LeetCode streak",
      description: "Consistent problem-solving on LeetCode platform",
      color: "from-purple-500 to-purple-300",
    },
    {
      icon: <Check className="h-5 w-5" />,
      title: "February 2025 LeetCode challenges",
      description: "Completed all daily challenges for the month",
      color: "from-green-500 to-green-300",
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "Hackathon Finalist",
      description: "7th rank at Allen House, Kanpur – 'Virtual Herbal Garden'",
      color: "from-amber-500 to-amber-300",
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "HackXpert",
      description: "Built for ABV-IIITM Gwalior Hackathon",
      color: "from-red-500 to-red-300",
    },
  ]

  return (
    <section id="achievements" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
          <p className="text-muted-foreground">Certifications & accomplishments</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-xl h-full bg-card dark:bg-gray-800/90 dark:border dark:border-gray-700">
                <div className={`h-1.5 bg-gradient-to-r ${achievement.color}`} />
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="bg-primary/10 p-3 rounded-full w-fit text-primary dark:bg-primary/20">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{achievement.title}</h3>
                    <p className="text-muted-foreground dark:text-gray-300">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
