import React, { useEffect, useState } from "react";
import {
  TableContainer,
  TableSortLabel,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { Route } from "react-router-dom";
import { useTableStyles } from "./styles";
import { useHistory } from "react-router";
import TransitItem from "./TransitItem";
import moment from "moment";
import { HTTPError } from "./Errors";
import DataLoadingContainer from "../client/DataLoadingContainer";
import Toolbar from "./layouts/Toolbar";
import Page from "./layouts/Page";
import Grid from "@material-ui/core/Grid";
import PrimaryButton from "./PrimaryButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Content from "./layouts/Content";
import PrimaryContent from "./layouts/PrimaryContent";
import SecondaryContent from "./layouts/SecondaryContent";

type TransitItem = {
  id: number;
  name: string;
  subcategory: string;
  description: string;
  matchCount: number;
  newMatchCount: number;
  color: string;
  brand: string;
  line: string;
  phone: number;
  date: Date;
};

type Props = {
  match: {
    params: {
      id?: string;
    };
  };
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      alignItems: "flex-end",
      paddingBottom: "8px",
    },
    gridContainer: {
      marginTop: "27.7px",
    },
    gridItem: {
      display: "flex",
      justifyContent: "flex-end",
    },
  })
);

type ColumnProps = {
  columnName: string;
  labelName: string;
};

function Transit(props: Props) {
  const classes = useTableStyles();
  const [transitItems, setTransitItems] = useState<TransitItem[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const history = useHistory();
  const [notFound] = useState<string | undefined>(undefined);
  const gridClasses = useStyles();
  const [orderBy, setOrderBy] = useState<string>("desc");
  const [collumnName, setCollumnName] = useState("id");

  const removeItem = (id: number) => {
    const newItem = transitItems.filter((transitItem) => {
      return transitItem.id !== id;
    });
    setTransitItems(newItem);
  };

  useEffect(() => {
    if (orderBy === "desc") {
      setTransitItems(
        transitItems
          .map((h) => h)
          .sort(compare)
          .reverse()
      );
    } else {
      setTransitItems(transitItems.map((h) => h).sort(compare));
    }
  }, [orderBy, collumnName]);

  useEffect(() => {
    const params = {
      status: "På vei",
    };

    const queryString = Object.entries(params)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
    setLoading(true);
    fetch("/api/admin/found?" + queryString)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new HTTPError("HTTPError", response.status);
        }
      })
      .then((jsonData) => {
        const transitItem = jsonData.data.items;
        setTransitItems(jsonData.data.items);
        if (orderBy === "desc") {
          setTransitItems(transitItem.sort(compare).reverse());
        } else {
          setTransitItems(transitItem.sort(compare));
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  function clickedRowItem(id: number) {
    history.push("/admin/påVei/" + id);
  }

  function compare(a: TransitItem, b: TransitItem) {
    // @ts-ignore
    return `${a[collumnName]}`.localeCompare(`${b[collumnName]}`, "en", {
      numeric: true,
      sensitivity: "base",
    });
  }

  function TransitColumn(props: ColumnProps) {
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

  function clickedColumnName(col: string) {
    if (col === collumnName) {
      setOrderBy(orderBy === "asc" ? "desc" : "asc");
    }
    setCollumnName(col);
  }

  return (
    <DataLoadingContainer loading={isLoading} error={error} notFound={notFound}>
      <Page>
        <Typography variant="h1">På vei</Typography>
        <p>Registreringsside for VY og Tide. </p>

        <Toolbar>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
            className={gridClasses.gridContainer}
          >
            <Grid item>
              <PrimaryButton href="/admin/påVei/registrer">
                Ny gjenstand
              </PrimaryButton>
            </Grid>
          </Grid>
        </Toolbar>

        <Content>
          <PrimaryContent>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow className={classes.thRow}>
                    <TransitColumn columnName={"id"} labelName={"Id"} />
                    <TransitColumn
                      columnName={"subcategory"}
                      labelName={"Underkategori"}
                    />
                    <TransitColumn
                      columnName={"description"}
                      labelName={"Beskrivelse"}
                    />
                    <TransitColumn columnName={"phone"} labelName={"Telefon"} />
                    <TransitColumn columnName={"date"} labelName={"Dato"} />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transitItems.map((item, index) => {
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
                        <TableCell>{item.subcategory}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>
                          {moment(item?.date).format("DD.MM.yy")}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </PrimaryContent>
          <SecondaryContent>
            <Route
              path="/admin/påVei/:id"
              render={(routeProps) => (
                <TransitItem {...routeProps} removeItem={removeItem} />
              )}
            />
          </SecondaryContent>
        </Content>
      </Page>
    </DataLoadingContainer>
  );
}

export default Transit;
