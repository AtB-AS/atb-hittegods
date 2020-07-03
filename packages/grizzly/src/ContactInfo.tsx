import React, { useState } from "react";

import { Box, createStyles, Grid, Theme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
  })
);

function ContactInfo(props: Props, contactInfo: ContactInfo) {
  const [name, setName] = useState(props.name);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [email, setEmail] = useState(props.email);
  const styles = useStyles();

  function onSubmit() {
    props.onContactInfoSelect({ name, phoneNumber, email });
  }

  return (
    <div>
      <Box mt={6}>
        <h2>Kontaktinformasjon</h2>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2 className={styles.heading}>Navn</h2>
            <TextField
              className={styles.textfield}
              type="text"
              value={name}
              label="Navn"
              onChange={(event) => setName(event.target.value)}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <h2 className={styles.heading}>Mobil</h2>

            <TextField
              className={styles.textfield}
              type="text"
              value={phoneNumber}
              label="Telefonummer"
              onChange={(event) => setPhoneNumber(event.target.value)}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <h2 className={styles.heading}>E-post</h2>
            <TextField
              className={styles.textfield}
              type="text"
              value={email}
              label="E-post"
              onChange={(event) => setEmail(event.target.value)}
              variant="outlined"
            ></TextField>
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

export default ContactInfo;
