import { Card, CardContent } from "@/components/ui/card"
import { Heart, Globe, Shield, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description:
      "We live and breathe travel. Every recommendation comes from genuine experience and love for exploration.",
  },
  {
    icon: Globe,
    title: "Authentic Experiences",
    description: "We partner with local guides and communities to offer genuine, culturally immersive experiences.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description:
      "Your safety and satisfaction are our top priorities. We carefully vet all our partners and experiences.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We believe travel brings people together and strive to create positive impacts in every destination.",
  },
]

export function AboutValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do at RoamWise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={index} className="text-center border-0 shadow-none bg-white card-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
