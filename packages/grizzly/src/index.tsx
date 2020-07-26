import React from "react";
import ReactDOM from "react-dom";
import "./styling/fonts.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Admin from "./admin";
import Client from "./client";
import { theme } from "./styling/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./styling/global.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HelmetProvider>
      <BrowserRouter>
        <Switch>
          <Route path={"/admin"} component={Admin} />
          <Route component={Client} />
        </Switch>
      </BrowserRouter>
    </HelmetProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
