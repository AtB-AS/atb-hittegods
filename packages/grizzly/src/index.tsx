import React from "react";
import ReactDOM from "react-dom";
import "./fonts/fonts.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Admin from "./admin";
import Client from "./client";
import { theme } from "./components/styling";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./global.css";
import {HelmetProvider} from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
      <HelmetProvider>


    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path={"/admin"} component={Admin} />
          <Route component={Client} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
      </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
