import type { SiteContent } from "../types";

export const siteContent: SiteContent = {
  navigation: [
    { label: "Home", path: "/" },
    { label: "Ticket", path: "/ticket" },
    { label: "Vehicles", path: "/vehicles" },
    { label: "Tours", path: "/tours" },
    { label: "Book Your Travel", path: "/contact" }
  ],
  brand: {
    name: "Handala Travels",
    tagline: "Trusted Tours and Transfers",
    logoAlt: "Handala Travels"
  },
  floatingActions: {
    whatsappLabel: "whatsapp",
    whatsappUrl: "https://wa.me/919389844884?text=I%20want%20to%20do%20a%20booking",
    callLabel: "call",
    callUrl: "tel:+919389844884"
  },
  footer: {
    description: "Premium intercity travel, airport transfers, and curated tour packages with professional drivers and transparent pricing.",
    gstin: "09ABCDE1234F1Z5",
    services: [
      "Airport Pickup and Drop",
      "Outstation Round Trips",
      "Wedding and Event Transport",
      "Corporate Fleet Bookings",
      "Customized Tour Packages"
    ],
    contactLines: [
      "+91 98765 43210",
      "bookings@handalatravels.in",
      "Godowlia, Varanasi, Uttar Pradesh",
      "Mon - Sun: 24x7 Support"
    ],
    whyChooseUs: ["Verified Drivers", "Clean Vehicles", "On-Time Pickup", "No Hidden Charges", "Live Trip Assistance"],
    policyLinks: ["Privacy Policy", "Terms and Conditions", "Refund Policy"]
  },
  home: {
    heroCtaLabel: "Explore Now",
    heroSlides: [
      {
        id: 1,
        title: "Premium Rides For Every Journey",
        subtitle: "Book verified drivers, clean vehicles, and reliable travel for airport transfers, local rides, and outstation trips.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: 2,
        title: "Explore India with Comfortable, Trusted Travel",
        subtitle: "From city transfers to long-distance journeys, travel across India with dependable vehicles and transparent fares.",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80"
      },
      {
        id: 3,
        title: "Book For Family Trips, Events, And Tours",
        subtitle: "Choose the right vehicle for your group and travel with consistent support from pickup to drop.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    aboutTitle: "Plan Your Trip with Us",
    aboutDescription:
      "Discover with ease and excitement! Our expert team crafts personalized travel experiences, from breathtaking cultural tours to relaxing beach getaways, ensuring every journey is unforgettable.",
    trustPoints: ["100% Trusted Tour Agency", "5+ Years of Experience", "100% Travelers are Happy"],
    popularDestinationsSection: {
      title: "Popular Destinations",
      subtitle: "Handpicked city rides and tour routes for smooth travel."
    },
    popularCities: [
      {
        name: "Jaipur",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
        text: "Explore forts, palaces, and colorful bazaars in the Pink City.",
        badge: "Featured City"
      },
      {
        name: "Delhi",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
        text: "From Old Delhi streets to modern hubs, discover every side of the capital.",
        badge: "Featured City"
      },
      {
        name: "Mumbai",
        image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1200&q=80",
        text: "Plan coastal drives, city tours, and business transfers in Mumbai.",
        badge: "Featured City"
      },
      {
        name: "Varanasi",
        image: "https://www.wildernesstravel.com/wp-content/uploads/2024/11/evening-aarti-varanasi-1040x784.webp",
        text: "Experience ghats, evening aarti, and sacred city heritage trails.",
        badge: "Featured City"
      },
      {
        name: "Agra",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        text: "Visit the Taj Mahal and Mughal landmarks with comfortable day tours.",
        badge: "Featured City"
      },
      {
        name: "Udaipur",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
        text: "Explore lakeside palaces and royal architecture in Rajasthan.",
        badge: "Featured City"
      },
      {
        name: "Goa",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
        text: "Beach escapes, nightlife, and coastal road trips curated for you.",
        badge: "Featured City"
      },
      {
        name: "Rishikesh",
        image: "https://images.unsplash.com/photo-1580294647332-8a399cd9ed45?auto=format&fit=crop&w=1200&q=80",
        text: "Adventure camps, rafting routes, and spiritual retreats by the Ganga.",
        badge: "Featured City"
      },
      {
        name: "Manali",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
        text: "Mountain drives, snow views, and scenic Himalayan holiday circuits.",
        badge: "Featured City"
      }
    ],
    packagesSection: {
      title: "Explore Our Diverse Tour Packages",
      subtitle: "From spiritual journeys to adventure expeditions, we have the perfect trip for every traveler.",
      viewMoreLabel: "View More Tours"
    },
    featuredTours: [
      {
        id: "home-tour-1",
        name: "Varanasi Spiritual Trail",
        region: "Uttar Pradesh",
        zone: "North India",
        imageurl: "https://www.wildernesstravel.com/wp-content/uploads/2024/11/evening-aarti-varanasi-1040x784.webp",
        days: "2 Days",
        description: "Explore the ghats, evening aarti, Kashi Vishwanath corridor, and old city lanes with curated local guidance."
      },
      {
        id: "home-tour-2",
        name: "Jaipur Royal Escape",
        region: "Rajasthan",
        zone: "North India",
        imageurl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
        days: "3 Days",
        description: "Cover Amber Fort, City Palace, Hawa Mahal, and vibrant bazaars with comfortable intercity movement."
      },
      {
        id: "home-tour-3",
        name: "Agra Heritage Journey",
        region: "Uttar Pradesh",
        zone: "North India",
        imageurl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        days: "2 Days",
        description: "Visit the Taj Mahal and Agra Fort with a practical itinerary designed for families and short escapes."
      },
      {
        id: "home-tour-4",
        name: "Udaipur Lakeside Retreat",
        region: "Rajasthan",
        zone: "North India",
        imageurl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
        days: "3 Days",
        description: "Enjoy palace visits, lake views, and a refined city experience with relaxed pacing and premium transfers."
      },
      {
        id: "home-tour-5",
        name: "Rishikesh Adventure Break",
        region: "Uttarakhand",
        zone: "North India",
        imageurl: "https://images.unsplash.com/photo-1580294647332-8a399cd9ed45?auto=format&fit=crop&w=1200&q=80",
        days: "3 Days",
        description: "Blend riverside calm with rafting routes, camp stays, and scenic drives into the Himalayan foothills."
      },
      {
        id: "home-tour-6",
        name: "Goa Coastal Holiday",
        region: "Goa",
        zone: "West India",
        imageurl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
        days: "4 Days",
        description: "Plan beach circuits, leisure stays, and comfortable local movement for a smooth coastal holiday."
      }
    ],
    fareSection: {
      title: "Local And Outstation taxi Fare"
    },
    fareRows: [
      { type: "Sedan Dzire", airport: "900", roundTrip: "10/Km", oneWay: "15/Km", fullDay: "2400", insideCity: "Rs.200/km", outsideCity: "Rs.250/km" },
      { type: "Sedan Aura", airport: "900", roundTrip: "10/Km", oneWay: "15/Km", fullDay: "2400", insideCity: "Rs.200/km", outsideCity: "Rs.250/km" },
      { type: "Sedan Etios", airport: "900", roundTrip: "10/Km", oneWay: "15/Km", fullDay: "2400", insideCity: "Rs.200/km", outsideCity: "Rs.250/km" },
      { type: "MPV Ertiga", airport: "1200", roundTrip: "12/Km", oneWay: "17/Km", fullDay: "2800", insideCity: "Rs.200/km", outsideCity: "Rs.250/km" },
      { type: "MPV Cavens", airport: "1200", roundTrip: "12/Km", oneWay: "17/Km", fullDay: "2800", insideCity: "Rs.200/km", outsideCity: "Rs.250/km" },
      { type: "Innova", airport: "1400", roundTrip: "14/Km", oneWay: "18/Km", fullDay: "3000", insideCity: "Rs.200/km", outsideCity: "Rs.250/km" },
      { type: "Innova Crysta", airport: "1500", roundTrip: "17/Km", oneWay: "18/Km", fullDay: "3200", insideCity: "Rs.200/km", outsideCity: "Rs.250/km" },
      { type: "17 Seater Tempo Traveler", airport: "2500", roundTrip: "24/Km", oneWay: "30/Km", fullDay: "4500", insideCity: "Rs.200/km", outsideCity: "Rs.250/km" },
      { type: "20 Seater Tempo Traveler", airport: "2700", roundTrip: "26/Km", oneWay: "32/Km", fullDay: "6000", insideCity: "Rs.200/km", outsideCity: "Rs.250/km" },
      { type: "26 Seater Tempo Traveler", airport: "3500", roundTrip: "30/Km", oneWay: "34/Km", fullDay: "7500", insideCity: "Rs.200/km", outsideCity: "Rs.250/km" },
      { type: "Force Urbaniya", airport: "4000", roundTrip: "32/KM", oneWay: "38/Km", fullDay: "8000", insideCity: "Rs.200/km", outsideCity: "Rs.250/km" },
      { type: "BMW", airport: "*", roundTrip: "*", oneWay: "*", fullDay: "*", insideCity: "*", outsideCity: "*" },
      { type: "Mercedes", airport: "*", roundTrip: "*", oneWay: "*", fullDay: "*", insideCity: "*", outsideCity: "*" },
      { type: "Audis", airport: "*", roundTrip: "*", oneWay: "*", fullDay: "*", insideCity: "*", outsideCity: "*" },
      { type: "Fortuner", airport: "*", roundTrip: "*", oneWay: "*", fullDay: "*", insideCity: "*", outsideCity: "*" }
    ],
    pickupSection: {
      title: "Our Vehicles",
      subtitle: "Choose from our most popular categories.",
      badges: ["Airport Pickup", "24x7", "Verified Driver"],
      ctaLabel: "Book Now",
      viewMoreLabel: "Show More Vehicles"
    },
    pickupVehicles: [
      {
        name: "Dzire / Amaze",
        image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Dzire/12186/1771935643542/front-left-side-47.jpg",
        price: "Rs. 900"
      },
      {
        name: "Innova",
        image: "https://imgd.aeplcdn.com/642x336/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-3.png?isig=0&q=80",
        price: "Rs. 1500"
      },
      {
        name: "Innova Crysta",
        image: "https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/innova-crysta-2.jpg",
        price: "Rs. 1700"
      },
      {
        name: "Tempo Traveller",
        image: "https://tempotravellerindia.com/wp-content/uploads/2024/09/20d31595-5dd9-481e-b291-bcc84a95a780-1024x768.jpg",
        price: "Rs. 2700"
      }
    ],
    testimonialsSection: {
      title: "Customer Testimonials",
      subtitle: "What travelers say about their booking and ride experience with Handala Travels."
    },
    testimonials: [
      {
        name: "Ritika Sharma",
        role: "Family Traveler",
        message: "The Jaipur to Delhi trip was smooth, punctual, and genuinely comfortable for my parents.",
        rating: 5
      },
      {
        name: "Aman Verma",
        role: "Corporate Client",
        message: "Professional drivers, clean vehicles, and clear pricing. Exactly what we need for team travel.",
        rating: 5
      },
      {
        name: "Sana Khan",
        role: "Frequent Flyer",
        message: "Airport pickup was right on time, and support was very responsive before the ride.",
        rating: 4.5
      },
      {
        name: "Deepak Tiwari",
        role: "Pilgrimage Group Organizer",
        message: "We booked multiple vehicles for our Varanasi trip and every pickup was coordinated properly without confusion.",
        rating: 5
      },
      {
        name: "Neha Arora",
        role: "Wedding Guest",
        message: "The driver was courteous, the car was spotless, and the whole airport-to-hotel transfer felt premium.",
        rating: 5
      },
      {
        name: "Rohit Singh",
        role: "Weekend Traveler",
        message: "Clear communication, no hidden pricing, and the return trip timing was managed exactly as promised.",
        rating: 4.5
      },
      {
        name: "Priya Nair",
        role: "Family Vacation Planner",
        message: "They helped us choose the right vehicle for luggage and senior citizens, which made the journey much easier.",
        rating: 5
      }
    ]
  },
  contact: {
    section: {
      title: "Book Your Travel",
      subtitle: "Share your trip details and we will design the right route, vehicle, and schedule for you."
    },
    details: {
      phone: "+91 98765 43210",
      email: "bookings@handalatravels.in",
      address: "Godowlia, Varanasi, Uttar Pradesh"
    },
    supportCard: {
      title: "Travel Planning Desk",
      description: "From single-city rides to multi-stop holidays, our team helps you structure the trip before you book.",
      points: [
        "Custom destinations and stopovers",
        "Vehicle matching by group size",
        "Support for airport, hotel, and sightseeing plans"
      ]
    },
    form: {
      submitLabel: "Send Travel Request",
      successMessage: "Your travel request has been sent. The team will contact you shortly.",
      fields: {
        fullName: "Full Name",
        phoneNumber: "Phone Number",
        email: "Email Address",
        startingCity: "Starting City",
        destination: "Destination / Places to Visit",
        travelDates: "Travel Dates",
        travelers: "Number of Travelers",
        vehiclePreference: "Preferred Vehicle / Travel Type",
        budget: "Approximate Budget",
        message: "Trip Notes"
      }
    }
  },
  ticket: {
    section: {
      title: "Local And Outstation Taxi Fare"
    },
    tableHeaders: ["Vehicle Type", "Airport", "Round Trip", "One Way", "Full Day", "Inside City", "Outside City"],
    note: "* means on demand and available only for marriages."
  },
  vehiclesPage: {
    section: {
      title: "Available Vehicles",
      subtitle: "Book premium, clean and verified rides at transparent prices."
    },
    card: {
      description: "Comfortable premium travel package for city, airport, and outstation bookings.",
      highlightsHeading: "HIGHLIGHTS",
      highlights: ["Sanitized interior", "Verified chauffeur", "24x7 support"],
      requestLabel: "On Request",
      ctaLabel: "Book Now",
      bookingSuccessTemplate: "{vehicleName} selected. Our team will contact you shortly."
    }
  },
  toursPage: {
    section: {
      title: "All Tour Packages",
      subtitle: "Browse every package available from the tours table."
    },
    customTrip: {
      title: "Want To Build Your Own Trip?",
      description:
        "Tell us your destination, group size, dates, and travel style. We can plan a custom journey around exactly where you want to go.",
      buttonLabel: "Book Your Travel"
    }
  }
};
