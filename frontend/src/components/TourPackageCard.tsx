import { Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { TourPackage } from "../types";

type TourPackageCardProps = {
  tour: TourPackage;
};

export function TourPackageCard({ tour }: TourPackageCardProps) {
  const bookingParams = new URLSearchParams({
    destination: `${tour.name}, ${tour.region}, ${tour.zone}`,
    message: `Interested in the ${tour.name} tour for ${tour.days}.`
  });

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "32px",
        height: "100%",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        background: "linear-gradient(180deg, #0C1730 0%, #15284F 100%)",
        boxShadow: "0 30px 60px rgba(12, 23, 48, 0.2)",
        transition: "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "auto -18% 22% auto",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(103, 168, 255, 0.34) 0%, rgba(103, 168, 255, 0) 72%)",
          pointerEvents: "none",
          zIndex: 0
        },
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 36px 70px rgba(12, 23, 48, 0.3)",
          borderColor: "rgba(143, 190, 255, 0.34)"
        }
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box component="img" src={tour.imageurl} alt={tour.name} sx={{ width: "100%", height: 320, objectFit: "cover" }} />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(7, 20, 46, 0.08) 10%, rgba(7, 20, 46, 0.35) 52%, rgba(7, 20, 46, 0.92) 100%)"
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: "auto 0 0 0",
            height: 92,
            background: "linear-gradient(180deg, rgba(12, 23, 48, 0) 0%, rgba(12, 23, 48, 0.9) 100%)"
          }}
        />
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ position: "absolute", left: 18, right: 18, top: 18 }}>
          <Chip
            label={tour.zone}
            size="small"
            sx={{
              bgcolor: "rgba(255,255,255,0.14)",
              color: "#F8FBFF",
              fontWeight: 800,
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.18)"
            }}
          />
          <Chip
            label={tour.region}
            size="small"
            sx={{
              bgcolor: "rgba(10, 20, 40, 0.34)",
              color: "#EAF3FF",
              fontWeight: 700,
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.14)"
            }}
          />
        </Stack>
        <Box sx={{ position: "absolute", left: 18, right: 18, bottom: 18 }}>
          <Typography
            sx={{
              color: "rgba(227, 238, 255, 0.76)",
              fontSize: "0.74rem",
              letterSpacing: 2.1,
              textTransform: "uppercase",
              mb: 0.6,
              fontWeight: 700
            }}
          >
            Curated Destination
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#FFFFFF",
              lineHeight: 1.02,
              fontSize: { xs: "2.2rem", md: "2.55rem" },
              textShadow: "0 12px 28px rgba(0,0,0,0.22)"
            }}
          >
            {tour.name}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ position: "relative", zIndex: 1, p: 3 }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} sx={{ mb: 2.1 }}>
          <Box
            sx={{
              flex: 1,
              px: 1.6,
              py: 1.4,
              borderRadius: "22px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.07) 100%)",
              border: "1px solid rgba(255,255,255,0.08)"
            }}
          >
            <Typography sx={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: 1.8, color: "#8FB3F4", textTransform: "uppercase" }}>Zone</Typography>
            <Typography sx={{ fontWeight: 800, color: "#F7FAFF", mt: 0.6, fontSize: "1.2rem" }}>{tour.zone}</Typography>
          </Box>
          <Box
            sx={{
              minWidth: { xs: "100%", sm: 120 },
              px: 1.6,
              py: 1.4,
              borderRadius: "22px",
              background: "linear-gradient(180deg, rgba(216, 233, 255, 0.16) 0%, rgba(216, 233, 255, 0.08) 100%)",
              border: "1px solid rgba(255,255,255,0.08)"
            }}
          >
            <Typography sx={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: 1.8, color: "#9EB7E6", textTransform: "uppercase" }}>Days</Typography>
            <Typography sx={{ fontWeight: 800, color: "#FFFFFF", mt: 0.6, fontSize: "1.2rem" }}>{tour.days}</Typography>
          </Box>
        </Stack>

        <Typography sx={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: 2, color: "#8FA7D5", textTransform: "uppercase", mb: 0.7 }}>
          Region
        </Typography>
        <Typography sx={{ color: "#F7FAFF", fontWeight: 700, fontSize: "1.08rem", mb: 1.6 }}>{tour.region}</Typography>

        <Typography
          sx={{
            color: "rgba(227, 238, 255, 0.82)",
            lineHeight: 1.75,
            fontSize: "0.98rem",
            minHeight: 110,
            mb: 2.2
          }}
        >
          {tour.description}
        </Typography>

        <Button
          component={RouterLink}
          to={`/contact?${bookingParams.toString()}`}
          variant="contained"
          fullWidth
          sx={{
            py: 1.25,
            background: "linear-gradient(135deg, #E3ECFF 0%, #FFFFFF 100%)",
            color: "#122956",
            boxShadow: "0 12px 24px rgba(5, 10, 22, 0.18)",
            "&:hover": {
              background: "linear-gradient(135deg, #F7FAFF 0%, #DDE8FF 100%)"
            }
          }}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}
