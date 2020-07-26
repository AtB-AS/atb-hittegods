import React, { useState } from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import NextBtn from "../components/NextBtn";
import InputLabel from "@material-ui/core/InputLabel";

type Props = {
  onDateSelect: (date: string) => void;
  date: string;
};

function MissingDate(props: Props) {
  const [date, setDate] = useState(props.date);
  // Displays "Neste" button if true
  const [status, setStatus] = useState(false);

  const useStyles = makeStyles(() =>
    createStyles({
      textField: {
        display: "flex",
        width: "100%",
      },
      rightAlign: {
        display: "flex",
        justifyContent: "flex-end",
      },
    })
  );
  const classes = useStyles();

  function onSubmitToday() {
    let date: string;
    // @ts-ignore
    date = new Date().toJSON().split("T")[0];
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
        <Typography variant="h2">Hvilken dag var det?</Typography>
        <p>Er du usikker, velg den du tror er nærmest.</p>
      </Box>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          onSubmitDatepicker();
        }}
      >
        <Grid container spacing={3} justify="space-between">
          <Grow in timeout={300}>
            <Grid item xs={6}>
              <Box mt={3}>
                <Button
                  variant="outlined"
                  type="button"
                  onClick={onSubmitToday}
                >
                  I dag
                </Button>
              </Box>
            </Grid>
          </Grow>
          <Grow in timeout={400}>
            <Grid item xs={6}>
              <Box mt={3}>
                <Button
                  variant="outlined"
                  type="button"
                  onClick={onSubmitYesterday}
                >
                  I går
                </Button>
              </Box>
            </Grid>
          </Grow>

          <Grow in timeout={600}>
            <Grid item xs={12}>
              <InputLabel htmlFor="line">Velg dato</InputLabel>
              <TextField
                placeholder="dd.mm.åååå"
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
                  // Displays "Neste" button when true
                  setStatus(true);
                }}
              />
            </Grid>
          </Grow>

          {status && (
            <Grow in>
              <Grid item xs={12}>
                <Box className={classes.rightAlign}>
                  <NextBtn />
                </Box>
              </Grid>
            </Grow>
          )}
        </Grid>
      </form>
    </div>
  );
}

export default MissingDate;
