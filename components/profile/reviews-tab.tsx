import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, Edit, Trash2 } from "lucide-react"
import Image from "next/image"

const mockReviews = [
  {
    id: 1,
    tourTitle: "Santorini Sunset & Wine Tour",
    tourImage: "/placeholder.svg?height=100&width=150",
    rating: 5,
    title: "Absolutely magical experience!",
    content:
      "This wine tour exceeded all expectations. Maria was an incredible guide with so much knowledge about local wines and history. The sunset view was breathtaking and the wines were exceptional. Highly recommend!",
    date: "2024-01-15",
    helpful: 12,
    photos: ["/placeholder.svg?height=80&width=80", "/placeholder.svg?height=80&width=80"],
  },
  {
    id: 2,
    tourTitle: "Bali Temple & Rice Terrace Adventure",
    tourImage: "/placeholder.svg?height=100&width=150",
    rating: 4,
    title: "Great cultural experience",
    content:
      "Really enjoyed learning about Balinese culture and visiting the beautiful temples. The rice terraces were stunning. Guide was knowledgeable and friendly. Only minor issue was the transportation could have been more comfortable.",
    date: "2024-02-10",
    helpful: 8,
    photos: [],
  },
]

export function ReviewsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-poppins font-bold">My Reviews</h2>
        <p className="text-muted-foreground">{mockReviews.length} reviews written</p>
      </div>

      <div className="space-y-6">
        {mockReviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Tour Image */}
                <div className="relative w-full md:w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={review.tourImage || "/placeholder.svg"}
                    alt={review.tourTitle}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Review Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-poppins font-semibold text-lg">{review.tourTitle}</h3>
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
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">{review.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{review.content}</p>
                  </div>

                  {/* Review Photos */}
                  {review.photos.length > 0 && (
                    <div className="flex gap-2">
                      {review.photos.map((photo, index) => (
                        <div key={index} className="relative w-16 h-16 rounded-lg overflow-hidden">
                          <Image src={photo || "/placeholder.svg"} alt="Review photo" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{review.helpful} found helpful</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Verified Purchase
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {mockReviews.length === 0 && (
        <div className="text-center py-12">
          <Star className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-poppins font-bold mb-4">No reviews yet</h3>
          <p className="text-muted-foreground mb-8">
            Share your experiences to help other travelers discover amazing tours.
          </p>
          <Link href="/tours">
            <Button className="bg-primary hover:bg-primary/90">Book Your First Tour</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
