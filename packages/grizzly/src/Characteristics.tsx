import React, { useState } from "react";
import { mainCategory } from "./components/constants";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryBags from "./components/img/categoryBags.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import { Box, createStyles, Grid, Theme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfield: {
      display: "flex",
    },
    heading: {
      fontWeight: 300,
      fontSize: "24px",
    },
    headingh2: {
      fontWeight: 350,
      fontSize: "36px",
    },
  })
);

function Characteristics(props: Props, characteristics: Characteristics) {
  const [color, setColor] = useState(props.color);
  const [brand, setBrand] = useState(props.brand);
  const [description, setDescription] = useState(props.description);
  const styles = useStyles();

  function onSubmit() {
    props.onCharacteristicsSelect({ color, brand, description });
  }

  return (
    <div>
      <Box mt={6}>
        <h2 className={styles.headingh2}>
          Har gjenstanden din noen kjennetegn?
        </h2>
        <p>
          Fyll ut så godt du kan. Vi vil uansett gjøre det vi kan for å finne
          gjenstanden din.
        </p>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3 className={styles.heading}>Farge</h3>
            <TextField
              className={styles.textfield}
              type="text"
              value={color}
              label="Farge"
              onChange={(event) => setColor(event.target.value)}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <h3 className={styles.heading}>Merke</h3>
            <TextField
              className={styles.textfield}
              type="text"
              value={brand}
              label="Merke"
              onChange={(event) => setBrand(event.target.value)}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <h3 className={styles.heading}>Beskrivelse</h3>
            <TextField
              className={styles.textfield}
              type="text"
              value={description}
              label="Beskrivelse"
              onChange={(event) => setDescription(event.target.value)}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={onSubmit}
            >
              Neste
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Characteristics;
