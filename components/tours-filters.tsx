"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Search, Calendar, Users } from "lucide-react"
import { tours } from "@/lib/data"
import { useSearchParams } from "next/navigation"

interface ToursFiltersProps {
  onFiltersChange: (filters: {
    destination?: string
    dateRange?: { from: Date; to: Date }
    priceRange?: [number, number]
    guests?: number
    tourType?: string
  }) => void
}

export function ToursFilters({ onFiltersChange }: ToursFiltersProps) {
  const searchParams = useSearchParams()
  
  // Initialize with URL parameters if they exist
  const initialDestination = searchParams.get('destination') || ""
  const initialTourType = searchParams.get('tourType') || "all"
  
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [destination, setDestination] = useState(initialDestination)
  const [guests, setGuests] = useState(2)
  const [tourType, setTourType] = useState(initialTourType)

  // Get unique tour types from data
  const tourTypes = Array.from(new Set(tours.map(tour => tour.type)))

  const filterCategories = [
    {
      title: "Tour Type",
      options: tourTypes,
    },
    {
      title: "Duration",
      options: ["1-3 days", "4-7 days", "1-2 weeks", "2+ weeks"],
    },
    {
      title: "Group Size",
      options: ["Small (2-8)", "Medium (9-16)", "Large (17+)", "Private"],
    },
    {
      title: "Difficulty",
      options: ["Easy", "Moderate", "Challenging", "Expert"],
    },
  ]

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const clearFilters = () => {
    setSelectedFilters([])
    setPriceRange([0, 5000])
    setDestination("")
    setGuests(2)
    setTourType("all")
  }

  // Update parent component when filters change
  useEffect(() => {
    const filters = {
      destination: destination || undefined,
      priceRange: priceRange as [number, number],
      guests,
      tourType: tourType === "all" ? undefined : tourType,
    }
    onFiltersChange(filters)
  }, [destination, priceRange, guests, tourType, onFiltersChange])

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {(selectedFilters.length > 0 || destination || tourType !== "all") && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {destination && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Destination: {destination}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setDestination("")} />
                </Badge>
              )}
              {tourType !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Type: {tourType}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setTourType("all")} />
                </Badge>
              )}
              {selectedFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                  {filter}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter(filter)} />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Destination Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Destination</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search destinations..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Tour Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Tour Type</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={tourType} onValueChange={setTourType}>
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {tourTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Number of Guests */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Number of Guests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-400" />
            <Input
              type="number"
              min="1"
              max="20"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
              className="w-20"
            />
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={5000} step={100} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filter Categories */}
      {filterCategories.map((category) => (
        <Card key={category.title}>
          <CardHeader>
            <CardTitle className="text-sm">{category.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {category.options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={option}
                    checked={selectedFilters.includes(option)}
                    onCheckedChange={() => toggleFilter(option)}
                  />
                  <label
                    htmlFor={option}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
