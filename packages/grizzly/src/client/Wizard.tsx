import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import Characteristics from "./Characteristics";
import Location from "./Location";
import MissingDate from "./MissingDate";
import ContactInfo, { ContactInfoType } from "./ContactInfo";
import Confirmation from "./Confirmation";
import Container from "@material-ui/core/Container";
import { Box, StepLabel } from "@material-ui/core";
import moment from "moment";
import {
  Room,
  CalendarToday,
  HelpOutline,
  PersonOutline,
} from "@material-ui/icons";
import StepIcon from "./wizard/StepIcon";
import StepConnector from "./wizard/StepConnector";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
    },
    stepper: {
      backgroundColor: "transparent",
      padding: "10px 0",
    },
  })
);

const WIZARD_STEP = {
  LINE: 0,
  LOCATION: 1,
  DETAILS: 2,
  CONTACT_INFO: 3,
  CONFIRMATION: 4,
};

const WIZARD_DETAILS_STEP = {
  MAIN_CATEGORY: 0,
  SUB_CATEGORY: 1,
  CHARACTERISTICS: 2,
};

export default function Wizard() {
  const classes = useStyles();
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

  const onNavigation = (event: PopStateEvent) => {
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
    window.addEventListener("popstate", onNavigation);
    return () => {
      window.removeEventListener("popstate", onNavigation);
    };
  }, []);

  function addToBrowserHistory(data: object) {
    // eslint-disable-next-line no-restricted-globals
    history.pushState(data, "");
  }

  function getStepLabelForDate(date: string) {
    const selectedDate = moment.utc(date);
    const today = moment.utc();
    if (selectedDate.isSame(today, "day")) {
      return "I dag";
    }
    if (selectedDate.isSame(today.add(-1, "days"), "day")) {
      return "I går";
    }
    return moment(date, "YYYY-MM-DD").format("DD.MM");
  }

  function getSteps() {
    return [
      {
        label:
          activeStep === WIZARD_STEP.LINE
            ? "Hvor"
            : line.length
            ? `Linje ${line}`
            : "Usikker",
        icon: Room,
      },
      {
        label:
          activeStep <= WIZARD_STEP.LOCATION
            ? "Når"
            : getStepLabelForDate(date),
        icon: CalendarToday,
      },
      {
        label: activeStep <= WIZARD_STEP.DETAILS ? "Hva" : subCategory,
        icon: HelpOutline,
      },
      {
        label: "Kontakt",
        icon: PersonOutline,
      },
    ];
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
    <div className={classes.root}>
      {showNavigationStepper && (
        <Box mt={2}>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            className={classes.stepper}
            connector={<StepConnector />}
          >
            {getSteps().map((step, index) => (
              <Step key={step.label} completed={activeStep > index}>
                <StepLabel StepIconComponent={StepIcon}>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
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
    </div>
  );
}
