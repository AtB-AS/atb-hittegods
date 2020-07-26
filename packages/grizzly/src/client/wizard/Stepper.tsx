import React from "react";
import StepConnector from "./StepConnector";
import { WIZARD_STEP } from "./constants";
import Step from "@material-ui/core/Step";
import { StepLabel, Stepper } from "@material-ui/core";
import StepIcon from "./StepIcon";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  CalendarToday,
  HelpOutline,
  PersonOutline,
  Room,
} from "@material-ui/icons";
import moment from "moment";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "transparent",
      padding: "10px 0",
    },
  })
);

function getSteps(
  activeStep: number,
  line: string,
  date: string | undefined,
  subCategory: string
) {
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
        activeStep <= WIZARD_STEP.LOCATION ? "Når" : getStepLabelForDate(date),
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

function getStepLabelForDate(date: string | undefined) {
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

type Props = {
  activeStep: number;
  line: string;
  date?: string;
  subCategory: string;
};

export default (props: Props) => {
  const classes = useStyles();
  return (
    <Stepper
      activeStep={props.activeStep}
      alternativeLabel
      className={classes.root}
      connector={<StepConnector />}
    >
      {getSteps(
        props.activeStep,
        props.line,
        props.date,
        props.subCategory
      ).map((step, index) => (
        <Step key={step.label} completed={props.activeStep > index}>
          <StepLabel StepIconComponent={StepIcon}>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
