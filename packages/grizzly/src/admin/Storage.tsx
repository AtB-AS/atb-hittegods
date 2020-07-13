import React, { useEffect, useState } from "react";
import { TableContainer } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { theme } from "../components/styling";
import { Route } from "react-router-dom";
import StorageItem from "./StorageItem";
import { useHistory } from "react-router";
import { useTableStyles } from "./styles";

type StorageItems = {
  id: number;
  name: string;
  subcategory: string;
  description: string;
  matchCount: number;
  newMatchCount: number;
};

type Props = {
  match: {
    params: {
      id?: string;
    };
  };
};

function Storage(props: Props) {
  const classes = useTableStyles();
  const [storageItems, setStorageItems] = useState<StorageItems[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetch("/api/admin/found" + "?" + queryString)
      .then((response) => response.json())
      .then((jsonData) => {
        setStorageItems(jsonData.data.items);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const params = {
    from: 0,
    to: 25,
  };

  const queryString = Object.entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

  function clickedRowItem(id: number) {
    history.push("/admin/lager/" + id);
  }

  if (error) {
    return <p>Noe gikk galt</p>;
  }

  if (isLoading) {
    return <p>Laster...</p>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.leftCol}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.th}>Id</TableCell>
                <TableCell className={classes.th}>Navn</TableCell>
                <TableCell className={classes.th}>Underkategori</TableCell>
                <TableCell className={classes.th}>Beskrivelse</TableCell>
                <TableCell className={`${classes.th} ${classes.inStock}`}>
                  På lager
                </TableCell>
                <TableCell className={`${classes.th} ${classes.inStock}`}>
                  Nye funn
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {storageItems.map((item) => {
                return (
                  <TableRow
                    hover
                    className={
                      `${item.id}` === props.match.params?.id
                        ? classes.activeRow
                        : classes.row
                    }
                    onClick={(event) => clickedRowItem(item.id)}
                  >
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.subcategory}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell align="center">{item.matchCount}</TableCell>
                    <TableCell align="center">+ {item.newMatchCount}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={classes.rightCol}>
        <Route path="/admin/lager/:id" component={StorageItem} />
      </div>
    </div>
  );
}

export default Storage;
