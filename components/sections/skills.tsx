"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Code, Palette, Edit, BarChart3, Lightbulb } from "lucide-react"
import { useTheme } from "next-themes"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("development")
  const { theme } = useTheme()

  const categories = [
    {
      id: "development",
      name: "Development",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React/Next.js", level: 85 },
        { name: "Node.js/Express", level: 65 },
        { name: "Database Design", level: 70 },
        { name: "API Development", level: 80 },
      ],
    },
    {
      id: "design",
      name: "UI/UX Design",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "Figma", level: 75 },
        { name: "UI Design", level: 80 },
        { name: "Responsive Design", level: 85 },
        { name: "Wireframing", level: 70 },
        { name: "Prototyping", level: 65 },
      ],
    },
    {
      id: "editing",
      name: "Editing",
      icon: <Edit className="h-5 w-5" />,
      skills: [
        { name: "Content Editing", level: 80 },
        { name: "Video Editing", level: 60 },
        { name: "Photo Editing", level: 70 },
        { name: "Technical Writing", level: 75 },
        { name: "Documentation", level: 85 },
      ],
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: <BarChart3 className="h-5 w-5" />,
      skills: [
        { name: "SEO", level: 65 },
        { name: "Social Media", level: 70 },
        { name: "Content Strategy", level: 75 },
        { name: "Analytics", level: 60 },
        { name: "Email Marketing", level: 55 },
      ],
    },
    {
      id: "strategy",
      name: "Strategy",
      icon: <Lightbulb className="h-5 w-5" />,
      skills: [
        { name: "Project Planning", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Leadership", level: 75 },
        { name: "Agile Methodology", level: 70 },
        { name: "Business Analysis", level: 65 },
      ],
    },
  ]

  const activeSkills = categories.find((cat) => cat.id === activeCategory)?.skills || []

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50 dark:bg-[#0f172a]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-500">Skills</span> & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've cultivated a diverse skill set across multiple disciplines, enabling me to tackle complex projects from
            different angles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Category Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div className="bg-white dark:bg-[#1e293b]/40 backdrop-blur-sm rounded-xl p-1 flex flex-row md:flex-col shadow-md border border-gray-200 dark:border-gray-800/30">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-3 w-full text-left p-3 md:p-4 rounded-lg transition-all",
                    activeCategory === category.id
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-white/5",
                  )}
                >
                  <div
                    className={cn(
                      "p-2 rounded-md",
                      activeCategory === category.id
                        ? "bg-blue-100 dark:bg-blue-500/20"
                        : "bg-gray-100 dark:bg-gray-800",
                    )}
                  >
                    {category.icon}
                  </div>
                  <span className="hidden md:block font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-9"
          >
            <div className="bg-white dark:bg-[#1e293b]/40 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800/50 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {categories.find((cat) => cat.id === activeCategory)?.name}
              </h3>
              <div className="space-y-6">
                {activeSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        className={cn(
                          "h-full rounded-full",
                          activeCategory === "development" && "bg-gradient-to-r from-blue-600 to-cyan-400",
                          activeCategory === "design" && "bg-gradient-to-r from-purple-600 to-pink-400",
                          activeCategory === "editing" && "bg-gradient-to-r from-green-500 to-emerald-300",
                          activeCategory === "marketing" && "bg-gradient-to-r from-orange-500 to-amber-300",
                          activeCategory === "strategy" && "bg-gradient-to-r from-red-500 to-rose-300",
                        )}
                        style={{
                          boxShadow: `0 0 10px ${
                            activeCategory === "development"
                              ? "#3b82f6"
                              : activeCategory === "design"
                                ? "#a855f7"
                                : activeCategory === "editing"
                                  ? "#10b981"
                                  : activeCategory === "marketing"
                                    ? "#f97316"
                                    : "#ef4444"
                          }`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
