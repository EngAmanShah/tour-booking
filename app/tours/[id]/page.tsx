import { TourDetailHeader } from "@/components/tour-detail-header"
import { TourOverview } from "@/components/tour-overview"
import { TourItinerary } from "@/components/tour-itinerary"
import { TourInclusions } from "@/components/tour-inclusions"
import { TourGuide } from "@/components/tour-guide"
import { TourReviews } from "@/components/tour-reviews"
import { TourBookingCTA } from "@/components/tour-booking-cta"
import { RelatedTours } from "@/components/related-tours"
import { Footer } from "@/components/footer"
import { getTourById } from "@/lib/data"
import { notFound } from "next/navigation"

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = getTourById(parseInt(params.id))

  if (!tour) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <TourDetailHeader tour={tour} />
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <TourOverview tour={tour} />
            <TourItinerary itinerary={tour.itinerary} />
            <TourInclusions inclusions={tour.inclusions} exclusions={tour.exclusions} />
            <TourGuide guide={tour.guide} />
            <TourReviews tourId={tour.id} rating={tour.rating} reviewCount={tour.reviews} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <TourBookingCTA tour={tour} />
          </div>
        </div>
      </div>
      <RelatedTours currentTourId={tour.id} />
      <Footer />
    </div>
  )
}
