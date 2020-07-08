import React, { useEffect, useState } from "react";
import { log } from "util";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

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
};

function Henvendelse(props: Props) {
  const [henvendelse, setHenvendelse] = useState<Henvendelsen | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);

  const parameters = {
    id: props.match.params.id,
  };

  const queryString = Object.entries(parameters)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

  useEffect(() => {
    setLoading(true);
    fetch("/api/admin/lostDetails/" + "?" + queryString)
      .then((response) => {
        if (response.status === 401) {
        } else {
          return response.json();
        }
      })
      .then((jsonData) => {
        setHenvendelse(jsonData.data);
        setLoading(false);
        console.log(jsonData);
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
      {console.log(henvendelse?.subcategory)}
      <Grid container>
        <Paper>
          <Grid item md={12}>
            <p> ID, subcat, merke og dato</p>
          </Grid>
          <Grid item md={6}>
            <h3>Innsender:</h3>
            <p>Ola Hansen</p>
            <p>90807060</p>
            <p>email@email.com</p>
            <h3>{henvendelse?.subcategory}</h3>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          </Grid>
          <Grid item md={6}>
            <h3>BILDE:)</h3>
            <p>Linje: 3</p>
          </Grid>
        </Paper>

        <Paper>
          <Grid item md={12}>
            Her kommer mulige funn!
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Henvendelse;
