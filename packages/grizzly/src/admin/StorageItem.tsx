import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
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
};

type Items = {
  id: number;
  subcategory: string;
  category: string;
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

function StorageItem(props: Props) {
  const [item, setItem] = useState<Items | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const styles = useStyles();
  const [notFound, setNotFound] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    setNotFound(undefined);
    fetch("/api/admin/found/" + props.match.params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new HTTPError("HTTPError", response.status);
        }
      })
      .then((jsonData) => {
        setItem(jsonData.data);
        if (jsonData.data.status !== "Funnet") {
          setNotFound("Finner ikke gjenstanden");
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        if (e.name === "HTTPError") {
          if (e.status === 404) {
            setNotFound("Finner ikke gjenstanden");
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
                {item?.subcategory} - {item?.brand}
              </h2>
              <p>{item?.description}</p>
            </Grid>
            <Grid item md={8}>
              <h3 className="h4">På gjenstanden</h3>
              <dl>
                <dt>Navn:</dt>
                <dd>{item?.name}</dd>
                <dt>Telefon:</dt>
                <dd>{item?.phone}</dd>
                <dt>E-post:</dt>
                <dd>{item?.email}</dd>
              </dl>
            </Grid>
            <Grid item md={4}>
              <h3 className="h4">Detaljer</h3>
              <dl>
                <dt>Dato:</dt>
                <dd>{moment(item?.date).format("DD.MM.yy")}</dd>
                <dt>Linje:</dt>
                <dd>{item?.line}</dd>
                <dt>Farge:</dt>
                <dd>{item?.color}</dd>
              </dl>
            </Grid>
          </Grid>
        </Box>
      </div>
    </DataLoadingContainer>
  );
}

export default StorageItem;
