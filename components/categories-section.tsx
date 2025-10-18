import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Waves, Building, Palette, Crown, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: "beaches",
    name: "Beaches",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
    description: "Sun, sand, and crystal clear waters",
    tourType: "Relaxation",
    searchTerm: "beach",
  },
  {
    id: "mountains",
    name: "Mountains",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=400&h=250&fit=crop",
    description: "Breathtaking peaks and scenic trails",
    tourType: "Adventure",
    searchTerm: "mountain",
  },
  {
    id: "cities",
    name: "Cities",
    icon: Building,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
    description: "Urban adventures and city lights",
    tourType: "Cultural",
    searchTerm: "city",
  },
  {
    id: "cultural",
    name: "Cultural",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&h=250&fit=crop",
    description: "Rich history and local traditions",
    tourType: "Cultural",
    searchTerm: "cultural",
  },
  {
    id: "luxury",
    name: "Luxury",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
    description: "Premium experiences and comfort",
    tourType: "Luxury",
    searchTerm: "luxury",
  },
  {
    id: "budget",
    name: "Budget",
    icon: DollarSign,
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=250&fit=crop",
    description: "Amazing trips without breaking the bank",
    tourType: "Budget",
    searchTerm: "budget",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">Explore by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your perfect adventure from our carefully curated categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link 
                key={category.id} 
                href={`/tours?tourType=${encodeURIComponent(category.tourType)}&destination=${encodeURIComponent(category.searchTerm)}`}
                className="block"
              >
                <Card className="group cursor-pointer hover-lift overflow-hidden rounded-lg fade-in">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover image-hover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 p-2 rounded-lg hover-scale">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-poppins font-semibold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
