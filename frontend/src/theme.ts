import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#214A9A",
      light: "#5E8AE6",
      dark: "#0C1730"
    },
    secondary: {
      main: "#C79A4B",
      dark: "#8D6729"
    },
    background: {
      default: "#E9EFF8",
      paper: "#F8FBFF"
    },
    text: {
      primary: "#10203D",
      secondary: "#5A6B89"
    }
  },
  shape: {
    borderRadius: 16
  },
  typography: {
    fontFamily: "'Manrope', 'Segoe UI', sans-serif",
    h2: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700
    },
    h3: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700
    },
    h4: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 18px 38px rgba(16, 32, 61, 0.1)"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
          textTransform: "none"
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #173574 0%, #2A5EBB 100%)",
          boxShadow: "0 14px 28px rgba(23, 53, 116, 0.22)"
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700
        }
      }
    }
  }
});
