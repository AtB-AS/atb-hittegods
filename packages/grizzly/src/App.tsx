import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";

import Wizard from "./Wizard";

function App() {
  return (
    <div>
      <Helmet>
        <title>Hittegods - AtB</title>
      </Helmet>

      <Header />

      <Wizard />
    </div>
  );
}

export default App;
