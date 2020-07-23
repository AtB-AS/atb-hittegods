import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      top: "96px",
    },
  })
);

type Props = {
  title?: string;
  description: string;
  type: "info" | "success" | "error";
  onClose: () => void;
};

function Notification({ title, description, type, onClose }: Props) {
  const classes = useStyles();
  return (
    <div>
      <Snackbar
        className={classes.root}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoHideDuration={type !== "error" ? 10000 : null}
        open={true}
        onClose={onClose}
        message="Note archived"
        action={
          <React.Fragment>
            <IconButton
              size="medium"
              aria-label="close"
              color="inherit"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          title={title}
          onClose={onClose}
          severity={type}
        >
          {description}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default Notification;
