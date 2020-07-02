import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

function ContactInfo(props: Props, contactInfo: ContactInfo) {
  const [name, setName] = useState(props.name);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [email, setEmail] = useState(props.email);

  function onSubmit() {
    props.onContactInfoSelect({ name, phoneNumber, email });
  }

  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <h1>Kontaktinformasjon</h1>
        <Paper>
          <h2>Navn</h2>
          <TextField
            type="text"
            value={name}
            label="Navn"
            onChange={(event) => setName(event.target.value)}
            variant="outlined"
          ></TextField>
        </Paper>
        <Paper>
          <h2>Mobil</h2>

          <TextField
            type="text"
            value={phoneNumber}
            label="Telefonummer"
            onChange={(event) => setPhoneNumber(event.target.value)}
            variant="outlined"
          ></TextField>
        </Paper>
        <Paper>
          <h2>E-post</h2>
          <TextField
            type="text"
            value={email}
            label="E-post"
            onChange={(event) => setEmail(event.target.value)}
            variant="outlined"
          ></TextField>
        </Paper>
        <Paper>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={onSubmit}
          >
            Neste
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ContactInfo;
