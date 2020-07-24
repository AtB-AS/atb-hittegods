import React, { useLayoutEffect, useRef } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "calc(100vh - 80px)",
      overflowY: "auto",
      display: "grid",
      gridTemplateColumns: "60% 1fr",
    },
    withToolbar: {
      height: "calc(100vh - 208px)",
      overflowY: "auto",
      display: "grid",
      gridTemplateColumns: "60% 1fr",
    },
  })
);

const Content: React.FC = ({ children }) => {
  const classes = useStyles();
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      // @ts-ignore
      wrapperRef.current.style.height = `calc(100vh - ${wrapperRef.current.offsetTop}px)`;
    }
  }, []);

  return (
    <div id="wrapper" ref={wrapperRef} className={classes.withToolbar}>
      {children}
    </div>
  );
};

export default Content;
