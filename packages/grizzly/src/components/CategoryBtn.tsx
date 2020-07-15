import React from "react";
import { theme } from "./styling";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CatIcon from "./components/icons/Lue.svg";
import Icon from "@material-ui/core/Icon";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles({
  button: {
    color: theme.palette.secondary.main,
  },
});

type Props = {};

export default function CategoryBtn(props: Props) {
  const classes = useStyles();
  return (
    <Button className={classes.button} variant="contained">
      Kategori
    </Button>
  );
}
