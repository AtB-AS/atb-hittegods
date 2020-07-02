import React, { useState } from "react";
import { mainCategory } from "./components/constants";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryBags from "./components/img/categoryBags.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import { subCategory } from "./components/constants";

type Props = {
  onCategorySelect: (category: string) => void;
};

function SubCategory(props: Props) {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <h1>Underkategorier</h1>
        <Paper>
          <h2>Jakker</h2>
          <button onClick={() => props.onCategorySelect(subCategory.JACKETS)}>
            <img src={categoryClothing} />
          </button>
        </Paper>
        <Paper>
          <h2>Bukser</h2>
          <img src={categoryBags} />
        </Paper>

        <Paper>
          <h2>Votter og luer</h2>
          <img src={categoryPersonalEffects} />
        </Paper>

        <Paper>
          <h2>Andre</h2>
          <img src={categoryElectronics} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SubCategory;
