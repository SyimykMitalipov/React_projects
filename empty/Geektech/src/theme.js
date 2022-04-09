import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EA0723",
    },
    secondary: {
      main: "#004EA3",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Roboto", "-apple-system", "sans-serif"],
    fontSize: 12,
    // h1: {
    //   fontSize: 48,
    //   fontWeight: 700,
    // },
    // h2: {
    //   font
    // }
  },
  shape: {
    borderRadius: "30px",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function MuiTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
