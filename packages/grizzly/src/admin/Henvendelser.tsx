import React, { useEffect, useState } from "react";
import { TableContainer } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { Route, useHistory } from "react-router";
import Henvendelse from "./Henvendelse";
import { theme } from "../components/styling";

type Henvendelse = {
  id: number;
  name: string;
  subcategory: string;
  description: string;
  matchCount: number;
  newMatchCount: number;
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "90vh",
  },
  header: {
    padding: "36px",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    textAlign: "center",
  },
});

function Henvendelser() {
  const classes = useStyles();
  const history = useHistory();
  const [henvendelser, setHenvendelser] = useState<Henvendelse[]>([]);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = {
    from: 0,
    to: 25,
  };

  const queryString = Object.entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

  useEffect(() => {
    setLoading(true);
    fetch("/api/admin/lost" + "?" + queryString)
      .then((response) => {
        if (response.status === 401) {
          // Unauthorized
        } else {
          return response.json();
        }
      })
      .then((jsonData) => {
        setHenvendelser(jsonData.data.items);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  function clickedRowItem(id: number) {
    history.push("/admin/henvendelser/" + id);
  }

  if (error) {
    return <p>Noe gikk galt</p>;
  }

  if (isloading) {
    return <p>Laster...</p>;
  }

  return (
    <div>
      <Grid container>
        <Grid item md={7}>
          <TableContainer className={classes.container}>
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
                {henvendelser.map((item) => {
                  return (
                    <TableRow
                      hover
                      onClick={(event) => clickedRowItem(item.id)}
                    >
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.subcategory}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.matchCount}</TableCell>
                      <TableCell>{item.newMatchCount}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={5}>
          <Route path="/admin/henvendelser/:id" component={Henvendelse} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Henvendelser;
