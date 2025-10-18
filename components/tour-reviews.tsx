"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, ThumbsUp, Filter } from "lucide-react"
import Image from "next/image"

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "2024-01-15",
    title: "Absolutely magical experience!",
    content:
      "This wine tour exceeded all expectations. Maria was an incredible guide with so much knowledge about local wines and history. The sunset view was breathtaking and the wines were exceptional. Highly recommend!",
    helpful: 12,
    verified: true,
    photos: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "2024-01-10",
    title: "Perfect romantic evening",
    content:
      "Booked this for our anniversary and it was perfect. The small group size made it intimate, and watching the sunset while sipping local wine was unforgettable. Great value for money!",
    helpful: 8,
    verified: true,
    photos: [],
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    date: "2024-01-05",
    title: "Great tour, minor timing issues",
    content:
      "Really enjoyed the wine tastings and the guide was very knowledgeable. Only minor complaint was that we were running a bit behind schedule, but overall a great experience. The mezze was delicious!",
    helpful: 5,
    verified: true,
    photos: ["/placeholder.svg?height=100&width=100"],
  },
]

interface TourReviewsProps {
  tourId: number
  rating: number
  reviewCount: number
}

export function TourReviews({ tourId, rating, reviewCount }: TourReviewsProps) {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [showAllReviews, setShowAllReviews] = useState(false)

  const ratingDistribution = [
    { stars: 5, count: 89, percentage: 72 },
    { stars: 4, count: 25, percentage: 20 },
    { stars: 3, count: 7, percentage: 6 },
    { stars: 2, count: 2, percentage: 1 },
    { stars: 1, count: 1, percentage: 1 },
  ]

  const displayedReviews = showAllReviews ? mockReviews : mockReviews.slice(0, 2)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-poppins">Reviews & Ratings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{rating}</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-muted-foreground">{reviewCount} reviews</p>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <span className="text-sm w-8">{item.stars}★</span>
                <Progress value={item.percentage} className="flex-1 h-2" />
                <span className="text-sm text-muted-foreground w-8">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedFilter("all")}
            className="rounded-lg"
          >
            All Reviews
          </Button>
          <Button
            variant={selectedFilter === "5" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedFilter("5")}
            className="rounded-lg"
          >
            5 Stars
          </Button>
          <Button
            variant={selectedFilter === "photos" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedFilter("photos")}
            className="rounded-lg"
          >
            With Photos
          </Button>
          <Button variant="outline" size="sm" className="rounded-lg bg-transparent">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {displayedReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={review.avatar || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{review.name}</h4>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">{review.title}</h5>
                    <p className="text-muted-foreground leading-relaxed">{review.content}</p>
                  </div>

                  {/* Review Photos */}
                  {review.photos.length > 0 && (
                    <div className="flex gap-2">
                      {review.photos.map((photo, index) => (
                        <div key={index} className="relative w-20 h-20 rounded-lg overflow-hidden">
                          <Image src={photo || "/placeholder.svg"} alt="Review photo" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful ({review.helpful})
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Reviews */}
        {!showAllReviews && mockReviews.length > 2 && (
          <div className="text-center">
            <Button variant="outline" onClick={() => setShowAllReviews(true)} className="rounded-lg">
              Show All {reviewCount} Reviews
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
