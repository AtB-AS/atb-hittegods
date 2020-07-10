import React from "react";
import { useAuth } from "./context/authContext";
import App from "./App";
import LoginContainer from "./LoginContainer";
import Button from "@material-ui/core/Button";
import { Box, createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginButton: {
      "&:hover, &:active, &:focus": {
        color: "#fff",
      },
    },
  })
);

function AdminApp() {
  const authCtx = useAuth();
  const styles = useStyles();
  if (!authCtx?.user) {
    return (
      <LoginContainer>
        <Button
          size="large"
          href={
            process.env.NODE_ENV === "production"
              ? "/auth/login"
              : "http://localhost:5000/auth/login"
          }
          color="primary"
          type="submit"
          className={styles.loginButton}
          variant="contained"
        >
          Logg inn
        </Button>
        <Box mt={2} mb={2}>
          <p>Standard innlogging med din AtB bruker</p>
        </Box>
      </LoginContainer>
    );
  } else {
    return <App />;
  }
}

export default AdminApp;
