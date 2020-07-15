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
import { Route } from "react-router-dom";
import StorageItem from "./StorageItem";
import { useHistory } from "react-router";
import { useTableStyles } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";

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

function Storage(props: Props) {
  const classes = useTableStyles();
  const [storageItems, setStorageItems] = useState<StorageItems[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();
  const searchClasses = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [orderBy, setOrderBy] = useState<string>("desc");
  const [columnName, setColumnName] = useState("id");

  const params = {
    status: "Funnet",
  };

  const queryString = Object.entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

  useEffect(() => {
    fetch("/api/admin/found?" + queryString)
      .then((response) => response.json())
      .then((jsonData) => {
        setStorageItems(jsonData.data.items);
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
    history.push("/admin/lager/" + id);
  }

  if (error) {
    return <p>Noe gikk galt</p>;
  }

  if (isLoading) {
    return <p>Laster...</p>;
  }

  if (storageItems.length === 0) {
    return <p>Ingen henvendelser registrert</p>;
  }

  function searchStorage(storageToSearch: StorageItems[], query: string) {
    if (!query || query === "") {
      return storageToSearch;
    }
    const searchResults = storageToSearch.filter((user) => {
      return (
        user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        user.subcategory
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase()) ||
        user.brand.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        user.color.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        user.line.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      );
    });
    return searchResults;
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

  return (
    <div className={classes.root}>
      <div className={classes.leftCol}>
        <InputBase
          className={searchClasses.input}
          placeholder="Søk på lagerbeholdning"
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          inputProps={{ "aria-label": "Søk på lagerbeholdning" }}
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
                <StorageColumn columnName={"phone"} labelName={"Telefon"} />
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
      </div>
      <div className={classes.rightCol}>
        <Route path="/admin/lager/:id" component={StorageItem} />
      </div>
    </div>
  );
}

export default Storage;
