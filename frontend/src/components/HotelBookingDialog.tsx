import { Box, Button, Chip, Dialog, DialogContent, DialogTitle, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { useState, type ChangeEvent } from "react";
import { useSiteContent } from "../content/SiteContentContext";
import { hasValue, isPositiveInteger, isValidDateValue, isValidEmail, isValidPhoneNumber } from "../lib/validation";
import type { Hotel } from "../types";

type HotelBookingDialogProps = {
  hotel: Hotel | null;
  open: boolean;
  onClose: () => void;
};

type HotelBookingForm = {
  fullName: string;
  phoneNumber: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  rooms: string;
  notes: string;
};

type HotelBookingErrors = Partial<Record<keyof HotelBookingForm, string>>;

const initialForm: HotelBookingForm = {
  fullName: "",
  phoneNumber: "",
  email: "",
  checkIn: "",
  checkOut: "",
  guests: "",
  rooms: "",
  notes: ""
};

const validateHotelBooking = (formData: HotelBookingForm) => {
  const errors: HotelBookingErrors = {};

  if (!hasValue(formData.fullName)) {
    errors.fullName = "Full name is required.";
  }

  if (!hasValue(formData.phoneNumber)) {
    errors.phoneNumber = "Phone number is required.";
  } else if (!isValidPhoneNumber(formData.phoneNumber)) {
    errors.phoneNumber = "Enter a valid 10 digit Indian phone number.";
  }

  if (!hasValue(formData.email)) {
    errors.email = "Email address is required.";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!isValidDateValue(formData.checkIn)) {
    errors.checkIn = "Check-in date is required.";
  }

  if (!isValidDateValue(formData.checkOut)) {
    errors.checkOut = "Check-out date is required.";
  } else if (isValidDateValue(formData.checkIn) && formData.checkOut <= formData.checkIn) {
    errors.checkOut = "Check-out must be after check-in.";
  }

  if (!hasValue(formData.guests)) {
    errors.guests = "Number of guests is required.";
  } else if (!isPositiveInteger(formData.guests)) {
    errors.guests = "Enter a valid number of guests.";
  }

  if (!hasValue(formData.rooms)) {
    errors.rooms = "Number of rooms is required.";
  } else if (!isPositiveInteger(formData.rooms)) {
    errors.rooms = "Enter a valid number of rooms.";
  }

  if (!hasValue(formData.notes)) {
    errors.notes = "Special requests are required. Write N/A if none.";
  }

  return errors;
};

export function HotelBookingDialog({ hotel, open, onClose }: HotelBookingDialogProps) {
  const { floatingActions } = useSiteContent();
  const [formData, setFormData] = useState<HotelBookingForm>(initialForm);
  const [errors, setErrors] = useState<HotelBookingErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange =
    (field: keyof HotelBookingForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const handleClose = () => {
    setFormData(initialForm);
    setErrors({});
    onClose();
  };

  const handleSubmit = () => {
    if (!hotel) {
      return;
    }

    const validationErrors = validateHotelBooking(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      const whatsappUrl = new URL(floatingActions.whatsappUrl);
      const whatsappMessage = [
        "I want to do a hotel booking",
        "",
        `Hotel: ${hotel.name}`,
        `City: ${hotel.city}`,
        `Location: ${hotel.location}`,
        `Per Night Price: ${hotel.pricePerNight}`,
        `Amenities: ${hotel.amenities.join(", ")}`,
        "",
        `Full Name: ${formData.fullName.trim()}`,
        `Phone Number: ${formData.phoneNumber.trim()}`,
        `Email: ${formData.email.trim()}`,
        `Check-in Date: ${formData.checkIn.trim()}`,
        `Check-out Date: ${formData.checkOut.trim()}`,
        `Guests: ${formData.guests.trim()}`,
        `Rooms: ${formData.rooms.trim()}`,
        `Notes: ${formData.notes.trim()}`
      ].join("\n");

      whatsappUrl.searchParams.set("text", whatsappMessage);
      window.location.href = whatsappUrl.toString();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "28px",
          overflow: "hidden",
          background: "linear-gradient(180deg, #F8FBFF 0%, #EAF1FC 100%)"
        }
      }}
    >
      <DialogTitle sx={{ p: 0 }}>
        <Box
          sx={{
            position: "relative",
            p: { xs: 2.4, md: 3 },
            color: "#FFFFFF",
            background: "linear-gradient(135deg, #0C1730 0%, #173574 58%, #2A5EBB 100%)"
          }}
        >
          <IconButton
            aria-label="Close hotel booking modal"
            onClick={handleClose}
            sx={{ position: "absolute", top: 14, right: 14, color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.1)" }}
          >
            <CloseRoundedIcon />
          </IconButton>
          <Stack spacing={1.4} sx={{ pr: 5 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <HotelRoundedIcon />
              <Typography variant="h4" sx={{ color: "#FFFFFF", fontSize: { xs: "1.7rem", md: "2.25rem" } }}>
                Hotel Booking
              </Typography>
            </Stack>
            <Typography sx={{ color: "rgba(233,242,255,0.82)", lineHeight: 1.7 }}>
              Share your stay details and we will confirm availability, pricing, and pickup support on WhatsApp.
            </Typography>
          </Stack>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: { xs: 2.2, md: 3 } }}>
        {hotel ? (
          <Grid container spacing={2.4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  height: "100%",
                  borderRadius: "24px",
                  overflow: "hidden",
                  bgcolor: "#0C1730",
                  color: "#F7FAFF"
                }}
              >
                <Box component="img" src={hotel.images[0]} alt={hotel.name} sx={{ width: "100%", height: 220, objectFit: "cover" }} />
                <Stack spacing={1.6} sx={{ p: 2.4 }}>
                  <Chip label={`${hotel.pricePerNight} / night`} sx={{ alignSelf: "flex-start", bgcolor: "rgba(255,255,255,0.14)", color: "#FFFFFF" }} />
                  <Box>
                    <Typography variant="h5" sx={{ color: "#FFFFFF", lineHeight: 1.15 }}>
                      {hotel.name}
                    </Typography>
                    <Stack direction="row" spacing={0.8} alignItems="center" sx={{ mt: 1 }}>
                      <LocationOnRoundedIcon sx={{ color: "#9EB7E6", fontSize: 20 }} />
                      <Typography sx={{ color: "rgba(227,238,255,0.84)" }}>{hotel.location}</Typography>
                    </Stack>
                  </Box>
                  <Typography sx={{ color: "rgba(227,238,255,0.78)", lineHeight: 1.7 }}>{hotel.description}</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {hotel.amenities.map((amenity) => (
                      <Chip key={amenity} label={amenity} size="small" variant="outlined" sx={{ color: "#E7F0FF", borderColor: "rgba(231,240,255,0.26)" }} />
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2}>
                <Grid container spacing={1.8}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Full Name" fullWidth required value={formData.fullName} onChange={handleChange("fullName")} error={Boolean(errors.fullName)} helperText={errors.fullName} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Phone Number" fullWidth required value={formData.phoneNumber} onChange={handleChange("phoneNumber")} error={Boolean(errors.phoneNumber)} helperText={errors.phoneNumber} />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField label="Email Address" fullWidth required type="email" value={formData.email} onChange={handleChange("email")} error={Boolean(errors.email)} helperText={errors.email} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Check-in Date"
                      type="date"
                      fullWidth
                      required
                      value={formData.checkIn}
                      onChange={handleChange("checkIn")}
                      InputLabelProps={{ shrink: true }}
                      error={Boolean(errors.checkIn)}
                      helperText={errors.checkIn}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Check-out Date"
                      type="date"
                      fullWidth
                      required
                      value={formData.checkOut}
                      onChange={handleChange("checkOut")}
                      InputLabelProps={{ shrink: true }}
                      error={Boolean(errors.checkOut)}
                      helperText={errors.checkOut}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Guests" fullWidth required value={formData.guests} onChange={handleChange("guests")} error={Boolean(errors.guests)} helperText={errors.guests} inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Rooms" fullWidth required value={formData.rooms} onChange={handleChange("rooms")} error={Boolean(errors.rooms)} helperText={errors.rooms} inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField label="Special Requests" fullWidth required multiline rows={4} value={formData.notes} onChange={handleChange("notes")} error={Boolean(errors.notes)} helperText={errors.notes} />
                  </Grid>
                </Grid>

                <Button variant="contained" size="large" onClick={handleSubmit} disabled={submitting} sx={{ py: 1.35 }}>
                  Send Hotel Request On WhatsApp
                </Button>
              </Stack>
            </Grid>
          </Grid>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
