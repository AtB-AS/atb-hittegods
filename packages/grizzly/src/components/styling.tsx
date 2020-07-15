import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      // Dark grey
      main: "#323A48",
    },
    secondary: {
      // Blue
      main: "#00758D",
      light: "#60d1E0",
    },
    error: {
      main: "#b2292e",
    },
    background: {
      // Light grey
      default: "#F1F1F1",
    },
    text: {
      //text on background
      primary: "#323A48",
      // text on primary, secondary and error
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["UnitOT", "Roboto", "sans-serif"].join(","),
    fontSize: 16,
  },
});
