import React, { useState } from "react";
import { mainCategory } from "./components/constants";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryBags from "./components/img/categoryBags.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

type Props = {
  onCharacteristicsSelect: (characteristics: Characteristics) => void;
  color: string;
  brand: string;
  description: string;
};

type Characteristics = {
  color: string;
  brand: string;
  description: string;
};

function Characteristics(props: Props, characteristics: Characteristics) {
  const [color, setColor] = useState(props.color);
  const [brand, setBrand] = useState(props.brand);
  const [description, setDescription] = useState(props.description);

  function onSubmit() {
    props.onCharacteristicsSelect({ color, brand, description });
  }

  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <h1>Kjennetegn</h1>
        <Paper>
          <h2>Farge</h2>
          <TextField
            type="text"
            value={color}
            label="Farge"
            onChange={(event) => setColor(event.target.value)}
            variant="outlined"
          ></TextField>
        </Paper>
        <Paper>
          <h2>Merke</h2>
          <TextField
            type="text"
            value={brand}
            label="Merke"
            onChange={(event) => setBrand(event.target.value)}
            variant="outlined"
          ></TextField>
        </Paper>
        <Paper>
          <h2>Beskrivelse</h2>
          <TextField
            type="text"
            value={description}
            label="Beskrivelse"
            onChange={(event) => setDescription(event.target.value)}
            variant="outlined"
          ></TextField>
        </Paper>
        <Paper>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={onSubmit}
          >
            Neste
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Characteristics;
