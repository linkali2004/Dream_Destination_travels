import { atom } from "jotai";
import { hotels, tourPackages, vehicleCatalog } from "../data/catalog";
import type { Hotel, TourPackage, VehicleCatalog, VehicleCatalogItem } from "../types";

export const activePathAtom = atom("/");
export const selectedVehicleAtom = atom<VehicleCatalogItem | null>(null);
export const bookingToastAtom = atom(false);
export const vehicleCatalogAtom = atom<VehicleCatalog>(vehicleCatalog);
export const tourPackagesAtom = atom<TourPackage[]>(tourPackages);
export const hotelsAtom = atom<Hotel[]>(hotels);
