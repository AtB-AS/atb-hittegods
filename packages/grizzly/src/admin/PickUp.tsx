import React, { useEffect, useState } from "react";
import {
  Box,
  TableContainer,
  TableSortLabel,
  Typography,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { Route } from "react-router-dom";
import { useHistory } from "react-router";
import { useTableStyles } from "./styles";
import moment from "moment";
import PickUpItem from "./PickUpItem";
import DataLoadingContainer from "../client/DataLoadingContainer";
import { HTTPError } from "./Errors";
import Page from "./layouts/Page";
import Toolbar from "./layouts/Toolbar";
import PrimaryContent from "./layouts/PrimaryContent";
import SecondaryContent from "./layouts/SecondaryContent";
import Content from "./layouts/Content";
import SeachField from "../components/SeachField";

type StorageItems = {
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
  onDateSelect: (date: string) => void;
};

type ColumnProps = {
  columnName: string;
  labelName: string;
};

function PickUp(props: Props) {
  const classes = useTableStyles();
  const [storageItems, setStorageItems] = useState<StorageItems[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");
  const [orderBy, setOrderBy] = useState<string>("desc");
  const [columnName, setColumnName] = useState("id");
  const [toDate] = useState("");
  const [fromDate] = useState("");

  useEffect(() => {
    const params = {
      status: "Til utlevering",
    };

    const queryString = Object.entries(params)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
    fetch("/api/admin/found?" + queryString)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new HTTPError("HTTPError", response.status);
        }
      })
      .then((jsonData) => {
        setStorageItems(jsonData.data.items);
        const pickUpData = jsonData.data.items;
        if (orderBy === "desc") {
          setStorageItems(pickUpData.sort(compare).reverse());
        } else {
          setStorageItems(pickUpData.sort(compare));
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (orderBy === "desc") {
      setStorageItems(
        storageItems
          .map((h) => h)
          .sort(compare)
          .reverse()
      );
    } else {
      setStorageItems(storageItems.map((h) => h).sort(compare));
    }
  }, [orderBy, columnName]);

  function clickedRowItem(id: number) {
    history.push("/admin/tilUtlevering/" + id);
  }

  function searchStorage(storageToSearch: StorageItems[], query: string) {
    if (!query || query === "") {
      return filterSearch(storageToSearch);
    }

    const searchResults = storageToSearch.filter((user) => {
      return (
        user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        user.subcategory
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase()) ||
        user.brand.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        user.color.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        user.line.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        user.description
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase()) ||
        user.id.toLocaleString().includes(query)
      );
    });

    return filterSearch(searchResults);
  }

  function filterSearch(items: StorageItems[]) {
    if (!fromDate || (fromDate === "" && !toDate) || toDate === "") {
      return items;
    }
    const filterSearch = items.filter((user) => {
      let from = moment.utc(fromDate);
      let to = moment.utc(toDate);
      let userDate = moment(user.date);
      return (
        userDate.isSameOrAfter(from, "day") &&
        userDate.isSameOrBefore(to, "day")
      );
    });
    return filterSearch;
  }

  function clickedColumnName(col: string) {
    if (col === columnName) {
      setOrderBy(orderBy === "asc" ? "desc" : "asc");
    }
    setColumnName(col);
  }

  function StorageColumn(props: ColumnProps) {
    return (
      <TableCell className={classes.th}>
        <TableSortLabel
          active={columnName === props.columnName}
          direction={orderBy === "asc" ? "desc" : "asc"}
          onClick={(event) => clickedColumnName(props.columnName)}
        >
          {props.labelName}
        </TableSortLabel>
      </TableCell>
    );
  }
  function compare(a: StorageItems, b: StorageItems) {
    // @ts-ignore
    return `${a[columnName]}`.localeCompare(`${b[columnName]}`, "en", {
      numeric: true,
      sensitivity: "base",
    });
  }

  const removeItem = (id: number) => {
    const newStorageItems = storageItems.filter((item) => item.id !== id);
    setStorageItems(newStorageItems);
  };

  return (
    <DataLoadingContainer loading={isLoading} error={error}>
      <Page>
        <Typography variant="h1">Til utlevering</Typography>
        <p>
          Oversikt over gjenstander som ligger klar til utlevering med
          tilhørende henvendelse.
        </p>
        {storageItems.length === 0 && (
          <p>
            Ingen henvendelser registrert, så nå kan du unne deg en kaffepause
            :)
          </p>
        )}
        {storageItems.length > 0 && (
          <>
            <Toolbar>
              <Box>
                <SeachField
                  onChange={(event) => setSearchValue(event.target.value)}
                />
              </Box>
            </Toolbar>
            <Content>
              <PrimaryContent>
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <StorageColumn columnName={"id"} labelName={"Id"} />
                        <StorageColumn
                          columnName={"subcategory"}
                          labelName={"Underkategori"}
                        />
                        <StorageColumn
                          columnName={"description"}
                          labelName={"Beskrivelse"}
                        />
                        <StorageColumn
                          columnName={"phone"}
                          labelName={"Telefon"}
                        />
                        <StorageColumn columnName={"date"} labelName={"Dato"} />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {searchStorage(storageItems, searchValue).map((item) => {
                        return (
                          <TableRow
                            hover
                            className={
                              `${item.id}` === props.match.params?.id
                                ? classes.activeRow
                                : classes.row
                            }
                            onClick={(event) => clickedRowItem(item.id)}
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
                  path="/admin/tilUtlevering/:id"
                  render={(routeProps) => (
                    <PickUpItem {...routeProps} removeItem={removeItem} />
                  )}
                />
              </SecondaryContent>
            </Content>
          </>
        )}
      </Page>
    </DataLoadingContainer>
  );
}

export default PickUp;
