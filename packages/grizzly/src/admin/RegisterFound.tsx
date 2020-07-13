import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Box, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ContactInfo from "../ContactInfo";
import { categoryData, subCatStrings } from "../components/subCategoryData";
import { useForm, SubmitHandler } from "react-hook-form";
import { log } from "util";
import { colorData } from "../components/colorConstant";
import { lineData } from "../components/lineConstants";

type Props = {
  name: string;
  phoneNumber: string;
  email: string;
};

type OptionProps = {
  name: string;
};

type DropdownProps = {
  name: string;
  Options: OptionProps[];
  onChanged: (value: string) => void;
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  TextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50%",
  },
  textfield: {
    display: "flex",
    width: "50%",
  },
  heading: {
    fontWeight: 300,
    fontSize: "24px",
  },
  headingh2: {
    fontWeight: 350,
    fontSize: "36px",
  },
}));

function RegDropdown(props: DropdownProps) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">{props.name}</InputLabel>
      <Select
        native
        defaultValue=""
        id="grouped-native-select"
        name={props.name}
        onChange={(event: any, string) => props.onChanged(event.target.value)}
      >
        <option aria-label="None" value="" />
        <optgroup label={props.name}>
          {props.Options.map((option) => (
            <option value={option.name}>{option.name}</option>
          ))}
        </optgroup>
      </Select>
    </FormControl>
  );
}

type FormValues = {
  mainCat: string;
  subCat: string;
  color: string;
  line: string;
};

function RegisterFound(
  props: Props,
  contactInfo: ContactInfo,
  formValues: FormValues
) {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm<Props>();
  const catData = categoryData;
  const [mainCat, setMainCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [color, setColor] = useState("");
  const [line, setLine] = useState("");

  const handleChange = (event: any) => {
    const name = event.target.name;
    setMainCat(event.target.value);
  };

  function getSubCatData(mainCat: string) {
    if (mainCat) {
      return categoryData.find((mainCatName) => mainCatName.name === mainCat)!
        .subCategories;
    } else {
      return [{ name: "velg hovedkategori", imgUrl: "yes" }];
    }
  }

  function sendForm() {
    console.log(mainCat);
  }

  return (
    <div>
      <form onSubmit={sendForm}>
        <h2>Registrer funn</h2>

        <RegDropdown
          name={"Kategori"}
          Options={catData.map((catName) => ({ name: catName.name }))}
          onChanged={setMainCat}
        />
        <RegDropdown
          name={"Underkategori"}
          Options={getSubCatData(mainCat).map((subCatName) => ({
            name: subCatName.name,
          }))}
          onChanged={setSubCat}
        />
        <RegDropdown
          name={"Farge"}
          Options={colorData.map((colorName: { name: string }) => ({
            name: colorName.name,
          }))}
          onChanged={setColor}
        />
        <RegDropdown
          name={"Linje"}
          Options={lineData.map((lineName: { line: string }) => ({
            name: lineName.line,
          }))}
          onChanged={setColor}
        />

        <Box mt={3}>
          <form noValidate>
            <TextField
              label="Dato"
              type="date"
              defaultValue={new Date()}
              className={classes.TextField}
              InputLabelProps={{
                shrink: true,
              }}
              //value={date}
              inputProps={{
                min: ((d) => new Date(d.setDate(d.getDate() - 90)))(new Date())
                  .toJSON()
                  .split("T")[0],
                max: new Date().toJSON().split("T")[0],
              }}
              //onChange={(event) => setDate(event.target.value)}
            />
          </form>
        </Box>
        <Grid item xs={12}>
          <h3 className={classes.heading}>Merke</h3>
          <TextField
            className={classes.textfield}
            type="text"
            name="Brand"
            //value={email}
            label="Merke"
            defaultValue={props.email}
            helperText={errors.email?.message}
            error={!!errors.email}
            variant="outlined"
            inputRef={register({
              required: "Dette feltet må du fylle inn",
            })}
            inputProps={{}}
            //TODO InputProps not working -> https://material-ui.com/components/text-fields/ or https://codesandbox.io/s/6v444wnvp3?file=/src/FormattedInput.js
          />
        </Grid>
        <Grid item xs={12}>
          <h3 className={classes.heading}>Beskrivelse</h3>
          <TextField
            className={classes.textfield}
            type="text"
            name="description"
            //value={email}
            label="Beskrivelse"
            defaultValue={props.email}
            helperText={errors.email?.message}
            error={!!errors.email}
            variant="outlined"
            inputRef={register({
              required: "Dette feltet må du fylle inn",
            })}
            inputProps={{}}
            //TODO InputProps not working -> https://material-ui.com/components/text-fields/ or https://codesandbox.io/s/6v444wnvp3?file=/src/FormattedInput.js
          />
        </Grid>
        <Box mt={4} mb={4}>
          <h2>Kontaktinformasjon</h2>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3 className={classes.heading}>Navn</h3>
            <TextField
              className={classes.textfield}
              type="text"
              name="name"
              defaultValue={props.name}
              helperText={errors.name?.message}
              label="Navn"
              error={!!errors.name}
              variant="outlined"
              inputProps={{ minLength: 2, maxLength: 40 }}
              inputRef={register({
                required: "Husk å legg til navn",
                minLength: {
                  value: 2,
                  message: "Navn må bestå av minst to bokstaver.",
                },
                maxLength: {
                  value: 40,
                  message: "Navn kan ikke være over 40 bokstaver. ",
                },
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <h3 className={classes.heading}>Mobil</h3>

            <TextField
              className={classes.textfield}
              type="text"
              name="phoneNumber"
              defaultValue={props.phoneNumber}
              label="Telefonummer"
              helperText={errors.phoneNumber?.message}
              error={!!errors.phoneNumber}
              variant="outlined"
              inputRef={register({
                required: "Husk å legge til ditt telefonnummer",
                minLength: {
                  value: 8,
                  message: "Telefonnummeret må bestå av minst 8 tall",
                },
                maxLength: {
                  value: 12,
                  message: "Telefonnummeret er for langt",
                },
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <h3 className={classes.heading}>E-post</h3>
            <TextField
              className={classes.textfield}
              type="text"
              name="email"
              //value={email}
              label="E-post"
              defaultValue={props.email}
              helperText={errors.email?.message}
              error={!!errors.email}
              variant="outlined"
              inputRef={register({
                required: "Dette feltet må du fylle inn",
              })}
              inputProps={{}}
              //TODO InputProps not working -> https://material-ui.com/components/text-fields/ or https://codesandbox.io/s/6v444wnvp3?file=/src/FormattedInput.js
            />
          </Grid>

          <Grid item xs={12}>
            <Button color="primary" variant="contained" type="submit">
              Ferdig da
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default RegisterFound;
