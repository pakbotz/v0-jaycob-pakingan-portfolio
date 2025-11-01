"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface NavigationProps {
  activeSection: string
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "activity", label: "Activity" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className={cn(
              "relative w-12 h-12 transition-all hover:opacity-80 rounded-lg overflow-hidden",
              isScrolled ? "bg-background" : "bg-transparent",
            )}
          >
            <Image
              src={isScrolled ? "/logo-dark.png" : "/logo-light.png"}
              alt="JP Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              style={{ mixBlendMode: isScrolled ? "normal" : "screen" }}
            />
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  activeSection === item.id
                    ? "text-accent"
                    : isScrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-hero-fg/80 hover:text-hero-fg",
                )}
              >
                {item.label}
                {activeSection === item.id && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
