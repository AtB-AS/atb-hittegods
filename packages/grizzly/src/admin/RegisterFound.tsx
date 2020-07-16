import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Box, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { categoryData, subCatStrings } from "../components/subCategoryData";
import { useForm, SubmitHandler } from "react-hook-form";
import { colorData } from "../components/colorConstant";
import { lineData } from "../components/lineConstants";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

type OptionProps = {
  name: string;
};

type DropdownProps = {
  name: string;
  Options: OptionProps[];
  onChanged: (value: string) => void;
};

type FormValues = {
  mainCat: string;
  subCat: string;
  color: string;
  line: string;
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

function RegisterFound() {
  const classes = useStyles();
  const { register, errors } = useForm<FormValues>();

  const catData = categoryData;
  const [mainCat, setMainCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [color, setColor] = useState("");
  const [line, setLine] = useState("");
  const [date, setDate] = useState("");
  const [brand, setBrand] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [tlf, setTlf] = useState("");
  const [email, setEmail] = useState("");

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
  };

  const namedf = () => {
    console.log("funker");
  };

  function getSubCatData(mainCat: string) {
    if (mainCat) {
      return categoryData.find((mainCatName) => mainCatName.name === mainCat)!
        .subCategories;
    } else {
      return [{ name: "velg hovedkategori", imgUrl: "yes" }];
    }
  }

  const sendForm = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(mainCat);

    return fetch("/api/admin/found", {
      method: "post",
      body: JSON.stringify({
        name: name,
        phone: tlf,
        email: email,
        category: mainCat,
        subCategory: subCat,
        color: color,
        line: line,
        brand: brand,
        status: "Funnet",
        description: desc,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <form onSubmit={sendForm}>
        <h2>Registrer funn</h2>

        <RegDropdown
          name={"Kategori"}
          Options={catData.map((catName) => ({ name: catName.name }))}
          onChanged={setMainCat}
        />

        <Autocomplete
          id="combo-box-demo"
          options={getSubCatData(mainCat).map((subCatName) => ({
            name: subCatName.name,
          }))}
          getOptionLabel={(option) => option.name}
          className={classes.TextField}
          renderInput={(params) => (
            <TextField {...params} label="Underkategori" variant="outlined" />
          )}
          onChange={(event, newValue) => {
            if (newValue != null) {
              setSubCat(newValue.name);
            }
          }}
        />

        <Autocomplete
          id="combo-box-demo"
          options={colorData.map((colorName: { name: string }) => ({
            name: colorName.name,
          }))}
          getOptionLabel={(option) => option.name}
          className={classes.TextField}
          renderInput={(params) => (
            <TextField {...params} label="Farge" variant="outlined" />
          )}
          onChange={(event, newValue) => {
            if (newValue != null) {
              setColor(newValue.name);
            }
          }}
        />

        <Autocomplete
          id="combo-box-demo"
          options={lineData.map((lineName: { line: string }) => ({
            name: lineName.line,
          }))}
          getOptionLabel={(option) => option.name}
          className={classes.TextField}
          renderInput={(params) => (
            <TextField {...params} label="Linje" variant="outlined" />
          )}
          onChange={(event, newValue) => {
            if (newValue != null) {
              setLine(newValue.name);
            }
          }}
        />
        <Grid item xs={12}>
          <h3 className={classes.heading}>Merke</h3>
          <TextField
            className={classes.textfield}
            type="text"
            name="Brand"
            //value={email}
            label="Merke"
            defaultValue={email}
            variant="outlined"
            inputRef={register({
              required: "Dette feltet må du fylle inn",
            })}
            inputProps={{}}
            onChange={(event) => setBrand(event.target.value)}
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
            defaultValue={desc}
            variant="outlined"
            inputRef={register({
              required: "Dette feltet må du fylle inn",
            })}
            inputProps={{}}
            onChange={(event) => setDesc(event.target.value)}

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
              defaultValue={name}
              label="Navn"
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
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <h3 className={classes.heading}>Mobil</h3>

            <TextField
              className={classes.textfield}
              type="text"
              name="phoneNumber"
              defaultValue={tlf}
              label="Telefonummer"
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
              onChange={(event) => setTlf(event.target.value)}
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
              defaultValue={email}
              variant="outlined"
              inputRef={register({
                required: "Dette feltet må du fylle inn",
              })}
              inputProps={{}}
              onChange={(event) => setEmail(event.target.value)}

              //TODO InputProps not working -> https://material-ui.com/components/text-fields/ or https://codesandbox.io/s/6v444wnvp3?file=/src/FormattedInput.js
            />
          </Grid>

          <Grid item xs={12}>
            <Button color="primary" variant="contained" type="submit">
              Ferdig da
            </Button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Use Google's location service?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>Funker</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default RegisterFound;
