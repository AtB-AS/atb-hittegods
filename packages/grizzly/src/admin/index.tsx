import React from "react";
import AdminApp from "./AdminApp";
import { AuthProvider } from "./context/authContext";
import "./index.css";

function Admin() {
  return (
    <AuthProvider>
      <AdminApp />
    </AuthProvider>
  );
}

export default Admin;
