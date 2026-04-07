import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { TicketPage } from "../pages/TicketPage";
import { VehiclesPage } from "../pages/VehiclesPage";
import { ContactPage } from "../pages/ContactPage";
import { ToursPage } from "../pages/ToursPage";
import { HotelsPage } from "../pages/HotelsPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ticket" element={<TicketPage />} />
      <Route path="/vehicles" element={<VehiclesPage />} />
      <Route path="/tours" element={<ToursPage />} />
      <Route path="/hotels" element={<HotelsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
