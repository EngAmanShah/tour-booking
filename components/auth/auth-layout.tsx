import type React from "react"
import Link from "next/link"
import Image from "next/image"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  footerText: string
  footerLinkText: string
  footerLinkHref: string
}

export function AuthLayout({ children, title, subtitle, footerText, footerLinkText, footerLinkHref }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          {/* Logo */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <span className="font-poppins font-bold text-2xl text-primary">RoamWise</span>
                <p className="text-xs text-muted-foreground -mt-1">Explore Smarter. Travel Farther.</p>
              </div>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-poppins font-bold text-gray-900">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
          </div>

          {/* Form */}
          {children}

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {footerText}{" "}
              <Link href={footerLinkHref} className="font-medium text-primary hover:text-primary/80">
                {footerLinkText}
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block relative w-1/2">
        <Image
          src="/placeholder.svg?height=800&width=600"
          alt="Travel destination"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h3 className="text-4xl font-poppins font-bold mb-4">Start Your Adventure</h3>
            <p className="text-xl opacity-90">Join thousands of travelers discovering amazing experiences worldwide</p>
          </div>
        </div>
      </div>
    </div>
  )
}
