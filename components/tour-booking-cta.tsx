"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users, Shield, Clock } from "lucide-react"
import Link from "next/link"

interface TourBookingCTAProps {
  tour: {
    id: number
    price: number
    originalPrice?: number
  }
}

export function TourBookingCTA({ tour }: TourBookingCTAProps) {
  const [selectedDate, setSelectedDate] = useState("")
  const [travelers, setTravelers] = useState("2")
  const [totalPrice, setTotalPrice] = useState(tour.price * 2)

  const handleTravelersChange = (value: string) => {
    setTravelers(value)
    setTotalPrice(tour.price * Number.parseInt(value))
  }

  return (
    <div className="space-y-6">
      {/* Booking Card */}
      <Card className="sticky top-4 card-shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">${tour.price}</span>
                {tour.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">${tour.originalPrice}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">per person</p>
            </div>
            {tour.originalPrice && (
              <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                Save ${tour.originalPrice - tour.price}
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Date Selection */}
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Select Date
            </Label>
            <Input
              id="date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="rounded-lg"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Travelers Selection */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Number of Travelers
            </Label>
            <Select value={travelers} onValueChange={handleTravelersChange}>
              <SelectTrigger className="rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Traveler</SelectItem>
                <SelectItem value="2">2 Travelers</SelectItem>
                <SelectItem value="3">3 Travelers</SelectItem>
                <SelectItem value="4">4 Travelers</SelectItem>
                <SelectItem value="5">5 Travelers</SelectItem>
                <SelectItem value="6">6 Travelers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-2 pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span>
                ${tour.price} x {travelers} travelers
              </span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Service fee</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2 border-t">
              <span>Total</span>
              <span className="text-primary">${totalPrice}</span>
            </div>
          </div>

          {/* Book Now Button */}
          <Link href={`/booking/${tour.id}`}>
            <Button
              className="w-full bg-primary hover:bg-primary/90 rounded-lg py-6 text-lg font-semibold"
              disabled={!selectedDate}
            >
              Book Now
            </Button>
          </Link>

          <p className="text-xs text-center text-muted-foreground">You won't be charged yet</p>
        </CardContent>
      </Card>

      {/* Trust Indicators */}
      <Card className="p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium text-sm">Free Cancellation</p>
              <p className="text-xs text-muted-foreground">Cancel up to 48 hours before</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-sm">Instant Confirmation</p>
              <p className="text-xs text-muted-foreground">Receive confirmation immediately</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden z-50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-primary">${tour.price}</span>
            <span className="text-sm text-muted-foreground ml-1">per person</span>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total: ${totalPrice}</p>
          </div>
        </div>
        <Link href={`/booking/${tour.id}`}>
          <Button className="w-full bg-primary hover:bg-primary/90 rounded-lg">Book Now</Button>
        </Link>
      </div>
    </div>
  )
}
