import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
import Matches from "./Matches";
import {type} from "os";

const useStyles = makeStyles({
  root: {
    padding: "20px 0 0 20px",
  },
  loading: {
    textAlign: "center",
    marginTop: "60px",
  },
  card: {
    backgroundColor: "#fff",
  },
});

type Props = {
  match: {
    params: {
      id: string;
    };
  };
  removeItem: (id: number) => void;
};

type Henvendelsen = {
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

function Henvendelse(props: Props) {
  const [henvendelse, setHenvendelse] = useState<Henvendelsen | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const [match, setMatch] = useState<number[]>([]);
  const styles = useStyles();
  const parameters = {
    id: props.match.params.id,
  };

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
    return (
      <div className={styles.loading}>
        <CircularProgress />
      </div>
    );
  }



  return (
    <div className={styles.root}>
      <Box p={3} mt={4} className={styles.card}>
        <div>
            <h2>
              {henvendelse?.subcategory} - {henvendelse?.brand}
            </h2>
        </div>
          <Box>
            <Grid container>
          <Grid item md={12}>
            <dt>Full beskrivelse:</dt>
            <dd>{henvendelse?.description}</dd>
          </Grid>
          <Grid item md={4}>
            <dl>
              <dt>Dato mistet:</dt>
              <dd>{moment(henvendelse?.date).format("DD.MM.yy")}</dd>
            </dl>
          </Grid>
          <Grid item md={4}>
            <dl>
              <dt>Linje:</dt>
              <dd>{henvendelse?.line}</dd>
            </dl>
          </Grid>
          <Grid item md={4}>
            <dl>
              <dt>Farge:</dt>
              <dd>{henvendelse?.color}</dd>
            </dl>
          </Grid>
            </Grid>
          </Box>
          <h3 className="h4">Innsender:</h3>
          <Box >
            <Grid container>
              <Grid item md={12}>
                <dl>
                  <dt>Navn:</dt>
                  <dd>{henvendelse?.name}</dd>
                </dl>
              </Grid>
              <Grid item md={4}>
                <dl>
                  <dt>Telefon:</dt>
                  <dd>{henvendelse?.phone}</dd>
                </dl>
              </Grid>
              <Grid item md={8}>
                <dl>
                  <dt>E-post:</dt>
                  <dd>{henvendelse?.email}</dd>
                </dl>
              </Grid>
            </Grid>
          </Box>


      </Box>
      <Box p={2} className={styles.card} mt={4}>
        <Matches
          ids={match}
          hendvendelsesid={props.match.params.id}
          removeItem={props.removeItem}
          setLoading={setLoading}
        />
      </Box>
    </div>
  );
}

export default Henvendelse;
