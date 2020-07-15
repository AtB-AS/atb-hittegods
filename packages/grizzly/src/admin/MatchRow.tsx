import React, {useState} from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Collapse from "@material-ui/core/Collapse";
import MatchDetails from "./MatchDetails";

type Props = {
    item: FoundMatch
    removeItem: (id: number) => void;
}

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

const MatchRow = (props:Props) => {
    const [isClicked,setClicked]=useState(false)

    function clickedRowItem(id:number){
        if(isClicked===false){
            setClicked(true)}
        else{
            setClicked(false)}
        console.log(isClicked)
    }

    return (
        <TableBody>
            <TableRow
                hover
    onClick={(event) => clickedRowItem(props.item.id)}
>
    <TableCell>{props.item.name}</TableCell>
    <TableCell>{props.item.subcategory}</TableCell>
    <TableCell>{props.item.brand}</TableCell>
    <TableCell>{props.item.line}</TableCell>

    </TableRow>
    <TableRow>
    <TableCell colSpan={4}>
    <Collapse in={isClicked} timeout="auto" unmountOnExit>
    <MatchDetails item={props.item} removeItem={props.removeItem}/>
    </Collapse>
    </TableCell>
    </TableRow>
    </TableBody>)


}

export default MatchRow