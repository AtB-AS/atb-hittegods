import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { theme } from "./styling";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

type Props = {
  onClick: () => void;
};

const useStyles = makeStyles({
  imgIcon: {
    position: "relative",
    top: "-10px",
  },

  button: {
    color: theme.palette.primary.main,
    padding: "12px 16px 10px",
    "&:active": {
      border: "none",
      borderColor: "red",
    },
    "&:focus": {
      outline: "none",
    },
  },
});

function BackBtn(props: Props) {
  const style = useStyles();

  return (
    <Button
      type="button"
      onClick={props.onClick}
      variant="text"
      className={style.button}
    >
      <ArrowBackIosIcon /> Tilbake
    </Button>
  );
}

export default BackBtn;
