import { Box, Button, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { HeroSlide } from "../types";

type HeroCarouselProps = {
  slides: HeroSlide[];
  ctaLabel: string;
};

export function HeroCarousel({ slides, ctaLabel }: HeroCarouselProps) {
  return (
    <Box
      sx={{
        px: { xs: 1.5, md: 3 },
        ".carousel-root, .carousel-slider, .slider-wrapper": { borderRadius: 5, overflow: "hidden" },
        ".control-dots .dot": { boxShadow: "none" }
      }}
    >
      <Carousel autoPlay infiniteLoop interval={4500} showThumbs={false} showStatus={false} stopOnHover={false} showArrows={false}>
        {slides.map((slide) => (
          <Box key={slide.id} sx={{ position: "relative", height: { xs: 320, md: 470 } }}>
            <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(65%)"
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(95deg, rgba(14,25,48,0.72), rgba(14,25,48,0.24) 58%, rgba(14,25,48,0.06))",
                display: "flex",
                alignItems: "center",
                px: { xs: 2.5, md: 6 }
              }}
            >
              <Box sx={{ textAlign: "left", maxWidth: 700, color: "#fff" }}>
                <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "3rem" }, lineHeight: 1.1, mb: 1.4 }}>
                  {slide.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, opacity: 0.96, mb: 2.6 }}>{slide.subtitle}</Typography>
                <Button variant="contained" color="primary" sx={{ borderRadius: 99, px: 3, py: 1.1, fontWeight: 600 }}>
                  {ctaLabel}
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
