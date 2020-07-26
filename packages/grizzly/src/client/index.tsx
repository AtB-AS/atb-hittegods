import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/header";
import Wizard from "./wizard/Wizard";
import { Box } from "@material-ui/core";

function Client() {
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

export default Client;
