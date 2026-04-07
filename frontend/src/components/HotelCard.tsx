import { Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link as RouterLink } from "react-router-dom";
import type { Hotel } from "../types";

type HotelCardProps = {
  hotel: Hotel;
};

export function HotelCard({ hotel }: HotelCardProps) {
  const bookingParams = new URLSearchParams({
    destination: `${hotel.name}, ${hotel.city}`,
    message: `Interested in hotel booking at ${hotel.name} in ${hotel.location}.`
  });

  return (
    <Card
      sx={{
        height: "100%",
        overflow: "hidden",
        borderRadius: "32px",
        background: "linear-gradient(180deg, #0C1730 0%, #15284F 100%)",
        color: "#F7FAFF",
        border: "1px solid rgba(255,255,255,0.12)"
      }}
    >
      <Box
        sx={{
          ".carousel-root, .carousel-slider, .slider-wrapper": { height: 300 },
          ".slide": { background: "#0C1730" },
          ".control-dots": { bottom: 12, margin: 0 },
          ".control-dots .dot": { boxShadow: "none", background: "rgba(255,255,255,0.52)" },
          ".control-dots .dot.selected": { background: "#FFFFFF" }
        }}
      >
        <Carousel autoPlay infiniteLoop interval={3600} showThumbs={false} showStatus={false} showArrows={false} stopOnHover>
          {hotel.images.map((image) => (
            <Box key={image} sx={{ height: 300, position: "relative" }}>
              <Box component="img" src={image} alt={hotel.name} sx={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(82%)" }} />
              <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,23,48,0.02) 35%, rgba(12,23,48,0.74) 100%)" }} />
            </Box>
          ))}
        </Carousel>
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip label={hotel.city} size="small" sx={{ bgcolor: "rgba(255,255,255,0.14)", color: "#F7FAFF" }} />
            <Chip label={`${hotel.pricePerNight} / night`} size="small" sx={{ bgcolor: "rgba(216,233,255,0.18)", color: "#FFFFFF" }} />
          </Stack>

          <Box>
            <Typography variant="h4" sx={{ color: "#FFFFFF", fontSize: { xs: "1.8rem", md: "2.1rem" }, lineHeight: 1.1 }}>
              {hotel.name}
            </Typography>
            <Stack direction="row" spacing={0.8} alignItems="center" sx={{ mt: 1 }}>
              <LocationOnRoundedIcon sx={{ color: "#9EB7E6", fontSize: 20 }} />
              <Typography sx={{ color: "rgba(227,238,255,0.84)", fontWeight: 700 }}>{hotel.location}</Typography>
            </Stack>
          </Box>

          <Typography sx={{ color: "rgba(227,238,255,0.82)", lineHeight: 1.7, minHeight: 78 }}>{hotel.description}</Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {hotel.amenities.map((amenity) => (
              <Chip key={amenity} label={amenity} size="small" variant="outlined" sx={{ color: "#E7F0FF", borderColor: "rgba(231,240,255,0.26)" }} />
            ))}
          </Stack>

          <Button
            component={RouterLink}
            to={`/contact?${bookingParams.toString()}`}
            variant="contained"
            fullWidth
            sx={{
              py: 1.2,
              background: "linear-gradient(135deg, #E3ECFF 0%, #FFFFFF 100%)",
              color: "#122956",
              "&:hover": { background: "linear-gradient(135deg, #F7FAFF 0%, #DDE8FF 100%)" }
            }}
          >
            Book Hotel
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
