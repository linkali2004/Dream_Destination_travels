import { Box, Button, Card, Chip, Stack, Typography } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import type { Vehicle } from "../types";

type VehicleCardProps = {
  vehicle: Vehicle;
  onBook: (vehicle: Vehicle) => void;
};

export function VehicleCard({ vehicle, onBook }: VehicleCardProps) {
  return (
    <Card
      sx={{
        p: 0,
        borderRadius: "32px",
        overflow: "hidden",
        background: "linear-gradient(180deg, #0C1730 0%, #15284F 100%)",
        color: "#F7FAFF",
        boxShadow: "0 30px 60px rgba(12, 23, 48, 0.18)"
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden", mb: 0 }}>
        <Box component="img" src={vehicle.image} alt={vehicle.name} sx={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover" }} />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7, 20, 46, 0.06) 10%, rgba(7, 20, 46, 0.9) 100%)" }} />
        <Chip
          label={`${vehicle.discount}% OFF`}
          sx={{ position: "absolute", top: 14, left: 14, fontWeight: 700, bgcolor: "rgba(255,255,255,0.14)", color: "#fff", backdropFilter: "blur(12px)" }}
        />
        <Chip
          label={`Rs. ${vehicle.currentPrice}/Km`}
          sx={{ position: "absolute", top: 14, right: 14, fontWeight: 700, bgcolor: "rgba(255,255,255,0.14)", color: "#fff", backdropFilter: "blur(12px)" }}
        />
        <Box sx={{ position: "absolute", left: 18, right: 18, bottom: 18 }}>
          <Typography sx={{ color: "rgba(227, 238, 255, 0.76)", fontSize: "0.74rem", letterSpacing: 2.1, textTransform: "uppercase", mb: 0.6, fontWeight: 700 }}>
            Fleet Selection
          </Typography>
          <Typography variant="h4" sx={{ color: "#FFFFFF", lineHeight: 1.05 }}>
            {vehicle.name}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
          <Chip size="small" label={vehicle.category} sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "#E3EBFF", border: "1px solid rgba(255,255,255,0.1)" }} />
          <Typography color="#F8C768" fontWeight={700} fontSize="1.1rem">
            Save Rs. {vehicle.previousPrice - vehicle.currentPrice}
          </Typography>
        </Stack>

        <Stack direction="row" gap={2} flexWrap="wrap" sx={{ color: "rgba(227, 238, 255, 0.82)", mb: 1.8 }}>
          <Stack direction="row" spacing={0.6} alignItems="center">
            <PeopleOutlineIcon fontSize="small" />
            <Typography>{vehicle.seats} Seats</Typography>
          </Stack>
          <Stack direction="row" spacing={0.6} alignItems="center">
            <ScaleOutlinedIcon fontSize="small" />
            <Typography>{vehicle.fuel}</Typography>
          </Stack>
          <Stack direction="row" spacing={0.6} alignItems="center">
            <LuggageOutlinedIcon fontSize="small" />
            <Typography>{vehicle.luggage} Luggage</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Chip label={`${vehicle.runningKm} Km Running`} sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "#E3EBFF", border: "1px solid rgba(255,255,255,0.1)" }} />
          <Typography sx={{ color: "#E3ECFF", fontWeight: 700, fontSize: "1.1rem" }}>Rs. {vehicle.currentPrice}/Km</Typography>
        </Stack>

        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 1.2,
            background: "linear-gradient(135deg, #E3ECFF 0%, #FFFFFF 100%)",
            color: "#122956",
            boxShadow: "0 12px 24px rgba(5, 10, 22, 0.18)"
          }}
          onClick={() => onBook(vehicle)}
        >
          Book Now
        </Button>
      </Box>
    </Card>
  );
}
