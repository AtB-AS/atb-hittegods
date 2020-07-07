import React from "react";
import { TableContainer } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const data = [
  {
    id: 1,
    name: "Per",
    subCat: "Nøkler",
    description: "Gule nøkler",
    inventoryTotal: 3,
    inventoryNew: 1,
  },
];

function Henvendelser() {
  return (
    <div>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Navn</TableCell>
              <TableCell>Underkategori</TableCell>
              <TableCell>Beskrivelse</TableCell>
              <TableCell>Antall på lager</TableCell>
              <TableCell>Nye funn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.subCat}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.inventoryTotal}</TableCell>
                  <TableCell>{row.inventoryNew}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Henvendelser;
