import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Akshat Kumar Gupta | Full Stack Web Developer",
  description:
    "Portfolio of Akshat Kumar Gupta, a passionate Full Stack Web Developer building impactful digital solutions.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function ProjectCard({ title, description, technologies, link }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            Visit Site <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ExperienceCard({ title, company, period, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {company} {period && `• ${period}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function AchievementItem({ text }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg">
      <div className="mt-0.5 bg-green-100 p-1.5 rounded-full text-green-600">
        <svg
          xmlns="https://res.cloudinary.com/dfvxkv1c2/image/upload/v1756539103/certificates/c2arzuaus64bqmpa626x.jpg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  )
}

function ContactCard({ icon, title, contact, link }) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>
            <a href={link} className="hover:underline">
              {contact}
            </a>
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}
