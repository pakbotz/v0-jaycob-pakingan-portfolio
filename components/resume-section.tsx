import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Award, Trophy } from "lucide-react"

export function ResumeSection() {
  return (
    <section id="resume" className="min-h-screen py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-20 right-10 w-96 h-96 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-serif">Resume</h2>

          {/* Education Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold">University of California, Santa Cruz</h4>
                  <p className="text-muted-foreground">Bachelor of Science in Computer Engineering</p>
                  <p className="text-sm text-muted-foreground mt-1">Expected Graduation: 2027</p>
                  <p className="text-sm font-medium mt-2">
                    Dean's List: Fall 2024, Winter 2025, Spring 2025 (3.85+ GPA)
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Vector Calculus</Badge>
                    <Badge variant="outline">Programming Abstractions in Python</Badge>
                    <Badge variant="outline">Introduction to Programming in Java</Badge>
                    <Badge variant="outline">Intro Physics I</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-4">
              <Card className="p-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">COSMOS Summer Program Project Member</h4>
                  <p className="text-muted-foreground">University of California, San Diego • July - Aug 2025</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-4">
                    <li>Prototyped Arduino Nano laser proximity sensor project with 3D tabbed box</li>
                    <li>Worked closely with Professor Saharnaz and UCSD peers to instruct 40+ high school students</li>
                    <li>Operated with C, Arduino IDE, Inkscape, and GitHub Repository</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Ride Operator</h4>
                  <p className="text-muted-foreground">
                    Sesame Place, Chula Vista • June - Sept 2024, June - Sept 2025
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-4">
                    <li>Single-handedly mechanically operated 25 mph, 16-person roller coaster ride</li>
                    <li>Enforced 17+ safety precautions while operating</li>
                    <li>Provided 10% increase in excellent customer service to children and their families</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">SMART Program Virtual Tutor</h4>
                  <p className="text-muted-foreground">Tutoring Chicago • Nov 2023 - May 2024</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-4">
                    <li>
                      Virtually tutored 3rd grade students in Chicago with focuses on social/emotional learning, math,
                      accountability, reading, and technology
                    </li>
                    <li>Weekly sessions taught on Tuesdays, from 6:00PM to 7:30PM CST</li>
                    <li>Fostered strong bonds and friendships with students to enhance their ability to learn</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
            </div>
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Java</Badge>
                    <Badge>Python</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>HTML</Badge>
                    <Badge>C</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Tools & Software</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Microsoft Suite</Badge>
                    <Badge>Google Suite</Badge>
                    <Badge>Adobe After Effects</Badge>
                    <Badge>Adobe Photoshop</Badge>
                    <Badge>Canva</Badge>
                    <Badge>Arduino IDE</Badge>
                    <Badge>Inkscape</Badge>
                    <Badge>GitHub</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Highly Organized</Badge>
                    <Badge>Problem-Solving</Badge>
                    <Badge>Communication</Badge>
                    <Badge>Time Management</Badge>
                    <Badge>Leadership</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Additional</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>88 WPM Typing</Badge>
                    <Badge>Spanish (Intermediate)</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Extracurricular & Awards Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Extracurricular & Awards</h3>
            </div>
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Division 2 MCLA Lacrosse - Social Chair</h4>
                  <p className="text-sm text-muted-foreground mb-2">September 2024 - Present</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>Increased freshman/transfer recruitment by 125% of the previous year</li>
                    <li>2025 Most Improved Player Award recipient</li>
                    <li>Co-running Instagram Account with 1.4K+ followers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Awards & Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">USD Cybersecurity Camp Certification</Badge>
                    <Badge variant="secondary">2024 High School Lacrosse Leadership Award</Badge>
                    <Badge variant="secondary">California Scholarship Federation Seal Bearer</Badge>
                    <Badge variant="secondary">AP Scholar</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Download Resume Button */}
          <div className="mt-12 text-center">
            <a
              href="mailto:jpakinga@ucsc.edu"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Request Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
