"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Star, Heart, Share2, MapPin, Clock, Users, Globe, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TourDetailHeaderProps {
  tour: {
    id: number
    title: string
    location: string
    country: string
    rating: number
    reviews: number
    duration: string
    groupSize: string
    difficulty: string
    languages: string[]
    images: string[]
    badges: string[]
  }
}

export function TourDetailHeader({ tour }: TourDetailHeaderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % tour.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + tour.images.length) % tour.images.length)
  }

  return (
    <section className="relative">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container px-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/tours" className="hover:text-primary">
              Tours
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{tour.title}</span>
          </nav>
        </div>
      </div>

      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={tour.images[currentImageIndex] || "/placeholder.svg"}
                alt={tour.title}
                fill
                className="object-cover"
                priority
              />

              {/* Navigation Arrows */}
              {tour.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                {currentImageIndex + 1} / {tour.images.length}
              </div>
            </div>

            {/* Thumbnail Images */}
            {tour.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {tour.images.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className={`relative h-20 overflow-hidden rounded-lg cursor-pointer border-2 ${
                      index === currentImageIndex ? "border-primary" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${tour.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    {index === 3 && tour.images.length > 4 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm font-medium">
                        +{tour.images.length - 4}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tour Information */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {tour.badges.map((badge) => (
                <Badge key={badge} className="bg-secondary text-black font-medium">
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Title and Location */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-poppins font-bold mb-3">{tour.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>
                  {tour.location}, {tour.country}
                </span>
              </div>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-lg">{tour.rating}</span>
                </div>
                <span className="text-muted-foreground">({tour.reviews} reviews)</span>
              </div>
            </div>

            {/* Quick Info */}
            <Card className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Group Size</p>
                    <p className="font-medium">{tour.groupSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Languages</p>
                    <p className="font-medium">{tour.languages.join(", ")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-primary rounded-full" />
                  <div>
                    <p className="text-sm text-muted-foreground">Difficulty</p>
                    <p className="font-medium">{tour.difficulty}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="flex items-center gap-2"
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                {isWishlisted ? "Saved" : "Save"}
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
