import { http } from "./http";
import type { TourPackage, TravelInquiryPayload, Vehicle, VehicleCatalog, VehicleCatalogItem, VehicleCategoryKey } from "../types";

const vehicleCategoryKeys: VehicleCategoryKey[] = ["sedan", "muv_suv", "tempo_traveler", "van", "luxury"];

const createEmptyVehicleCatalog = (): VehicleCatalog => ({
  sedan: [],
  muv_suv: [],
  tempo_traveler: [],
  van: [],
  luxury: []
});

export const fetchVehicles = async () => {
  const response = await http.get<Vehicle[]>("/vehicles");
  return response.data;
};

export const fetchVehicleCatalog = async () => {
  const response = await http.get<VehicleCatalogItem[]>("/vehicles");

  return response.data.reduce<VehicleCatalog>((catalog, vehicle) => {
    const category = vehicle.category as VehicleCategoryKey;

    if (!vehicleCategoryKeys.includes(category)) {
      return catalog;
    }

    const vehicleItem: VehicleCatalogItem = {
      id: vehicle.id,
      name: vehicle.name,
      image_url: vehicle.image_url,
      category
    };

    catalog[category].push(vehicleItem);
    return catalog;
  }, createEmptyVehicleCatalog());
};

export const fetchTours = async () => {
  const response = await http.get<TourPackage[]>("/tours");
  return response.data;
};

export const submitInquiry = async (payload: TravelInquiryPayload) => {
  const response = await http.post<{ message: string }>("/inquiries", payload);
  return response.data;
};

export const submitBooking = async (payload: { vehicleName: string; price?: string }) => {
  const response = await http.post<{ message: string }>("/bookings", payload);
  return response.data;
};
