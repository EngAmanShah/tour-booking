"use client"

import { useState, useEffect } from "react"
import { ToursHeader } from "@/components/tours-header"
import { ToursFilters } from "@/components/tours-filters"
import { ToursList } from "@/components/tours-list"
import { Footer } from "@/components/footer"
import { useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export default function ToursPage() {
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState({
    destination: undefined,
    dateRange: undefined,
    priceRange: [0, 5000] as [number, number],
    guests: 2,
    tourType: undefined,
  })

  // Get URL parameters for display
  const urlDestination = searchParams.get('destination')
  const urlTourType = searchParams.get('tourType')
  const hasCategoryFilters = urlDestination || urlTourType

  const clearCategoryFilters = () => {
    window.location.href = '/tours'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ToursHeader />
      
      {/* Category Filter Header */}
      {hasCategoryFilters && (
        <div className="bg-white border-b">
          <div className="container px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Filtered by:</span>
                {urlDestination && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {urlDestination}
                    <X className="h-3 w-3 cursor-pointer" onClick={clearCategoryFilters} />
                  </Badge>
                )}
                {urlTourType && urlTourType !== "all" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {urlTourType}
                    <X className="h-3 w-3 cursor-pointer" onClick={clearCategoryFilters} />
                  </Badge>
                )}
              </div>
              <button
                onClick={clearCategoryFilters}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear filters
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <ToursFilters onFiltersChange={setFilters} />
          </aside>
          <main className="lg:w-3/4">
            <ToursList filters={filters} />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
