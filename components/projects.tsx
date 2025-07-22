"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Virtual Herbal Garden",
      description: "A 3D interactive platform showcasing medicinal plants used in AYUSH practices.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Three.js"],
      liveLink: "https://virtual-herbs.netlify.app/",
      codeLink: "https://github.com/AllenhouseBusinessSchool/Quantum-coders",
    },
    {
      title: "HackXpert",
      description: "A hackathon learning platform that connects students and mentors.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Tailwind", "JSX"],
      liveLink: "https://v0-hack-xpert-dashboard-design.vercel.app/",
      codeLink: "https://github.com/AkshatG589",
    },
    {
      title: "Todos List App",
      description: "A responsive and clean task management app to organize daily work.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Bootstrap", "JSX"],
      liveLink: "https://my-todo-coral.vercel.app/",
      codeLink: "https://github.com/AkshatG589",
    },
    {
      title: "Weather App",
      description: "A real-time weather forecast application using JavaScript and the Weather API.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["JavaScript", "Weather API"],
      liveLink: "https://weather-app-six-chi-64.vercel.app/",
      codeLink: "https://github.com/AkshatG589/Weather-app",
    },
    {
      title: "Netflix Clone",
      description: "A simple responsive front-end clone of Netflix using HTML and CSS.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["HTML", "CSS"],
      liveLink: "https://netflix-clone-iota-brown.vercel.app/",
      codeLink: "https://github.com/AkshatG589",
    }, 
    {
      title: "Portfolio website",
      description :"A simple portfolio website",
      image: "/placeholder.svg? height=400&width=600",
      technologies:["React.js","Next.js","jsx"],
      liveLink: "/",
      codeLink: "https://github.com/AkshatG589",
    },
    {
      title: "Chat AI Platform",
      description: "A full-stack AI chatbot platform allowing guest and registered users to interact with Gemini-powered assistants. Includes secure OTP-based authentication.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API"],
      liveLink: "https://ak-chatai.vercel.app/",  // Replace with actual live URL if available
      codeLink: "https://github.com/AkshatG589/ChatAI",  // Replace with GitHub repo link if sharing code
      },
      {
        title: "iNotebook App",
        description: "A full-stack notes management application that allows users to securely add, update, and delete personal notes. Features include user authentication with login and signup functionality to keep data private and organized.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
        liveLink: "https://inotebook-five-bice.vercel.app/",  // Replace with actual live URL if updated
        codeLink: "https://github.com/AkshatG589/inotebook",  // Replace with GitHub repo link if sharing code
        },
        {
          title: "QuickBills App",
          description: "A full-stack billing application to create GST-ready invoices, manage products, and track billing history. Includes Clerk authentication, dynamic invoice generation, business info setup, and detailed bill history.",
          image: "/preview.png",
          technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk Auth", "Bootstrap"],
          liveLink: "https://quickbills-ak.vercel.app/",
          codeLink: "https://github.com/AkshatG589/quickbill"
}
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-muted-foreground">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-lg h-full flex flex-col group">
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button variant="default" size="sm" className="gap-1 rounded-full" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1 rounded-full" asChild>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Code className="h-4 w-4" /> Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
