import React, { useState } from "react";
import MatchDetails from "./MatchDetails";
import { Match } from "./Henvendelse";
import { Found } from "./Matches";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";

type Props = {
  foundItem: Found;
  removeItem: (id: number) => void;
  setLoading: (loading: boolean) => void;
  decrementNewMatch: (id: number) => void;
  match?: Match;
  hendvendelsesid: number;
};

const MatchRow = (props: Props) => {
  const [isClicked, setClicked] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

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
      </AccordionSummary>
      <AccordionDetails>
        <MatchDetails
          foundItem={props.foundItem}
          removeItem={props.removeItem}
          setLoading={props.setLoading}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default MatchRow;
