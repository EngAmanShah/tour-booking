export interface Tour {
  id: number
  title: string
  location: string
  country: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  duration: string
  groupSize: string
  difficulty: string
  languages: string[]
  images: string[]
  badges: string[]
  description: string
  highlights: string[]
  itinerary: ItineraryItem[]
  inclusions: string[]
  exclusions: string[]
  guide: Guide
  type: string
  region: string
}

export interface Destination {
  id: number
  name: string
  country: string
  region: string
  rating: number
  tours: number
  image: string
  highlights: string[]
  bestTime: string
  description: string
  price: number
  originalPrice?: number
  duration: string
  reviews: number
}

export interface ItineraryItem {
  time: string
  title: string
  description: string
}

export interface Guide {
  name: string
  experience: string
  languages: string[]
  specialties: string[]
  bio: string
  image: string
  rating: number
}

// Unsplash Images for Tours
export const tours: Tour[] = [
  {
    id: 1,
    title: "Santorini Sunset & Wine Tour",
    location: "Santorini, Greece",
    country: "Greece",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 124,
    duration: "8 hours",
    groupSize: "Small group (max 12)",
    difficulty: "Easy",
    languages: ["English", "Greek"],
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop",
    ],
    badges: ["Best Seller", "Wine Tour"],
    description: "Experience the magic of Santorini's world-famous sunsets while tasting exceptional local wines at traditional wineries.",
    highlights: [
      "Visit 3 traditional wineries",
      "Taste 12+ local wine varieties",
      "Watch sunset from Oia village",
      "Learn about volcanic soil wine-making",
      "Traditional Greek mezze included",
      "Professional sommelier guide",
    ],
    itinerary: [
      {
        time: "2:00 PM",
        title: "Hotel Pickup",
        description: "Comfortable pickup from your hotel in our air-conditioned vehicle",
      },
      {
        time: "2:30 PM",
        title: "First Winery - Santo Wines",
        description: "Begin with panoramic views and taste 4 signature wines while learning about volcanic viticulture",
      },
      {
        time: "4:00 PM",
        title: "Traditional Village Visit",
        description: "Explore Megalochori village and visit a family-owned winery with 200+ year history",
      },
      {
        time: "5:30 PM",
        title: "Sunset Preparation",
        description: "Head to the perfect sunset viewing spot with wine and traditional mezze",
      },
      {
        time: "7:30 PM",
        title: "Oia Sunset Experience",
        description: "Watch the world's most famous sunset while enjoying local wines and appetizers",
      },
      {
        time: "9:00 PM",
        title: "Return Journey",
        description: "Comfortable return to your hotel with memories to last a lifetime",
      },
    ],
    inclusions: [
      "Professional English-speaking guide",
      "Transportation in air-conditioned vehicle",
      "Wine tastings at 3 wineries (12+ varieties)",
      "Traditional Greek mezze platter",
      "Sunset viewing with complimentary wine",
      "Hotel pickup and drop-off",
      "All entrance fees",
    ],
    exclusions: ["Gratuities (optional)", "Personal expenses", "Additional food and drinks", "Travel insurance"],
    guide: {
      name: "Maria Konstantinou",
      experience: "8 years",
      languages: ["English", "Greek", "German"],
      specialties: ["Wine Tourism", "Local History", "Photography"],
      bio: "Born and raised in Santorini, Maria is a certified sommelier with deep knowledge of local wine traditions. She has guided over 2,000 wine tours and loves sharing the stories behind each vineyard.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      rating: 4.9,
    },
    type: "Cultural",
    region: "Europe",
  },
  {
    id: 2,
    title: "Bali Temple & Rice Terrace Adventure",
    location: "Ubud, Bali",
    country: "Indonesia",
    price: 89,
    originalPrice: null,
    rating: 4.9,
    reviews: 256,
    duration: "Full day",
    groupSize: "Medium group (max 16)",
    difficulty: "Moderate",
    languages: ["English", "Indonesian"],
    images: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
    ],
    badges: ["Cultural", "Adventure"],
    description: "Discover ancient temples and stunning rice terraces in the heart of Bali.",
    highlights: [
      "Visit sacred temples",
      "Explore rice terraces",
      "Traditional Balinese lunch",
      "Local guide insights",
      "Cultural performances",
      "Scenic photography spots",
    ],
    itinerary: [
      {
        time: "8:00 AM",
        title: "Hotel Pickup",
        description: "Morning pickup from your hotel in Ubud area",
      },
      {
        time: "9:00 AM",
        title: "Tirta Empul Temple",
        description: "Visit the sacred water temple and learn about Balinese purification rituals",
      },
      {
        time: "11:00 AM",
        title: "Tegalalang Rice Terraces",
        description: "Walk through the iconic rice terraces and learn about traditional farming",
      },
      {
        time: "1:00 PM",
        title: "Traditional Lunch",
        description: "Enjoy authentic Balinese cuisine at a local restaurant",
      },
      {
        time: "3:00 PM",
        title: "Gunung Kawi Temple",
        description: "Explore the ancient rock-cut temples in the valley",
      },
      {
        time: "5:00 PM",
        title: "Return to Hotel",
        description: "Comfortable return with time to relax",
      },
    ],
    inclusions: [
      "Professional English-speaking guide",
      "Air-conditioned transportation",
      "Traditional Balinese lunch",
      "All temple entrance fees",
      "Bottled water",
      "Hotel pickup and drop-off",
    ],
    exclusions: ["Personal expenses", "Gratuities", "Additional activities", "Travel insurance"],
    guide: {
      name: "Wayan Sudiarta",
      experience: "5 years",
      languages: ["English", "Indonesian", "Balinese"],
      specialties: ["Cultural Tours", "Temple History", "Local Traditions"],
      bio: "Wayan is a certified Balinese guide with deep knowledge of local customs and temple history. He loves sharing the spiritual significance of each site we visit.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      rating: 4.8,
    },
    type: "Cultural",
    region: "Asia",
  },
  {
    id: 3,
    title: "Tokyo Food & Culture Walking Tour",
    location: "Tokyo, Japan",
    country: "Japan",
    price: 159,
    originalPrice: null,
    rating: 4.7,
    reviews: 189,
    duration: "6 hours",
    groupSize: "Small group (max 8)",
    difficulty: "Easy",
    languages: ["English", "Japanese"],
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
    ],
    badges: ["Food Tour", "Walking"],
    description: "Taste authentic Japanese cuisine and explore hidden local neighborhoods.",
    highlights: [
      "Visit 6 local eateries",
      "Try authentic ramen",
      "Explore Tsukiji Outer Market",
      "Sake tasting experience",
      "Hidden alleyways tour",
      "Local market insights",
    ],
    itinerary: [
      {
        time: "10:00 AM",
        title: "Meeting Point",
        description: "Meet at Tsukiji Station and brief introduction",
      },
      {
        time: "10:30 AM",
        title: "Tsukiji Outer Market",
        description: "Explore the famous fish market and try fresh sushi",
      },
      {
        time: "12:00 PM",
        title: "Ramen Experience",
        description: "Visit a local ramen shop for authentic noodles",
      },
      {
        time: "2:00 PM",
        title: "Hidden Gems",
        description: "Walk through lesser-known neighborhoods and try street food",
      },
      {
        time: "4:00 PM",
        title: "Sake Tasting",
        description: "Visit a traditional sake shop for tasting",
      },
      {
        time: "5:30 PM",
        title: "Tour End",
        description: "Return to starting point with full stomachs",
      },
    ],
    inclusions: [
      "Professional English-speaking guide",
      "All food tastings (6+ dishes)",
      "Sake tasting experience",
      "Market entrance fees",
      "Bottled water",
      "Local insights and stories",
    ],
    exclusions: ["Additional food and drinks", "Personal expenses", "Transportation", "Gratuities"],
    guide: {
      name: "Yuki Tanaka",
      experience: "6 years",
      languages: ["English", "Japanese", "Korean"],
      specialties: ["Food Culture", "Local Markets", "Japanese History"],
      bio: "Yuki is a certified food guide with extensive knowledge of Tokyo's culinary scene. She knows all the best hidden spots and loves sharing the stories behind each dish.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      rating: 4.7,
    },
    type: "Food & Wine",
    region: "Asia",
  },
  {
    id: 4,
    title: "Machu Picchu Sunrise Hike",
    location: "Cusco, Peru",
    country: "Peru",
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviews: 98,
    duration: "2 days",
    groupSize: "Small group (max 10)",
    difficulty: "Challenging",
    languages: ["English", "Spanish"],
    images: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=400&fit=crop",
    ],
    badges: ["Adventure", "Hiking"],
    description: "Witness the magical sunrise over the ancient Inca citadel of Machu Picchu.",
    highlights: [
      "Sunrise at Machu Picchu",
      "Guided archaeological tour",
      "Inca Trail insights",
      "Professional photography tips",
      "Local Quechua culture",
      "Mountain views",
    ],
    itinerary: [
      {
        time: "Day 1 - 6:00 AM",
        title: "Cusco Departure",
        description: "Early morning departure from Cusco to Ollantaytambo",
      },
      {
        time: "Day 1 - 8:00 AM",
        title: "Train Journey",
        description: "Scenic train ride through the Sacred Valley to Aguas Calientes",
      },
      {
        time: "Day 1 - 10:00 AM",
        title: "Acclimatization",
        description: "Rest and prepare for the next day's early start",
      },
      {
        time: "Day 2 - 4:00 AM",
        title: "Early Start",
        description: "Early morning departure to catch the first bus to Machu Picchu",
      },
      {
        time: "Day 2 - 5:30 AM",
        title: "Sunrise Experience",
        description: "Arrive at Machu Picchu in time for the magical sunrise",
      },
      {
        time: "Day 2 - 6:00 AM",
        title: "Guided Tour",
        description: "Comprehensive tour of the ancient citadel with archaeological insights",
      },
    ],
    inclusions: [
      "Professional English-speaking guide",
      "Round-trip train tickets",
      "Machu Picchu entrance fees",
      "Bus tickets to/from Machu Picchu",
      "Hotel accommodation in Aguas Calientes",
      "All meals during the tour",
    ],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Tips"],
    guide: {
      name: "Carlos Huaman",
      experience: "10 years",
      languages: ["English", "Spanish", "Quechua"],
      specialties: ["Archaeology", "Inca History", "Photography"],
      bio: "Carlos is a certified archaeologist and guide with deep knowledge of Inca civilization. He has led over 500 tours to Machu Picchu and loves sharing the mysteries of this ancient wonder.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      rating: 4.9,
    },
    type: "Adventure",
    region: "Americas",
  },
  {
    id: 5,
    title: "Safari & Wildlife Photography",
    location: "Serengeti, Tanzania",
    country: "Tanzania",
    price: 899,
    originalPrice: null,
    rating: 4.8,
    reviews: 67,
    duration: "3 days",
    groupSize: "Private",
    difficulty: "Easy",
    languages: ["English", "Swahili"],
    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop",
    ],
    badges: ["Wildlife", "Photography"],
    description: "Capture stunning wildlife moments in one of Africa's most famous national parks.",
    highlights: [
      "Big Five wildlife viewing",
      "Professional photography guidance",
      "Luxury lodge accommodation",
      "Sunrise and sunset game drives",
      "Bird watching opportunities",
      "Cultural village visit",
    ],
    itinerary: [
      {
        time: "Day 1 - 8:00 AM",
        title: "Arusha Departure",
        description: "Transfer from Arusha to Serengeti National Park",
      },
      {
        time: "Day 1 - 2:00 PM",
        title: "Afternoon Game Drive",
        description: "First wildlife viewing session in the Serengeti plains",
      },
      {
        time: "Day 2 - 6:00 AM",
        title: "Sunrise Safari",
        description: "Early morning game drive for the best wildlife photography",
      },
      {
        time: "Day 2 - 4:00 PM",
        title: "Sunset Safari",
        description: "Evening game drive with golden hour photography",
      },
      {
        time: "Day 3 - 8:00 AM",
        title: "Final Safari",
        description: "Last game drive before departure",
      },
      {
        time: "Day 3 - 2:00 PM",
        title: "Return Journey",
        description: "Transfer back to Arusha with memories to last a lifetime",
      },
    ],
    inclusions: [
      "Professional English-speaking guide",
      "Luxury lodge accommodation",
      "All game drives in 4x4 vehicle",
      "Professional photographer guide",
      "All meals and drinks",
      "Park entrance fees",
    ],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Tips"],
    guide: {
      name: "John Mwangi",
      experience: "12 years",
      languages: ["English", "Swahili", "Maasai"],
      specialties: ["Wildlife Photography", "Bird Watching", "Local Culture"],
      bio: "John is a certified safari guide and professional photographer with over a decade of experience in the Serengeti. He knows the best spots for wildlife photography and loves sharing his knowledge.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      rating: 4.8,
    },
    type: "Wildlife",
    region: "Africa",
  },
  {
    id: 6,
    title: "Northern Lights & Ice Hotel",
    location: "Lapland, Finland",
    country: "Finland",
    price: 599,
    originalPrice: 699,
    rating: 4.6,
    reviews: 143,
    duration: "2 days",
    groupSize: "Medium group (max 15)",
    difficulty: "Moderate",
    languages: ["English", "Finnish"],
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    ],
    badges: ["Winter", "Unique Stay"],
    description: "Chase the Northern Lights and sleep in a magical ice hotel under the Arctic sky.",
    highlights: [
      "Northern Lights hunting",
      "Ice hotel accommodation",
      "Husky sledding adventure",
      "Snowmobile safari",
      "Traditional Finnish sauna",
      "Arctic photography",
    ],
    itinerary: [
      {
        time: "Day 1 - 2:00 PM",
        title: "Rovaniemi Arrival",
        description: "Transfer from airport to Lapland wilderness lodge",
      },
      {
        time: "Day 1 - 4:00 PM",
        title: "Husky Safari",
        description: "Experience the thrill of dog sledding through snowy forests",
      },
      {
        time: "Day 1 - 8:00 PM",
        title: "Northern Lights Hunt",
        description: "Evening aurora hunting with professional photographer",
      },
      {
        time: "Day 2 - 9:00 AM",
        title: "Snowmobile Adventure",
        description: "Morning snowmobile safari through Arctic wilderness",
      },
      {
        time: "Day 2 - 2:00 PM",
        title: "Ice Hotel Experience",
        description: "Check into the magical ice hotel for overnight stay",
      },
      {
        time: "Day 2 - 8:00 PM",
        title: "Final Aurora Hunt",
        description: "Last chance to witness the Northern Lights",
      },
    ],
    inclusions: [
      "Professional English-speaking guide",
      "Ice hotel accommodation",
      "All winter activities",
      "Arctic gear rental",
      "All meals and drinks",
      "Northern Lights photography",
    ],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Tips"],
    guide: {
      name: "Eeva Virtanen",
      experience: "7 years",
      languages: ["English", "Finnish", "Swedish"],
      specialties: ["Northern Lights", "Winter Activities", "Arctic Photography"],
      bio: "Eeva is a certified Arctic guide with extensive experience in Lapland. She knows the best spots for Northern Lights viewing and loves sharing the magic of the Arctic winter.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      rating: 4.6,
    },
    type: "Adventure",
    region: "Europe",
  },
]

