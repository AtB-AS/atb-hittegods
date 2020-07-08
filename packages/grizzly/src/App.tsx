import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header";
import { Helmet } from "react-helmet";
import { Box } from "@material-ui/core";

import Wizard from "./Wizard";
import Categories from "./components/Categories";
import Category from "./components/Category";
import { Home, Room } from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import { categoryData } from "./components/subCategoryData";

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
