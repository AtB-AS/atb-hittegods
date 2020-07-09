import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { Route } from "react-router";
import StorageItem from "./StorageItem";

type StorageItems = {
  id: number;
  name: string;
  subcategory: string;
  description: string;
  matchCount: number;
  newMatchCount: number;
};

function Storage() {
  const [storageItems, setStorageItems] = useState<StorageItems[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("api/admin/storage")
      .then((response) => {
        if (response.status === 401) {
          // HTTP Unauthorized
        } else {
          return response.json();
        }
      })
      .then((jsonData) => {
        setStorageItems(jsonData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) {
    return <p>Noe gikk galt</p>;
  }

  if (isLoading) {
    return <p>Laster...</p>;
  }

  return (
    <div>
      <Grid container>
        <Grid item md={7}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Navn</TableCell>
                  <TableCell>Underkategori</TableCell>
                  <TableCell>Beskrivelse</TableCell>
                  <TableCell>Antall på lager</TableCell>
                  <TableCell>Ny funn</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {storageItems.map((item) => {
                  return (
                    <TableRow hover>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.subcategory}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.matchCount}</TableCell>
                      <TableCell>+ {item.newMatchCount}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={5}>
          <Route path="/admin/lager/:id" component={StorageItem} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Storage;
