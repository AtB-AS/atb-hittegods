import React from "react";
import { useAuth } from "./context/authContext";
import Welcome from "./Welcome";
import App from "./App";

function AdminApp() {
  const authCtx = useAuth();
  if (!authCtx?.user) {
    return (
      <div className="centered">
        <a
          href={
            process.env.NODE_ENV === "production"
              ? "/auth/login"
              : "http://localhost:5000/auth/login"
          }
        >
          Logg inn
        </a>
      </div>
    );
  } else {
    return <App />;
  }
}

export default AdminApp;
