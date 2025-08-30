"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, Phone } from "lucide-react"
import { BackgroundGradient } from "@/components/ui/background-gradient"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground">Let's connect and discuss opportunities</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground max-w-md">
              Feel free to reach out to me through any of these channels. I'm always open to discussing new projects,
              opportunities, or partnerships.
            </p>

            <div className="space-y-4 mt-8">
              <ContactItem
                icon={<Mail className="h-5 w-5" />}
                title="Email"
                value="akshatg1562004@gmail.com"
                link="mailto:akshatg1562004@gmail.com"
              />
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                title="Phone"
                value="+91 63885 23305"
                link="tel:+916388523305"
              />
              <ContactItem
                icon={<Github className="h-5 w-5" />}
                title="GitHub"
                value="AkshatG589"
                link="https://github.com/AkshatG589"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <BackgroundGradient className="rounded-[22px] p-0.5 bg-background">
              <Card className="border-none shadow-none bg-transparent">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Input id="name" placeholder="Your Name" className="bg-background/50 backdrop-blur-sm" />
                      </div>
                      <div className="space-y-2">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          className="bg-background/50 backdrop-blur-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Input id="subject" placeholder="Subject" className="bg-background/50 backdrop-blur-sm" />
                    </div>
                    <div className="space-y-2">
                      <Textarea
                        id="message"
                        placeholder="Your Message"
                        rows={4}
                        className="bg-background/50 backdrop-blur-sm"
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full">Send Message</Button>
                </CardFooter>
              </Card>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, title, value, link }) {
  return (
    <a href={link} className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors">
      <div className="bg-primary/10 p-3 rounded-full text-primary">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </a>
  )
}
