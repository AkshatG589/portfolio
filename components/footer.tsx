"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/30 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">
                <span className="text-primary">Akshat</span> Kumar Gupta
              </h3>
              <p className="text-muted-foreground mt-2 max-w-md">
                A passionate Full Stack Web Developer building impactful digital solutions and creating engaging user
                experiences.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold border-b pb-2 mb-3">Quick Links</h3>
              <nav className="grid grid-cols-1 gap-2">
                {navItems.slice(0, 4).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* More Links */}
          <div className="md:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold border-b pb-2 mb-3">More</h3>
              <nav className="grid grid-cols-1 gap-2">
                {navItems.slice(4).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold border-b pb-2 mb-3">Connect</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/AkshatG589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/akshat-gupta-59a7b1349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="mailto:akshatg1562004@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Akshat Kumar Gupta. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="rounded-full gap-1 text-xs" asChild>
              <a href="#contact">
                Get in Touch <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Built with React</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
