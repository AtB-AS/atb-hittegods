import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Header from "../components/header";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#4B575F",
      display: "grid",
      gridTemplateRows: "auto 1fr",
      height: "100vh",
    },
    container: {
      display: "grid",
      placeItems: "center",
      color: "#fff",
    },
    content: {
      width: "350px",
      boxSizing: "border-box",
      padding: "30px",
      textAlign: "center",
      color: "#fff",
    },
  })
);

export const LoginContainer: React.FunctionComponent = ({ children }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </Box>
  );
};

export default LoginContainer;
