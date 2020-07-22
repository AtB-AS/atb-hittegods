import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      overflowY: "auto",
    },
  })
);

const PrimaryContent: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default PrimaryContent;
