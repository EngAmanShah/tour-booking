"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, MapPin, Calendar, Star, Award } from "lucide-react"
import Image from "next/image"

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "New York, USA",
  memberSince: "January 2023",
  avatar: "/placeholder.svg?height=150&width=150",
  coverImage: "/placeholder.svg?height=300&width=1200",
  stats: {
    toursBooked: 12,
    countriesVisited: 8,
    reviewsWritten: 15,
    averageRating: 4.8,
  },
  badges: ["Explorer", "Reviewer", "Early Bird"],
  bio: "Passionate traveler who loves discovering hidden gems and authentic local experiences. Always planning the next adventure!",
}

export function ProfileHeader() {
  const [isEditingCover, setIsEditingCover] = useState(false)
  const [isEditingAvatar, setIsEditingAvatar] = useState(false)

  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image src={userData.coverImage || "/placeholder.svg"} alt="Profile cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Edit Cover Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white"
          onClick={() => setIsEditingCover(true)}
        >
          <Camera className="h-4 w-4 mr-2" />
          Edit Cover
        </Button>
      </div>

      {/* Profile Info */}
      <div className="container px-4">
        <div className="relative -mt-20 md:-mt-24">
          <Card className="card-shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white card-shadow">
                    <Image
                      src={userData.avatar || "/placeholder.svg"}
                      alt={userData.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute bottom-2 right-2 bg-white/90 hover:bg-white rounded-full p-2"
                    onClick={() => setIsEditingAvatar(true)}
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                {/* User Info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-3xl font-poppins font-bold text-foreground">{userData.name}</h1>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{userData.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Member since {userData.memberSince}</span>
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {userData.badges.map((badge) => (
                      <Badge key={badge} className="bg-secondary text-black font-medium">
                        <Award className="h-3 w-3 mr-1" />
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground max-w-2xl">{userData.bio}</p>
                </div>

                {/* Edit Profile Button */}
                <Button className="bg-primary hover:bg-primary/90 rounded-lg">Edit Profile</Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{userData.stats.toursBooked}</div>
                  <div className="text-sm text-muted-foreground">Tours Booked</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{userData.stats.countriesVisited}</div>
                  <div className="text-sm text-muted-foreground">Countries Visited</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{userData.stats.reviewsWritten}</div>
                  <div className="text-sm text-muted-foreground">Reviews Written</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
                    <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    {userData.stats.averageRating}
                  </div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
