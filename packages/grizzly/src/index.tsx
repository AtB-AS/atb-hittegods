import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Admin from "./admin";
import Client from "./client";
import { theme } from "./components/styling";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path={"/admin"} component={Admin} />
          <Route component={Client} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
