import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
import Matches from "./Matches";
import DataLoadingContainer from "../DataLoadingContainer";
import { HTTPError } from "./Errors";

const useStyles = makeStyles({
  root: {
    padding: "20px 0 0 20px",
    fontSize: "18px",
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
  decrementNewMatch: (id: number) => void;
};

export type HenvendelseType = {
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
  matches: Match[];
};

export type Match = {
  foundid: number;
  matchid: number;
  new: boolean;
};

function Henvendelse(props: Props) {
  const [henvendelse, setHenvendelse] = useState<HenvendelseType | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<string | undefined>(undefined);
  const [error, setError] = useState(false);
  const [match, setMatch] = useState<Match[]>([]);
  const styles = useStyles();

  useEffect(() => {
    setLoading(true);
    setNotFound(undefined);
    fetch("/api/admin/lost/" + props.match.params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new HTTPError("HTTPError", response.status);
        }
      })
      .then((jsonData) => {
        setHenvendelse(jsonData.data);
        setMatch(jsonData.data.matches);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        if (e.name === "HTTPError") {
          if (e.status === 404) {
            setNotFound("Denne henvendelsen finnes ikke");
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }
      });
  }, [props.match.params.id]);

  return (
    <DataLoadingContainer loading={isLoading} error={error} notFound={notFound}>
      <div className={styles.root}>
        <Box p={3} mt={4} className={styles.card}>
          <Grid container>
            <Grid item md={12}>
              <h2>
                {henvendelse?.subcategory} - {henvendelse?.brand}
              </h2>
              <p>{henvendelse?.description}</p>
            </Grid>
            <Grid item md={8}>
              <h3 className="h4">Innsender</h3>
              <dl>
                <dt>Navn:</dt>
                <dd>{henvendelse?.name}</dd>
                <dt>Telefon:</dt>
                <dd>{henvendelse?.phone}</dd>
                <dt>E-post:</dt>
                <dd>{henvendelse?.email}</dd>
              </dl>
            </Grid>
            <Grid item md={4}>
              <h3 className="h4">Detaljer</h3>
              <dl>
                <dt>Dato:</dt>
                <dd>{moment(henvendelse?.date).format("DD.MM.yy")}</dd>
                <dt>Linje:</dt>
                <dd>{henvendelse?.line}</dd>
                <dt>Farge:</dt>
                <dd>{henvendelse?.color}</dd>
              </dl>
            </Grid>
          </Grid>
        </Box>
        <Box p={2} className={styles.card} mt={4}>
          <Matches
            matches={match}
            hendvendelsesid={parseInt(props.match.params.id)}
            removeItem={props.removeItem}
            setLoading={setLoading}
            decrementNewMatch={props.decrementNewMatch}
          />
        </Box>
      </div>
    </DataLoadingContainer>
  );
}

export default Henvendelse;
