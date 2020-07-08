import React from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import Henvendelser from "./Henvendelser";
import Lager from "./Lager";
import { Link, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { theme } from "../components/styling";
import Header from "../components/header";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  header: {
    padding: "36px",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    textAlign: "center",
  },
  menu: {
    backgroundColor: "#E5E5E5",
  },
  menuLink: {
    padding: "12px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid item md={12}>
        <h1 className={classes.header}>Henvendelser</h1>
      </Grid>
      <Grid container>
        <Grid item md={1} className={classes.menu}>
          <Grid className={classes.menuLink}>
            <Link to="/admin/henvendelser">Henvendelser</Link>
          </Grid>
          <Grid className={classes.menuLink}>
            <Link to="/admin/lager">Lager</Link>
          </Grid>
        </Grid>

        <Grid item md={11}>
          <Switch>
            <Route path="/admin/henvendelser">
              <Henvendelser />
            </Route>
            <Route path="/admin/lager">
              <Lager />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
