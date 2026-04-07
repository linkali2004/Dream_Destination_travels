import { Box, Button, Card, CardContent, Chip, Container, Grid, MenuItem, Stack, TextField, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { useSiteContent } from "../content/SiteContentContext";
import { hasValue, isPositiveAmount, isPositiveInteger, isValidEmail, isValidPhoneNumber } from "../lib/validation";
import { usePageSeo } from "../seo";
import type { TravelInquiryPayload } from "../types";

const createInitialFormData = (searchParams: URLSearchParams): TravelInquiryPayload => ({
  fullName: "",
  phoneNumber: "",
  email: "",
  startingCity: "",
  destination: searchParams.get("destination") ?? "",
  travelDates: "",
  travelers: "",
  vehiclePreference: searchParams.get("vehiclePreference") ?? "",
  budget: "",
  message: searchParams.get("message") ?? ""
});

type TravelInquiryErrors = Partial<Record<keyof TravelInquiryPayload, string>>;

const validateTravelInquiry = (formData: TravelInquiryPayload) => {
  const errors: TravelInquiryErrors = {};

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

  if (!hasValue(formData.startingCity)) {
    errors.startingCity = "Starting city is required.";
  }

  if (!hasValue(formData.destination)) {
    errors.destination = "Destination is required.";
  }

  if (!hasValue(formData.travelDates)) {
    errors.travelDates = "Travel dates are required.";
  }

  if (!hasValue(formData.travelers)) {
    errors.travelers = "Number of travelers is required.";
  } else if (!isPositiveInteger(formData.travelers)) {
    errors.travelers = "Enter a valid number of travelers.";
  }

  if (!hasValue(formData.vehiclePreference)) {
    errors.vehiclePreference = "Choose a travel type.";
  }

  if (!hasValue(formData.budget)) {
    errors.budget = "Approximate budget is required.";
  } else if (!isPositiveAmount(formData.budget)) {
    errors.budget = "Enter a valid budget amount.";
  }

  if (!hasValue(formData.message)) {
    errors.message = "Trip notes are required.";
  }

  return errors;
};

export function ContactPage() {
  const { contact, floatingActions } = useSiteContent();
  usePageSeo({
    title: "Book Your Travel",
    description: "Share your trip details and book your travel with Dream Destinations Travel for tours, airport transfers, and custom journeys.",
    path: "/contact"
  });
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<TravelInquiryPayload>(() => createInitialFormData(searchParams));
  const [errors, setErrors] = useState<TravelInquiryErrors>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      destination: searchParams.get("destination") ?? current.destination,
      vehiclePreference: searchParams.get("vehiclePreference") ?? current.vehiclePreference,
      message: searchParams.get("message") ?? current.message
    }));
  }, [searchParams]);

  const handleChange =
    (field: keyof TravelInquiryPayload) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const handleSubmit = async () => {
    const validationErrors = validateTravelInquiry(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      const whatsappUrl = new URL(floatingActions.whatsappUrl);
      const whatsappMessage = [
        "I want to do a booking",
        "",
        `Full Name: ${formData.fullName.trim()}`,
        `Phone Number: ${formData.phoneNumber.trim()}`,
        `Email: ${formData.email.trim()}`,
        `Starting City: ${formData.startingCity.trim()}`,
        `Destination / Places to Visit: ${formData.destination.trim()}`,
        `Travel Dates: ${formData.travelDates.trim()}`,
        `Number of Travelers: ${formData.travelers.trim()}`,
        `Preferred Vehicle / Travel Type: ${formData.vehiclePreference.trim()}`,
        `Approximate Budget: ${formData.budget.trim()}`,
        `Trip Notes: ${formData.message.trim()}`
      ].join("\n");

      whatsappUrl.searchParams.set("text", whatsappMessage);
      window.location.href = whatsappUrl.toString();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <SectionTitle title={contact.section.title} subtitle={contact.section.subtitle} />
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ height: "100%", borderRadius: "32px", background: "linear-gradient(180deg, #10203D 0%, #173574 100%)", color: "#fff" }}>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={2.5}>
                <Stack direction="row" spacing={1.4}>
                  <LocalPhoneIcon sx={{ color: "#CFE0FF" }} />
                  <Typography>{contact.details.phone}</Typography>
                </Stack>
                <Stack direction="row" spacing={1.4}>
                  <EmailIcon sx={{ color: "#CFE0FF" }} />
                  <Typography>{contact.details.email}</Typography>
                </Stack>
                <Stack direction="row" spacing={1.4}>
                  <LocationOnIcon sx={{ color: "#CFE0FF" }} />
                  <Typography>{contact.details.address}</Typography>
                </Stack>
              </Stack>
              <Box
                sx={{
                  mt: 4,
                  borderRadius: "28px",
                  minHeight: 260,
                  background: "linear-gradient(140deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  p: 3
                }}
              >
                <Typography variant="h5" mb={1.2}>
                  {contact.supportCard.title}
                </Typography>
                <Typography sx={{ opacity: 0.9, lineHeight: 1.7 }}>{contact.supportCard.description}</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2.2 }}>
                  {contact.supportCard.points.map((point) => (
                    <Chip
                      key={point}
                      label={point}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.12)",
                        color: "#F7FAFF",
                        border: "1px solid rgba(255,255,255,0.08)"
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Card sx={{ borderRadius: "32px" }}>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={2.2}>
                <TextField label={contact.form.fields.fullName} fullWidth required value={formData.fullName} onChange={handleChange("fullName")} error={Boolean(errors.fullName)} helperText={errors.fullName} />
                <TextField label={contact.form.fields.phoneNumber} fullWidth required value={formData.phoneNumber} onChange={handleChange("phoneNumber")} error={Boolean(errors.phoneNumber)} helperText={errors.phoneNumber} />
                <TextField label={contact.form.fields.email} fullWidth required type="email" value={formData.email} onChange={handleChange("email")} error={Boolean(errors.email)} helperText={errors.email} />
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label={contact.form.fields.startingCity} fullWidth required value={formData.startingCity} onChange={handleChange("startingCity")} error={Boolean(errors.startingCity)} helperText={errors.startingCity} />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label={contact.form.fields.destination} fullWidth required value={formData.destination} onChange={handleChange("destination")} error={Boolean(errors.destination)} helperText={errors.destination} />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label={contact.form.fields.travelDates} fullWidth required value={formData.travelDates} onChange={handleChange("travelDates")} error={Boolean(errors.travelDates)} helperText={errors.travelDates} />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label={contact.form.fields.travelers} fullWidth required value={formData.travelers} onChange={handleChange("travelers")} error={Boolean(errors.travelers)} helperText={errors.travelers} inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      select
                      label={contact.form.fields.vehiclePreference}
                      fullWidth
                      required
                      value={formData.vehiclePreference}
                      onChange={handleChange("vehiclePreference")}
                      error={Boolean(errors.vehiclePreference)}
                      helperText={errors.vehiclePreference}
                    >
                      <MenuItem value="Sedan">Sedan</MenuItem>
                      <MenuItem value="SUV / MUV">SUV / MUV</MenuItem>
                      <MenuItem value="Tempo Traveller">Tempo Traveller</MenuItem>
                      <MenuItem value="Luxury">Luxury</MenuItem>
                      <MenuItem value="Need suggestion">Need suggestion</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label={contact.form.fields.budget} fullWidth required value={formData.budget} onChange={handleChange("budget")} error={Boolean(errors.budget)} helperText={errors.budget} inputProps={{ inputMode: "decimal" }} />
                  </Grid>
                </Grid>
                <TextField
                  label={contact.form.fields.message}
                  fullWidth
                  required
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange("message")}
                  error={Boolean(errors.message)}
                  helperText={errors.message}
                />
                <Button variant="contained" sx={{ py: 1.35, mt: 1 }} onClick={handleSubmit} disabled={submitting}>
                  {contact.form.submitLabel}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
