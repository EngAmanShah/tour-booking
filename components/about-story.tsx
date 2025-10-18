import { Card } from "@/components/ui/card"
import Image from "next/image"

export function AboutStory() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020 by a group of passionate travelers, RoamWise was born from a simple belief: that travel
                should be accessible, authentic, and transformative for everyone.
              </p>
              <p>
                After years of exploring the world and experiencing both incredible adventures and travel frustrations,
                our founders realized there was a gap in the market for a platform that truly understood what modern
                travelers wanted.
              </p>
              <p>
                Today, we've helped over 50,000 travelers discover their perfect adventures across 200+ destinations
                worldwide. Our curated approach ensures that every experience we offer meets our high standards for
                quality, authenticity, and value.
              </p>
            </div>
          </div>
          <div className="relative">
            <Card className="overflow-hidden rounded-lg card-shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="RoamWise founders"
                width={600}
                height={400}
                className="object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
