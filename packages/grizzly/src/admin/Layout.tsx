import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core";
import { NavLink, Route, Switch } from "react-router-dom";
import Henvendelser from "./Henvendelser";
import Storage from "./Storage";
import Transit from "./Transit";
import RegisterStorage from "./register/RegisterStorage";
import RegisterTransit from "./register/RegisterTransit";
import PickUp from "./PickUp";
import Logo from "../components/icons/logo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      height: "100vh",
      gridTemplate: "auto 1fr auto / auto 1fr auto;",
    },
    header: {
      gridColumn: "1 / 3",
      height: "80px",
      justifyContent: "flex-start",
      alignItems: "center",
      display: "flex",
      color: "#fff",
      paddingLeft: "20px",
      backgroundColor: "#00758d",
    },
    nav: {
      gridColumn: "1/2",
      width: "180px",
      backgroundColor: "#e4e4e4",
    },
    main: {
      gridColumn: "2/3",
      overflow: "scroll",
      padding: "20px",
      backgroundColor: "#f8f8f8",
    },
    linkList: {
      margin: "60px 0 0",
      padding: 0,
      listStyle: "none",
    },
    linkListItem: {
      display: "block",
    },
    navItem: {
      margin: "5px 0 5px 0",
      padding: "20px 42px 20px",
      fontSize: "18px",
      color: "#fff",
      "&:hover, &:active, &:focus": {
        textDecoration: "none",
        fontWeight: "bold",
        color: "#fff",
      },
    },
    icon: {
      width: "50px",
      height: "50px",
    },
  })
);

const routes = [
  {
    path: "/admin/henvendelser",
    title: "Henvendelser",
  },
  {
    path: "/admin/lager",
    title: "Lager",
  },
  {
    path: "/admin/tilUtlevering",
    title: "Til utlevering",
  },
  {
    path: "/admin/påVei",
    title: "På vei",
  },
];

function Layout() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <nav>
          <Logo className={styles.icon} />
          {routes.map((route) => (
            <NavLink
              key={route.path}
              className={styles.navItem}
              to={route.path}
            >
              {route.title}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        <Switch>
          <Route path="/admin/henvendelser/:id?" component={Henvendelser} />
          <Route path="/admin/lager/registrere" component={RegisterStorage} />
          <Route path="/admin/lager/:id?" exact component={Storage} />
          <Route path="/admin/tilUtlevering/:id?" component={PickUp} />
          <Route path="/admin/påVei/registrer" component={RegisterTransit} />
          <Route path="/admin/påVei" component={Transit} />
        </Switch>
      </main>
    </div>
  );
}

export default Layout;
