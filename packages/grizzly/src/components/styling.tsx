import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00758D",
    },
    secondary: {
      main: "#A9AD00",
    },
  },
  typography: {
    fontFamily: ["Unit pro regular", "Calibri", "sans-serif"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          height: "100vh",
        },
      },
    },
  },
});
