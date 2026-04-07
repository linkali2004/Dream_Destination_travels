import { Box, Button, Container, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useAtomValue } from "jotai";
import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { ToursByZone } from "../components/ToursByZone";
import { useSiteContent } from "../content/SiteContentContext";
import { usePageSeo } from "../seo";
import { tourPackagesAtom } from "../state/atoms";

export function ToursPage() {
  const { toursPage } = useSiteContent();
  usePageSeo({
    title: "Tour Packages Across India",
    description: "Browse Dream Destinations Travel tour packages by zone and region, with curated itineraries for popular destinations across India.",
    path: "/tours"
  });
  const tours = useAtomValue(tourPackagesAtom);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTours = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return tours;
    }

    return tours.filter((tour) =>
      [tour.name, tour.region, tour.zone, tour.city ?? "", tour.days, tour.description].some((value) => value.toLowerCase().includes(query))
    );
  }, [searchTerm, tours]);

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <SectionTitle title={toursPage.section.title} subtitle={toursPage.section.subtitle} />
      <Stack spacing={3}>
        <TextField
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search tours by city, region, zone, days, or destination"
          fullWidth
          aria-label="Search tours"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            )
          }}
          sx={{
            maxWidth: 760,
            mx: "auto",
            "& .MuiOutlinedInput-root": {
              bgcolor: "rgba(255,255,255,0.82)",
              borderRadius: "18px"
            }
          }}
        />
        <ToursByZone tours={filteredTours} emptyLabel="No tours match your search." />
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
