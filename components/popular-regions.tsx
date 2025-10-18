import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const regions = [
  {
    name: "Europe",
    countries: 25,
    tours: 150,
    image: "/placeholder.svg?height=200&width=300",
    popular: ["Paris", "Rome", "Barcelona", "Amsterdam"],
  },
  {
    name: "Asia",
    countries: 18,
    tours: 120,
    image: "/placeholder.svg?height=200&width=300",
    popular: ["Tokyo", "Bali", "Bangkok", "Singapore"],
  },
  {
    name: "Americas",
    countries: 15,
    tours: 95,
    image: "/placeholder.svg?height=200&width=300",
    popular: ["New York", "Rio", "Vancouver", "Mexico City"],
  },
  {
    name: "Africa",
    countries: 12,
    tours: 75,
    image: "/placeholder.svg?height=200&width=300",
    popular: ["Cape Town", "Marrakech", "Cairo", "Nairobi"],
  },
  {
    name: "Oceania",
    countries: 8,
    tours: 45,
    image: "/placeholder.svg?height=200&width=300",
    popular: ["Sydney", "Auckland", "Fiji", "Tahiti"],
  },
]

export function PopularRegions() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">Popular Regions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing destinations across all continents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {regions.map((region) => (
            <Card
              key={region.name}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden rounded-lg"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={region.image || "/placeholder.svg"}
                  alt={region.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-secondary text-black font-medium">{region.tours} tours</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-poppins font-semibold mb-2">{region.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{region.countries} countries available</p>
                <div className="flex flex-wrap gap-1">
                  {region.popular.slice(0, 2).map((city) => (
                    <Badge key={city} variant="outline" className="text-xs">
                      {city}
                    </Badge>
                  ))}
                  {region.popular.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{region.popular.length - 2} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
