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
    fontFamily: '"Libre Franklin", sans-serif',
    h1: {
      fontFamily: '"Bitter", serif',
      fontWeight: 700,
      lineHeight: 1.08,
    },
    h2: {
      fontFamily: '"Bitter", serif',
      fontWeight: 700,
      lineHeight: 1.12,
    },
    h3: {
      fontFamily: '"Bitter", serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Bitter", serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Bitter", serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Bitter", serif',
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
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
          borderRadius: 12,
          paddingInline: 20,
          minHeight: 46,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: "1px solid rgba(29,59,20,0.08)",
          boxShadow: "0 14px 30px rgba(29,59,20,0.05)",
          backgroundImage: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 18,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          maxWidth: "100%",
          height: "auto",
        },
        label: {
          whiteSpace: "normal",
          display: "block",
          lineHeight: 1.25,
          paddingTop: 6,
          paddingBottom: 6,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #root": {
          width: "100%",
          maxWidth: "100%",
          overflowX: "clip",
        },
        body: {
          margin: 0,
          background: "linear-gradient(180deg, #fcfbf7 0%, #f6f2e8 55%, #f1ede2 100%)",
        },
        "*": {
          boxSizing: "border-box",
        },
        img: {
          maxWidth: "100%",
        },
      },
    },
  },
});

export default theme;
