"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind"]

  const backendSkills = ["Java", "MongoDB", "MySQL", "API Integration"]

  const otherSkills = ["DSA (Java)", "Problem Solving", "Git & GitHub"]

  const SkillCard = ({ skill }: { skill: string }) => (
    <motion.div variants={item}>
      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
        <CardContent className="p-6 flex items-center justify-center h-full">
          <p className="font-medium text-center">{skill}</p>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <p className="text-muted-foreground">My technical expertise</p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {[...frontendSkills, ...backendSkills, ...otherSkills].map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="frontend">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {frontendSkills.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="backend">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {backendSkills.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
