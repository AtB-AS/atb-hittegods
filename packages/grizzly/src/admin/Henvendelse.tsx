import React, { useEffect, useState } from "react";
import { log } from "util";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Matches from "./Matches";

type Props = {
  match: {
    params: {
      id: string;
    };
  };
};

type Henvendelsen = {
  id: number;
  subcategory: string;
  description: string;
  matchCount: number;
  newMatchCount: number;
  foundids: number[];
};

function Henvendelse(props: Props) {
  const [henvendelse, setHenvendelse] = useState<Henvendelsen | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const [match, setMatch] = useState<number[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch("/api/admin/lost/" + props.match.params.id)
      .then((response) => {
        if (response.status === 401) {
        } else {
          return response.json();
        }
      })
      .then((jsonData) => {
        setHenvendelse(jsonData.data);
        setMatch(jsonData.data.foundids);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [props.match.params.id]);

  if (error) {
    return <p>Noe gikk galt :(</p>;
  }

  if (isLoading) {
    return <p>Laster...</p>;
  }

  return (
    <div>
      HEI {props.match.params.id}
      <Grid container>
        <Grid item md={12}>
          <Paper>
            <p> ID, subcat, merke og dato</p>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper>
            <h3>Innsender:</h3>
            <p></p>
            <p>90807060</p>
            <p>email@email.com</p>
            <h3>{henvendelse?.subcategory}</h3>
            <p>{henvendelse?.description}</p>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper>
            <h3>BILDE:)</h3>
            <p>Linje: 3</p>
          </Paper>
        </Grid>
      </Grid>
      <Matches ids={match}/>
    </div>
  );
}

export default Henvendelse;
