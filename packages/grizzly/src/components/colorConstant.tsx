export const colorStrings = {
  BLUE: "Blå",
  GREEN: "Grønn",
  YELLOW: "Gul",
  RED: "Rød",
  BLACK: "Svart",
  BROWN: "Brun",
  PURPLE: "Lilla",
  GRAY: "Grå",
  WHITE: "Hvit",
  GOLD: "Gull",
  SILVER: "Sølv",
  PINK: "Rosa",
};

type Color = {
  label: string;
  primary: string;
  secondary: string;
};

type Colors = {
  data: Color[];
};

export const colorData: Colors = {
  data: [
    { label: colorStrings.BLUE, primary: "#1565C0", secondary: "white" },
    { label: colorStrings.GREEN, primary: "#4CAF50", secondary: "white" },
    { label: colorStrings.YELLOW, primary: "#FFEB3B", secondary: "#323A48" },
    { label: colorStrings.RED, primary: "#F44336", secondary: "white" },
    { label: colorStrings.BLACK, primary: "black", secondary: "white" },
    { label: colorStrings.PURPLE, primary: "#75009E", secondary: "white" },
    { label: colorStrings.GRAY, primary: "#757575", secondary: "white" },
    { label: colorStrings.WHITE, primary: "white", secondary: "#323A48" },
    {
      label: colorStrings.GOLD,
      primary: "linear-gradient(270deg,  #FFE082 30%, #FFC107 70%)",
      secondary: "#323A48",
    },
    {
      label: colorStrings.SILVER,
      primary: "linear-gradient(270deg,  #ECEFF1 30%, #CFD8DC 70%)",
      secondary: "#323A48",
    },
    { label: colorStrings.PINK, primary: "#FF4081", secondary: "white" },
    { label: colorStrings.BROWN, primary: "#795548", secondary: "white" },
  ],
};