// Unsplash Images for Destinations
export const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    region: "Europe",
    rating: 4.8,
    tours: 24,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=250&fit=crop",
    highlights: ["Sunset Views", "Wine Tasting", "Blue Domes"],
    bestTime: "Apr - Oct",
    description: "Stunning sunsets and iconic blue domes",
    price: 1299,
    originalPrice: 1599,
    duration: "7 days",
    reviews: 324,
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    rating: 4.9,
    tours: 32,
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop",
    highlights: ["Rice Terraces", "Temples", "Beaches"],
    bestTime: "Apr - Sep",
    description: "Tropical paradise with rich culture",
    price: 899,
    originalPrice: null,
    duration: "10 days",
    reviews: 567,
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    region: "Asia",
    rating: 4.7,
    tours: 28,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop",
    highlights: ["Modern City", "Food Culture", "Cherry Blossoms"],
    bestTime: "Mar - May",
    description: "Modern metropolis meets ancient traditions",
    price: 1599,
    originalPrice: null,
    duration: "8 days",
    reviews: 892,
  },
  {
    id: 4,
    name: "Machu Picchu",
    country: "Peru",
    region: "Americas",
    rating: 4.9,
    tours: 18,
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=250&fit=crop",
    highlights: ["Ancient Ruins", "Hiking", "History"],
    bestTime: "May - Sep",
    description: "Ancient wonder of the world",
    price: 1199,
    originalPrice: 1399,
    duration: "6 days",
    reviews: 445,
  },
  {
    id: 5,
    name: "Serengeti",
    country: "Tanzania",
    region: "Africa",
    rating: 4.8,
    tours: 15,
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=250&fit=crop",
    highlights: ["Wildlife Safari", "Migration", "Photography"],
    bestTime: "Jun - Oct",
    description: "Experience the great migration",
    price: 899,
    originalPrice: null,
    duration: "5 days",
    reviews: 234,
  },
  {
    id: 6,
    name: "Sydney",
    country: "Australia",
    region: "Oceania",
    rating: 4.6,
    tours: 22,
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=250&fit=crop",
    highlights: ["Opera House", "Harbor Bridge", "Beaches"],
    bestTime: "Sep - Nov",
    description: "Iconic harbor city down under",
    price: 1499,
    originalPrice: null,
    duration: "9 days",
    reviews: 678,
  },
  {
    id: 7,
    name: "Iceland",
    country: "Iceland",
    region: "Europe",
    rating: 4.8,
    tours: 19,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
    highlights: ["Northern Lights", "Geysers", "Glaciers"],
    bestTime: "Sep - Mar",
    description: "Land of fire and ice",
    price: 1799,
    originalPrice: 1999,
    duration: "8 days",
    reviews: 345,
  },
  {
    id: 8,
    name: "Dubai",
    country: "UAE",
    region: "Asia",
    rating: 4.5,
    tours: 26,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
    highlights: ["Luxury", "Desert Safari", "Modern Architecture"],
    bestTime: "Nov - Mar",
    description: "Ultra-modern desert metropolis",
    price: 1299,
    originalPrice: null,
    duration: "7 days",
    reviews: 456,
  },
]

export const getTourById = (id: number): Tour | undefined => {
  return tours.find(tour => tour.id === id)
}

export const getDestinationById = (id: number): Destination | undefined => {
  return destinations.find(destination => destination.id === id)
}

export const getToursByRegion = (region: string): Tour[] => {
  return tours.filter(tour => tour.region === region)
}

export const getToursByType = (type: string): Tour[] => {
  return tours.filter(tour => tour.type === type)
}

export const getDestinationsByRegion = (region: string): Destination[] => {
  return destinations.filter(destination => destination.region === region)
} 