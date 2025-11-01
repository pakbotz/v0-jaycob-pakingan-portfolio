"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:jpakinga@ucsc.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-serif">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, opportunities, or collaborations. Let's connect!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:jpakinga@ucsc.edu"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">School Email</p>
                      <p className="font-medium text-foreground">jpakinga@ucsc.edu</p>
                    </div>
                  </a>
                  <a
                    href="mailto:jaycobpakingan@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Personal Email</p>
                      <p className="font-medium text-foreground">jaycobpakingan@gmail.com</p>
                    </div>
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/jaycobpakingan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-accent" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-accent" />
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Jaycob Pakingan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
