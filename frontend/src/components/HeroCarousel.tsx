import { Box, Button, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { HeroSlide } from "../types";

type HeroCarouselProps = {
  slides: HeroSlide[];
  ctaLabel: string;
};

export function HeroCarousel({ slides, ctaLabel }: HeroCarouselProps) {
  const handleExploreNowClick = () => {
    const toursSection = document.getElementById("home-tours-section");
    toursSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      sx={{
        px: { xs: 1.25, sm: 2, md: 3 },
        ".carousel-root, .carousel-slider, .slider-wrapper": { borderRadius: { xs: 4, md: 5 }, overflow: "hidden" },
        ".control-dots": {
          bottom: { xs: 14, md: 22 },
          margin: 0
        },
        ".control-dots .dot": {
          boxShadow: "none",
          width: { xs: 8, md: 10 },
          height: { xs: 8, md: 10 },
          margin: "0 5px",
          background: "rgba(255,255,255,0.42)"
        },
        ".control-dots .dot.selected": {
          background: "#FFFFFF"
        }
      }}
    >
      <Carousel autoPlay infiniteLoop interval={4500} showThumbs={false} showStatus={false} stopOnHover={false} showArrows={false}>
        {slides.map((slide, index) => {
          const isPrimarySlide = index === 0;

          return (
          <Box key={slide.id} sx={{ position: "relative", height: { xs: 480, sm: 540, md: 560, lg: 470 } }}>
            <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: { xs: "center", sm: "center", md: "center" },
                filter: "brightness(62%)"
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: {
                  xs: "linear-gradient(180deg, rgba(9,17,34,0.16) 0%, rgba(9,17,34,0.36) 28%, rgba(9,17,34,0.86) 100%)",
                  md: "linear-gradient(95deg, rgba(14,25,48,0.78), rgba(14,25,48,0.28) 58%, rgba(14,25,48,0.08))"
                },
                display: "flex",
                alignItems: { xs: "flex-end", md: "center" },
                px: { xs: 1.25, sm: 2, md: 6 },
                py: { xs: 1.25, sm: 1.75, md: 0 }
              }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  maxWidth: { xs: "100%", md: 700 },
                  width: { xs: "100%", md: "auto" },
                  color: "#fff",
                  mb: { xs: 4.25, sm: 4.75, md: 0 },
                  px: { xs: 0.5, sm: 0, md: 0 }
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "auto" },
                    maxWidth: { xs: "100%", sm: 560, md: 700 },
                    p: { xs: 2, sm: 2.5, md: 0 },
                    borderRadius: { xs: "28px", md: 0 },
                    background: {
                      xs: isPrimarySlide
                        ? "linear-gradient(180deg, rgba(10, 20, 40, 0.68) 0%, rgba(10, 20, 40, 0.5) 100%)"
                        : "linear-gradient(180deg, rgba(10, 20, 40, 0.48) 0%, rgba(10, 20, 40, 0.34) 100%)",
                      md: "transparent"
                    },
                    backdropFilter: { xs: "blur(12px)", md: "none" },
                    border: {
                      xs: "1px solid rgba(255,255,255,0.12)",
                      md: "none"
                    },
                    boxShadow: {
                      xs: "0 18px 40px rgba(5, 10, 22, 0.22)",
                      md: "none"
                    }
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(227, 238, 255, 0.74)",
                      fontSize: { xs: "0.68rem", sm: "0.72rem", md: "0.78rem" },
                      letterSpacing: { xs: 1.7, md: 2.4 },
                      textTransform: "uppercase",
                      mb: { xs: 1, md: 1.2 },
                      fontWeight: 800
                    }}
                  >
                    Premium India Travel
                  </Typography>
                  <Typography variant="h2" sx={{ fontSize: { xs: "1.85rem", sm: "2.2rem", md: "3rem" }, lineHeight: { xs: 1.1, md: 1.08 }, mb: { xs: 1, md: 1.4 } }}>
                    {slide.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.94rem", sm: "1.02rem", md: "1.2rem" },
                      lineHeight: { xs: 1.6, md: 1.65 },
                      opacity: 0.96,
                      mb: { xs: 1.8, md: 2.6 },
                      maxWidth: { xs: "100%", sm: 470, md: 620 }
                    }}
                  >
                    {slide.subtitle}
                  </Typography>
                  {isPrimarySlide ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleExploreNowClick}
                      sx={{
                        borderRadius: 99,
                        px: { xs: 2.4, sm: 3.4 },
                        py: { xs: 1, sm: 1.08 },
                        width: { xs: "100%", sm: "auto" },
                        minWidth: { sm: 180 },
                        fontWeight: 700
                      }}
                    >
                      {ctaLabel}
                    </Button>
                  ) : null}
                </Box>
              </Box>
            </Box>
          </Box>
        );
        })}
      </Carousel>
    </Box>
  );
}
