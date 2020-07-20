import React, { useEffect, useState } from "react";
import {
  createStyles,
  IconButton,
  InputBase,
  TableContainer,
  TableSortLabel,
  Theme,
} from "@material-ui/core";
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
import { searchHenvendelse, HenvendelseType } from "./utils";
import SearchIcon from "@material-ui/icons/Search";
import DataLoadingContainer from "../DataLoadingContainer";
import Button from "@material-ui/core/Button";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      width: "90%",
    },
    iconButton: {
      padding: 10,
    },
  })
);

function Henvendelser(props: Props) {
  const classes = useTableStyles();
  const searchClasses = useStyles();
  const history = useHistory();
  const [henvendelser, setHenvendelser] = useState<HenvendelseType[]>([]);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [orderBy, setOrderBy] = useState<string>("desc");
  const [collumnName, setCollumnName] = useState("id");
  const [searchValue, setSearchValue] = useState("");
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

  const decrementNewMatch = (lostid: number): void => {
    const updatedHenvendelser = henvendelser.map((henvendelse) => {
      if (henvendelse.id === lostid) {
        return {
          ...henvendelse,
          newMatchCount: henvendelse.newMatchCount - 1,
        };
      }
      return henvendelse;
    });
    setHenvendelser(updatedHenvendelser);
  };

  useEffect(() => {
    setLoading(true);
    fetch("/api/admin/lost?" + queryString)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
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

  function compare(a: HenvendelseType, b: HenvendelseType) {
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

  const removeItem = (id: number) => {
    const keepItems: Array<HenvendelseType> = [];
    henvendelser.forEach((item) => {
      if (item.id != id) {
        keepItems.push(item);
      }
    });
    setHenvendelser(keepItems);
  };

  return (
    <DataLoadingContainer loading={isloading} error={error}>
      <div className={classes.root}>
        <div className={classes.leftCol}>
          <InputBase
            className={searchClasses.input}
            placeholder="Søk på henvendelser"
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            inputProps={{ "aria-label": "Søk på henvendelser" }}
          />
          <IconButton
            type="submit"
            className={searchClasses.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow className={classes.thRow}>
                  <HenvendelseColumn columnName={"id"} labelName={"Id"} />
                  <HenvendelseColumn columnName={"name"} labelName={"Navn"} />
                  <HenvendelseColumn
                    columnName={"phone"}
                    labelName={"Telefon"}
                  />
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
                {searchHenvendelse(henvendelser, searchValue).map(
                  (item, index) => {
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
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>{item.subcategory}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell align="center">{item.matchCount}</TableCell>
                        <TableCell align="center">
                          {item.newMatchCount}
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.rightCol}>
          <Button
            variant="contained"
            href="https://hittegods.azurewebsites.net/"
          >
            Registrer henvendelser
          </Button>
          <Route
            path="/admin/henvendelser/:id"
            render={(routeProps) => (
              <Henvendelse
                {...routeProps}
                removeItem={removeItem}
                decrementNewMatch={decrementNewMatch}
              />
            )}
          />
        </div>
      </div>
    </DataLoadingContainer>
  );
}

export default Henvendelser;
