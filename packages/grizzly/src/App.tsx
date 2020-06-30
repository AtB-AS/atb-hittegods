import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import Location from "./Location";
import MissingDate from "./MissingDate";
import ContactInfo from "./ContactInfo";
import Confirmation from "./Confirmation";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Wizard from "./Wizard";
import Characteristics from "./Characteristics";

type reg = {
  [key: string]: string;
};

function App() {
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [characteristics, setChar] = useState({});
  const [loc, setLoc] = useState("");
  const [date, setNewDate] = useState("");
  const [contactInfo, setContInfo] = useState({});
  const history = useHistory();

  function nextPage(path: string) {
    console.log("push", history);
    history.push(path);
  }

  const regForm: reg = {
    category: "",
    subCategory: "",
    characteristics: "",
    location: "",
    date: "",
    contactInfo: "",
  };

  function setCategory(cat: string) {
    setCat(cat);
    nextPage("/underkategori");
    //updateRegForm(value, "category");
    console.log("Kategori: ", cat);
  }

  function setSubCategory(subCat: string) {
    setSubCat(subCat);
    nextPage("/kjennetegn");
    console.log("underkategori: ", subCat);
  }

  function setCharacteristics(characteristics: Characteristics) {
    setChar(characteristics);
    console.log("kjennetegn ", characteristics);
    nextPage("lokasjon");
  }

  function setLocation(location: string) {
    setLoc(location);
    console.log("linje: ", location);
    nextPage("/tidspunkt");
  }

  function setDate(date: string) {
    setNewDate(date);
    console.log("Dato: ", date);
    nextPage("/personopplysninger");
  }

  function setContactInfo(contactInfo: ContactInfo) {
    setContInfo(contactInfo);
    console.log("KontaktInfo: ", contactInfo);
    nextPage("/bekreftelse");
  }

  /*
  function updateRegForm(value: string, key: string) {
    regForm[key] = value;
    console.log(regForm);
  }
  */

  return (
    <div>
      <Switch>
        <Route path="/hovedkategori">
          <MainCategory onCategorySelect={setCategory} />
        </Route>
        <Route path="/underkategori">
          <SubCategory onCategorySelect={setSubCategory} />
        </Route>
        <Route path="/kjennetegn">
          <Characteristics onCharacteristicsSelect={setCharacteristics} />
        </Route>
        <Route path="/lokasjon">
          <Location onLocationSelect={setLocation} />
        </Route>
        <Route path="/tidspunkt">
          <MissingDate onDateSelect={setDate} />
        </Route>
        <Route path="/personopplysninger">
          <ContactInfo onContactInfoSelect={setContactInfo} />
        </Route>
        <Route path="/bekreftelse">
          <Confirmation />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
