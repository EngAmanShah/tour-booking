import Image from "next/image"

export function ContactHeader() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Contact RoamWise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 leading-tight">
          Get in
          <span className="block text-secondary">Touch</span>
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Have questions about your next adventure? Our travel experts are here to help you plan the perfect trip
        </p>
      </div>
    </section>
  )
}
