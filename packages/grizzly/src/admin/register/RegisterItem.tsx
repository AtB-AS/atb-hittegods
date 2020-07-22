import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import { Box, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { categoryData } from "../../components/subCategoryData";
import { useForm } from "react-hook-form";
import { colorData } from "../../components/colorConstant";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import RegAutoSelect from "./Select";
import { Link } from "react-router-dom";
import { isPrinterConnected, printLabel } from "../../printer/printer";
import { log } from "util";
import useNotification from "../notificationCenter/useNotification";

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

type Props = {
  status: string;
  pathToComp: string;
};

function RegisterFound(props: Props) {
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
  const [itemIdRegistered, setItemIdRegistered] = useState("");
  const [printStatus, setPrintStatus] = useState(false);

  const classes = useStyles();
  const catData = categoryData;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { notify } = useNotification();

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

  useEffect(() => {
    if (!isPrinterConnected()) {
      notify({
        type: "error",
        description: "Printer ikke koblet til! Lapp blir ikke skrevet ut",
      });
    }
  }, []);

  const { register, handleSubmit, errors } = useForm();

  const sendForm = () => {
    const payload = {
      name: name,
      phone: tlf,
      email: email,
      category: mainCat,
      subCategory: subCat,
      color: color,
      line: line,
      brand: brand,
      status: props.status,
      description: desc,
    };

    return fetch("/api/admin/found", {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((regData) => {
        console.log("test");
        setItemIdRegistered(regData.data.foundid);
        console.log("before print");
        console.log(payload);
        return regData;
      })
      .then((regData) => {
        console.log("regData : ", regData);
        setOpen(true);
        const status = printLabel(payload, regData.data.foundid);
        console.log("status : " + status);
        return status;
      })
      .then((status) => {
        console.log("print status: ", status);
        if (status === "print ok") {
          setPrintStatus(true);
        }
      })
      .catch((e) => {
        console.log("error:", e);
        setError(true);
      });
  };

  const getSubCatData = (mainCat: string): string[] => {
    if (mainCat) {
      return categoryData
        .find((mainCatName) => mainCatName.name === mainCat)!
        .subCategories.map((subCat) => {
          return subCat.name;
        });
    } else {
      return ["velg hovedkategori"];
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSendNew = () => {
    setOpen(false);
    window.location.reload(false);
  };

  return (
    <Grid container>
      <form className={classes.formContainer} onSubmit={handleSubmit(sendForm)}>
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
            inputRef={register({
              required: "Dette feltet må du fylle inn",
            })}
            errorMessage={errors.category?.message}
          />
        </Box>
        <Box mt={2} mb={2}>
          <InputLabel htmlFor="subCategory" className={classes.label}>
            Underkategori
          </InputLabel>
          <RegAutoSelect
            id="subCategory"
            name={"subCategory"}
            Options={getSubCatData(mainCat).map((subCatName) => {
              return subCatName;
            })}
            onChange={(value) => setSubCat(value ?? "")}
            inputRef={register({
              required: "Dette feltet må du fylle inn",
            })}
            errorMessage={errors.subCategory?.message}
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
            inputRef={register({
              required: "Dette feltet må du fylle inn",
            })}
            errorMessage={errors.color?.message}
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
            inputRef={register({
              required: "Dette feltet må du fylle inn",
            })}
            error={!!errors.brand?.message}
            helperText={errors.brand?.message}
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
            inputRef={register({
              required: "Dette feltet må du fylle inn",
            })}
            error={!!errors.description?.message}
            helperText={errors.description?.message}
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
            inputProps={{ minLength: 2, maxLength: 40 }}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Box>

        <Box mt={2} mb={2}>
          <Button color="primary" variant="contained" type="submit">
            Registrer
          </Button>

          <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
            <DialogTitle className={classes.dialogbox}>
              {"Gjenstanden er registrert"}
            </DialogTitle>

            <DialogActions>
              <Button
                onClick={handleClose}
                type="button"
                color="primary"
                autoFocus
                href={props.pathToComp}
              >
                Tilbake til oversiktsiden
              </Button>
              <Button
                onClick={handleCloseSendNew}
                type="button"
                color="primary"
                autoFocus
                href={props.pathToComp + "/registrere"}
              >
                Ny registrering
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </form>
    </Grid>
  );
}

export default RegisterFound;
