import React from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import Henvendelser from "./Henvendelser";
import Lager from "./Lager";
import { Link, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div>
      <Grid container>
        <Grid item md={3}>
          <h2>Meny</h2>
          <Link to="/admin/henvendelser">Henvendelser</Link>
          <Link to="/admin/lager">Lager</Link>
        </Grid>
        <Grid item md={9}>
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
