import React from "react";
import { theme } from "./styling";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CatIcon from "../components/icons/Mobil.svg";
import LueIcon from "../components/icons/Lue";
import Icon from "@material-ui/core/Icon";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { SvgIcon } from "@material-ui/core";

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

type Props = {
  icon: string;
  title: string;
  onClick: () => void;
};

export default function CategoryBtn(props: Props) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      startIcon={
        <Icon>
          <img className={classes.imgIcon} src={props.icon} />
        </Icon>
      }
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
}
