import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "calc(100vh - 80px)",
      overflow: "scroll",
      display: "grid",
      gridTemplateColumns: "60% 1fr",
    },
    withToolbar: {
      height: "calc(100vh - 208px)",
      overflow: "scroll",
      display: "grid",
      gridTemplateColumns: "60% 1fr",
    },
  })
);

const Content: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.withToolbar}>{children}</div>;
};

export default Content;
