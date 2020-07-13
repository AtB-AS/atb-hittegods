import React, { useEffect, useState } from "react";
import { TableContainer } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useHistory } from "react-router";
import Henvendelse from "./Henvendelse";
import { Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTableStyles } from "./styles";

type Henvendelse = {
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

function Henvendelser(props: Props) {
  const classes = useTableStyles();
  const history = useHistory();
  const [henvendelser, setHenvendelser] = useState<Henvendelse[]>([]);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newInqueryClick, setNewInquery] = useState(false);

  const params = {
    status: "Mistet",
  };

  const queryString = Object.entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

  useEffect(() => {
    setLoading(true);
    fetch("/api/admin/lost" + "?" + queryString)
      .then((response) => response.json())
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

  function clickedNewInquery() {
    return setNewInquery(true);
  }

  if (error) {
    return <p>Noe gikk galt</p>;
  }

  if (isloading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.leftCol}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className={classes.thRow}>
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
              {henvendelser.map((item, index) => {
                return (
                  <TableRow
                    hover
                    onClick={(event) => clickedRowItem(item.id)}
                    className={
                      `${item.id}` === props.match.params?.id
                        ? classes.activeRow
                        : classes.row
                    }
                  >
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.subcategory}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell align="center">{item.matchCount}</TableCell>
                    <TableCell align="center">{item.newMatchCount}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={classes.rightCol}>
        <Route path="/admin/henvendelser/:id" component={Henvendelse} />
      </div>
    </div>
  );
}

export default Henvendelser;
