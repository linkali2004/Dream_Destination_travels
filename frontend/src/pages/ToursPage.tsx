import { Alert, Box, Button, Container, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link as RouterLink } from "react-router-dom";
import { fetchTours } from "../api/services";
import { LoadingState } from "../components/LoadingState";
import { SectionTitle } from "../components/SectionTitle";
import { ToursByZone } from "../components/ToursByZone";
import { useSiteContent } from "../content/SiteContentContext";
import { usePageSeo } from "../seo";

export function ToursPage() {
  const { toursPage } = useSiteContent();
  usePageSeo({
    title: "Tour Packages Across India",
    description: "Browse Dream Destinations Travel tour packages by zone and region, with curated itineraries for popular destinations across India.",
    path: "/tours"
  });
  const {
    data: tours = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours
  });

  if (isLoading) {
    return <LoadingState label="Loading tours..." />;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <SectionTitle title={toursPage.section.title} subtitle={toursPage.section.subtitle} />
      <Stack spacing={3}>
        {error ? <Alert severity="error">{error instanceof Error ? error.message : "Failed to load tours."}</Alert> : null}
        <ToursByZone tours={tours} />
        <Box
          sx={{
            mt: 2,
            borderRadius: "32px",
            overflow: "hidden",
            p: { xs: 3, md: 4 },
            background: "linear-gradient(135deg, #0C1730 0%, #173574 55%, #2A5EBB 100%)",
            boxShadow: "0 30px 60px rgba(12, 23, 48, 0.18)"
          }}
        >
          <Stack spacing={2} alignItems={{ xs: "flex-start", md: "center" }} textAlign={{ xs: "left", md: "center" }}>
            <Typography variant="h3" sx={{ color: "#FFFFFF", fontSize: { xs: "2rem", md: "2.8rem" } }}>
              {toursPage.customTrip.title}
            </Typography>
            <Typography sx={{ color: "rgba(233, 242, 255, 0.84)", maxWidth: 760, fontSize: "1.04rem", lineHeight: 1.75 }}>
              {toursPage.customTrip.description}
            </Typography>
            <Button component={RouterLink} to="/contact" variant="contained" size="large" sx={{ px: 4.5, py: 1.35 }}>
              {toursPage.customTrip.buttonLabel}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
