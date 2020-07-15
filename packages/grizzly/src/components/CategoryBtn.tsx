import React from "react";
import { theme } from "./styling";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  button: {
    color: theme.palette.primary.main,
  },
});

const classes = useStyles();

export default function CategoryBtn() {
  return (
    <Button className={classes.button} variant="contained" endIcon="tom" />
  );
}
