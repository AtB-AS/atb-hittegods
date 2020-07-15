import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
import { useHistory } from "react-router";

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

function TransitItem(props: Props) {
  const [item, setItem] = useState<Items | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const [match, setMatch] = useState<number[]>([]);
  const styles = useStyles();
  const history = useHistory();
  const [notFound, setNotFound] = useState(false);
  const parameters = {
    id: props.match.params.id,
  };

  useEffect(() => {
    setLoading(true);
    fetch("/api/admin/found/" + props.match.params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 404) {
          setNotFound(true);
          throw new Error("Finnes ikke");
        }
      })
      .then((jsonData) => {
        setItem(jsonData.data);
        if (jsonData.data.status != "På vei") {
          setNotFound(true);
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
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

  if (notFound) {
    return <p>Beklager denne gjenstaden finnes ikke</p>;
  }

  const storageClickHandler = () => {
    if (props.match.params.id != undefined) {
      fetch("/api/admin/found/" + props.match.params.id, {
        body: JSON.stringify({
          status: "Funnet",
          subCategory: item?.subcategory,
          category: item?.category,
          description: item?.description,
          name: item?.name,
          phone: item?.phone,
          email: item?.email,
          brand: item?.brand,
          color: item?.color,
          line: item?.line,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      }).then((response) => {
        if (response.status === 401) {
        } else if (response.status === 200) {
          console.log(props);
          props.removeItem(parseInt(props.match.params.id));
          history.replace("/admin/påVei");
        }
      });
    }
  };

  return (
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
          <Grid item justify="space-between">
            <Button variant="contained" color="primary" className="editButton">
              Rediger
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="storageButton"
              onClick={(event) => {
                storageClickHandler();
              }}
            >
              Legg til lager
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default TransitItem;