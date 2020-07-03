import React, { useState } from "react";
import { mainCategory } from "./components/constants";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryBags from "./components/img/categoryBags.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import { Box, createStyles, Grid, styled, Theme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { red, green, yellow, blue, brown } from "@material-ui/core/colors";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";

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

const ColorCircle = styled(FiberManualRecordIcon)({
  border: 0,
  height: "42px",
  width: "42px",
});

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

  function ColorButtonComponent(color: string) {
    return <div></div>;
  }

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
        <FormControl component="fieldset">
          <div></div>
          <RadioGroup onChange={() => setColor(color)}>
            {ColorData.map((color) => (
              <FormControlLabel
                key={color}
                value={color}
                control={<Radio />}
                label={color}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        {ColorData.map((color) => (
          <Grid item key={color}>
            <Button value={color} onClick={() => setColor(color)}>
              <ColorCircle />
              {color}
            </Button>
          </Grid>
        ))}
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3 className={styles.heading}>Farge</h3>
          </Grid>
          <div>
            <Button
              style={{ color: blue[500] }}
              value={color}
              onClick={() => setColor(Color.BLUE)}
            >
              <ColorCircle />
            </Button>
          </div>
          <Button
            style={{ color: red[500] }}
            value={color}
            onClick={() => setColor(Color.RED)}
          >
            <ColorCircle />
          </Button>
          <Button
            style={{ color: yellow[500] }}
            value={color}
            onClick={() => setColor(Color.YELLOW)}
          >
            <ColorCircle />
          </Button>
          <Button
            style={{ color: green[500] }}
            value={color}
            onClick={() => setColor(Color.GREEN)}
          >
            <ColorCircle />
          </Button>
          <Button
            style={{ color: brown[500] }}
            value={color}
            onClick={() => setColor(Color.BROWN)}
          >
            <ColorCircle />
          </Button>
          <Button value={color} onClick={() => setColor(Color.BLACK)}>
            <ColorCircle />
          </Button>
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
      </Box>
    </div>
  );
}

export default Characteristics;
