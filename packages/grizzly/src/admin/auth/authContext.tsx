import React, { useState, useEffect } from "react";
import LoginContainer from "../LoginContainer";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core";

interface User {
  given_name: string;
  upn: string;
}

interface AuthContextInterface {
  user?: User;
}

const useStyles = makeStyles(() =>
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
        if (!response.ok) {
          return null;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setUser(data);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <LoginContainer>
        <p>Login feilet</p>
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
