import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import { Route, Switch, useHistory } from "react-router-dom";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import Characteristics from "./Characteristics";
import Location from "./Location";
import MissingDate from "./MissingDate";
import ContactInfo from "./ContactInfo";
import Confirmation from "./Confirmation";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    stepButton: {
      "& > .MuiStepLabel-root": {
        display: "block",
      },
      "& > .MuiStepLabel-iconContainer": {
        padding: "0 !important",
      },
    },
    completed: {
      display: "inline-block",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

type reg = {
  [key: string]: string;
};

export default function Wizard() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});

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

  function getSteps() {
    const step1 = activeStep === 0 ? "Hvor" : `Linje ${line}`;
    const step2 = activeStep <= 1 ? "Når" : `Dato ${date}`;
    const step3 = activeStep <= 2 ? "Hva" : subCategory;
    const step4 = "Kontakt";

    return [step1, step2, step3, step4];
  }

  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

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
    setActiveStep(activeStep + 1);
  }

  function setDate(date: string) {
    setNewDate(date);
    console.log("Dato: ", date);
    nextPage("/hovedkategori");
    setActiveStep(activeStep + 1);
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

  function nextPage(path: string) {
    console.log("push", history);
    history.push(path);
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
    <div className={classes.root}>
      <Box mt={2}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton
                className={classes.stepButton}
                onClick={handleStep(index)}
                completed={completed[index]}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Container maxWidth="sm">
        <Switch>
          <Route path="/" exact>
            <Location line={line} onLocationSelect={setLocation} />
          </Route>
          <Route path="/tidspunkt">
            <MissingDate date={date} onDateSelect={setDate} />
          </Route>
          <Route path="/hovedkategori">
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
