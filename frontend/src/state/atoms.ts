import { atom } from "jotai";
import type { VehicleCatalogItem } from "../types";

export const activePathAtom = atom("/");
export const selectedVehicleAtom = atom<VehicleCatalogItem | null>(null);
export const bookingToastAtom = atom(false);
