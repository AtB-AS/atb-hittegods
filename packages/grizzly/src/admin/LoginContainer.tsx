import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#f8f8f8",
      display: "grid",
      gridTemplateRows: "auto 1fr",
      height: "100vh",
      fontSize: "18px",
    },
    header: {
      height: "80px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      color: "#fff",
      backgroundColor: "#00758d",
    },
    container: {
      display: "grid",
      placeItems: "center",
    },
    content: {
      width: "365px",
      boxSizing: "border-box",
      padding: "30px",
      textAlign: "center",
    },
  })
);

export const LoginContainer: React.FunctionComponent = ({ children }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <header className={styles.header}>
        <h1>Hittegods admin</h1>
      </header>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </Box>
  );
};

export default LoginContainer;
