import React, { useState, useEffect } from "react";

interface User {
  given_name: string;
  upn: string;
}

interface AuthContextInterface {
  user?: User;
}

const AuthContext = React.createContext<AuthContextInterface | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/auth/user")
      .then((response) => {
        if (response.status === 401) {
          // Request was unauthorized, redirect to login
          window.location.href = `${window.location.origin}/login`;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="centered">Laster...</p>;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
