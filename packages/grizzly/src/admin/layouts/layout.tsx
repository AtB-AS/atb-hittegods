import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: "18px",
      height: "100%",
    },
    toolbar: {
      backgroundColor: "red",
      height: "80px",
    },
    main: {
      backgroundColor: "blue",
      height: "calc(100vh - 80px)",
      overflow: "scroll",
      display: "grid",
      gridTemplateColumns: "60% 1fr",
    },
    mainWithToolbar: {
      height: "calc(100vh - 160px)",
      overflow: "scroll",
      display: "grid",
      gridTemplateColumns: "60% 1fr",
    },
    primaryContent: {
      height: "100%",
      overflow: "scroll",
      padding: "20px",
      backgroundColor: "orange",
    },
    secondaryContent: {
      height: "100%",
      overflow: "scroll",
      padding: "20px",
      backgroundColor: "green",
    },
  })
);

function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>diverse innhold</div>
      <main className={classes.mainWithToolbar}>
        <div className={classes.primaryContent}>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
          <h1>primary</h1>
        </div>
        <div className={classes.secondaryContent}>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
          <h1>secondary</h1>
        </div>
      </main>
    </div>
  );
}

export default Layout;
