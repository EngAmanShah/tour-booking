import { DestinationsHeader } from "@/components/destinations-header"
import { DestinationsGrid } from "@/components/destinations-grid"
import { PopularRegions } from "@/components/popular-regions"
import { Footer } from "@/components/footer"

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <DestinationsHeader />
      <PopularRegions />
      <DestinationsGrid />
      <Footer />
    </div>
  )
}
