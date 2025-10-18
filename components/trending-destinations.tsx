"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, MapPin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { destinations } from "@/lib/data"

// Use the first 4 destinations as trending
const trendingDestinations = destinations.slice(0, 4)

export function TrendingDestinations() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">Trending Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular destinations chosen by travelers like you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingDestinations.map((destination) => (
            <Card
              key={destination.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden rounded-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-secondary text-black font-medium">
                    Trending
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleWishlist(destination.id)
                  }}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      wishlist.includes(destination.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" />
                  {destination.country}
                </div>

                <h3 className="font-poppins font-semibold text-lg mb-1">{destination.name}</h3>

                <p className="text-sm text-muted-foreground mb-3">{destination.description}</p>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({destination.reviews} reviews)</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{destination.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">${destination.price}</span>
                    {destination.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${destination.originalPrice}</span>
                    )}
                  </div>
                  <Link href={`/tours?destination=${encodeURIComponent(destination.name)}`}>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/destinations">
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
