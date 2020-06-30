import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

type Props = {
  onLocationSelect: (location: string) => void;
};

function Location(props: Props) {
  const [location, setLocation] = useState("");

  function onSubmit() {
    props.onLocationSelect(location);
  }

  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <h1>Kjennetegn</h1>
        <Paper>
          <h2>Linje</h2>
          <input
            type="text"
            onChange={(event) => setLocation(event.target.value)}
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

export default Location;
