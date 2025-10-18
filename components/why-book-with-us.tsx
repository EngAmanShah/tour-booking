import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Headphones, CreditCard } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Your payments and personal information are always protected with bank-level security.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "Find a lower price elsewhere? We'll match it and give you an additional 5% off.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our travel experts are available around the clock to help with any questions.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Book now and pay later with our flexible payment options and easy cancellation.",
  },
]

export function WhyBookWithUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">Why Book With RoamWise?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied travelers who trust us with their adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="text-center border-0 shadow-none">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Destinations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
