import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import api from "../../backend/src/api";
import { ListItem } from "@material-ui/core";

type Prop = {
  apiItem: {};
};

const apiResponse = [
  {
    refnr: "9b0a0e19-f531-45b1-a033-c261532972a8",
    name: "Ola Nordmann",
    subcategory: "Briller",
    description: "En brille med ...",
  },
  {
    refnr: "9b0a0e19-f531-45b1-a033-c261532972a5",
    name: "Gajaen Chandrasegaram",
    subcategory: "Klokke",
    description: "En klokke med ...",
  },
];

const useStyles = makeStyles({
  table: {
    width: "350px",
  },
  row: {
    color: "grey",
  },
});

export default function SimpleTable(prop: Prop) {
  const classes = useStyles();
  console.log(apiResponse[0].refnr);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Referansenummer</TableCell>
            <TableCell align="right">Etternavn</TableCell>
            <TableCell align="right">Underkategori</TableCell>
            <TableCell align="right">Beskrivelse</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiResponse.map((row) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.refnr}>
              <TableCell className={classes.row} component="th" scope="row">
                {row.refnr}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.subcategory}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
