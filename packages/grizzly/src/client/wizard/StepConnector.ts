import { withStyles } from "@material-ui/core/styles";
import { StepConnector } from "@material-ui/core";

export default withStyles({
  alternativeLabel: {
    top: 21,
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
