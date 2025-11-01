"use client"

import { Card } from "@/components/ui/card"
import { Code2, Users, Trophy, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const images = [
  { src: "/slugtank.jpg", alt: "UCSD COSMOS Program Group Photo" },
  { src: "/lacrosse.jpg", alt: "Playing Lacrosse for UCSC" },
  { src: "/travel.jpg", alt: "Travel Experience" },
]

export function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextImageIndex = (currentImage + 1) % images.length

  return (
    <section id="about" className="min-h-screen py-20 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="currentColor" className="text-accent" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-serif">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a Computer Engineering student at UC Santa Cruz with a passion for creating innovative solutions
                that bridge hardware and software. Currently maintaining a Dean's List GPA (3.85+), I've demonstrated
                strong academic performance while actively engaging in hands-on projects and leadership roles.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                From prototyping Arduino laser proximity sensors at UCSD's COSMOS program, to navigating the languages of C++ and Assembly at UCSC, I thrive on sharing knowledge and tackling complex engineering challenges, and I strive to make distinct impact in every position I take.  
              </p>
            </div>

            <div
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{
                  transform: isHovering ? "translateX(-10%)" : "translateX(0)",
                }}
              />

              {/* Next image preview on hover */}
              {isHovering && (
                <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden">
                  <img
                    src={images[nextImageIndex].src || "/placeholder.svg"}
                    alt={images[nextImageIndex].alt}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
              )}

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage ? "bg-white w-6" : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Technical Proficiency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proficient in Java, Python, JavaScript, and HTML with hands-on experience in Arduino, embedded systems,
                and rapid prototyping using tools like Inkscape and GitHub.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Leadership & Teaching</h3>
              <p className="text-muted-foreground leading-relaxed">
                Holding multiple executive positions for UCSC's Club Lacrosse Team and Housing Hunters Org.
                Incorporating experience instructing K-12 students in engineering education.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Awards & Recognition</h3>
              <p className="text-muted-foreground leading-relaxed">
                USD Cybersecurity Camp certified, AP Scholar, and 2025 Most Improved Player Award recipient with proven
                dedication to excellence.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
