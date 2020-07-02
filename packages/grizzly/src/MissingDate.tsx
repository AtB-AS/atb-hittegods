import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

type Props = {
  onDateSelect: (date: string) => void;
  date: string;
};

function MissingDate(props: Props) {
  const [date, setDate] = useState(props.date);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: "flex",
        flexWrap: "wrap",
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    })
  );
  const classes = useStyles();

  function onSubmit() {
    props.onDateSelect(date);
  }

  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <h1>Når mistet du gjenstanden din?</h1>
        <form className={classes.container} noValidate>
          <TextField
            label="Dato"
            type="date"
            defaultValue="2020/07/02"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </form>

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
  );
}

export default MissingDate;
