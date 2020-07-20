import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import { Box, Grid, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { categoryData, subCatStrings } from "../../components/subCategoryData";

import { colorData } from "../../components/colorConstant";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import RegAutoSelect from "./Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textfield: {
    display: "flex",
    width: "100%",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  label: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  heading: {
    fontWeight: 300,
    fontSize: "24px",
  },
  headingh2: {
    fontWeight: 350,
    fontSize: "36px",
  },
  formContainer: {
    width: "50%",
  },
  dialogContent: { color: "#000000" },
  dialogbox: { minWidth: 400 },
}));

type LineObj = {
  line: string;
  description: string;
};

function RegisterFound() {
  const [mainCat, setMainCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [color, setColor] = useState("");
  const [line, setLine] = useState("");
  const [brand, setBrand] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [tlf, setTlf] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(false);
  const [lines, setLines] = useState<LineObj[]>([]);
  const classes = useStyles();
  const catData = categoryData;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetch("/api/line")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setLines(jsonData.data.lines);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const handleClickOpen = (event: any) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSend = () => {
    sendForm();
    setOpen(false);
    window.location.assign("/admin/lager/");
  };

  const handleCloseSendNew = () => {
    sendForm();
    setOpen(false);
    window.location.reload(false);
  };

  const sendForm = () => {
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
    }).catch(() => {
      setError(true);
    });
  };

  function getSubCatData(mainCat: string) {
    if (mainCat) {
      return categoryData.find((mainCatName) => mainCatName.name === mainCat)!
        .subCategories;
    } else {
      return [{ name: "velg hovedkategori", imgUrl: "yes" }];
    }
  }

  return (
    <Grid container>
      <form className={classes.formContainer}>
        <h2>Registrer funn</h2>
        <Box mt={2} mb={2}>
          <InputLabel htmlFor="mainCategory" className={classes.label}>
            Kategori
          </InputLabel>
          <RegAutoSelect
            id="mainCategory"
            name={"category"}
            Options={catData.map((catName) => catName.name)}
            onChange={(value) => setMainCat(value ?? "")}
          />
        </Box>
        <Box mt={2} mb={2}>
          <InputLabel htmlFor="subCategory" className={classes.label}>
            Underkategori
          </InputLabel>
          <RegAutoSelect
            id="subCategory"
            name={"subCategory"}
            Options={getSubCatData(mainCat).map(
              (subCatName) => subCatName.name
            )}
            onChange={(value) => setSubCat(value ?? "")}
          />
        </Box>
        <Box mt={2} mb={2}>
          <InputLabel htmlFor="color" className={classes.label}>
            Farge
          </InputLabel>
          <RegAutoSelect
            id="color"
            name={"color"}
            Options={colorData.data.map(
              (colorName: { label: string }) => colorName.label
            )}
            onChange={(value) => setColor(value ?? "")}
          />
        </Box>
        <Box mt={2} mb={2}>
          <InputLabel htmlFor="line" className={classes.label}>
            Linje
          </InputLabel>
          <RegAutoSelect
            id="line"
            name={"line"}
            Options={lines.map((lineName) => lineName.line)}
            onChange={(value) => setLine(value ?? "")}
          />
        </Box>

        <Box mt={2} mb={2}>
          <InputLabel htmlFor="brand" className={classes.label}>
            Merke
          </InputLabel>
          <TextField
            className={classes.textfield}
            id="brand"
            type="text"
            name="brand"
            placeholder="Vennligst fyll ut"
            variant="outlined"
            onChange={(event) => setBrand(event.target.value)}
          />
        </Box>
        <Box mt={2} mb={2}>
          <InputLabel htmlFor="desc" className={classes.label}>
            Beskrivelse
          </InputLabel>
          <TextField
            className={classes.textfield}
            id="desc"
            type="text"
            name="description"
            placeholder="Vennligst fyll ut"
            variant="outlined"
            onChange={(event) => setDesc(event.target.value)}
          />
        </Box>
        <Box mt={2} mb={2}>
          <InputLabel htmlFor="name" className={classes.label}>
            Navn
          </InputLabel>
          <TextField
            className={classes.textfield}
            type="text"
            id="name"
            placeholder="Vennligst fyll ut"
            name="name"
            variant="outlined"
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
        <Box mt={2} mb={2}>
          <InputLabel htmlFor="phoneNumber" className={classes.label}>
            Telefonnummer
          </InputLabel>
          <TextField
            className={classes.textfield}
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Vennligst fyll ut"
            variant="outlined"
            onChange={(event) => setTlf(event.target.value)}
          />
        </Box>
        <Box mt={2} mb={2}>
          <InputLabel htmlFor="email" className={classes.label}>
            E-post
          </InputLabel>
          <TextField
            className={classes.textfield}
            type="text"
            id="email"
            name="email"
            placeholder="Vennligst fyll ut"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Box>

        <Box mt={2} mb={2}>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={handleClickOpen}
          >
            Registrer
          </Button>
        </Box>
        <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
          <DialogTitle className={classes.dialogbox}>
            {"Registrert gjenstand:"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.dialogContent}>
              <h4>Sammendrag :</h4>
              <p>Kategori : {mainCat}</p>
              <p>Subkategori : {subCat}</p>
              <p>Farge : {color}</p>
              <p>Linje : {line}</p>
              <p>Merke : {brand}</p>
              <p>Beskrivelse : {desc}</p>
              <p>Navn : {name}</p>
              <p>Telefon : {tlf}</p>
              <p>Email : {email}</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSend} color="primary" autoFocus>
              Ok
            </Button>
            <Button onClick={handleCloseSendNew} color="primary" autoFocus>
              Ny registrering
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </Grid>
  );
}

export default RegisterFound;
