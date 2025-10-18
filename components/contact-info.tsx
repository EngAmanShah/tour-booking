import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones } from "lucide-react"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our travel experts",
      contact: "+1 (555) 123-4567",
      availability: "24/7 Available",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "hello@roamwise.com",
      availability: "Response within 2 hours",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help when you need it",
      contact: "Start Chat",
      availability: "Available 24/7",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div>
        <h2 className="text-2xl font-poppins font-bold mb-6">Other Ways to Reach Us</h2>
        <div className="space-y-4">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      <p className="font-medium text-primary mb-1">{method.contact}</p>
                      <p className="text-xs text-muted-foreground">{method.availability}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Office Information */}
      <Card className="p-6">
        <CardContent className="p-0">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Visit Our Office</h3>
              <div className="text-muted-foreground space-y-1">
                <p>123 Travel Street</p>
                <p>Adventure City, AC 12345</p>
                <p>United States</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Sat - Sun: 10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Support */}
      <Card className="p-6 bg-red-50 border-red-200">
        <CardContent className="p-0">
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <Headphones className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Emergency Travel Support</h3>
              <p className="text-sm text-red-700 mb-3">
                Need urgent help while traveling? Our emergency support team is available 24/7.
              </p>
              <Button variant="destructive" size="sm">
                Call Emergency Line
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
