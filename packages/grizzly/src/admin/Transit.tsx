import React, { useEffect, useState } from "react";
import { TableContainer } from "@material-ui/core";
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

type Items = {
  id: number;
  subcategory: string;
  description: string;
  matchCount: number;
  newMatchCount: number;
  name: string;
  phone: string;
  email: string;
  brand: string;
  status: string;
  color: string;
  date: string;
  line: string;
  foundids: number[];
};

type Props = {
  match: {
    params: {
      id?: string;
    };
  };
};

function Transit(props: Props) {
  const classes = useTableStyles();
  const [items, setItems] = useState<Items[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const history = useHistory();

  const params = {
    status: "På vei",
  };

  const queryString = Object.entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

  const removeItem = (id: number) => {
    const keepItems: Array<Items> = [];
    items.forEach((item) => {
      if (item.id != id) {
        keepItems.push(item);
      }
    });
    setItems(keepItems);
  };

  useEffect(() => {
    setLoading(true);
    fetch("/api/admin/found?" + queryString)
      .then((response) => {
        if (response.status === 401) {
          //Unauthorized
        } else {
          return response.json();
        }
      })
      .then((jsonData) => {
        setItems(jsonData.data.items);
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

  function clickedRowItem(id: number) {
    history.push("/admin/påVei/" + id);
  }

  function formatDescription(desc:string|undefined) {
    if(typeof(desc)==="string") {
      if (desc.length > 16) {
        return desc.slice(0, 16) + "..."
      } else {
        return desc
      }
    }
    else {
      return ""
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.leftCol}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className={classes.thRow}>
                <TableCell className={classes.th}>Id</TableCell>
                <TableCell className={classes.th}>Underkategori</TableCell>
                <TableCell className={classes.th}>Beskrivelse</TableCell>
                <TableCell className={classes.th}>Telefon</TableCell>
                <TableCell className={classes.th}>Dato</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => {
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
                    <TableCell>{item.subcategory}</TableCell>
                    <TableCell>{formatDescription(item.description)}</TableCell>
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
        <Route
          path="/admin/påVei/:id"
          render={(routeProps) => (
            <TransitItem {...routeProps} removeItem={removeItem} />
          )}
        />
      </div>
    </div>
  );
}

export default Transit;
