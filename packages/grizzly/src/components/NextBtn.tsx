import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { theme } from "./styling";
import { Button } from "@material-ui/core";

type Props = {
  onClick: () => void;
};

const useStyles = makeStyles({
  root: {},
  imgIcon: {
    position: "relative",
    top: "-10px",
  },
  button: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    justifyContent: "start",
    justifyItems: "start",
    padding: "24px",
    marginTop: "-1px",
    marginLeft: "-1px",
    //outline: "1px solid",
    borderColor: theme.palette.primary.light,
  },
});

function NextBtn(props: Props) {
  const style = useStyles();

  return (
    <div>
      <Button onClick={props.onClick} type="submit" className={style.button}>
        Gå videre <ArrowForwardIosIcon />
      </Button>
    </div>
  );
}

export default NextBtn;
