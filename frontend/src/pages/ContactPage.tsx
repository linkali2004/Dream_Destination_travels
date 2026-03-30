import { Box, Button, Card, CardContent, Chip, Container, Grid, MenuItem, Stack, TextField, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { useState, type ChangeEvent } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { useSiteContent } from "../content/SiteContentContext";
import type { TravelInquiryPayload } from "../types";

export function ContactPage() {
  const { contact, floatingActions } = useSiteContent();
  const [formData, setFormData] = useState<TravelInquiryPayload>({
    fullName: "",
    phoneNumber: "",
    email: "",
    startingCity: "",
    destination: "",
    travelDates: "",
    travelers: "",
    vehiclePreference: "",
    budget: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange =
    (field: keyof TravelInquiryPayload) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      const whatsappUrl = new URL(floatingActions.whatsappUrl);
      const whatsappMessage = [
        "I want to do a booking",
        "",
        `Full Name: ${formData.fullName}`,
        `Phone Number: ${formData.phoneNumber}`,
        `Email: ${formData.email}`,
        `Starting City: ${formData.startingCity}`,
        `Destination / Places to Visit: ${formData.destination}`,
        `Travel Dates: ${formData.travelDates}`,
        `Number of Travelers: ${formData.travelers}`,
        `Preferred Vehicle / Travel Type: ${formData.vehiclePreference}`,
        `Approximate Budget: ${formData.budget}`,
        `Trip Notes: ${formData.message || "N/A"}`
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
                <TextField label={contact.form.fields.fullName} fullWidth value={formData.fullName} onChange={handleChange("fullName")} />
                <TextField label={contact.form.fields.phoneNumber} fullWidth value={formData.phoneNumber} onChange={handleChange("phoneNumber")} />
                <TextField label={contact.form.fields.email} fullWidth value={formData.email} onChange={handleChange("email")} />
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label={contact.form.fields.startingCity} fullWidth value={formData.startingCity} onChange={handleChange("startingCity")} />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label={contact.form.fields.destination} fullWidth value={formData.destination} onChange={handleChange("destination")} />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label={contact.form.fields.travelDates} fullWidth value={formData.travelDates} onChange={handleChange("travelDates")} />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label={contact.form.fields.travelers} fullWidth value={formData.travelers} onChange={handleChange("travelers")} />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      select
                      label={contact.form.fields.vehiclePreference}
                      fullWidth
                      value={formData.vehiclePreference}
                      onChange={handleChange("vehiclePreference")}
                    >
                      <MenuItem value="Sedan">Sedan</MenuItem>
                      <MenuItem value="SUV / MUV">SUV / MUV</MenuItem>
                      <MenuItem value="Tempo Traveller">Tempo Traveller</MenuItem>
                      <MenuItem value="Luxury">Luxury</MenuItem>
                      <MenuItem value="Need suggestion">Need suggestion</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label={contact.form.fields.budget} fullWidth value={formData.budget} onChange={handleChange("budget")} />
                  </Grid>
                </Grid>
                <TextField
                  label={contact.form.fields.message}
                  fullWidth
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange("message")}
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
