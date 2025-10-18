"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchSection() {
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [travelers, setTravelers] = useState("2")

  return (
    <section className="py-8 bg-gray-50">
      <div className="container px-4">
        <Card className="p-6 card-shadow-lg -mt-16 relative z-20 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Destination */}
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Where to?
              </Label>
              <Input
                id="destination"
                placeholder="Search destinations..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="rounded-lg"
              />
            </div>

            {/* Check-in */}
            <div className="space-y-2">
              <Label htmlFor="checkin" className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Check-in
              </Label>
              <Input
                id="checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="rounded-lg"
              />
            </div>

            {/* Check-out */}
            <div className="space-y-2">
              <Label htmlFor="checkout" className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Check-out
              </Label>
              <Input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="rounded-lg"
              />
            </div>

            {/* Travelers & Search */}
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Travelers
              </Label>
              <div className="flex gap-2">
                <Select value={travelers} onValueChange={setTravelers}>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Traveler</SelectItem>
                    <SelectItem value="2">2 Travelers</SelectItem>
                    <SelectItem value="3">3 Travelers</SelectItem>
                    <SelectItem value="4">4 Travelers</SelectItem>
                    <SelectItem value="5+">5+ Travelers</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-primary hover:bg-primary/90 px-6 rounded-lg">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
