import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { Helmet } from "react-helmet-async";
import { Box } from "@material-ui/core";

import Wizard from "./Wizard";

function App() {
  return (
    <Box mb={6}>
      <Helmet>
        <title>Hittegods - AtB</title>
      </Helmet>
      <Header />
      <Wizard />
    </Box>
  );
}

export default App;
