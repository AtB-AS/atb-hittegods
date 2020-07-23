import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
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
      gridTemplate: "auto 1fr / auto",
    },
    header: {
      height: "80px",
      justifyContent: "flex-start",
      alignItems: "center",
      display: "flex",
      color: "#fff",
      paddingLeft: "20px",
      backgroundColor: "#00758d",
    },
    nav: {
      display: "flex",
      alignItems: "center",
    },
    main: {
      overflowY: "auto",
      backgroundColor: "#f8f8f8",
    },
    linkList: {
      margin: "0 0 0 20px",
      padding: 0,
      listStyle: "none",
    },
    linkListItem: {
      display: "inline-block",
      padding: "0 20px",
    },
    navItem: {
      fontSize: "20px",
      color: "#fff",
      paddingBottom: "2px",
      "&:hover, &:active, &.active": {
        color: "#fff",
        textDecoration: "none",
        borderBottom: "2px solid #fff",
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
        <nav className={styles.nav}>
          <Logo className={styles.icon} />
          <ul className={styles.linkList}>
            {routes.map((route) => (
              <li key={route.path} className={styles.linkListItem}>
                <NavLink className={styles.navItem} to={route.path}>
                  {route.title}
                </NavLink>
              </li>
            ))}
          </ul>
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
          <Route exact path="/admin">
            <Redirect to="/admin/henvendelser" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default Layout;
