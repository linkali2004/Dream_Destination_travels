import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { SITE_BRAND_LOGO, SITE_BRAND_LOGO_ALT, SITE_BRAND_NAME } from "../branding";
import { useSiteContent } from "../content/SiteContentContext";

export function Navbar() {
  const { navigation } = useSiteContent();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(248, 250, 255, 0.9)",
        color: "text.primary",
        borderBottom: "1px solid rgba(23, 42, 89, 0.08)",
        backdropFilter: "blur(10px)"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ minHeight: { xs: 72, md: 78 }, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <Box
              component="img"
              src={SITE_BRAND_LOGO}
              alt={SITE_BRAND_LOGO_ALT}
              sx={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(0,0,0,0.08)" }}
            />
            <Typography fontWeight={800} lineHeight={1.1} letterSpacing={0.2}>
              {SITE_BRAND_NAME}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} sx={{ display: { xs: "none", md: "flex" } }}>
            {navigation.map((item) => {
              return (
                <Button
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    fontWeight: 600,
                    px: 1.8,
                    borderRadius: 2,
                    color: "text.secondary",
                    "&.active": { color: "primary.main", backgroundColor: "rgba(39, 110, 241, 0.08)" }
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>

          <IconButton sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
