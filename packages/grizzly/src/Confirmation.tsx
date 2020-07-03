import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, createStyles, Theme } from "@material-ui/core";

type Props = {
  name: string;
  email: string;
};

function Confirmation(props: Props) {
  return (
    <div>
      <Box mt={6}>
        <h2>Din henvendelse er registrert!</h2>
        <p>Takk for din henvendelse, {props.name}.</p>
      </Box>
      <Box>
        <p>
          Du vil få en mail din epost: {props.email} med en link til status på
          din henvendelse.
        </p>
        <p>Frykt ikke, AtBjørnar er på saken! :)</p>
      </Box>
    </div>
  );
}

export default Confirmation;
