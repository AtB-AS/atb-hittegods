import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

type Props = {
  onDateSelect: (date: string) => void;
  date: string;
};

function MissingDate(props: Props) {
  const [date, setDate] = useState(props.date);

  function onSubmit() {
    props.onDateSelect(date);
  }

  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <h1>Dato</h1>
        <Paper>
          <h2>Dato</h2>
          <input
            type="text"
            value={props.date}
            onChange={(event) => setDate(event.target.value)}
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

export default MissingDate;
