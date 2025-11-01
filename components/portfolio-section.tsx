import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Arduino Laser Proximity Sensor",
    description:
      "Prototyped Arduino Nano laser proximity sensor project with 3D tabbed box during UCSD COSMOS Summer Program. Worked with Professor Saharnaz to instruct 40+ high school students.",
    image: "/arduino-laser-proximity-sensor-project.jpg",
    technologies: ["C", "Arduino IDE", "Inkscape", "GitHub"],
    github: "#",
    demo: "#",
  },
  {
    title: "Embedded Systems Project",
    description:
      "Developed a real-time embedded system using ARM Cortex-M microcontroller with custom firmware for sensor data acquisition and processing.",
    image: "/embedded-system-circuit-board.jpg",
    technologies: ["C", "ARM", "RTOS", "I2C/SPI"],
    github: "#",
    demo: "#",
  },
]

export function PortfolioSection() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-background relative overflow-hidden">
      <div className="absolute top-40 left-0 w-80 h-80 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="currentColor" className="text-accent" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-serif">Projects</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            A selection of projects showcasing my skills in computer engineering, from embedded systems to software
            development.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
