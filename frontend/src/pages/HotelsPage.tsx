import { Box, Container, Grid, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useAtomValue } from "jotai";
import { useMemo, useState } from "react";
import { HotelCard } from "../components/HotelCard";
import { SectionTitle } from "../components/SectionTitle";
import { useSiteContent } from "../content/SiteContentContext";
import { usePageSeo } from "../seo";
import { hotelsAtom } from "../state/atoms";

export function HotelsPage() {
  const { hotelsPage } = useSiteContent();
  const hotels = useAtomValue(hotelsAtom);
  const [searchTerm, setSearchTerm] = useState("");

  usePageSeo({
    title: "Hotel Booking",
    description: "Find hotel booking options by city with location, per-night pricing, and available amenities.",
    path: "/hotels"
  });

  const filteredHotels = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return hotels;
    }

    return hotels.filter((hotel) =>
      [hotel.name, hotel.city, hotel.location, hotel.pricePerNight, hotel.description, ...hotel.amenities].some((value) => value.toLowerCase().includes(query))
    );
  }, [hotels, searchTerm]);

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <SectionTitle title={hotelsPage.section.title} subtitle={hotelsPage.section.subtitle} />
      <Stack spacing={3}>
        <TextField
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder={hotelsPage.searchPlaceholder}
          fullWidth
          aria-label="Search hotels"
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

        {filteredHotels.length ? (
          <Grid container spacing={3}>
            {filteredHotels.map((hotel) => (
              <Grid key={hotel.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <HotelCard hotel={hotel} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ py: 4, textAlign: "center" }}>
            <Typography color="text.secondary">No hotels match your search.</Typography>
          </Box>
        )}
      </Stack>
    </Container>
  );
}
