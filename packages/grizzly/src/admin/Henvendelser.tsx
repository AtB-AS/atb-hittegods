import React, { useEffect, useState } from "react";
import { TableContainer, TableSortLabel } from "@material-ui/core";
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

type ColumnProps = {
  columnName: string;
  labelName: string;
};

function Henvendelser(props: Props) {
  const classes = useTableStyles();
  const history = useHistory();
  const [henvendelser, setHenvendelser] = useState<Henvendelse[]>([]);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [orderBy, setOrderBy] = useState<string>("desc");
  const [collumnName, setCollumnName] = useState("id");
  const params = {
    status: "Mistet",
  };

  useEffect(() => {
    if (orderBy === "desc") {
      setHenvendelser(
        henvendelser
          .map((h) => h)
          .sort(compare)
          .reverse()
      );
    } else {
      setHenvendelser(henvendelser.map((h) => h).sort(compare));
    }
  }, [orderBy, collumnName]);

  const queryString = Object.entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

  useEffect(() => {
    setLoading(true);
    fetch("/api/admin/lost?" + queryString)
      .then((response) => response.json())
      .then((jsonData) => {
        const lostData = jsonData.data.items;
        if (orderBy === "desc") {
          setHenvendelser(lostData.sort(compare).reverse());
        } else {
          setHenvendelser(lostData.sort(compare));
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  function clickedRowItem(id: number) {
    history.push("/admin/henvendelser/" + id);
  }

  function clickedColumnName(col: string) {
    if (col === collumnName) {
      setOrderBy(orderBy === "asc" ? "desc" : "asc");
    }
    setCollumnName(col);
  }

  function compare(a: Henvendelse, b: Henvendelse) {
    // @ts-ignore
    return `${a[collumnName]}`.localeCompare(`${b[collumnName]}`, "en", {
      numeric: true,
      sensitivity: "base",
    });
  }

  function HenvendelseColumn(props: ColumnProps) {
    return (
      <TableCell className={classes.th}>
        <TableSortLabel
          active={collumnName === props.columnName}
          direction={orderBy === "asc" ? "desc" : "asc"}
          onClick={(event) => clickedColumnName(props.columnName)}
        >
          {props.labelName}
        </TableSortLabel>
      </TableCell>
    );
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

  if (henvendelser.length === 0) {
    return <p>Ingen henvendelser registrert</p>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.leftCol}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className={classes.thRow}>
                <HenvendelseColumn columnName={"id"} labelName={"Id"} />
                <HenvendelseColumn columnName={"name"} labelName={"Navn"} />
                <HenvendelseColumn
                  columnName={"subcategory"}
                  labelName={"Underkategori"}
                />
                <HenvendelseColumn
                  columnName={"description"}
                  labelName={"Beskrivelse"}
                />
                <HenvendelseColumn
                  columnName={"matchCount"}
                  labelName={"På lager"}
                />
                <HenvendelseColumn
                  columnName={"newMatchCount"}
                  labelName={"Nye funn"}
                />
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
