import React, { useEffect, useState } from "react";
import MainCategory from "../MainCategory";
import SubCategory from "../SubCategory";
import Characteristics from "../Characteristics";
import Location from "../Location";
import MissingDate from "../MissingDate";
import ContactInfo, { ContactInfoType } from "../ContactInfo";
import Confirmation from "../Confirmation";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { WIZARD_DETAILS_STEP, WIZARD_STEP } from "./constants";
import Stepper from "./Stepper";

export default function Wizard() {
  const [activeStep, setActiveStep] = useState(WIZARD_STEP.LINE);
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
  const [wizardDetailsStep, setWizardDetailsStep] = useState(
    WIZARD_DETAILS_STEP.MAIN_CATEGORY
  );
  const [submitError, setSubmitError] = useState(false);

  const onBrowserBack = (event: PopStateEvent) => {
    const data = event.state;
    if (data) {
      setActiveStep(data.activeStep);
      if (data.detailsStep !== undefined) {
        setWizardDetailsStep(data.detailsStep);
      }
    } else {
      setActiveStep(WIZARD_STEP.LINE);
    }
  };

  useEffect(() => {
    addToBrowserHistory({ activeStep: WIZARD_STEP.LINE });
    window.addEventListener("popstate", onBrowserBack);
    return () => {
      window.removeEventListener("popstate", onBrowserBack);
    };
  }, []);

  function addToBrowserHistory(data: object) {
    // eslint-disable-next-line no-restricted-globals
    history.pushState(data, "");
  }

  function onCategorySelect(cat: string) {
    setCategory(cat);
    if (cat === "Annet") {
      setWizardDetailsStep(WIZARD_DETAILS_STEP.CHARACTERISTICS);
      setSubCategory("Annet");
      addToBrowserHistory({
        activeStep: WIZARD_STEP.DETAILS,
        detailsStep: WIZARD_DETAILS_STEP.CHARACTERISTICS,
      });
    } else {
      addToBrowserHistory({
        activeStep: WIZARD_STEP.DETAILS,
        detailsStep: WIZARD_DETAILS_STEP.SUB_CATEGORY,
      });
      setWizardDetailsStep(WIZARD_DETAILS_STEP.SUB_CATEGORY);
    }
  }

  function onSubCategorySelected(subCat: string) {
    setSubCategory(subCat);
    setWizardDetailsStep(WIZARD_DETAILS_STEP.CHARACTERISTICS);
    addToBrowserHistory({
      activeStep: WIZARD_STEP.DETAILS,
      detailsStep: WIZARD_DETAILS_STEP.CHARACTERISTICS,
    });
  }

  function onCharacteristicsDone(characteristics: Characteristics) {
    setCharacteristics(characteristics);
    setActiveStep(activeStep + 1);
    addToBrowserHistory({ activeStep: WIZARD_STEP.CONTACT_INFO });
  }

  function setLocation(location: string) {
    setLine(location);
    setActiveStep(activeStep + 1);
    addToBrowserHistory({ activeStep: WIZARD_STEP.LOCATION });
  }

  function setDate(date: string) {
    setNewDate(date);
    setActiveStep(activeStep + 1);
    setWizardDetailsStep(WIZARD_DETAILS_STEP.MAIN_CATEGORY);
    addToBrowserHistory({
      activeStep: WIZARD_STEP.DETAILS,
      detailsStep: WIZARD_DETAILS_STEP.MAIN_CATEGORY,
    });
  }

  function setContactInfo(contInfo: ContactInfoType) {
    const payload = {
      category,
      subCategory,
      ...characteristics,
      line,
      date,
      ...contInfo,
    };
    setContInfo(contInfo);
    sendForm(payload)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(() => {
        setActiveStep(activeStep + 1);
        addToBrowserHistory({ activeStep: WIZARD_STEP.CONTACT_INFO });
      })
      .catch((error) => {
        console.log(error);
        setSubmitError(true);
      });
  }

  function sendForm(payload: ContactInfoType) {
    return fetch("/api/register", {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  const showNavigationStepper = activeStep < WIZARD_STEP.CONFIRMATION;
  return (
    <>
      {showNavigationStepper && (
        <Box mt={2}>
          <Stepper
            activeStep={activeStep}
            line={line}
            date={date}
            subCategory={subCategory}
          />
        </Box>
      )}
      <Container maxWidth="sm">
        {activeStep === WIZARD_STEP.LINE && (
          <Location line={line} onLocationSelect={setLocation} />
        )}
        {activeStep === WIZARD_STEP.LOCATION && (
          <MissingDate date={date} onDateSelect={setDate} />
        )}
        {activeStep === WIZARD_STEP.DETAILS &&
          wizardDetailsStep === WIZARD_DETAILS_STEP.MAIN_CATEGORY && (
            <MainCategory
              category={category}
              onCategorySelect={onCategorySelect}
              description=""
            />
          )}
        {activeStep === WIZARD_STEP.DETAILS &&
          wizardDetailsStep === WIZARD_DETAILS_STEP.SUB_CATEGORY && (
            <SubCategory
              getMainCat={category}
              onSubCategorySelect={onSubCategorySelected}
            />
          )}
        {activeStep === WIZARD_STEP.DETAILS &&
          wizardDetailsStep === WIZARD_DETAILS_STEP.CHARACTERISTICS && (
            <Characteristics
              color={characteristics.color}
              brand={characteristics.brand}
              description={characteristics.description}
              onCharacteristicsSelect={onCharacteristicsDone}
              subCategory={subCategory}
            />
          )}
        {activeStep === WIZARD_STEP.CONTACT_INFO && (
          <ContactInfo
            name={contactInfo.name}
            phoneNumber={contactInfo.phoneNumber}
            email={contactInfo.email}
            onContactInfoSelect={setContactInfo}
            submitError={submitError}
          />
        )}
        {activeStep === WIZARD_STEP.CONFIRMATION && (
          <Confirmation
            name={contactInfo.name}
            email={contactInfo.email}
            lostDate={date}
          />
        )}
      </Container>
    </>
  );
}
