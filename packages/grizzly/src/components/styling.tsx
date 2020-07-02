import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import { red } from "@material-ui/core/colors";

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
  spacing: 4,
});
