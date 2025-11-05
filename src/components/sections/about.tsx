"use client"

import { Code, Palette, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const interests = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Creación de aplicaciones web modernas con React, TypeScript y Node.js",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Diseño de interfaces intuitivas y experiencias de usuario excepcionales",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimización y mejora del rendimiento de aplicaciones web",
  },
]

const experiences = [
  {
    year: "2023 - Presente",
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    description: "Desarrollo de aplicaciones web escalables y mantenimiento de infraestructura cloud",
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Startup Inc",
    description: "Implementación de features y mejoras en plataforma SaaS",
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    company: "Digital Agency",
    description: "Desarrollo de sitios web y aplicaciones para diversos clientes",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Sobre mí</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soy un desarrollador full stack con más de 4 años de experiencia creando soluciones web innovadoras. 
              Me apasiona aprender nuevas tecnologías y enfrentar desafíos complejos.
            </p>
          </div>

          {/* Interest Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <interest.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{interest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{interest.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center mb-8">Experiencia</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 -ml-2 md:-ml-2 h-4 w-4 rounded-full bg-primary border-4 border-background z-10" />
                    
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 pl-8" : "md:pl-8 pl-8"}`}>
                      <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <CardHeader>
                          <div className="text-sm text-primary font-medium">{exp.year}</div>
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <CardDescription className="font-medium">{exp.company}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
