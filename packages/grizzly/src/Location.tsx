import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

type Props = {
  onLocationSelect: (location: string) => void;
  line: string;
};

function Location(props: Props) {
  const [line, setLocation] = useState(props.line);

  function onSubmit() {
    props.onLocationSelect(line);
  }

  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <h1>Hvor mistet du gjenstanden din?</h1>
        <Paper>
          <h2>Linje</h2>
          <TextField
            type="text"
            value={line}
            label="Linje"
            onChange={(event) => setLocation(event.target.value)}
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

export default Location;
