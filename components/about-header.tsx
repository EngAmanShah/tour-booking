import Image from "next/image"

export function AboutHeader() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="About RoamWise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
          About
          <span className="block text-secondary">RoamWise</span>
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Passionate about creating unforgettable travel experiences that connect people with the world's most amazing
          destinations
        </p>
      </div>
    </section>
  )
}
