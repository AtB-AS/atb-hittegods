import React, { useState } from "react";
import {
  Box,
  createStyles,
  Fade,
  Grid,
  Grow,
  Theme,
  Zoom,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ColorSelect from "./ColorSelect";
import InputLabel from "@material-ui/core/InputLabel";
import NextBtn from "./components/NextBtn";

type Props = {
  onCharacteristicsSelect: (characteristics: Characteristics) => void;
  color: string;
  brand: string;
  description: string;
  subCategory: string;
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
    button: {
      float: "right",
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
  //TODO Legge til ID i colorselect-
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit();
      }}
    >
      <Box mt={4} mb={4}>
        {/* Med underkategori: <h5>Beskriv din(e) {props.subCategory}</h5>*/}
        <h2 className="h4">Kan du beskrive det du har mistet?</h2>
        <p>
          Valgt gjenstand:<b> {props.subCategory}</b>
        </p>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grow in timeout={300}>
            <Grid item xs={12}>
              <InputLabel htmlFor="color">
                Hvilken farge passer best?
              </InputLabel>
              <ColorSelect onColorSelect={setColor} />
            </Grid>
          </Grow>

          <Grow in timeout={400}>
            <Grid item xs={12}>
              <InputLabel htmlFor="brand">Merke</InputLabel>
              <TextField
                className={styles.textfield}
                type="text"
                helperText="For eksempel Samsung, Stormberg, Patagonia"
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
                variant="standard"
                id="brand"
              />
            </Grid>
          </Grow>
          <Grow in timeout={600}>
            <Grid item xs={12}>
              <InputLabel htmlFor="description">Kjennetegn</InputLabel>
              <TextField
                name="description"
                multiline={true}
                className={styles.textfield}
                type="text"
                helperText="Er det noe unikt med gjenstanden din?"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                variant="standard"
              />
            </Grid>
          </Grow>
          <Grow in timeout={800}>
            <Grid item xs={12}>
              <div className={styles.button}>
                <NextBtn />
              </div>
            </Grid>
          </Grow>
        </Grid>
      </Box>
    </form>
  );
}

export default Characteristics;
