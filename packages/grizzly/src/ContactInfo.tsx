import React from "react";
import { Box, createStyles, Grid, Theme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import InputLabel from "@material-ui/core/InputLabel";

type Props = {
  onContactInfoSelect: (contactInfo: ContactInfo) => void;
  name: string;
  phoneNumber: string;
  email: string;
};

type ContactInfo = {
  name: string;
  phoneNumber: string;
  email: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfield: {
      display: "flex",
    },
  })
);

function ContactInfo(props: Props, contactInfo: ContactInfo) {
  const styles = useStyles();
  const { register, handleSubmit, errors } = useForm<Props>();

  const onSubmit: SubmitHandler<Props> = (data) => {
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
    let finalNumberFormat = firstPart + " " + secondPart + " " + thirdPart;
    return finalNumberFormat;
  }

  return (
    <div>
      <Box mt={4} mb={4}>
        <h2>Hvordan kan vi kontakte deg?</h2>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
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
          <Grid item xs={12}>
            <InputLabel htmlFor="phoneNumber">Telefonnummer</InputLabel>

            <TextField
              className={styles.textfield}
              autoComplete="tel"
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              defaultValue={props.phoneNumber}
              helperText="for eksempel 90020300"
              //helperText={errors.phoneNumber?.message}
              error={!!errors.phoneNumber}
              variant="standard"
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
            <InputLabel htmlFor="email">E-post</InputLabel>
            <TextField
              className={styles.textfield}
              autoComplete="email"
              type="text"
              name="email"
              id="email"
              defaultValue={props.email}
              helperText="Vil vil sende deg epost om vi finner noe"
              //helperText={errors.email?.message}
              error={!!errors.email}
              variant="standard"
              inputRef={register({
                required: "Dette feltet må du fylle inn",
              })}
              inputProps={{}}
              //TODO InputProps not working -> https://material-ui.com/components/text-fields/ or https://codesandbox.io/s/6v444wnvp3?file=/src/FormattedInput.js
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" type="submit">
              Neste
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default ContactInfo;
