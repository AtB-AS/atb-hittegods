import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core";
import { NavLink, Route, Switch, useLocation } from "react-router-dom";
import Henvendelser from "./Henvendelser";
import Storage from "./Storage";
import ReadyToPickUp from "./ReadyToPickUp";
import Transit from "./Transit";
import RegisterFound from "./RegisterFound";

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
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      color: "#fff",
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
      padding: "20px",
      display: "block",
      fontSize: "18px",
      color: "#000",
      "&:hover, &:active, &:focus": {
        color: "#000",
      },
      "&.active, &:hover": {
        display: "block",
        textDecoration: "none",
        backgroundColor: "#f8f8f8",
      },
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
  const location = useLocation();

  const getPageTitle = () => {
    const route = routes.find((route) =>
      location.pathname.includes(route.path)
    );
    return route ? route.title : "Admin";
  };

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1>{getPageTitle()}</h1>
      </header>
      <nav className={styles.nav}>
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
      <main className={styles.main}>
        <Switch>
          <Route path="/admin/henvendelser/:id?" component={Henvendelser} />
          <Route path="/admin/lager/registrere" component={RegisterFound} />
          <Route path="/admin/lager/:id?" exact component={Storage} />
          <Route path="/admin/tilUtlevering" component={ReadyToPickUp} />
          <Route path="/admin/påVei" component={Transit} />
        </Switch>
      </main>
    </div>
  );
}

export default Layout;
