import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "80px",
      display: "grid",
      gridTemplateColumns: "60% 1fr",
    },
  })
);

const Toolbar: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>{children}</div>
    </div>
  );
};

export default Toolbar;
