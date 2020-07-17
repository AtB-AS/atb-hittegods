import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import Button from "@material-ui/core/Button";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";

type Props = {
  onDateSelect: (date: string) => void;
  date: string;
};

function MissingDate(props: Props) {
  const [date, setDate] = useState(props.date);
  // false: , true:
  const [status, setStatus] = useState(false);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      textField: {
        display: "flex",
        width: "100%",
      },
    })
  );
  const classes = useStyles();

  function onSubmitToday() {
    let date: string;
    // @ts-ignore
    date = new Date().toJSON().split("T")[0];
    console.log(date);
    props.onDateSelect(date);
  }

  function onSubmitYesterday() {
    let yesterday = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date())
      .toJSON()
      .split("T")[0];
    console.log(yesterday);
    props.onDateSelect(yesterday);
  }

  function onSubmitDatepicker() {
    props.onDateSelect(date);
  }

  return (
    <div>
      <Box mt={4} mb={4}>
        <h2>Hvilken dag var det?</h2>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box mt={3}>
            <Button variant="contained" type="submit" onClick={onSubmitToday}>
              I dag
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box mt={3}>
            <Button
              variant="contained"
              type="submit"
              onClick={onSubmitYesterday}
            >
              I går
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mt={3}>
            <form noValidate>
              <TextField
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={date}
                inputProps={{
                  min: ((d) => new Date(d.setDate(d.getDate() - 90)))(
                    new Date()
                  )
                    .toJSON()
                    .split("T")[0],
                  max: new Date().toJSON().split("T")[0],
                }}
                onChange={(event) => {
                  setDate(event.target.value);
                  setStatus(true);
                }}
              />
              {status && (
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  onClick={onSubmitDatepicker}
                >
                  Neste
                </Button>
              )}
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default MissingDate;
