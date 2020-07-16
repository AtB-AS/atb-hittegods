import React, { useState } from "react";
import { Box, createStyles, Grid, Theme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import { Label } from "@material-ui/icons";
import InputLabel from "@material-ui/core/InputLabel";

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

const Color = {
  BLUE: "Blå",
  GREEN: "Grønn",
  YELLOW: "Gul",
  RED: "Rød",
  BLACK: "Svart",
  BROWN: "Brun",
};

// Liste som skal mappes gjennom
const ColorData = [
  Color.BLUE,
  Color.BLACK,
  Color.GREEN,
  Color.YELLOW,
  Color.RED,
  Color.BROWN,
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfield: {
      display: "flex",
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
      <Box mt={4} mb={4}>
        <h2>Har gjenstanden din noen kjennetegn?</h2>
        <p>
          Fyll ut så godt du kan. Vi vil uansett gjøre det vi kan for å finne
          gjenstanden din.
        </p>
      </Box>

      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabel htmlFor="color">Farge</InputLabel>
            <FormControl component="fieldset">
              <RadioGroup
                row
                id="color"
                name="color"
                onChange={(event) => setColor(event.target.value)}
              >
                {ColorData.map((color) => (
                  <FormControlLabel
                    control={<Radio />}
                    label={color}
                    value={color}
                    key={color}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="brand">Merke</InputLabel>
            <TextField
              className={styles.textfield}
              type="text"
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
              variant="standard"
              id="brand"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="description">Beskrivelse</InputLabel>
            <TextField
              name="description"
              className={styles.textfield}
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              variant="standard"
            />
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
