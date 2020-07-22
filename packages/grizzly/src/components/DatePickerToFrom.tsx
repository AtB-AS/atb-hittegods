import React from "react";
import { Box, createStyles, InputLabel, Theme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

type Props = {
  onChangeFrom: (event: any) => void;
  onChangeTo: (event: any) => void;
  fromDate: string;
  toDate: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "inline-flex",
    },
    boxItem: {
      marginLeft: theme.spacing(1),
      display: "inline-block",
    },
    textField: {
      marginRight: theme.spacing(1),
      width: "90%",
    },
  })
);

function DatePickerToFrom(props: Props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.box}>
      <Grid item className={classes.boxItem}>
        <InputLabel htmlFor="fromDate">Fra dato: </InputLabel>
        <TextField
          id="fromDate"
          type="date"
          className={classes.textField}
          value={props.fromDate}
          inputProps={{
            min: ((d) => new Date(d.setDate(d.getDate() - 90)))(new Date())
              .toJSON()
              .split("T")[0],
            max: props.toDate || new Date().toJSON().split("T")[0],
          }}
          onChange={(event) => props.onChangeFrom(event)}
        />
      </Grid>
      <Grid item className={classes.boxItem}>
        <InputLabel htmlFor="toDate">Til dato: </InputLabel>
        <TextField
          type="date"
          className={classes.textField}
          value={props.toDate}
          inputProps={{
            min: props.fromDate,
            max: new Date().toJSON().split("T")[0],
          }}
          onChange={(event) => props.onChangeTo(event)}
        />
      </Grid>
    </Grid>
  );
}

export default DatePickerToFrom;
