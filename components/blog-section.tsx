import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from "lucide-react"

const activities = [
  {
    title: "UCSD COSMOS Summer Program Experience",
    excerpt:
      "Excited to share my experience working with Professor Saharnaz and teaching 40+ high school students about Arduino and embedded systems!",
    date: "2025-08-15",
    category: "Education",
    link: "https://www.linkedin.com/in/jaycobpakingan/",
  },
  {
    title: "Dean's List Achievement",
    excerpt:
      "Proud to announce making the Dean's List for Fall 2024, Winter 2025, and Spring 2025 at UC Santa Cruz with a 3.85+ GPA!",
    date: "2025-06-10",
    category: "Achievement",
    link: "https://www.linkedin.com/in/jaycobpakingan/",
  },
  {
    title: "UCSC Lacrosse - Most Improved Player",
    excerpt:
      "Honored to receive the 2025 Most Improved Player Award for UCSC Division 2 MCLA Lacrosse. Grateful for my teammates and coaches!",
    date: "2025-05-20",
    category: "Sports",
    link: "https://www.linkedin.com/in/jaycobpakingan/",
  },
  {
    title: "Tutoring Chicago - Making an Impact",
    excerpt:
      "Reflecting on my time as a SMART Program Virtual Tutor, helping 3rd grade students in Chicago with their learning journey.",
    date: "2024-05-15",
    category: "Volunteer",
    link: "https://www.linkedin.com/in/jaycobpakingan/",
  },
]

export function BlogSection() {
  return (
    <section id="activity" className="min-h-screen py-20 bg-background relative overflow-hidden">
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-72 h-72 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,50 50,90 10,50" fill="currentColor" className="text-accent" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-serif">Activity</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Recent updates, achievements, and experiences from my journey as a student and beyond.
          </p>

          <div className="space-y-6">
            {activities.map((activity, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{activity.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(activity.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold">{activity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{activity.excerpt}</p>
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                  >
                    View on LinkedIn <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.linkedin.com/in/jaycobpakingan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View Full LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
