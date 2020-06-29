import React from "react";
import "./App.css";
import BjornesnuteButton from "./components/bjornesnuteButton";
import categoryBags from "./components/img/categoryBags.png";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import logo from "./components/img/AtB_gra-kopi.png";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import Characteristics from "./Characteristics";
import Location from "./Location";
import MissingDate from "./MissingDate";
import ContactInfo from "./ContactInfo";
import Confirmation from "./Confirmation";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/hovedkategori">
            <MainCategory />
          </Route>
          <Route path="/underkategori">
            <SubCategory />
          </Route>
          <Route path="/kjennetegn">
            {" "}
            <Characteristics />
          </Route>
          <Route path="/lokasjon">
            <Location />
          </Route>
          <Route path="/tidspunkt">
            <MissingDate />
          </Route>
          <Route path="/personopplysninger">
            <ContactInfo />
          </Route>
          <Route path="/bekreftelse">
            <Confirmation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
