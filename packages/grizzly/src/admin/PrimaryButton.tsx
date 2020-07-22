import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Button } from "@material-ui/core";
import { theme } from "../components/styling";

const useStyles = makeStyles({
  button: {
    height: "44px",
    width: "150px",
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.secondary.light,
    padding: "12px 16px 10px",
    "&:hover": {
      color: theme.palette.background.paper,
    },
  },
});

type Props = { href: string; target?: string };

const PrimaryButton: React.FC<Props> = (props) => {
  const style = useStyles();

  return (
    <Button
      href={props.href}
      target={props.target}
      className={style?.button}
      variant="contained"
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
