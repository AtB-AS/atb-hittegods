// @ts-ignore
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "./img/AtB_strek-grå.png";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "#000",
      fontSize: "26px",
      display: "flex",
      alignItems: "center",
      "&:hover, &:focus, &:active": {
        textDecoration: "none",
        color: "inherit",
      },
    },
    btn: {
      height: "36px",
      paddingRight: "24px",
    },
    header: {
      backgroundColor: "white",
      color: "black",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <NavLink to="/" className={classes.title}>
            <img src={logo} className={classes.btn} alt="" />
            Hittegods
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
