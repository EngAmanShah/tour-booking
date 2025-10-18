import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface ItineraryItem {
  time: string
  title: string
  description: string
}

interface TourItineraryProps {
  itinerary: ItineraryItem[]
}

export function TourItinerary({ itinerary }: TourItineraryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-poppins">Day-by-Day Itinerary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {itinerary.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-primary text-white rounded-full p-2 mb-2">
                  <Clock className="h-4 w-4" />
                </div>
                {index < itinerary.length - 1 && <div className="w-px h-16 bg-gray-200" />}
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-primary">{item.time}</span>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
