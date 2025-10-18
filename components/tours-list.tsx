"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { tours, Tour } from "@/lib/data"
import { useSearchParams } from "next/navigation"
import { TourCard } from "./tour-card"

interface ToursListProps {
  filters?: {
    destination?: string
    dateRange?: { from: Date; to: Date }
    priceRange?: [number, number]
    guests?: number
    tourType?: string
  }
}

export function ToursList({ filters }: ToursListProps) {
  const [wishlist, setWishlist] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("popular")
  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours)
  const [displayCount, setDisplayCount] = useState(6)
  const searchParams = useSearchParams()

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...tours]

    // Get parameters from URL if not provided in filters
    const urlDestination = searchParams.get('destination')
    const urlTourType = searchParams.get('tourType')
    
    const destinationFilter = filters?.destination || urlDestination
    const tourTypeFilter = filters?.tourType || urlTourType

    // Apply destination filter
    if (destinationFilter) {
      filtered = filtered.filter(tour => 
        tour.location.toLowerCase().includes(destinationFilter.toLowerCase()) ||
        tour.country.toLowerCase().includes(destinationFilter.toLowerCase()) ||
        tour.title.toLowerCase().includes(destinationFilter.toLowerCase())
      )
    }

    // Apply tour type filter
    if (tourTypeFilter && tourTypeFilter !== "all") {
      filtered = filtered.filter(tour => tour.type === tourTypeFilter)
    }

    // Apply price range filter
    if (filters?.priceRange) {
      filtered = filtered.filter(tour => 
        tour.price >= filters.priceRange![0] && tour.price <= filters.priceRange![1]
      )
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "duration":
        filtered.sort((a, b) => {
          const aHours = parseInt(a.duration.split(' ')[0])
          const bHours = parseInt(b.duration.split(' ')[0])
          return aHours - bHours
        })
        break
      default: // popular
        filtered.sort((a, b) => b.reviews - a.reviews)
        break
    }

    setFilteredTours(filtered)
  }, [filters, sortBy, searchParams])

  const loadMore = () => {
    setDisplayCount(prev => prev + 6)
  }

  const displayedTours = filteredTours.slice(0, displayCount)

  // Get active filters for display
  const urlDestination = searchParams.get('destination')
  const urlTourType = searchParams.get('tourType')
  const hasActiveFilters = urlDestination || urlTourType || filters?.destination || filters?.tourType

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-poppins font-bold">{filteredTours.length} Tours Found</h2>
          <p className="text-muted-foreground">
            {hasActiveFilters 
              ? "Showing results for your selected filters" 
              : "Showing results for your search criteria"
            }
          </p>
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="duration">Duration</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedTours.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
            onWishlistToggle={toggleWishlist}
            isWishlisted={wishlist.includes(tour.id)}
          />
        ))}
      </div>

      {/* Load More */}
      {displayedTours.length < filteredTours.length && (
        <div className="text-center pt-8">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 bg-transparent"
            onClick={loadMore}
          >
            Load More Tours
          </Button>
        </div>
      )}

      {/* No Results */}
      {filteredTours.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No tours found</h3>
          <p className="text-muted-foreground">
            {hasActiveFilters 
              ? "Try adjusting your filters or browse all tours." 
              : "Try adjusting your filters to find more tours."
            }
          </p>
          {hasActiveFilters && (
            <div className="mt-4">
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/tours'}
                className="btn-secondary"
              >
                View All Tours
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
