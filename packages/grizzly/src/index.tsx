import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Admin from "./admin";
import Client from "./client";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path={"/admin"} component={Admin} />
        <Route component={Client} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
