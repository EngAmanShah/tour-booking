import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface TourOverviewProps {
  tour: {
    description: string
    highlights: string[]
  }
}

export function TourOverview({ tour }: TourOverviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-poppins">Tour Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed text-lg">{tour.description}</p>

        <div>
          <h3 className="font-semibold text-lg mb-4">Tour Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tour.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
