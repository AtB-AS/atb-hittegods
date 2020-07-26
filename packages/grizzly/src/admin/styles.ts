import makeStyles from "@material-ui/core/styles/makeStyles";

export const useTableStyles = makeStyles({
  root: {
    width: "100%",
    overflow: "scroll",
    display: "grid",
    gridTemplateColumns: "60% 1fr",
    fontSize: "18px",
    height: "100%",
  },
  container: {
    height: "100%",
  },
  leftCol: {},
  rightCol: {},
  scrollContainer: {
    height: "100%",
    overflow: "scroll",
    padding: "20px",
  },
  thRow: {},
  th: {
    borderBottom: "3px solid rgba(224, 224, 224, 1)",
  },
  inStock: {
    textAlign: "center",
    width: "100px",
  },
  row: {
    cursor: "pointer",
  },
  loading: {
    display: "grid",
    placeItems: "center",
    height: "100%",
  },
  activeRow: {
    backgroundColor: "rgb(234,234,234)",
    "& > td": {
      fontWeight: "bold",
    },
  },
});
