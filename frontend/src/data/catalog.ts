import toursJson from "./tours.json";
import vehiclesJson from "./vehicles.json";
import type { Hotel, TourPackage, VehicleCatalog, VehicleCatalogItem, VehicleCategoryKey } from "../types";

export const vehicleCategoryOrder: Array<{ key: VehicleCategoryKey; label: string }> = [
  { key: "sedan", label: "Sedan" },
  { key: "muv_suv", label: "MUV / SUV" },
  { key: "tempo_traveler", label: "Tempo Traveler" },
  { key: "van", label: "Van" },
  { key: "luxury", label: "Luxury" }
];

const vehicleCategoryKeys = vehicleCategoryOrder.map(({ key }) => key);

const createEmptyVehicleCatalog = (): VehicleCatalog => ({
  sedan: [],
  muv_suv: [],
  tempo_traveler: [],
  van: [],
  luxury: []
});

const isVehicleCategory = (category: string): category is VehicleCategoryKey => vehicleCategoryKeys.includes(category as VehicleCategoryKey);

export const vehicleCatalog = (vehiclesJson as VehicleCatalogItem[]).reduce<VehicleCatalog>((catalog, vehicle) => {
  const category = vehicle.category;

  if (!category || !isVehicleCategory(category)) {
    return catalog;
  }

  catalog[category].push({
    id: vehicle.id,
    name: vehicle.name,
    image_url: vehicle.image_url,
    category,
    created_at: vehicle.created_at
  });

  return catalog;
}, createEmptyVehicleCatalog());

export const tourPackages = (toursJson as TourPackage[]).map((tour) => ({
  ...tour,
  days: String(tour.days)
}));

export const hotels: Hotel[] = [
  {
    id: "hotel-varanasi-1",
    name: "Ganga View Heritage Stay",
    city: "Varanasi",
    location: "Mahmoorganj, Varanasi",
    pricePerNight: "Rs. 3,200",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Comfortable rooms with easy access to city routes, temples, and local sightseeing pickups.",
    amenities: ["Breakfast", "Parking", "Wi-Fi", "Travel Desk"]
  },
  {
    id: "hotel-delhi-1",
    name: "Capital Transit Hotel",
    city: "Delhi",
    location: "Aerocity, New Delhi",
    pricePerNight: "Rs. 4,800",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Convenient airport-side hotel for layovers, business trips, and Delhi city tours.",
    amenities: ["Airport Access", "Restaurant", "Wi-Fi", "Cab Support"]
  },
  {
    id: "hotel-jaipur-1",
    name: "Pink City Boutique Inn",
    city: "Jaipur",
    location: "C-Scheme, Jaipur",
    pricePerNight: "Rs. 3,900",
    images: [
      "https://images.unsplash.com/photo-1602002418679-43121356bf41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Relaxed city stay close to markets, palace routes, and family sightseeing circuits.",
    amenities: ["Breakfast", "Family Rooms", "Wi-Fi", "Local Tours"]
  },
  {
    id: "hotel-goa-1",
    name: "Coastal Palm Resort",
    city: "Goa",
    location: "Candolim, North Goa",
    pricePerNight: "Rs. 5,600",
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Beach-side stay for coastal holidays with smooth pickup support for sightseeing plans.",
    amenities: ["Pool", "Beach Access", "Breakfast", "Transfers"]
  },
  {
    id: "hotel-agra-1",
    name: "Taj Route Comfort Hotel",
    city: "Agra",
    location: "Fatehabad Road, Agra",
    pricePerNight: "Rs. 3,400",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Practical hotel option for Taj Mahal visits, overnight halts, and short heritage trips.",
    amenities: ["Restaurant", "Wi-Fi", "Parking", "Sightseeing Cab"]
  },
  {
    id: "hotel-udaipur-1",
    name: "Lake City Retreat",
    city: "Udaipur",
    location: "Near Lake Pichola, Udaipur",
    pricePerNight: "Rs. 6,200",
    images: [
      "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Premium city stay for palace visits, lake-side routes, and relaxed family holidays.",
    amenities: ["Lake Area", "Breakfast", "Wi-Fi", "Tour Planning"]
  }
];
