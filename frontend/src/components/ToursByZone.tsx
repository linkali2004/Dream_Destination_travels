import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { TourPackageCard } from "./TourPackageCard";
import type { TourPackage } from "../types";

type ToursByZoneProps = {
  tours: TourPackage[];
  emptyLabel?: string;
};

const getZoneGroups = (tours: TourPackage[]) =>
  tours.reduce<Array<{ zone: string; items: TourPackage[] }>>((groups, tour) => {
    const zone = tour.zone?.trim() || "Other";
    const existingGroup = groups.find((group) => group.zone === zone);

    if (existingGroup) {
      existingGroup.items.push(tour);
      return groups;
    }

    groups.push({ zone, items: [tour] });
    return groups;
  }, []);

export function ToursByZone({ tours, emptyLabel = "No places available right now." }: ToursByZoneProps) {
  const zoneGroups = getZoneGroups(tours);

  if (!zoneGroups.length) {
    return <Typography color="text.secondary">{emptyLabel}</Typography>;
  }

  return (
    <Stack spacing={5}>
      {zoneGroups.map((group) => (
        <Box key={group.zone}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} sx={{ mb: 2.4 }}>
            <Typography variant="h4">{group.zone}</Typography>
            <Chip label={`${group.items.length} places`} color="primary" variant="outlined" />
          </Stack>
          <Grid container spacing={3}>
            {group.items.map((tour) => (
              <Grid key={tour.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <TourPackageCard tour={tour} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Stack>
  );
}
