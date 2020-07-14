import React from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import Henvendelser from "./Henvendelser";
import Storage from "./Storage";
import { Link, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { theme } from "../components/styling";
import Header from "../components/header";
import Paper from "@material-ui/core/Paper";
import ReadyToPickUp from "./ReadyToPickUp";
import Transit from "./Transit";
import RegisterFound from "./RegisterFound";

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
    justifyItems: "center",
    alignItems: "center",
  },
  menuLink: {},
  paper: {
    textAlign: "left",
    paddingTop: "2vw",
    paddingBottom: "1vw",
    paddingLeft: "1vw",
    backgroundColor: "#E5E5E5",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <h1 className={classes.header}>Henvendelser</h1>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item md={2} className={classes.menu}>
          <Grid item className={classes.menuLink}>
            <Paper className={classes.paper}>
              <Link to="/admin/henvendelser">Henvendelser</Link>
            </Paper>
          </Grid>
          <Grid item className={classes.menuLink}>
            <Paper className={classes.paper}>
              <Link to="/admin/lager">Lager</Link>
            </Paper>
          </Grid>
          <Grid item className={classes.menuLink}>
            <Paper className={classes.paper}>
              <Link to="/admin/tilUtlevering">Til utlevering</Link>
            </Paper>
          </Grid>
          <Grid item className={classes.menuLink}>
            <Paper className={classes.paper}>
              <Link to="/admin/paVei">På vei</Link>
            </Paper>
          </Grid>
          <Grid item className={classes.menuLink}>
            <Paper className={classes.paper}>
              <Link to="/admin/registrereFunn">Registrere funn</Link>
            </Paper>
          </Grid>
        </Grid>

        <Grid item md={10}>
          <Switch>
            <Route path="/admin/henvendelser" component={Henvendelser} />
            <Route path="/admin/tilUtlevering">
              <ReadyToPickUp />
            </Route>
            <Route path="/admin/paVei">
              <Transit />
            </Route>
            <Route path="/admin/registrereFunn">
              <RegisterFound />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
