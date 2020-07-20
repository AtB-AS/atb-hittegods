import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

export type Props = {
  id: string;
  name: string;
  Options: string[];
  onChange: (value: string | null) => void;
};

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

function Select(props: Props) {
  const classes = useStyles();
  const { Options, id } = props;
  return (
    <Autocomplete
      id="combo-box-demo"
      options={Options.map((option) => option)}
      getOptionLabel={(option) => option}
      className={classes.TextField}
      renderInput={(params) => (
        <TextField
          placeholder="Vennligst velg"
          {...params}
          variant="outlined"
          id={id}
        />
      )}
      onChange={(evt, value) => props.onChange(value)}
    />
  );
}

export default Select;
