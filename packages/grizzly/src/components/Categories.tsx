import React from "react";
import { createStyles, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridColumnGap: "20px",
      listStyle: "none",
      margin: "0",
      padding: "0",
    },
  })
);

const Categories: React.FunctionComponent = ({ children }) => {
  const styles = useStyles();
  return (
    <ul className={styles.root}>
      {React.Children.map(children, (child: any) => (
        <li>{child}</li>
      ))}
    </ul>
  );
};

export default Categories;
