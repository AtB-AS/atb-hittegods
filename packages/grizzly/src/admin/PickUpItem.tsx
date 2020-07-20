import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
import { useHistory } from "react-router";
import { HenvendelseType } from "./Henvendelse";

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

type ConfirmedMatch = {
  matchid: number;
  lostid: number;
  foundid: number;
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

function PickUpItem(props: Props) {
  const [item, setItem] = useState<Items | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [henvendelse, setHenvendelse] = useState<HenvendelseType | null>(null);
  const [error, setError] = useState(false);
  const [match, setMatch] = useState<number[]>([]);
  const styles = useStyles();
  const history = useHistory();
  const [notFound, setNotFound] = useState(false);
  const parameters = {
    id: props.match.params.id,
  };
  console.log("REMOVE ITEM");
  console.log(props.removeItem);

  useEffect(() => {
    setLoading(true);
    getMatches()
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((jsonData) => {
        const lostid = lostIdFromFoundId(
          parseInt(props.match.params.id),
          jsonData.data.matches
        );
        const promises = [];
        promises.push(fetch("/api/admin/found/" + props.match.params.id));
        if (lostid !== undefined) {
          promises.push(getLost(lostid));
        }
        Promise.all(promises)
          .then((data) => {
            const foundResponse = data[0];
            if (foundResponse.ok) {
              foundResponse
                .json()
                .then((jsonData) => {
                  setItem(jsonData.data);
                  setLoading(false);
                })
                .catch();
            }
            if (data.length === 2) {
              const lostResponse = data[1];
              if (lostResponse.ok) {
                lostResponse
                  .json()
                  .then((jsonData) => {
                    setHenvendelse(jsonData.data);
                    console.log(jsonData.data);
                  })
                  .catch((e) => {
                    setLoading(false);
                  });
              }
            } else {
              setHenvendelse(null);
            }
          })
          .catch((e) => {
            setLoading(false);
          });
      })
      .catch((e) => setLoading(false));
  }, [props.match.params.id]);

  if (error) {
    return <p>Noe gikk galt :(</p>;
  }

  const getMatches = () => {
    return fetch("/api/admin/match");
  };

  const lostIdFromFoundId = (
    foundid: number,
    matches: ConfirmedMatch[]
  ): number | undefined => {
    console.log(matches);
    const match = matches.find((match) => match.foundid === foundid);
    if (match !== undefined) {
      return match.lostid;
    } else {
      return undefined;
    }
  };

  const getLost = (id: number): Promise<Response> => {
    return fetch("/api/admin/lost/" + id);
  };

  const deliverClickHandler = () => {
    setLoading(true);
    fetch("/api/admin/found/" + props.match.params.id, {
      body: JSON.stringify({
        status: "Utlevert",
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
    })
      .then((response) => {
        if (response.status === 401) {
        } else if (response.status === 200) {
          console.log("Item removed");
          setLoading(false);
          console.log("loading false");
          props.removeItem(parseInt(props.match.params.id));
          console.log("1111111111111111111");
          history.replace("/admin/tilUtlevering");
          console.log(2222222222222222222222);
        }
      })
      .catch((e) => {
        setLoading(false);
      });
  };

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

  let henvendelseComponent;
  if (henvendelse != null) {
    henvendelseComponent = (
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
    );
  } else {
    henvendelseComponent = "Ingen tilknyttet henvendelse";
  }

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
        </Grid>
        <Grid item justify="space-between">
          <Button
            variant="contained"
            color="primary"
            className="editButton"
            onClick={(event) => {}}
          >
            Send tilbake til lager
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="storageButton"
            onClick={(event) => {
              deliverClickHandler();
            }}
          >
            Lever ut
          </Button>
        </Grid>
      </Box>
      <Box p={3} mt={4} className={styles.card}>
        {henvendelseComponent}
      </Box>
    </div>
  );
}

export default PickUpItem;