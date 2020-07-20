import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { theme } from "./styling";
import { Button } from "@material-ui/core";

type Props = {
  onClick: () => void;
};

const useStyles = makeStyles({
  imgIcon: {
    position: "relative",
    top: "-10px",
  },

  button: {
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.secondary.light,
    padding: "12px 16px 10px",
  },
});

function NextBtn(props: Props) {
  const style = useStyles();

  return (
    <Button
      onClick={props.onClick}
      variant="contained"
      type="submit"
      className={style.button}
    >
      Gå videre <ArrowForwardIosIcon />
    </Button>
  );
}

export default NextBtn;
