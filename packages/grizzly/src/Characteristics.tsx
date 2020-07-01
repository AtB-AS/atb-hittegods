import React, { useState } from "react";
import { mainCategory } from "./components/constants";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryBags from "./components/img/categoryBags.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

type Props = {
  onCharacteristicsSelect: (characteristics: Characteristics) => void;
};

type Characteristics = {
  color: string;
  brand: string;
  description: string;
};

function Characteristics(props: Props) {
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");

  function onSubmit() {
    props.onCharacteristicsSelect({ color, brand, description });
  }

  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <h1>Kjennetegn</h1>
        <Paper>
          <h2>Farge</h2>
          <input
            type="text"
            onChange={(event) => setColor(event.target.value)}
          ></input>
        </Paper>
        <Paper>
          <h2>Merke</h2>
          <input
            type="text"
            onChange={(event) => setBrand(event.target.value)}
          ></input>
        </Paper>
        <Paper>
          <h2>Beskrivelse</h2>
          <input
            type="text"
            onChange={(event) => setDescription(event.target.value)}
          ></input>
        </Paper>
        <Paper>
          <button type="submit" onClick={onSubmit}>
            Neste
          </button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Characteristics;
