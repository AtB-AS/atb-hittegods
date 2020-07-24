import React, { useState } from "react";
import {
  Box,
  createStyles,
  Grid,
  Theme,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormHelperText,
  Dialog,
  Grow,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import InputLabel from "@material-ui/core/InputLabel";
import BackBtn from "./components/BackBtn";
import NextBtn from "./components/NextBtn";

type Props = {
  onContactInfoSelect: (contactInfo: ContactInfoType) => void;
  name: string;
  phoneNumber: string;
  email: string;
  submitError?: boolean;
};

export type ContactInfoType = {
  name: string;
  phoneNumber: string;
  email: string;
  terms?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfield: {
      display: "flex",
    },
    fieldsetterms: {
      backgroundColor: "transparent",
    },
    labelterms: {
      marginBottom: 0,
    },
    termdialog: {
      padding: theme.spacing(2),
    },
    rightAlign: {
      display: "flex",
      justifyContent: "flex-end",
    },
    errorMessage: {
      color: "#b2292e",
    },
  })
);

// Copy paste Chrome regex, https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function ContactInfo(props: Props) {
  const styles = useStyles();
  const [showTerms, setShowTerms] = useState(false);
  const { register, handleSubmit, errors } = useForm<ContactInfoType>();
  const handleClickOpen = () => {
    setShowTerms(true);
  };
  const handleClose = () => {
    setShowTerms(false);
  };

  const onSubmit: SubmitHandler<ContactInfoType> = (data) => {
    props.onContactInfoSelect({
      name: data.name,
      phoneNumber: formatPhonenumber(data.phoneNumber),
      email: data.email,
    });
  };

  function formatPhonenumber(phoneNumber: string) {
    let newNumber = phoneNumber.split(" ").join("");
    let firstPart = newNumber.substring(0, 3);
    let secondPart = newNumber.substring(3, 5);
    let thirdPart = newNumber.substring(5, 8);
    return firstPart + " " + secondPart + " " + thirdPart;
  }

  return (
    <div>
      <Box mt={4} mb={4}>
        <h2 className="h4">Hvordan kan vi kontakte deg?</h2>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grow in timeout={200}>
            <Grid item xs={12}>
              <InputLabel htmlFor="name">Navn</InputLabel>
              <TextField
                autoComplete="name"
                className={styles.textfield}
                type="text"
                id="name"
                name="name"
                defaultValue={props.name}
                helperText={errors.name?.message}
                error={!!errors.name}
                variant="standard"
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
          </Grow>
          <Grow in timeout={400}>
            <Grid item xs={12}>
              <InputLabel htmlFor="email">E-post</InputLabel>
              <TextField
                className={styles.textfield}
                autoComplete="email"
                type="text"
                name="email"
                id="email"
                defaultValue={props.email}
                helperText={
                  !!errors.email
                    ? errors.email.message
                    : "Vil vil sende deg epost om vi finner noe"
                }
                //helperText={errors.email?.message}
                error={!!errors.email}
                variant="standard"
                inputRef={register({
                  required: "Husk å legge til epost",
                  pattern: {
                    value: emailRegex,
                    message: "Ugyldig epost",
                  },
                })}
              />
            </Grid>
          </Grow>
          <Grow in timeout={600}>
            <Grid item xs={12}>
              <InputLabel htmlFor="phoneNumber">Telefonnummer</InputLabel>

              <TextField
                className={styles.textfield}
                autoComplete="tel"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                defaultValue={props.phoneNumber}
                helperText="Slik at vi kan kontakte deg ved behov"
                //helperText={errors.phoneNumber?.message}
                error={!!errors.phoneNumber}
                variant="standard"
                inputRef={register({
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
          </Grow>
          <Grow in timeout={800}>
            <Grid item>
              <FormControl
                error={!!errors.terms?.message}
                component="fieldset"
                className={styles.fieldsetterms}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      name="terms"
                      inputRef={register({
                        required:
                          "Du må godkjenne våre bruksvilkår for å sende inn",
                      })}
                    />
                  }
                  className={styles.labelterms}
                  label={
                    <span>
                      Jeg godkjenner{" "}
                      <a
                        href=""
                        onClick={(event) => {
                          event.preventDefault();
                          handleClickOpen();
                        }}
                      >
                        bruksvilkårene
                      </a>
                    </span>
                  }
                />
                {errors.terms?.message && (
                  <FormHelperText>{errors.terms?.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grow>
          <Grow in timeout={1000}>
            <Grid item xs={12}>
              {props.submitError && (
                <p className={styles.errorMessage}>
                  Beklager, men det oppstod en feil ved innsending. Venligst
                  prøv igjen eller ta kontakt med AtB kundeservice
                </p>
              )}
              <Box className={styles.rightAlign}>
                <NextBtn>Send inn</NextBtn>
              </Box>
            </Grid>
          </Grow>
        </Grid>
      </form>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={showTerms}
      >
        <Box className={styles.termdialog}>
          <h4>Vilkår for bruk</h4>
          <p>
            Ved å sende inn godkjenner jeg at AtB kan bruke kontaktinfoen min
            til å kontakte meg angående mitt hittegods. Det er nødvendig for oss
            å lagre denne informasjonen for at vi skal kunne kontakte deg hvis
            vi finner det du har mistet. Dette innebærer:
          </p>
          <p>- Lagring av e-post, navn og telefonnummer i 3 måneder.</p>
          <p>
            Tidsrammen for lagringen er basert på hittegodsloven som tilsier at
            vi skal lagre hittegods i 3 måneder. Ved lagring av kontaktinfo i 3
            måneder er vi sikre på å kunne kontakte deg dersom vi finner
            gjenstanden din. Kontaktinfoen vil ikke forlate AtB, og vi vil ikke
            dele den med noen utenfor vår organisasjon. Vil du slette din data
            før det har gått 3 måneder, kan du sende mail til hittegods@atb.no.
          </p>
          <BackBtn onClick={handleClose} />
        </Box>
      </Dialog>
    </div>
  );
}

export default ContactInfo;
