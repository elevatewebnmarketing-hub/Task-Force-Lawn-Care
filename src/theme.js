import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#355f18",
      dark: "#1d3b14",
      light: "#6d9d22",
    },
    secondary: {
      main: "#c9a63b",
      light: "#efe0a9",
      dark: "#9a7b1d",
    },
    background: {
      default: "#f6f2e8",
      paper: "#ffffff",
    },
    text: {
      primary: "#1d2318",
      secondary: "#5d6658",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 800,
      lineHeight: 1.02,
    },
    h2: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 700,
      lineHeight: 1.08,
    },
    h3: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 700,
    },
    button: {
      fontWeight: 800,
      textTransform: "none",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid rgba(29,59,20,0.08)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          minHeight: 48,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          border: "1px solid rgba(29,59,20,0.08)",
          boxShadow: "0 16px 40px rgba(29,59,20,0.06)",
          backgroundImage: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 24,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});

export default theme;
