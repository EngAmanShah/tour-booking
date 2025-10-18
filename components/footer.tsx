import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4">Get Travel Inspiration Delivered</h3>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our newsletter for exclusive deals, travel tips, and destination guides
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-white text-black border-0 rounded-lg" />
              <Button className="bg-secondary text-black hover:bg-secondary/90 font-semibold rounded-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <span className="font-poppins font-bold text-xl text-white">RoamWise</span>
                  <p className="text-xs text-gray-400 -mt-1">Explore Smarter. Travel Farther.</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Discover curated travel experiences that create memories to last a lifetime. From hidden gems to iconic
                destinations, we make every journey extraordinary.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/tours", label: "Tours" },
                  { href: "/destinations", label: "Destinations" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                  { href: "/wishlist", label: "My Wishlist" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-poppins font-semibold text-lg mb-4">Categories</h4>
              <ul className="space-y-3">
                {[
                  "Beach Destinations",
                  "Mountain Adventures",
                  "City Breaks",
                  "Cultural Tours",
                  "Luxury Travel",
                  "Budget Trips",
                ].map((category) => (
                  <li key={category}>
                    <Link href="/tours" className="text-gray-300 hover:text-white transition-colors text-sm">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-poppins font-semibold text-lg mb-4">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>123 Travel Street</p>
                    <p>Adventure City, AC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-300">hello@roamwise.com</span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">24/7 Customer Support</p>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg">Contact Support</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">© 2024 RoamWise. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
