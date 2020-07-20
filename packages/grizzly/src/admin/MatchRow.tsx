import React, { useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Collapse from "@material-ui/core/Collapse";
import MatchDetails from "./MatchDetails";
import {Box, Grid} from "@material-ui/core";

type Props = {
  item: FoundMatch;
  removeItem: (id: number) => void;
  setLoading: (loading: boolean) => void;
};

type FoundMatch = {
  id: number;
  name: string;
  phone: string;
  email: string;
  category: string;
  subcategory: string;
  color: string;
  status: string;
  line: string;
  date: string;
  brand: string;
  description: string;
};


const MatchRow = (props: Props) => {
  const [isClicked, setClicked] = useState(false);

  function clickedRowItem(id: number) {
    if (isClicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
    console.log(isClicked);
  }

  function formatDate(date:string){
    const formattedDay = date.slice(8,10)
    const formattedMonth = date.slice(5,7)

    return (formattedDay+'.'+formattedMonth)
  }

  function formatDescription(desc:string) {
    if(desc.length>50){
      return desc.slice(0,50)+"..."
    }
    else{
      return desc
    }
  }


  return (
    <TableBody>
      <TableRow hover onClick={(event) => clickedRowItem(props.item.id)}>
        <TableCell>{props.item.id}</TableCell>
        <TableCell>{props.item.subcategory}</TableCell>
        <TableCell>{props.item.brand}</TableCell>
        <TableCell>{formatDescription(props.item.description)}</TableCell>

      </TableRow>


        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
            <Collapse in={isClicked} timeout="auto" unmountOnExit>
              <MatchDetails
                item={props.item}
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
