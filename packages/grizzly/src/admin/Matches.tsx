import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

type Props = {
  ids: number[];
};

type MatchResponse = {
  status: string;
  data: Match;
};

type Match = {
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
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    // fetch info on all the matches
    const promises: Promise<Response>[] = [];
    props.ids.forEach((id) => {
      promises.push(fetch("/api/admin/found/" + id));
    });
    Promise.all(promises).then((data) => {
      const promises2: Promise<MatchResponse>[] = [];
      data.forEach((response) => {
        promises2.push(response.json());
      });
      Promise.all(promises2).then((data) => {
        setMatches(data.map((item) => item.data));
        setLoading(false);
      });
    });
  }, []);

  if (error) {
    return <p>Noe gikk galt :(</p>;
  }

  if (isLoading) {
    return <p>Laster...</p>;
  }

  return (
    <Grid item md={12}>
      <TableContainer>
        <h3>Mulige funn:</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Navn?</TableCell>
              <TableCell>Underkategori</TableCell>
              <TableCell>Linje</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matches.map((item) => {
              return (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.subcategory}</TableCell>
                  <TableCell>{item.line}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Matches;
