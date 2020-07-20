import React, { useState } from "react";
import {
  Box,
  Collapse,
  createStyles,
  Grid,
  Theme,
  Fab,
  Paper,
  Chip,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import ColorSelect from "./ColorSelect";
import InputLabel from "@material-ui/core/InputLabel";

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
    <div>
      <Box mt={4} mb={4}>
        {/* Med underkategori: <h5>Beskriv din(e) {props.subCategory}</h5>*/}
        <h4>Kan du beskrive det du har mistet?</h4>
      </Box>

      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabel htmlFor="color">Hvilken farge passer best?</InputLabel>
            <ColorSelect onColorSelect={setColor} />
          </Grid>
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
