import React from "react";
import { useAuth } from "./context/authContext";
import LoginContainer from "./LoginContainer";
import Button from "@material-ui/core/Button";
import { Box, createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "./Layout";
import { Helmet } from "react-helmet-async";
import NotificationProvider from "./notificationCenter/NotificationProvider";

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
      <div>
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
        <Helmet>
          <script src="//labelwriter.com/software/dls/sdk/js/DYMO.Label.Framework.latest.js" />
        </Helmet>
      </div>
    );
  } else {
    return (
      <NotificationProvider>
        <Layout />
      </NotificationProvider>
    );
  }
}

export default AdminApp;
