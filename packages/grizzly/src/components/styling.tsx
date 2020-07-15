import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      },
    },
    MuiGrid: {
      root: {
        padding: 0,
      },
    },
    MuiFormControl: {
      root: {
        background: "#ffffff",
      },
    },

    MuiStepLabel: {
      label: {
        color: "#323A48",
      },
    },
  },
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
      paper: "#ffffff",
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
