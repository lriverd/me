"use client"

import { Code, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const interests = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Creación de aplicaciones fullstack con tecnologías modernas",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimización y mejora del rendimiento de aplicaciones web",
  },
]

const experiences = [
  {
    year: "Noviembre 2020 - Presente",
    title: "Technical Lead / Gestor de desarrollo",
    company: "Banco Internacional",
    description: "Desarrollo de servicios y aplicaciones web para clientes banca persona y empresa",
  },
  {
    year: "Enero 2016 - Octubre 2020",
    title: "Ingeniero de Software",
    company: "Imagemaker S.A.",
    description: "Trabajo principalmente en 2 Clientes: Banco de Chile y Scotiabank Chile. Asociado al desarrollo de aplicaciones web empresas utilizando tecnologías como Java, Springboot, AngularJS, React, Node.js y bases de datos SQL. Participando en todas las etapas del ciclo de vida del desarrollo de software, desde la recopilación de requisitos hasta la implementación y el mantenimiento.",
  },
  {
    year: "Diciembre 2014 - Octubre 2015",
    title: "Analyst",
    company: "TransUnion",
    description: "Desarrollo de webservices internos para la gestión de datos crediticios.",
  },
  {
    year: "Enero 2014 - Septiembre 2014",
    title: "Consultor",
    company: "Solu4B",
    description: "Diseño y desarrollo de proyecto de automatización de informes para Banco Estado, en el servicio de administración de tarjetas. Encargado de control de tiempos, además de la obtención, documentación e implementación de requisitos en contacto directo con cliente.Presentando soluciones de optimización, migración de arquitectura y tecnologías"
  }
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
