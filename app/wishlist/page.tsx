"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, MapPin, Clock, Users, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

// Mock wishlist data - in a real app, this would come from localStorage or a backend
const mockWishlistTours = [
  {
    id: 1,
    title: "Santorini Sunset & Wine Tour",
    location: "Santorini, Greece",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 124,
    duration: "8 hours",
    groupSize: "Small group",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Best Seller", "Wine Tour"],
    description: "Experience breathtaking sunsets while tasting local wines at traditional wineries.",
  },
  {
    id: 3,
    title: "Tokyo Food & Culture Walking Tour",
    location: "Tokyo, Japan",
    price: 159,
    originalPrice: null,
    rating: 4.7,
    reviews: 189,
    duration: "6 hours",
    groupSize: "Small group",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Food Tour", "Walking"],
    description: "Taste authentic Japanese cuisine and explore hidden local neighborhoods.",
  },
]

export default function WishlistPage() {
  const [wishlistTours, setWishlistTours] = useState(mockWishlistTours)

  const removeFromWishlist = (tourId: number) => {
    setWishlistTours((prev) => prev.filter((tour) => tour.id !== tourId))
  }

  if (wishlistTours.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-primary text-white py-12">
          <div className="container px-4">
            <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-4">My Wishlist</h1>
            <p className="text-lg opacity-90">Save your favorite tours and book them later</p>
          </div>
        </div>

        <div className="container px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-poppins font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">
              Start exploring our tours and save your favorites to plan your next adventure.
            </p>
            <Link href="/tours">
              <Button className="bg-primary hover:bg-primary/90">Explore Tours</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-4">My Wishlist</h1>
          <p className="text-lg opacity-90">
            {wishlistTours.length} saved {wishlistTours.length === 1 ? "tour" : "tours"}
          </p>
        </div>
      </div>

      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistTours.map((tour) => (
            <Card
              key={tour.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden rounded-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {tour.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="bg-secondary text-black font-medium text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-red-500"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFromWishlist(tour.id)
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" />
                  {tour.location}
                </div>

                <h3 className="font-poppins font-semibold text-lg mb-2">{tour.title}</h3>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{tour.description}</p>

                <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {tour.groupSize}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{tour.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({tour.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">${tour.price}</span>
                    {tour.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${tour.originalPrice}</span>
                    )}
                  </div>
                  <Link href={`/tours/${tour.id}`}>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
