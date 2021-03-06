import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

type Props = {
  title: string;
  description?: string;
  icon?: any;
  onClick: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "max-content 1fr 30px",
      gridColumnGap: "10px",
      alignItems: "center",
      border: "1px solid #e2e2e2",
      backgroundColor: "#fff",
      color: theme.palette.primary.main,

      textDecoration: "none",
      padding: "8px 16px",
      "&:hover": {
        color: "#000",
        textDecoration: "none",
        border: `1px solid ${theme.palette.secondary.main}`,
      },
      "&:hover $iconContainer": {
        backgroundColor: `${theme.palette.secondary.main}`,
        color: "#fff",
      },
      "&:hover .title": {
        color: `${theme.palette.secondary.main}`,
      },
      [theme.breakpoints.up("sm")]: {
        alignItems: "start",
        border: "1px solid #e2e2e2",
        "&:hover": {
          border: `1px solid ${theme.palette.secondary.main}`,
        },
      },
    },
    title: {
      fontSize: "22px",
    },
    description: {},
    iconContainer: {
      textAlign: "center",
      display: "inline-block",
      borderRadius: "50%",
      border: `1px solid ${theme.palette.primary.main}`,
      padding: "4px 7px",
      alignSelf: "start",
    },
    icon: {
      width: "30px",
      height: "30px",
    },
    arrowIcon: {
      alignSelf: "center",
      color: theme.palette.primary.main,
    },
  })
);

function Category(props: Props) {
  const styles = useStyles();

  return (
    <a
      className={styles.root}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        props.onClick();
      }}
    >
      <Box component="span" className={styles.iconContainer}>
        {props.icon && <props.icon className={styles.icon} />}
      </Box>
      <span>
        <Box component="span" className={`title ${styles.title}`}>
          {props.title}
        </Box>
        <Box component="div">{props.description}</Box>
      </span>
      <span className={styles.arrowIcon}>
        <ArrowForwardIosIcon />
      </span>
    </a>
  );
}

export default Category;
