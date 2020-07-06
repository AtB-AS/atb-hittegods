import React, { useState } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import Button from "@material-ui/core/Button";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

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
      headingh2: {
        fontWeight: 350,
        fontSize: "36px",
      },
    })
  );
  const classes = useStyles();

  function onSubmit() {
    props.onDateSelect(date);
  }

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
      <Box mt={6}>
        <h2 className={classes.headingh2}>Når mistet du gjenstanden din?</h2>
      </Box>
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
              min: ((d) => new Date(d.setDate(d.getDate() - 90)))(new Date())
                .toJSON()
                .split("T")[0],
              max: new Date().toJSON().split("T")[0],
            }}
            onChange={(event) => setDate(event.target.value)}
          />
        </form>
      </Box>
      <Box mt={3}>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          onClick={onSubmit}
        >
          Neste
        </Button>
      </Box>
    </div>
  );
}

export default MissingDate;
