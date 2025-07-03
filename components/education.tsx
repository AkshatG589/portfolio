"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, School } from "lucide-react"

export default function Education() {
  const educationItems = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Currently in 3rd Year",
      description:
        "Pursuing a comprehensive education in computer applications, focusing on programming, database management, and web development.",
      icon: <GraduationCap className="h-6 w-6" />,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      title: "Class 12th - Commerce Stream",
      institution: "2023",
      description:
        "Completed Class 12th with 90% marks in the commerce stream, demonstrating strong academic performance in core subjects.",
      icon: <School className="h-6 w-6" />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Class 10th",
      institution: "2021",
      description: "Completed Class 10th with 76% marks, establishing a solid foundation for higher education.",
      icon: <School className="h-6 w-6" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ]

  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <p className="text-muted-foreground">My academic background</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {educationItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg overflow-hidden">
                <div
                  className={`h-2 ${i === 0 ? "bg-gradient-to-r from-primary to-primary/50" : i === 1 ? "bg-gradient-to-r from-blue-500 to-blue-300" : "bg-gradient-to-r from-green-500 to-green-300"}`}
                />
                <CardHeader className="flex flex-row items-center gap-4 pt-8">
                  <div className={`${item.iconBg} p-2 rounded-full ${item.iconColor}`}>{item.icon}</div>
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.institution}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-muted-foreground max-w-2xl mx-auto"
        >
          <p>These results reflect my consistent academic performance and strong foundation in core subjects.</p>
        </motion.div>
      </div>
    </section>
  )
}
