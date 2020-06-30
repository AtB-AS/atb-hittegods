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
  const [characteristics, setChar] = useState({
    color: "",
    brand: "",
    description: "",
  });
  const [loc, setLoc] = useState("");
  const [date, setNewDate] = useState("");
  const [contactInfo, setContInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const history = useHistory();

  function nextPage(path: string) {
    console.log("push", history);
    history.push(path);
  }

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
    prepareObject();
  }

  /*
  function updateRegForm(value: string, key: string) {
    regForm[key] = value;
    console.log(regForm);
  }
  */

  function prepareObject() {
    const regForm: reg = {};
    regForm["name"] = contactInfo.name;
    regForm["email"] = contactInfo.email;
    regForm["phoneNumber"] = contactInfo.phone;
    regForm["categpry"] = cat;
    regForm["subCategpry"] = subCat;
    regForm["line"] = loc;
    regForm["description"] = characteristics.description;
    regForm["brand"] = characteristics.brand;
    regForm["color"] = characteristics.color;
    regForm["date"] = date;
    regForm["to"] = "to";
    regForm["from"] = "from";

    //const regFormJson = regForm.json;
    console.log(regForm);
    return regForm;
  }

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
