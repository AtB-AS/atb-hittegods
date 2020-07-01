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


  useEffect(() => {
    console.log("contactinfo updated", contactInfo);
  }, [contactInfo]);

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

  function setContactInfo(contInfo: ContactInfo) {
    setContInfo(contInfo);
    setTimeout(() => {
      console.log("KontaktInfo: ", contactInfo);
      sendForm()
        .then(() => {
          nextPage("/bekreftelse");
        })
        .catch((err) => {
          console.log("oh no, it broke");
        });
    }, 100);
  }

  function sendForm() {
    const form = prepareObject();
    console.log("returned form: ", form);

    const obj = {
      name: "AtBjornar",
      email: "ren@kje.no",
      phoneNumber: "12345678",
      category: "Elektronikk",
      subCategory: "Briller",
      line: 10,
      description: "Myk",
      brand: "Bamse",
      color: "Rød",
      date: "6/26/2020",
      to: "hjem til jobb",
      from: "hvor som helst",
    };
    console.log(JSON.stringify(obj));
    return fetch("/api/register", {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  function prepareObject() {
    console.log(contactInfo);
    const regForm: reg = {
      name: contactInfo.name,
      email: contactInfo.email,
      phoneNumber: contactInfo.phone,
      category: cat,
      subCategory: subCat,
      line: loc,
      description: characteristics.description,
      brand: characteristics.brand,
      color: characteristics.color,
      date: date,
      to: "to",
      from: "from",
    };
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
          <SubCategory getMainCat={cat} onCategorySelect={setSubCategory} />
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
