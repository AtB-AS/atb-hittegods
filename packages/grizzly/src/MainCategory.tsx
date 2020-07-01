import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryBags from "./components/img/categoryBags.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import { mainCategory } from "./components/constants";
import { useHistory } from "react-router-dom";

type Props = {
  onCategorySelect: (category: string) => void;
};

function MainCategory(props: Props) {
  const [cat, setCat] = useState("");
  const h = useHistory();
  console.log(h);
  console.log(cat);

  useEffect(() => {
    console.log("mounted", h);
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <h1>Kategorier</h1>
        <Paper>
          <h2>Klær</h2>
          <button onClick={() => props.onCategorySelect(mainCategory.CLOTHING)}>
            <img src={categoryClothing} />
          </button>
          <h2>Vesker og bager</h2>
          <img src={categoryBags} />
        </Paper>
        <Paper>
          <h2>Personlige effecter</h2>
          <img src={categoryPersonalEffects} />
        </Paper>
        <Paper>
          <h2>Elektronikk</h2>
          <img src={categoryElectronics} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default MainCategory;
