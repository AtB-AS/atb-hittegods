import React, { useState, useEffect } from "react";
import LoginContainer from "../LoginContainer";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core";

interface User {
  given_name: string;
  upn: string;
}

interface AuthContextInterface {
  user?: User;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "#fff",
    },
  })
);

const AuthContext = React.createContext<AuthContextInterface | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const styles = useStyles();

  useEffect(() => {
    fetch("/auth/user")
      .then((response) => {
        if (response.status === 401) {
          // Request was unauthorized, redirect to login
          // window.location.href = `${window.location.origin}/login`;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <LoginContainer>
        <p>Huff da</p>
      </LoginContainer>
    );
  }
  if (isLoading) {
    return (
      <LoginContainer>
        <CircularProgress className={styles.root} />
      </LoginContainer>
    );
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
