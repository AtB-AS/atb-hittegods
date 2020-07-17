import React, { useEffect, useState } from "react";
import { Button, Grid, Box } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MatchRow from "./MatchRow";
import { Match } from "./Henvendelse";
import DataLoadingContainer from "../DataLoadingContainer";

type Props = {
  matches: Match[];
  hendvendelsesid: number;
  removeItem: (id: number) => void;
  setLoading: (loading: boolean) => void;
  decrementNewMatch: (id: number) => void;
};

type MatchResponse = {
  status: string;
  data: Found;
};

export type Found = {
  id: number;
  name: string;
  phone: string;
  email: string;
  category: string;
  subcategory: string;
  color: string;
  status: string;
  line: string;
  date: string;
  brand: string;
  description: string;
};

function Matches(props: Props) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const [foundItems, setFoundItems] = useState<Found[]>([]);

  useEffect(() => {
    // fetch info on all the matches
    const promises: Promise<Response>[] = [];
    props.matches.forEach((match) => {
      promises.push(fetch("/api/admin/found/" + match.foundid));
    });
    Promise.all(promises).then((data) => {
      const promises2: Promise<MatchResponse>[] = [];
      data.forEach((response) => {
        promises2.push(response.json());
      });
      Promise.all(promises2).then((data) => {
        setFoundItems(data.map((item) => item.data));
        setLoading(false);
      });
    });
  }, []);

  const matchByFoundId = (foundid: number): Match | undefined => {
    return props.matches.find((m) => m.foundid === foundid);
  };

  return (
    <DataLoadingContainer loading={isLoading} error={error}>
      <Grid item md={12}>
        <TableContainer>
          <h3>Mulige funn:</h3>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Navn</TableCell>
                <TableCell>Underkategori</TableCell>
                <TableCell>Merke</TableCell>
                <TableCell>Linje</TableCell>
              </TableRow>
            </TableHead>
            {foundItems.map((foundItem) => (
              <MatchRow
                foundItem={foundItem}
                removeItem={props.removeItem}
                setLoading={props.setLoading}
                decrementNewMatch={props.decrementNewMatch}
                match={matchByFoundId(foundItem.id)}
                hendvendelsesid={props.hendvendelsesid}
              />
            ))}
          </Table>
        </TableContainer>
      </Grid>
    </DataLoadingContainer>
  );
}

export default Matches;
