// @ts-ignore
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./icons/logo";

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
      color: "#37424A",
      fontSize: "30px",
      display: "flex",
      padding: "10px 0",
      alignItems: "center",
      textDecoration: "none",
      "&:hover, &:focus, &:active": {
        textDecoration: "none",
        color: "inherit",
      },
    },
    logo: {
      width: "50px",
      height: "50px",
      color: "#37424A",
      marginRight: "20px",
    },
    header: {
      backgroundColor: "white",
      color: "#37424A",
      boxShadow: "none",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <a href="/" className={classes.title}>
            <Logo className={classes.logo} />
            Hittegods
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
