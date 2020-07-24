import React from "react";
import { createStyles, InputLabel, Theme } from "@material-ui/core";
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
    dateFromItem: {
      display: "inline-block",
    },
    dateToItem: {
      marginLeft: theme.spacing(3),
      display: "inline-block",
    },
  })
);

//Datepicker used for admin
function DatePickerToFrom(props: Props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.box}>
      <Grid item className={classes.dateFromItem}>
        <InputLabel htmlFor="fromDate">Fra dato: </InputLabel>
        <TextField
          id="fromDate"
          type="date"
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
      <Grid item className={classes.dateToItem}>
        <InputLabel htmlFor="toDate">Til dato: </InputLabel>
        <TextField
          type="date"
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
