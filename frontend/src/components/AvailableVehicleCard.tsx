import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import type { VehicleCatalogItem } from "../types";

type AvailableVehicleCardProps = {
  vehicle: VehicleCatalogItem;
  categoryLabel: string;
  description: string;
  highlightsHeading: string;
  highlights: string[];
  requestLabel: string;
  ctaLabel: string;
  onBook: (vehicle: VehicleCatalogItem) => void;
};

export function AvailableVehicleCard({
  vehicle,
  categoryLabel,
  description,
  highlightsHeading,
  highlights,
  requestLabel,
  ctaLabel,
  onBook
}: AvailableVehicleCardProps) {
  return (
    <Card
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "32px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "linear-gradient(180deg, #0C1730 0%, #15284F 100%)",
        boxShadow: "0 30px 60px rgba(12, 23, 48, 0.18)",
        transition: "transform 220ms ease, box-shadow 220ms ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 36px 70px rgba(12, 23, 48, 0.26)"
        }
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={vehicle.image_url}
          alt={vehicle.name}
          sx={{
            width: "100%",
            height: 240,
            objectFit: "cover"
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(7, 20, 46, 0.08) 10%, rgba(7, 20, 46, 0.32) 48%, rgba(7, 20, 46, 0.92) 100%)"
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 14,
            top: 14,
            bgcolor: "rgba(255,255,255,0.14)",
            color: "#F7FAFF",
            px: 1.2,
            py: 0.55,
            borderRadius: 999,
            fontWeight: 800,
            fontSize: "0.95rem",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.16)"
          }}
        >
          {categoryLabel}
        </Box>
        <Box sx={{ position: "absolute", left: 20, right: 20, bottom: 20 }}>
          <Typography sx={{ color: "rgba(227, 238, 255, 0.76)", fontSize: "0.72rem", letterSpacing: 2, textTransform: "uppercase", mb: 0.55, fontWeight: 700 }}>
            Premium Vehicle
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#FFFFFF",
              lineHeight: 1.02,
              fontSize: { xs: "1.9rem", md: "2.1rem" },
              maxWidth: "90%",
              textWrap: "balance"
            }}
          >
            {vehicle.name}
          </Typography>
        </Box>
      </Box>

      <CardContent
        sx={{
          p: 3,
          color: "#F3F7FF",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1
        }}
      >
        <Typography
          sx={{
            color: "rgba(227, 238, 255, 0.8)",
            mb: 2,
            fontSize: "1rem",
            lineHeight: 1.75,
            minHeight: 84
          }}
        >
          {description}
        </Typography>

        <Typography sx={{ fontWeight: 800, color: "#8FA7D5", letterSpacing: 1.8, textTransform: "uppercase", fontSize: "0.74rem", mb: 1.15 }}>{highlightsHeading}</Typography>
        <Stack spacing={0.8} sx={{ mb: 3, flexGrow: 1 }}>
          {highlights.map((item) => (
            <Stack key={item} direction="row" spacing={0.8} alignItems="center">
              <CheckRoundedIcon sx={{ color: "#8FB3F4", fontSize: 19 }} />
              <Typography sx={{ color: "rgba(227, 238, 255, 0.82)", fontSize: "1.02rem" }}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1.5} sx={{ pt: 0.5 }}>
          <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#AFC5EE", pl: 0.4 }}>
            {requestLabel}
          </Typography>
          <Button
            variant="contained"
            onClick={() => onBook(vehicle)}
            sx={{
              minWidth: 154,
              px: 3,
              py: 1.15,
              fontSize: "1.05rem",
              background: "linear-gradient(135deg, #E3ECFF 0%, #FFFFFF 100%)",
              color: "#122956",
              boxShadow: "0 12px 24px rgba(5, 10, 22, 0.18)"
            }}
          >
            {ctaLabel}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
