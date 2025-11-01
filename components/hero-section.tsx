"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Linkedin, Mail, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const opacity = Math.max(0, 1 - scrollY / 400)
  const scale = Math.max(0.8, 1 - scrollY / 1000)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-bg">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-hero-fg/30 rotate-45 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-hero-fg/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 border-2 border-hero-fg/30 animate-float-slow">
          <div className="absolute inset-4 border-2 border-hero-fg/30" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-hero-fg/30 rotate-12 animate-float" />
        <div className="absolute bottom-20 right-1/4 w-28 h-28 border-2 border-hero-fg/30 rounded-full animate-float-delayed" />

        {/* Circuit-like lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="10%"
            y1="20%"
            x2="30%"
            y2="20%"
            stroke="currentColor"
            strokeWidth="2"
            className="text-hero-fg/20 animate-pulse"
          />
          <line
            x1="70%"
            y1="40%"
            x2="90%"
            y2="40%"
            stroke="currentColor"
            strokeWidth="2"
            className="text-hero-fg/20 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <line
            x1="20%"
            y1="70%"
            x2="40%"
            y2="70%"
            stroke="currentColor"
            strokeWidth="2"
            className="text-hero-fg/20 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <div
            className="relative"
            style={{
              opacity,
              transform: `scale(${scale})`,
              transition: "opacity 0.1s, transform 0.1s",
            }}
          >
            <div className="w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border-4 border-accent/30 shadow-2xl">
              <img src="/headshot.jpg" alt="Jaycob Pakingan" className="w-full h-full object-cover object-center" />
            </div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-balance text-hero-fg">Jaycob Pakingan</h1>
            <p className="text-xl md:text-2xl text-hero-fg/90 font-serif">Computer Engineering Student</p>
            <p className="text-base md:text-lg text-hero-fg/80 max-w-2xl mx-auto leading-relaxed">
              Leading innovative solutions at the intersection of hardware and software.

            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-hero-fg/10 text-hero-fg border-hero-fg/20"
              >
                C++
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-hero-fg/10 text-hero-fg border-hero-fg/20"
              >
                JavaScript
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-hero-fg/10 text-hero-fg border-hero-fg/20"
              >
                Circuit Assembly & Design
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/jaycobpakingan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-hero-fg/10 text-hero-fg hover:bg-hero-fg/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jpakinga@ucsc.edu"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-hero-fg/10 text-hero-fg hover:bg-hero-fg/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/pakbotz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-hero-fg/10 text-hero-fg hover:bg-hero-fg/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-hero-fg/60" />
      </button>
    </section>
  )
}
