import React, { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
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
import { Box, StepConnector, StepLabel } from "@material-ui/core";
import moment from "moment";
import {
  Room,
  CalendarToday,
  HelpOutline,
  PersonOutline,
} from "@material-ui/icons";
import QuestionMark from "./components/icons/questionMark";

const useStyles = makeStyles((theme: Theme) =>
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
  // status 1: maincategory, status 2: subcategory, status 3: characteristics
  const [status, setStatus] = useState(0);

  const history = useHistory();

  function getSteps() {
    return [
      {
        label: activeStep === 0 ? "Hvor" : `Linje ${line}`,
        icon: Room,
      },
      {
        label:
          activeStep <= 1 ? "Når" : moment(date, "YYYY-MM-DD").format("DD.MM"),
        icon: CalendarToday,
      },
      {
        label: activeStep <= 2 ? "Hva" : subCategory,
        icon: HelpOutline,
      },
      {
        label: "Kontakt",
        icon: PersonOutline,
      },
    ];
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

  const handleStep = (step: number) => () => {
    setActiveStep(step);
    if (step === 0) {
      setCompleted({});
      nextPage("/");
    }
    if (step === 1) {
      setCompleted({
        0: true,
      });
      nextPage("/tidspunkt");
    }
    if (step === 2) {
      setCompleted({
        0: true,
        1: true,
      });
      nextPage("/hva");
    }
  };

  function onCategorySelect(cat: string) {
    setCategory(cat);
    if (cat === "Annet") {
      setStatus(3);
      setSubCategory("Annet");
    } else {
      //nextPage("/underkategori");
      setStatus(2);
    }
  }

  function onSubCategorySelected(subCat: string) {
    setSubCategory(subCat);
    //nextPage("/kjennetegn");
    setStatus(3);
  }

  function onCharacteristicsDone(characteristics: Characteristics) {
    setCharacteristics(characteristics);
    nextPage("/personopplysninger");
    setActiveStep(activeStep + 1);
    setCompleted({
      0: true,
      1: true,
      2: true,
    });
  }

  function setLocation(location: string) {
    setLine(location);
    nextPage("/tidspunkt");
    setActiveStep(activeStep + 1);
    setCompleted({
      0: true,
    });
  }

  function setDate(date: string) {
    setNewDate(date);
    nextPage("/hva");
    setActiveStep(activeStep + 1);
    setCompleted({
      0: true,
      1: true,
    });
    setStatus(1);
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
  }

  function nextPage(path: string) {
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

  const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 25,
    },
    active: {
      "& $line": {
        backgroundColor: "#00758D",
      },
    },
    completed: {
      "& $line": {
        backgroundColor: "#00758D",
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: "#eaeaf0",
      borderRadius: 1,
    },
  })(StepConnector);

  const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: "#F1F1F1",
      zIndex: 1,
      color: "#E0E0E0",
      width: 44,
      height: 44,
      display: "flex",
      borderRadius: "50%",
      border: "2px solid #E0E0E0",
      justifyContent: "center",
      alignItems: "center",
    },
    active: {
      color: "#00758D",
      border: "2px solid #00758D",
    },
    completed: {
      backgroundColor: "#323A48",
      border: "2px solid #323A48",
      color: "#fff",
    },
  });

  type ColorlibStepIconProps = {
    active: boolean;
    completed: boolean;
    icon: React.ReactNode;
  };

  function ColorlibStepIcon(props: ColorlibStepIconProps) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons: { [k: string]: any } = {
      "1": <Room />,
      "2": <CalendarToday />,
      "3": <QuestionMark />,
      "4": <PersonOutline />,
    };

    return (
      <div
        className={`${classes.root} ${active ? classes.active : ""} ${
          completed ? classes.completed : ""
        }`}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Box mt={2}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className={classes.stepper}
          connector={<ColorlibConnector />}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepButton
                onClick={handleStep(index)}
                completed={completed[index]}
              >
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {step.label}
                </StepLabel>
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
          <Route path="/hva">
            {status === 1 && (
              <MainCategory
                category={category}
                description=""
                onCategorySelect={onCategorySelect}
              />
            )}
            {status === 2 && (
              <SubCategory
                getMainCat={category}
                description=""
                onSubCategorySelect={onSubCategorySelected}
              />
            )}
            {status === 3 && (
              <Characteristics
                color={characteristics.color}
                brand={characteristics.brand}
                description={characteristics.description}
                onCharacteristicsSelect={onCharacteristicsDone}
                subCategory={subCategory}
              />
            )}
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
            <Confirmation
              name={contactInfo.name}
              email={contactInfo.email}
              lostDate={date}
            />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
