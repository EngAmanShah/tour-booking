"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, MapPin, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Tour } from "@/lib/data"

interface TourCardProps {
  tour: Tour
  showWishlist?: boolean
  onWishlistToggle?: (id: number) => void
  isWishlisted?: boolean
  variant?: "default" | "compact"
}

export function TourCard({ 
  tour, 
  showWishlist = true, 
  onWishlistToggle, 
  isWishlisted = false,
  variant = "default" 
}: TourCardProps) {
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onWishlistToggle) {
      onWishlistToggle(tour.id)
    }
  }

  return (
    <Card className="group cursor-pointer hover-lift overflow-hidden rounded-lg fade-in">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={tour.images[0] || "/placeholder.svg"}
          alt={tour.title}
          fill
          className="object-cover image-hover"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {tour.badges.map((badge) => (
            <Badge key={badge} variant="secondary" className="bg-secondary text-black font-medium text-xs scale-in">
              {badge}
            </Badge>
          ))}
        </div>
        {showWishlist && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white hover-scale"
            onClick={handleWishlistClick}
          >
            <Heart
              className={`h-4 w-4 transition-all duration-300 ${isWishlisted ? "fill-red-500 text-red-500 scale-in" : "text-gray-600"}`}
            />
          </Button>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <MapPin className="h-3 w-3" />
          {tour.location}
        </div>

        <h3 className="font-poppins font-semibold text-xl mb-2">{tour.title}</h3>

        <p className="text-muted-foreground mb-4 line-clamp-2">{tour.description}</p>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {tour.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {tour.groupSize}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{tour.rating}</span>
          </div>
          <span className="text-muted-foreground">({tour.reviews} reviews)</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">${tour.price}</span>
            {tour.originalPrice && (
              <span className="text-muted-foreground line-through">${tour.originalPrice}</span>
            )}
            <span className="text-sm text-muted-foreground">per person</span>
          </div>
          <Link href={`/tours/${tour.id}`}>
            <Button className="bg-primary hover:bg-primary/90 btn-primary">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
} 