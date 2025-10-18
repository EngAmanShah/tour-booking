import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Former travel journalist with 15+ years exploring 80+ countries. Passionate about sustainable tourism.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    bio: "Tech entrepreneur who loves combining technology with travel. Previously built travel apps used by millions.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Experiences",
    bio: "Adventure seeker and cultural enthusiast. Curates our most unique and authentic travel experiences.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Kim",
    role: "Head of Customer Success",
    bio: "Hospitality veteran dedicated to ensuring every RoamWise traveler has an exceptional experience.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
]

export function AboutTeam() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate travelers and experts behind RoamWise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="text-center overflow-hidden rounded-lg card-shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
