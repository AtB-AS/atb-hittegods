import React, { useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Collapse from "@material-ui/core/Collapse";
import MatchDetails from "./MatchDetails";
import { Match } from "./Henvendelse";
import { Found } from "./Matches";

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

    return formattedDay + "." + formattedMonth;
  }

  function formatDescription(desc: string) {
    if (desc.length > 50) {
      return desc.slice(0, 50) + "...";
    } else {
      return desc;
    }
  }

  return (
    <TableBody>
      <TableRow hover onClick={(event) => clickedRowItem(props.foundItem.id)}>
        <TableCell>{props.foundItem.id}</TableCell>
        <TableCell>{props.foundItem.subcategory}</TableCell>
        <TableCell>{props.foundItem.brand}</TableCell>
        <TableCell>{formatDescription(props.foundItem.description)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={4}>
          <Collapse in={isClicked} timeout="auto" unmountOnExit>
            <MatchDetails
              foundItem={props.foundItem}
              removeItem={props.removeItem}
              setLoading={props.setLoading}
            />
          </Collapse>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default MatchRow;
