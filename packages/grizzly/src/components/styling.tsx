import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    /*
    MuiStepLabel: {
      iconContainer: {
        border: "2px solid red",
        borderRadius: "50%",
        color: "red",
        "& > svg": {
          margin: "4px",
        },
      },
    },
    /*
    MuiStepIcon: {
      active: {
        color: "transparent !important",
        border: "2px solid #00758D",
        borderRadius: "50%",
      },

    },
     */
  },
  palette: {
    primary: {
      main: "#00758D",
    },
    secondary: {
      main: "#A9AD00",
    },
  },
  typography: {
    fontFamily: ["UnitOT", "Roboto", "sans-serif"].join(","),
    fontSize: 16,
  },
});
