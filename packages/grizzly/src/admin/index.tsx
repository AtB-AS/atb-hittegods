import React from "react";
import { AuthProvider, useAuth } from "./auth/authContext";
import LoginContainer from "./LoginContainer";
import Button from "@material-ui/core/Button";
import { Box, createStyles } from "@material-ui/core";
import Layout from "./Layout";
import NotificationProvider from "./notificationCenter/NotificationProvider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    loginButton: {
      "&:hover, &:active, &:focus": {
        color: "#fff",
      },
    },
  })
);

function Admin() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

function App() {
  const authCtx = useAuth();
  if (!authCtx?.user) {
    return <UnAuthorized />;
  }
  return <Authorized />;
}

function UnAuthorized() {
  const styles = useStyles();
  return (
    <div>
      <LoginContainer>
        <Button
          size="large"
          href={
            process.env.NODE_ENV === "production"
              ? "/auth/login"
              : "http://localhost:5000/auth/login"
          }
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
    </div>
  );
}

function Authorized() {
  return (
    <NotificationProvider>
      <Layout />
    </NotificationProvider>
  );
}

export default Admin;
