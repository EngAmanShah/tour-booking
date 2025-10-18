import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"
import Image from "next/image"

export function DestinationsHeader() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="World destinations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
          Explore the World's
          <span className="block text-secondary">Best Destinations</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          From bustling cities to serene beaches, discover your next adventure across 200+ destinations worldwide
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto bg-white rounded-lg p-2 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-gray-400 ml-2" />
          <Input
            placeholder="Search destinations..."
            className="border-0 bg-transparent text-black placeholder:text-gray-500 focus-visible:ring-0"
          />
          <Button className="bg-primary hover:bg-primary/90 rounded-lg">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
