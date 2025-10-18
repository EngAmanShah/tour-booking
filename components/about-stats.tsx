export function AboutStats() {
  const stats = [
    { number: "50K+", label: "Happy Travelers", description: "Customers who've booked with us" },
    { number: "200+", label: "Destinations", description: "Countries and cities worldwide" },
    { number: "4.9", label: "Average Rating", description: "Based on customer reviews" },
    { number: "24/7", label: "Support", description: "Always here when you need us" },
    { number: "500+", label: "Local Partners", description: "Trusted guides and operators" },
    { number: "99%", label: "Satisfaction Rate", description: "Customers who'd book again" },
  ]

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">RoamWise by the Numbers</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Our impact in the travel industry speaks for itself</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-secondary mb-2">{stat.number}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm opacity-80">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
