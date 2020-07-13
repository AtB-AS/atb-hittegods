import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import Location from "./Location";
import MissingDate from "./MissingDate";
import ContactInfo from "./ContactInfo";
import Confirmation from "./Confirmation";
import Header from "./components/header";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";

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
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [characteristics, setCharacteristics] = useState({
    color: "",
    brand: "",
    description: "",
  });
  const [line, setLine] = useState("");
  const [date, setNewDate] = useState("");
  const [contactInfo, setContInfo] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const history = useHistory();

  function nextPage(path: string) {
    console.log("push", history);
    history.push(path);
  }

  function onCategorySelect(cat: string) {
    setCategory(cat);
    nextPage("/underkategori");
    console.log("Kategori: ", cat);
  }

  function onSubCategorySelected(subCat: string) {
    setSubCategory(subCat);
    nextPage("/kjennetegn");
    console.log("underkategori: ", subCat);
  }

  function onCharacteristicsDone(characteristics: Characteristics) {
    setCharacteristics(characteristics);
    console.log("kjennetegn ", characteristics);
    nextPage("lokasjon");
  }

  function setLocation(location: string) {
    setLine(location);
    console.log("linje: ", location);
    nextPage("/tidspunkt");
  }

  function setDate(date: string) {
    setNewDate(date);
    console.log("Dato: ", date);
    nextPage("/personopplysninger");
  }

  function setContactInfo(contInfo: ContactInfo) {
    const payload = {
      category,
      subCategory,
      ...characteristics,
      line,
      date,
      from: "TODO", // TODO: Foreløpig påkrevd i database
      to: "TODO", // TODO: Foreløpig påkrevd i database
      ...contInfo,
    };
    setContInfo(contInfo);
    sendForm(payload)
      .then(() => {
        nextPage("/bekreftelse");
      })
      .catch(() => {
        console.log("oh no, it broke");
      });
    console.log(contInfo);
  }

  function sendForm(payload: reg) {
    return fetch("/api/register", {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div>
      <Helmet>
        <title>Hittegods - AtB</title>
      </Helmet>

      <Header />
      <Container maxWidth="sm">
        <Switch>
          <Route path="/" exact>
            <MainCategory
              category={category}
              onCategorySelect={onCategorySelect}
            />
          </Route>
          <Route path="/underkategori">
            <SubCategory
              getMainCat={category}
              onSubCategorySelect={onSubCategorySelected}
            />
          </Route>
          <Route path="/kjennetegn">
            <Characteristics
              color={characteristics.color}
              brand={characteristics.brand}
              description={characteristics.description}
              onCharacteristicsSelect={onCharacteristicsDone}
            />
          </Route>
          <Route path="/lokasjon">
            <Location line={line} onLocationSelect={setLocation} />
          </Route>
          <Route path="/tidspunkt">
            <MissingDate date={date} onDateSelect={setDate} />
          </Route>
          <Route path="/personopplysninger">
            <ContactInfo
              name={contactInfo.name}
              phoneNumber={contactInfo.phoneNumber}
              email={contactInfo.email}
              onContactInfoSelect={setContactInfo}
            />
          </Route>
          <Route path="/bekreftelse">
            <Confirmation name={contactInfo.name} email={contactInfo.email} />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
