import { Alert, Box, Chip, Container, Snackbar, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";
import { fetchVehicleCatalog, submitBooking } from "../api/services";
import { AvailableVehicleCard } from "../components/AvailableVehicleCard";
import { LoadingState } from "../components/LoadingState";
import { SectionTitle } from "../components/SectionTitle";
import { useSiteContent } from "../content/SiteContentContext";
import { bookingToastAtom, selectedVehicleAtom } from "../state/atoms";
import type { VehicleCatalog, VehicleCatalogItem } from "../types";

export function VehiclesPage() {
  const { vehiclesPage } = useSiteContent();
  const [selectedVehicle, setSelectedVehicle] = useAtom(selectedVehicleAtom);
  const [toastOpen, setToastOpen] = useAtom(bookingToastAtom);
  const emptyCatalog: VehicleCatalog = {
    sedan: [],
    muv_suv: [],
    tempo_traveler: [],
    van: [],
    luxury: []
  };
  const {
    data: vehiclesByCategory = emptyCatalog,
    isLoading,
    error
  } = useQuery({
    queryKey: ["vehicleCatalog"],
    queryFn: fetchVehicleCatalog
  });

  const categoryOrder = [
    { key: "sedan", label: "Sedan" },
    { key: "muv_suv", label: "MUV / SUV" },
    { key: "tempo_traveler", label: "Tempo Traveler" },
    { key: "van", label: "Van" },
    { key: "luxury", label: "Luxury" }
  ] as const;

  const handleBook = (vehicle: VehicleCatalogItem) => {
    void submitBooking({ vehicleName: vehicle.name });
    setSelectedVehicle(vehicle);
    setToastOpen(true);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <SectionTitle title={vehiclesPage.section.title} subtitle={vehiclesPage.section.subtitle} />
      {isLoading ? <LoadingState label="Loading vehicles..." /> : null}
      {error ? (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error instanceof Error ? error.message : "Failed to load vehicles."}
        </Alert>
      ) : null}
      <Stack spacing={5}>
        {categoryOrder.map(({ key, label }) => {
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
