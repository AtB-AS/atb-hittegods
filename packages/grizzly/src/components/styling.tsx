import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        boxShadow: "0",
        color: "#00758D",
        textTransform: "none",
      },
      outlined: {
        padding: "10px 16px 12px",
        color: "#00758D",
        display: "block",
        width: "100%",
        backgroundColor: "#ffffff",
        fontWeight: "lighter",
        border: "solid 1px",
        borderColor: "rgba(0, 0, 0, 0.12)",
        boxShadow: "0",
        "&:hover": {
          backgroundColor: "#ffffff",
          border: "solid 1px",
          borderColor: "#00758D",
          boxShadow: "none",
        },
        "&:active": {
          outline: "none",
          boxShadow: "none",
        },
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
        text: {
          color: "#00758D",
        },
      },
      contained: {
        borderBottom: "solid 3px #00758D",
        display: "block",
        boxShadow: "0",
        "&:hover": {
          boxShadow: "none !important",
          backgroundColor: "#00758D !important",
          borderBottom: "solid 3px #323A48",
        },
        "&:active": {
          outline: "none",
          boxShadow: "none",
        },
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
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
        display: "block",
        width: "100%",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#323A48",
        fontWeight: "bold",
      },
    },
    MuiFormHelperText: {
      root: {
        backgroundColor: "#F1F1F1",
        marginTop: "0px",
      },
    },
    MuiStep: {
      alternativeLabel: {
        textAlign: "center",
      },
    },
    MuiStepButton: {
      root: {
        boxSizing: "border-box",
        padding: "24px 4px",
      },
    },
    MuiButtonBase: {
      root: {
        boxSizing: "border-box",
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
      },
    },
    MuiInput: {
      input: {
        padding: "12px 10px 10px",
      },
      underline: {
        "&:before, &:after": {
          display: "none",
        },
        borderBottom: "2px solid #ccc",
        "&:focus, &:focus-within, &:hover": {
          borderBottom: "2px solid #00758D",
        },
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
      light: "#018da6",
    },
    error: {
      main: "#b2292e",
    },
    background: {
      // Light grey
      default: "#F1F1F1",
      paper: "#ffffff",
    },
  },
  typography: {
    body2: {
      color: "#323A48",
    },

    fontFamily: ["UnitOT", "Roboto", "sans-serif"].join(","),
    fontSize: 16,
  },
});
