import { Avatar, Box, Button, Card, CardContent, Chip, Container, Grid, Paper, Rating, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Link as RouterLink } from "react-router-dom";
import { AvailableVehicleCard } from "../components/AvailableVehicleCard";
import { HeroCarousel } from "../components/HeroCarousel";
import { SectionTitle } from "../components/SectionTitle";
import { TourPackageCard } from "../components/TourPackageCard";
import { SITE_BRAND_LOGO, SITE_BRAND_LOGO_ALT, SITE_BRAND_NAME } from "../branding";
import { useSiteContent } from "../content/SiteContentContext";
import type { VehicleCatalogItem } from "../types";

export function HomePage() {
  const { home, ticket, vehiclesPage } = useSiteContent();

  return (
    <Stack spacing={8}>
      <Box sx={{ pt: { xs: 2, md: 3 } }}>
        <HeroCarousel slides={home.heroSlides} ctaLabel={home.heroCtaLabel} />
      </Box>

      <Box sx={{ py: { xs: 1, md: 2 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 4,
                  height: "100%",
                  minHeight: { xs: 260, md: 440 },
                  bgcolor: "#F2F5FB",
                  boxShadow: "0 10px 30px rgba(20, 34, 70, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 4
                }}
              >
                <Box
                  component="img"
                  src={SITE_BRAND_LOGO}
                  alt={SITE_BRAND_LOGO_ALT}
                  sx={{ width: { xs: 160, md: 240 }, height: { xs: 160, md: 240 }, objectFit: "cover", borderRadius: "50%" }}
                />
                <Typography variant="h4" mt={2.2} textAlign="center">
                  {SITE_BRAND_NAME}
                </Typography>
                <Typography color="text.secondary" textAlign="center">
                  Plan your trip with us
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography variant="h3" sx={{ fontSize: { xs: "2.1rem", md: "3.4rem" }, mb: 1.5 }}>
                  {home.aboutTitle}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: { xs: "1.1rem", md: "1.2rem" }, lineHeight: 1.5, mb: 2.2 }}>
                  {home.aboutDescription}
                </Typography>
                <Stack spacing={1.3}>
                  {home.trustPoints.map((item) => (
                    <Stack key={item} direction="row" spacing={1.1} alignItems="center">
                      <CheckRoundedIcon color="primary" />
                      <Typography sx={{ fontSize: { xs: "1.1rem", md: "1.45rem" }, lineHeight: 1.2 }}>{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: "#F8FBFF", borderTop: "1px solid #E3EBF8", borderBottom: "1px solid #E3EBF8" }}>
        <Container maxWidth="xl">
          <SectionTitle title={home.popularDestinationsSection.title} subtitle={home.popularDestinationsSection.subtitle} />
          <Grid container spacing={3}>
            {home.popularCities.map((city) => (
              <Grid key={city.name} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card
                  sx={{
                    borderRadius: "32px",
                    overflow: "hidden",
                    position: "relative",
                    minHeight: 340,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "linear-gradient(180deg, #0C1730 0%, #15284F 100%)",
                    boxShadow: "0 24px 46px rgba(12, 23, 48, 0.18)",
                    transition: "transform 220ms ease, box-shadow 220ms ease",
                    "&:hover": { transform: "translateY(-6px)", boxShadow: "0 32px 58px rgba(12, 23, 48, 0.24)" }
                  }}
                >
                  <Box component="img" src={city.image} alt={city.name} sx={{ width: "100%", height: 340, objectFit: "cover" }} />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(11,26,52,0.06) 35%, rgba(11,26,52,0.88) 100%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 2.2
                    }}
                  >
                    <Chip
                      label={city.badge}
                      size="small"
                      sx={{
                        alignSelf: "flex-start",
                        bgcolor: "rgba(255,255,255,0.14)",
                        color: "#F7FAFF",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.16)",
                        mb: 1.1
                      }}
                    />
                    <Typography variant="h5" sx={{ color: "#fff", mb: 0.3 }}>
                      {city.name}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.96rem" }}>{city.text}</Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box id="home-tours-section" sx={{ py: { xs: 4, md: 5 }, scrollMarginTop: { xs: 88, md: 108 } }}>
        <Container maxWidth="xl">
          <SectionTitle title={home.packagesSection.title} subtitle={home.packagesSection.subtitle} />
          <Grid container spacing={3}>
            {home.featuredTours.map((tour) => (
              <Grid key={tour.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <TourPackageCard tour={tour} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button component={RouterLink} to="/tours" variant="contained" size="large" sx={{ borderRadius: 999, px: 4, py: 1.3, textTransform: "none" }}>
              {home.packagesSection.viewMoreLabel ?? "View More"}
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 5, md: 6 }, bgcolor: "#F4F7FC", borderTop: "1px solid #E4EAF6", borderBottom: "1px solid #E4EAF6" }}>
        <Container maxWidth="xl">
          <SectionTitle title={home.fareSection.title} />
          <TableContainer component={Paper} sx={{ borderRadius: 3, overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#2341A8" }}>
                  <TableCell rowSpan={2} sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: "1.1rem", minWidth: 220 }}>
                    Vehicle Type
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: "1.1rem" }}>Airport</TableCell>
                  <TableCell colSpan={2} sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: "1.1rem" }}>
                    Outstation
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: "1.1rem" }}>Varanasi Local</TableCell>
                  <TableCell colSpan={2} sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: "1.1rem" }}>
                    Running Charges
                  </TableCell>
                </TableRow>
                <TableRow sx={{ bgcolor: "#2341A8" }}>
                  <TableCell sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: "1.1rem" }}>Pick/Drop</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: "1.1rem" }}>Round Trip</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: "1.1rem" }}>One Way</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: "1.1rem" }}>Full Day</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: "1.1rem" }}>Inside City</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: "1.1rem" }}>Outside City</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {home.fareRows.map((row, index) => (
                  <TableRow key={row.type} sx={{ bgcolor: index % 2 === 0 ? "#F2F2F2" : "#E6E6E6" }}>
                    <TableCell sx={{ textAlign: "center", fontSize: "1.05rem", fontWeight: row.type === "Innova Crysta" ? 700 : 500 }}>
                      {row.type}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center", fontSize: "1.05rem" }}>{row.airport}</TableCell>
                    <TableCell sx={{ textAlign: "center", fontSize: "1.05rem" }}>{row.roundTrip}</TableCell>
                    <TableCell sx={{ textAlign: "center", fontSize: "1.05rem" }}>{row.oneWay}</TableCell>
                    <TableCell sx={{ textAlign: "center", fontSize: "1.05rem" }}>{row.fullDay}</TableCell>
                    <TableCell sx={{ textAlign: "center", fontSize: "1.05rem" }}>{row.insideCity}</TableCell>
                    <TableCell sx={{ textAlign: "center", fontSize: "1.05rem" }}>{row.outsideCity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography color="text.secondary" sx={{ mt: 2.4 }}>
            {ticket.note}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, md: 5 } }}>
        <Container maxWidth="xl">
          <SectionTitle title={home.pickupSection.title} subtitle={home.pickupSection.subtitle} />
          <Grid container spacing={3}>
            {home.pickupVehicles.map((vehicle) => (
              <Grid key={vehicle.name} size={{ xs: 12, sm: 6, lg: 3 }}>
                <AvailableVehicleCard
                  vehicle={{ name: vehicle.name, image_url: vehicle.image } satisfies VehicleCatalogItem}
                  categoryLabel={vehicle.price}
                  description={vehiclesPage.card.description}
                  highlightsHeading={vehiclesPage.card.highlightsHeading}
                  highlights={home.pickupSection.badges}
                  requestLabel={vehiclesPage.card.requestLabel}
                  ctaLabel={home.pickupSection.ctaLabel}
                  onBook={(vehicle) => {
                    const bookingParams = new URLSearchParams({
                      destination: vehicle.name,
                      vehiclePreference: vehicle.name,
                      message: `Interested in booking the ${vehicle.name}.`
                    });
                    window.location.href = `/contact?${bookingParams.toString()}`;
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button component={RouterLink} to="/vehicles" variant="contained" size="large" sx={{ px: 4, py: 1.3 }}>
              {home.pickupSection.viewMoreLabel ?? "Show More Vehicles"}
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 5, md: 6 }, bgcolor: "#F8FBFF", borderTop: "1px solid #E3EBF8", borderBottom: "1px solid #E3EBF8" }}>
        <Container maxWidth="xl">
          <SectionTitle title={home.testimonialsSection.title} subtitle={home.testimonialsSection.subtitle} />
          <Box
            sx={{
              overflow: "hidden",
              pb: 1.5,
              maskImage: "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)"
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 3,
                width: "max-content",
                animation: "testimonialMarquee 38s linear infinite",
                "@keyframes testimonialMarquee": {
                  "0%": {
                    transform: "translateX(0)"
                  },
                  "100%": {
                    transform: "translateX(calc(-50% - 12px))"
                  }
                }
              }}
            >
              {[...home.testimonials, ...home.testimonials].map((review, index) => (
              <Box
                key={`${review.name}-${index}`}
                sx={{
                  width: { xs: "82vw", sm: 420, lg: 430 },
                  maxWidth: 430,
                  flex: "0 0 auto"
                }}
              >
                <Card
                  sx={{
                    borderRadius: "32px",
                    p: 0.5,
                    height: "100%",
                    background: "linear-gradient(180deg, #0C1730 0%, #15284F 100%)",
                    color: "#F7FAFF",
                    boxShadow: "0 24px 46px rgba(12, 23, 48, 0.18)"
                  }}
                >
                  <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.6 }}>
                    <Rating value={review.rating} precision={0.5} readOnly sx={{ "& .MuiRating-iconFilled": { color: "#F8C768" } }} />
                    <Typography sx={{ color: "rgba(227, 238, 255, 0.82)", fontSize: "1.02rem", lineHeight: 1.7, minHeight: 82 }}>
                      "{review.message}"
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1.2}>
                      <Avatar sx={{ bgcolor: "rgba(255,255,255,0.12)", color: "#F7FAFF", border: "1px solid rgba(255,255,255,0.1)" }}>{review.name[0]}</Avatar>
                      <Box>
                        <Typography fontWeight={700}>{review.name}</Typography>
                        <Typography sx={{ color: "rgba(227, 238, 255, 0.62)" }} variant="body2">
                          {review.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Stack>
  );
}

