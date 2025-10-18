import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Download, MessageCircle } from "lucide-react"
import Image from "next/image"

const bookings = [
  {
    id: "BK001",
    tourTitle: "Santorini Sunset & Wine Tour",
    location: "Santorini, Greece",
    date: "2024-03-15",
    travelers: 2,
    status: "completed",
    price: 598,
    image: "/placeholder.svg?height=100&width=150",
    bookingDate: "2024-02-10",
  },
  {
    id: "BK002",
    tourTitle: "Tokyo Food & Culture Walking Tour",
    location: "Tokyo, Japan",
    date: "2024-04-20",
    travelers: 1,
    status: "upcoming",
    price: 159,
    image: "/placeholder.svg?height=100&width=150",
    bookingDate: "2024-03-01",
  },
  {
    id: "BK003",
    tourTitle: "Bali Temple & Rice Terrace Adventure",
    location: "Ubud, Bali",
    date: "2024-02-05",
    travelers: 2,
    status: "completed",
    price: 178,
    image: "/placeholder.svg?height=100&width=150",
    bookingDate: "2024-01-15",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800"
    case "upcoming":
      return "bg-blue-100 text-blue-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function BookingHistory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-poppins font-bold">Booking History</h2>
        <p className="text-muted-foreground">{bookings.length} bookings total</p>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card key={booking.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-48 h-32 md:h-auto">
                  <Image
                    src={booking.image || "/placeholder.svg"}
                    alt={booking.tourTitle}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-poppins font-semibold text-lg">{booking.tourTitle}</h3>
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {booking.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(booking.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {booking.travelers} travelers
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        Booking ID: {booking.id} • Booked on {new Date(booking.bookingDate).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="text-right space-y-3">
                      <div className="text-2xl font-bold text-primary">${booking.price}</div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Download className="h-4 w-4 mr-2" />
                          Receipt
                        </Button>
                        {booking.status === "completed" && (
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Review
                          </Button>
                        )}
                        {booking.status === "upcoming" && (
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="bg-transparent">
          Load More Bookings
        </Button>
      </div>
    </div>
  )
}
