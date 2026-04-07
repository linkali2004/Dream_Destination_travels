import { Alert, Box, Chip, Container, Snackbar, Stack, Typography } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import { vehicleCategoryOrder } from "../data/catalog";
import { AvailableVehicleCard } from "../components/AvailableVehicleCard";
import { SectionTitle } from "../components/SectionTitle";
import { useSiteContent } from "../content/SiteContentContext";
import { usePageSeo } from "../seo";
import { bookingToastAtom, selectedVehicleAtom, vehicleCatalogAtom } from "../state/atoms";
import type { VehicleCatalogItem } from "../types";

export function VehiclesPage() {
  const { vehiclesPage } = useSiteContent();
  usePageSeo({
    title: "Vehicle Booking And Fleet Options",
    description: "Explore available sedans, SUVs, tempo travellers, vans, and luxury vehicles for local, airport, and outstation travel.",
    path: "/vehicles"
  });
  const navigate = useNavigate();
  const [selectedVehicle, setSelectedVehicle] = useAtom(selectedVehicleAtom);
  const [toastOpen, setToastOpen] = useAtom(bookingToastAtom);
  const vehiclesByCategory = useAtomValue(vehicleCatalogAtom);

  const handleBook = (vehicle: VehicleCatalogItem) => {
    setSelectedVehicle(vehicle);
    setToastOpen(true);
    const bookingParams = new URLSearchParams({
      destination: vehicle.name,
      vehiclePreference: vehicle.name,
      message: `Interested in booking the ${vehicle.name}.`
    });
    navigate(`/contact?${bookingParams.toString()}`);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <SectionTitle title={vehiclesPage.section.title} subtitle={vehiclesPage.section.subtitle} />
      <Stack spacing={5}>
        {vehicleCategoryOrder.map(({ key, label }) => {
          const vehicles = vehiclesByCategory[key];

          if (!vehicles.length) {
            return null;
          }

          return (
            <Box key={key}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} sx={{ mb: 2.4 }}>
                <Typography variant="h4">{label}</Typography>
                <Chip label={`${vehicles.length} available`} color="primary" variant="outlined" />
              </Stack>
              <Box
                sx={{
                  display: "grid",
                  gap: 3,
                  gridTemplateColumns: {
                    xs: "minmax(0, 1fr)",
                    sm: "repeat(2, minmax(0, 1fr))",
                    lg: "repeat(3, minmax(0, 1fr))"
                  },
                  alignItems: "stretch"
                }}
              >
                {vehicles.map((vehicle) => (
                  <Box key={vehicle.name} sx={{ minWidth: 0 }}>
                    <AvailableVehicleCard
                      vehicle={vehicle}
                      categoryLabel={label}
                      description={vehiclesPage.card.description}
                      highlightsHeading={vehiclesPage.card.highlightsHeading}
                      highlights={vehiclesPage.card.highlights}
                      requestLabel={vehiclesPage.card.requestLabel}
                      ctaLabel={vehiclesPage.card.ctaLabel}
                      onBook={handleBook}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          );
        })}
      </Stack>

      <Snackbar open={toastOpen} autoHideDuration={3500} onClose={() => setToastOpen(false)}>
        <Alert severity="success" variant="filled" onClose={() => setToastOpen(false)} sx={{ width: "100%" }}>
          {selectedVehicle ? vehiclesPage.card.bookingSuccessTemplate.replace("{vehicleName}", selectedVehicle.name) : "Vehicle selected."}
        </Alert>
      </Snackbar>
    </Container>
  );
}
