import React, { useState } from "react";
import { Box, createStyles, Grid, Grow } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ColorSelect from "./ColorSelect";
import InputLabel from "@material-ui/core/InputLabel";
import NextBtn from "./components/NextBtn";
import { SubmitHandler, useForm } from "react-hook-form";

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

const useStyles = makeStyles(() =>
  createStyles({
    textfield: {
      display: "flex",
    },
    button: {
      float: "right",
    },
  })
);

function Characteristics(props: Props) {
  const [color, setColor] = useState(props.color);
  const [brand, setBrand] = useState(props.brand);
  const [description, setDescription] = useState(props.description);
  const { register, handleSubmit, errors } = useForm<Characteristics>();
  const styles = useStyles();

  const onSubmit: SubmitHandler<Characteristics> = (data) => {
    props.onCharacteristicsSelect({
      color: data.color,
      brand: data.brand,
      description: data.description,
    });
  };

  return (
    <div>
      <Box mt={4} mb={4}>
        <h2 className="h4">Kan du beskrive det du har mistet?</h2>
        <p>
          Valgt gjenstand:<b> {props.subCategory}</b>
        </p>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                name="brand"
                helperText={
                  !!errors.brand
                    ? errors.brand.message
                    : "For eksempel Samsung, Stormberg, Patagonia"
                }
                value={brand}
                error={!!errors.brand}
                onChange={(event) => setBrand(event.target.value)}
                variant="standard"
                inputRef={register({
                  maxLength: {
                    value: 250,
                    message: "Merke kan ikke være over 250 tegn.",
                  },
                })}
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
                helperText={
                  !!errors.description
                    ? errors.description.message
                    : "Er det noe unikt med gjenstanden din? Maks 250 tegn."
                }
                value={description}
                error={!!errors.description}
                onChange={(event) => setDescription(event.target.value)}
                variant="standard"
                inputRef={register({
                  required:
                    "Vennligst legg til en beskrivelse av gjenstanden din",
                  maxLength: {
                    value: 250,
                    message: "Beskrivelse kan ikke være mer enn 250 tegm.",
                  },
                })}
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
      </form>
    </div>
  );
}

export default Characteristics;
