"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Camera, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { destinations, Destination, getToursByRegion } from "@/lib/data"

export function DestinationsGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [displayCount, setDisplayCount] = useState(8)
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations)

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...destinations]

    const matchesSearch = (dest: Destination) =>
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRegion = (dest: Destination) =>
      selectedRegion === "all" || dest.region === selectedRegion

    filtered = filtered.filter(dest => matchesSearch(dest) && matchesRegion(dest))

    // Apply sorting
    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "tours":
        filtered.sort((a, b) => b.tours - a.tours)
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default: // popular
        filtered.sort((a, b) => b.reviews - a.reviews)
        break
    }

    setFilteredDestinations(filtered)
  }, [searchTerm, selectedRegion, sortBy])

  const loadMore = () => {
    setDisplayCount(prev => prev + 8)
  }

  const displayedDestinations = filteredDestinations.slice(0, displayCount)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64 rounded-lg"
                />
              </div>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full sm:w-40 rounded-lg">
                  <SelectValue placeholder="All Regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="Europe">Europe</SelectItem>
                  <SelectItem value="Asia">Asia</SelectItem>
                  <SelectItem value="Americas">Americas</SelectItem>
                  <SelectItem value="Africa">Africa</SelectItem>
                  <SelectItem value="Oceania">Oceania</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-40 rounded-lg">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="tours">Most Tours</SelectItem>
                <SelectItem value="name">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredDestinations.length} destinations
            {selectedRegion !== "all" && ` in ${selectedRegion}`}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedDestinations.map((destination, index) => (
            <Card
              key={destination.id}
              className="group cursor-pointer hover-lift overflow-hidden rounded-lg fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover image-hover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-secondary text-black font-medium scale-in">{destination.tours} tours</Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white hover-scale">
                    <Camera className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" />
                  {destination.country}
                </div>

                <h3 className="font-poppins font-semibold text-xl mb-2">{destination.name}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{destination.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">Best: {destination.bestTime}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight) => (
                    <Badge key={highlight} variant="outline" className="text-xs scale-in">
                      {highlight}
                    </Badge>
                  ))}
                  {destination.highlights.length > 2 && (
                    <Badge variant="outline" className="text-xs scale-in">
                      +{destination.highlights.length - 2}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">${destination.price}</span>
                    {destination.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${destination.originalPrice}</span>
                    )}
                  </div>
                </div>

                <Link href={`/tours?destination=${encodeURIComponent(destination.name)}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-lg btn-primary">
                    Explore Tours
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {displayedDestinations.length < filteredDestinations.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 bg-transparent rounded-lg btn-secondary"
              onClick={loadMore}
            >
              Load More Destinations
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
