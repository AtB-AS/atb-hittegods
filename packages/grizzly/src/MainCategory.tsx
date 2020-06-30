import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import CategoryClothing from "./components/img/categoryClothing.png";

function MainCategory() {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <Paper>{CategoryClothing}</Paper>
      </Grid>
    </Grid>
  );
}

export default MainCategory;
