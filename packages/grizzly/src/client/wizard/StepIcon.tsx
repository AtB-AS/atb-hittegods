import React from "react";
import { CalendarToday, PersonOutline, Room } from "@material-ui/icons";
import QuestionMark from "../../components/icons/questionMark";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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

type Props = {
  active: boolean;
  completed: boolean;
  icon: React.ReactNode;
};

function StepIcon(props: Props) {
  const classes = useStyles();
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
export default StepIcon;
