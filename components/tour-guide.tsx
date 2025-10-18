import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Globe } from "lucide-react"
import Image from "next/image"

interface TourGuideProps {
  guide: {
    name: string
    experience: string
    languages: string[]
    specialties: string[]
    bio: string
    image: string
    rating: number
  }
}

export function TourGuide({ guide }: TourGuideProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-poppins">Meet Your Guide</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Guide Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image src={guide.image || "/placeholder.svg"} alt={guide.name} fill className="object-cover" />
            </div>
          </div>

          {/* Guide Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-xl font-poppins font-semibold mb-1">{guide.name}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  <span>{guide.experience} experience</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{guide.rating} rating</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{guide.bio}</p>

            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="font-medium">Languages</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {guide.languages.map((language) => (
                    <Badge key={language} variant="outline" className="text-xs">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="font-medium">Specialties</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {guide.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
