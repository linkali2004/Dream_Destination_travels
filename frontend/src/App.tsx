import { Box } from "@mui/material";
import { useEffect } from "react";
import { SITE_BRAND_NAME } from "./branding";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { Navbar } from "./components/Navbar";
import { AppRouter } from "./router/AppRouter";

function App() {
  useEffect(() => {
    document.title = SITE_BRAND_NAME;
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, rgba(116, 154, 224, 0.16) 0%, rgba(116, 154, 224, 0) 24%), linear-gradient(180deg, #F3F7FD 0%, #E8EEF8 100%)"
      }}
    >
      <Navbar />
      <AppRouter />
      <Footer />
      <FloatingActions />
    </Box>
  );
}

export default App;
