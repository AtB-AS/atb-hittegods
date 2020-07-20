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
import { HTTPError } from "./Errors";
import DataLoadingContainer from "../DataLoadingContainer";

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

function Transit(props: Props) {
  const classes = useTableStyles();
  const [transitItems, setTransitItems] = useState<TransitItem[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const history = useHistory();
  const [notFound, setNotFound] = useState<string | undefined>(undefined);

  const params = {
    status: "På vei",
  };

  const queryString = Object.entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

  const removeItem = (id: number) => {
    const newItem = transitItems.filter((transitItem) => {
      return transitItem.id !== id;
    });
    setTransitItems(newItem);
  };

  useEffect(() => {
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
        setTransitItems(jsonData.data.items);
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

  return (
    <DataLoadingContainer loading={isLoading} error={error} notFound={notFound}>
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
          <Route
            path="/admin/påVei/:id"
            render={(routeProps) => (
              <TransitItem {...routeProps} removeItem={removeItem} />
            )}
          />
        </div>
      </div>
    </DataLoadingContainer>
  );
}

export default Transit;
