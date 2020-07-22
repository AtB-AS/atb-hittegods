import React from "react";
import { createStyles, Theme } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

type Props = {
  onChange: (event: any) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputBox: {
      marginLeft: theme.spacing(1),
      display: "inline-block",
    },
    input: {
      flex: 1,
      width: "90%",
    },
  })
);

function SeachField(props: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.inputBox}>
      <InputLabel htmlFor="searchfield">Søk:</InputLabel>
      <TextField
        className={classes.input}
        id="searchfield"
        onChange={(event) => {
          props.onChange(event);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SeachField;
