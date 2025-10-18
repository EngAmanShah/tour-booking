import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"

interface TourInclusionsProps {
  inclusions: string[]
  exclusions: string[]
}

export function TourInclusions({ inclusions, exclusions }: TourInclusionsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Inclusions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-poppins text-green-700">What's Included</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {inclusions.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Exclusions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-poppins text-red-700">What's Not Included</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {exclusions.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
