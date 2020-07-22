import React from "react";
import { createStyles, IconButton, InputBase, Theme } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

type Props = {
  onChange: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      width: "50%",
    },
    iconButton: {
      padding: 10,
    },
    button: {
      color: theme.palette.background.paper,
      backgroundColor: theme.palette.secondary.light,
      padding: "12px 16px 10px",
      float: "right",
      "&:hover": {
        color: theme.palette.background.paper,
      },
    },
    gridItem: {
      display: "grid",
    },
  })
);

function SeachField(props: Props) {
  const classes = useStyles();
  return (
    <Box>
      <InputBase
        className={classes.input}
        placeholder="Søk på henvendelser"
        onChange={props.onChange}
        inputProps={{ "aria-label": "Søk på henvendelser" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default SeachField;
