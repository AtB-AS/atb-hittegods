import React, { useEffect, useState } from "react";
import {
  createStyles,
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
import { useTableStyles } from "./styles";
import { searchHenvendelse, HenvendelseType } from "./utils";
import DataLoadingContainer from "../client/DataLoadingContainer";
import { HTTPError } from "./Errors";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Page from "./layouts/Page";
import Toolbar from "./layouts/Toolbar";
import Content from "./layouts/Content";
import PrimaryContent from "./layouts/PrimaryContent";
import SecondaryContent from "./layouts/SecondaryContent";
import SeachField from "../components/SeachField";
import PrimaryButton from "./PrimaryButton";

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
    box: {
      alignItems: "flex-end",
    },
    gridItem1: {
      display: "flex",
      justifyContent: "flex-end",
    },
    gridItem2: {
      display: "flex",
      justifyContent: "flex-start",
    },
  })
);

function Henvendelser(props: Props) {
  const classes = useTableStyles();
  const searchClasses = useStyles();
  const history = useHistory();
  const [henvendelser, setHenvendelser] = useState<HenvendelseType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [orderBy, setOrderBy] = useState<string>("desc");
  const [collumnName, setCollumnName] = useState("id");
  const [searchValue, setSearchValue] = useState("");
  const params = {
    status: "Mistet",
  };

  useEffect(() => {
    if (orderBy === "desc") {
      setHenvendelser((currentHenvendelser) =>
        currentHenvendelser
          .map((h) => h)
          .sort(compare)
          .reverse()
      );
    } else {
      setHenvendelser((currentHenvendelser) =>
        currentHenvendelser.map((h) => h).sort(compare)
      );
    }
  }, [orderBy, collumnName]);

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
    const queryString = Object.entries(params)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
    setLoading(true);
    fetch("/api/admin/lost?" + queryString)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new HTTPError("HTTPError", response.status);
        }
      })
      .then((jsonData) => {
        const lostData = jsonData.data.items;

        setHenvendelser(lostData.sort(compare).reverse());

        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log("error: ", e);
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
    const newHenvendelser = henvendelser.filter((henvendelse) => {
      return henvendelse.id !== id;
    });
    setHenvendelser(newHenvendelser);
  };

  function formatDescription(desc: string | undefined) {
    if (typeof desc === "string") {
      if (desc.length > 16) {
        return desc.slice(0, 16) + "...";
      } else {
        return desc;
      }
    } else {
      return "";
    }
  }

  return (
    <DataLoadingContainer loading={isLoading} error={error}>
      <Page>
        <h1>Henvendelser</h1>
        <p>Oversikt over henvendelser og potensielle funn. </p>
        <Toolbar>
          <Box>
            <Grid container className={searchClasses.box}>
              <Grid item md={7}>
                <Box className={searchClasses.gridItem2}>
                  <SeachField
                    onChange={(event) => {
                      setSearchValue(event.target.value);
                    }}
                  />
                </Box>
              </Grid>
              <Grid item md={5} className={searchClasses.gridItem1}>
                <Box>
                  <PrimaryButton href={"/"} target="_blank">
                    Ny henvendelse
                  </PrimaryButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
        <Content>
          <PrimaryContent>
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
                          key={item.id}
                        >
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.phone}</TableCell>
                          <TableCell>{item.subcategory}</TableCell>
                          <TableCell>
                            {formatDescription(item.description)}
                          </TableCell>
                          <TableCell align="center">
                            {item.matchCount}
                          </TableCell>
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
          </PrimaryContent>
          <SecondaryContent>
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
          </SecondaryContent>
        </Content>
      </Page>
    </DataLoadingContainer>
  );
}

export default Henvendelser;
