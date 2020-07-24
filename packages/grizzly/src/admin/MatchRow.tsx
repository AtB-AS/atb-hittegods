import React, { useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Collapse from "@material-ui/core/Collapse";
import MatchDetails from "./MatchDetails";
import { Match } from "./Henvendelse";
import { Found } from "./Matches";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";
import { IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useTableStyles } from "./styles";
import { theme } from "../components/styling";

type Props = {
  foundItem: Found;
  removeItem: (id: number) => void;
  setLoading: (loading: boolean) => void;
  decrementNewMatch: (id: number) => void;
  match?: Match;
  hendvendelsesid: number;
};

const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateAreas:
      "brand brand brand date date id" +
      "subcategory subcategory subcategory line line color",
  },
  brand: {
    gridArea: "brand",
  },
  date: {
    gridArea: "date",
  },
  id: {
    gridArea: "id",
  },
  subcategory: {
    gridArea: "subcategory",
  },
  line: {
    gridArea: "line",
  },
  color: {
    gridArea: "color",
  },
});

const MatchRow = (props: Props) => {
  const [isClicked, setClicked] = useState(false);
  const classes = useTableStyles();
  const [isExpanded, setExpanded] = useState(false);
  const styles = useStyles();

  function clickedRowItem(foundId: number) {
    if (!isClicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
    if (props.match != null) {
      if (props.match.new) {
        props.match.new = false;
        props.decrementNewMatch(props.hendvendelsesid);
        fetch("/api/admin/possibleMatch/" + props.match.matchid + "/new", {
          body: JSON.stringify({
            new: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
        }).catch();
      }
    }
  }

  function formatDate(date: string) {
    const formattedDay = date.slice(8, 10);
    const formattedMonth = date.slice(5, 7);
    const formattedYear = date.slice(0, 4);

    return formattedDay + "." + formattedMonth + "." + formattedYear;
  }

  function formatDescription(desc: string) {
    if (desc.length > 50) {
      return desc.slice(0, 35) + "...";
    } else {
      return desc;
    }
  }

  return (
    <Accordion
      onClick={(event) => clickedRowItem(props.foundItem.id)}
      onChange={(event, expanded) => setExpanded(expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          style={isExpanded ? { fontWeight: "bold" } : { fontWeight: "normal" }}
        >
          <div id="grid">
            <div id="brand">
              {props.foundItem.subcategory} - {props.foundItem.brand}
            </div>
            <div id="date">{formatDate(props.foundItem.date)}</div>
            <div id="id"># {props.foundItem.id}</div>
            <div id="line">Linje: {props.foundItem.line}</div>
            <div id="color">{props.foundItem.color}</div>
            <div id="description">
              {formatDescription(props.foundItem.description)}
            </div>
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <MatchDetails
            foundItem={props.foundItem}
            removeItem={props.removeItem}
            setLoading={props.setLoading}
          />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default MatchRow;
