import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

type Props = {
  onContactInfoSelect: (contactInfo: ContactInfo) => void;
};

type ContactInfo = {
  name: string;
  phoneNumber: string;
  email: string;
};

function ContactInfo(props: Props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit() {
    props.onContactInfoSelect({ name, phoneNumber, email });
  }

  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <h1>Kontaktinformasjon</h1>
        <Paper>
          <h2>Navn</h2>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </Paper>
        <Paper>
          <h2>Mobil</h2>
          <input
            type="text"
            onChange={(event) => setPhoneNumber(event.target.value)}
          ></input>
        </Paper>
        <Paper>
          <h2>Mail</h2>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </Paper>
        <Paper>
          <button type="submit" onClick={onSubmit}>
            Neste
          </button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ContactInfo;
