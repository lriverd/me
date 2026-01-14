"use client"
import { Mail, MapPin, Linkedin } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "lc.riverosd@gmail.com",
    href: "mailto:lc.riverosd@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "lc-riverosd",
    href: "https://linkedin.com/in/lriverosd",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Santa Cruz, Chile",
  },
]

export function Contact() {

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Contacto</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  {
                    info.icon &&
                    
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  }
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  )
}
