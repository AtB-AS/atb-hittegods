import React, { useState } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import Button from "@material-ui/core/Button";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box, Container } from "@material-ui/core";

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
        width: "100%",
      },
      btn: {
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
        height: "60px",
        padding: "0 30px",
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

  return (
    <div>
      <Box mt={4} mb={4}>
        <h2>Når mistet du gjenstanden din?</h2>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box mt={3}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={onSubmitToday}
              className={classes.btn}
            >
              I dag
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box mt={3}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={onSubmitYesterday}
              className={classes.btn}
            >
              I går
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mt={3}>
            <form noValidate>
              <TextField
                label="Dato"
                type="date"
                defaultValue={new Date()}
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
                  props.onDateSelect(event.target.value);
                }}
              />
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default MissingDate;
