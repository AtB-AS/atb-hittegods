import React from "react";
import { Grid } from "@material-ui/core";
import Henvendelser from "./Henvendelser";
import { Route, Switch } from "react-router-dom";
import ReadyToPickUp from "./ReadyToPickUp";
import Transit from "./Transit";
import RegisterStorage from "./register/RegisterStorage";
import RegisterTransit from "./register/RegisterTransit";

function App() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item md={10}>
          <Switch>
            <Route path="/admin/henvendelser" component={Henvendelser} />
            <Route path="/admin/tilUtlevering">
              <ReadyToPickUp />
            </Route>
            <Route path="/admin/påVei" component={Transit}>
              <RegisterTransit
                status={"På vei"}
                path={"/admin/påVei/registrer"}
              />
            </Route>
            <Route path="/admin/registrereFunn">
              <RegisterStorage status={"Funnet"} path={"/admin/påVei"} />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
