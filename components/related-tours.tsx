"use client"

import { useState } from "react"
import { tours, Tour } from "@/lib/data"
import { TourCard } from "./tour-card"

interface RelatedToursProps {
  currentTourId: number
}

export function RelatedTours({ currentTourId }: RelatedToursProps) {
  const [wishlist, setWishlist] = useState<number[]>([])

  const currentTour = tours.find(tour => tour.id === currentTourId)
  
  // Get related tours based on region and type, excluding current tour
  const relatedTours = tours
    .filter(tour => 
      tour.id !== currentTourId && 
      (tour.region === currentTour?.region || tour.type === currentTour?.type)
    )
    .slice(0, 4)

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  if (relatedTours.length === 0) return null

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">Related Tours</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover more amazing experiences similar to this one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onWishlistToggle={toggleWishlist}
              isWishlisted={wishlist.includes(tour.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
