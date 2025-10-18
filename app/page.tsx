import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { TrendingDestinations } from "@/components/trending-destinations"
import { WhyBookWithUs } from "@/components/why-book-with-us"
import { SearchSection } from "@/components/search-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SearchSection />
      <CategoriesSection />
      <TrendingDestinations />
      <WhyBookWithUs />
      <Footer />
    </div>
  )
}
