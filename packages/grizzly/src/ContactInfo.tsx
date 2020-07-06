import React, { createRef, useState } from "react";

import { Box, createStyles, Grid, Theme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, SubmitHandler } from "react-hook-form";

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

function ContactInfo(props: Props, contactInfo: ContactInfo) {
  const styles = useStyles();
  const { register, handleSubmit, watch, errors } = useForm<Props>();

  const onSubmit: SubmitHandler<Props> = (data) => {
    props.onContactInfoSelect({
      name: data.name,
      phoneNumber: data.phoneNumber,
      email: data.email,
    });
  };

  return (
    <div>
      <Box mt={6}>
        <h2 className={styles.headingh2}>Kontaktinformasjon</h2>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12}>
              <h3 className={styles.heading}>Navn</h3>
              <TextField
                className={styles.textfield}
                type="text"
                name="name"
                defaultValue={props.name}
                helperText={errors.name?.message}
                label="Navn"
                error={!!errors.name}
                variant="outlined"
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
              <h3 className={styles.heading}>Mobil</h3>

              <TextField
                className={styles.textfield}
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
                    message: "Telefonnummeret må bestå av 8 tall",
                  },
                  maxLength: {
                    value: 8,
                    message: "Telefonnummeret må bestå av 8 tall",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <h3 className={styles.heading}>E-post</h3>
              <TextField
                className={styles.textfield}
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
                Neste
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>
    </div>
  );
}

export default ContactInfo;
