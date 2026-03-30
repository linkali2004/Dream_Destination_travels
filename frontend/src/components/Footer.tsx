import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { SITE_BRAND_NAME } from "../branding";
import { useSiteContent } from "../content/SiteContentContext";

export function Footer() {
  const { footer } = useSiteContent();

  return (
    <Box
      sx={{
        mt: 9,
        pt: 6,
        pb: 3.5,
        background: "linear-gradient(135deg, #101B33 0%, #192B52 100%)",
        color: "#DCE6FF"
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={1.4}>
              <Typography variant="h5" sx={{ color: "#FFFFFF" }}>
                {SITE_BRAND_NAME}
              </Typography>
              <Typography sx={{ color: "rgba(220,230,255,0.85)", lineHeight: 1.7 }}>
                {footer.description}
              </Typography>
              <Typography sx={{ color: "rgba(220,230,255,0.72)" }}>GSTIN: {footer.gstin}</Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack spacing={1.2}>
              <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
                Services
              </Typography>
              {footer.services.map((service) => (
                <Typography key={service} color="inherit">
                  {service}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Stack spacing={1.2}>
              <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
                Contact
              </Typography>
              {footer.contactLines.map((line) => (
                <Typography key={line}>{line}</Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 2.5 }}>
            <Stack spacing={1.2}>
              <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
                Why Choose Us
              </Typography>
              {footer.whyChooseUs.map((line) => (
                <Typography key={line}>{line}</Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(220,230,255,0.2)" }} />

        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={1}>
          <Typography sx={{ color: "rgba(220,230,255,0.75)" }}>
            Copyright {new Date().getFullYear()} {SITE_BRAND_NAME}. All rights reserved.
          </Typography>
          <Typography sx={{ color: "rgba(220,230,255,0.75)" }}>{footer.policyLinks.join(" | ")}</Typography>
        </Stack>
      </Container>
    </Box>
  );
}
