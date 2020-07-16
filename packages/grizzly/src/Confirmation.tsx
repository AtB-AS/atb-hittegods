import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, createStyles, Theme } from "@material-ui/core";

type Props = {
  name: string;
  email: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfield: {
      display: "flex",
    },
    headingh2: {
      fontWeight: 350,
      fontSize: "36px",
    },
    heading: {
      fontWeight: 300,
      fontSize: "24px",
    },
  })
);

function Confirmation(props: Props) {
  const styles = useStyles();
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
