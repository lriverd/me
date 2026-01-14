"use client"

import { Badge } from "@/components/ui/badge"

const technologies = [
  "Java",
  "Springboot",
  "Golang",
  "Flutter",
  "React",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Git",
  "Redux",
  "Vite",
  "Redis",
  "Firebase",
  "Node.js",
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Habilidades</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo
            </p>
          </div>


          {/* Technology Badges */}
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
