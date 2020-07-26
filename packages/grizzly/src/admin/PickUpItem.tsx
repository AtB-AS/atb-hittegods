import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";
import { useHistory } from "react-router";
import { HenvendelseType } from "./Henvendelse";
import DataLoadingContainer from "../client/DataLoadingContainer";
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

type ConfirmedMatch = {
  id: number;
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
  const styles = useStyles();
  const history = useHistory();
  const [notFound, setNotFound] = useState<string | undefined>(undefined);
  const [matchId, setMatchId] = useState<number | undefined>(undefined);
  let henvendelseComponent;

  useEffect(() => {
    setLoading(true);
    setNotFound(undefined);
    getMatches()
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new HTTPError("HTTPError", response.status);
        }
      })
      .then((jsonData) => {
        const lostid = lostIdFromFoundId(
          parseInt(props.match.params.id),
          jsonData.data.matches
        );
        setMatchId(
          matchIdFromFoundId(
            parseInt(props.match.params.id),
            jsonData.data.matches
          )
        );
        const responsePromises = [];
        responsePromises.push(
          fetch("/api/admin/found/" + props.match.params.id)
        );
        if (lostid !== undefined) {
          responsePromises.push(getLost(lostid));
        }
        return Promise.all(responsePromises);
      })
      .then((responses) => {
        const foundResponse = responses[0];
        if (foundResponse.ok) {
          foundResponse
            .json()
            .then((jsonData) => {
              setItem(jsonData.data);
              setLoading(false);
            })
            .catch();
        }
        if (responses.length === 2) {
          const lostResponse = responses[1];
          if (lostResponse.ok) {
            lostResponse
              .json()
              .then((jsonData) => {
                setHenvendelse(jsonData.data);
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
        if ((e.name = "HTTPError")) {
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

  const getMatches = () => {
    return fetch("/api/admin/match").catch();
  };

  const lostIdFromFoundId = (
    foundid: number,
    matches: ConfirmedMatch[]
  ): number | undefined => {
    const match = matches.find((match) => match.foundid === foundid);
    if (match !== undefined) {
      return match.lostid;
    } else {
      return undefined;
    }
  };

  const matchIdFromFoundId = (
    foundid: number,
    matches: ConfirmedMatch[]
  ): number | undefined => {
    const match = matches.find((match) => match.foundid === foundid);
    if (match !== undefined) {
      return match.id;
    } else {
      return undefined;
    }
  };

  const getLost = (id: number): Promise<Response> => {
    return fetch("/api/admin/lost/" + id);
  };

  const deleteMatch = (id: number): Promise<Response> => {
    return fetch("/api/admin/match/" + id, {
      method: "delete",
    });
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
        if (response.ok) {
          setLoading(false);
          props.removeItem(parseInt(props.match.params.id));
          history.replace("/admin/tilUtlevering");
        } else {
          throw new HTTPError("HTTPError", response.status);
        }
        if (response.status === 401) {
        } else if (response.status === 200) {
          setLoading(false);
          props.removeItem(parseInt(props.match.params.id));
          history.replace("/admin/tilUtlevering");
        }
      })
      .catch((e) => {
        setLoading(false);
        if ((e.name = "HTTPError")) {
          if (e.status === 404) {
            setNotFound("Finner ikke gjenstanden");
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }
      });
    if (henvendelse != null) {
      fetch("/api/admin/lost/" + henvendelse.id + "/status", {
        method: "put",
        body: JSON.stringify({ status: "Utlevert" }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).catch();
    }
  };

  const returnToStorageClickHandler = () => {
    setLoading(true);
    if (matchId !== undefined) {
      deleteMatch(matchId).catch();
    }
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
    })
      .then((response) => {
        if (response.status === 401) {
        } else if (response.status === 200) {
          setLoading(false);
          props.removeItem(parseInt(props.match.params.id));
          history.replace("/admin/tilUtlevering");
          fetch(
            process.env.REACT_APP_MATCH_BACKEND_HOST +
              "/found/" +
              props.match.params.id
          ).catch();
        }
      })
      .catch((e) => {
        setLoading(false);
      });
    if (henvendelse != null) {
      fetch("/api/admin/lost/" + henvendelse.id + "/status", {
        method: "put",
        body: JSON.stringify({ status: "Mistet" }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          fetch(
            process.env.REACT_APP_MATCH_BACKEND_HOST + "/lost/" + henvendelse.id
          ).catch();
        }
      });
    }
  };

  if (henvendelse != null) {
    henvendelseComponent = (
      <Grid container>
        <Grid item md={12}>
          <h2>
            {henvendelse?.subcategory} - {henvendelse?.brand}
          </h2>
        </Grid>
        <Grid item md={8}>
          <dd>{henvendelse?.description}</dd>
        </Grid>
        <Grid item md={4}>
          <dt>Farge:</dt>
          <dd>{henvendelse?.color}</dd>
        </Grid>
        <Grid item md={4}>
          <dt>Navn:</dt>
          <dd>{henvendelse?.name}</dd>
        </Grid>
        <Grid item md={4}>
          <dt>Telefon:</dt>
          <dd>{henvendelse?.phone}</dd>
        </Grid>
        <Grid item md={4}>
          <dt>Date funnet:</dt>
          <dd>{moment(henvendelse?.date).format("DD.MM.yyyy")}</dd>
        </Grid>
      </Grid>
    );
  } else {
    henvendelseComponent = "Ingen tilknyttet henvendelse";
  }

  return (
    <DataLoadingContainer loading={isLoading} error={error} notFound={notFound}>
      <div className={styles.root}>
        <Box p={3} mb={3} className={styles.card}>
          {henvendelseComponent}
        </Box>
        <p style={{ textAlign: "center" }}>Klar til utlevering:</p>
        <Box p={3} mt={1} className={styles.card}>
          <Grid container>
            <Grid item md={12}>
              <h2>
                #{item?.id} {item?.subcategory} - {item?.brand}
              </h2>
            </Grid>

            <Grid item md={8}>
              <dl>
                <dt>Dato funnet:</dt>
                <dd>{moment(item?.date).format("DD.MM.yy")}</dd>
              </dl>
            </Grid>
            <Grid item md={4}>
              <dt>Linje:</dt>
              <dd>{item?.line}</dd>
            </Grid>

            <Grid item md={12}>
              <dd>{item?.description}</dd>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <Button
                  variant="contained"
                  className="storageButton"
                  style={{ width: "100%" }}
                  onClick={(event) => {
                    deliverClickHandler();
                  }}
                >
                  Lever ut
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button
                  variant="outlined"
                  className="editButton"
                  onClick={(event) => {
                    returnToStorageClickHandler();
                  }}
                >
                  Legg tilbake til lager
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </DataLoadingContainer>
  );
}

export default PickUpItem;
