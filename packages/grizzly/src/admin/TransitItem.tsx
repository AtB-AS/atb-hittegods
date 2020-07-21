import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";
import { useHistory } from "react-router";
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

function TransitItem(props: Props) {
  const [item, setItem] = useState<Items | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const styles = useStyles();
  const history = useHistory();
  const [notFound, setNotFound] = useState<string | undefined>(undefined);
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

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
        setEditValue(jsonData.data.description);
        if (jsonData.data.status !== "På vei") {
          setNotFound("true");
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

  const storageClickHandler = () => {
    if (props.match.params.id !== undefined) {
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
          if (response.ok) {
            props.removeItem(parseInt(props.match.params.id));
            history.replace("/admin/påVei");
          } else {
            throw new HTTPError("HTTPError", response.status);
          }
        })
        .catch((e) => {
          if (e.name === "HTTPError") {
            if (e.status === 404) {
              //TODO 404 popup message
            } else {
              //TODO standard error
            }
          } else {
            //TODO standart error
          }
        });
    }
  };

  const editClickHandler = () => {
    if (edit) {
      if (props.match.params.id !== undefined) {
        fetch("/api/admin/found/" + props.match.params.id, {
          body: JSON.stringify({
            status: "Funnet",
            subCategory: item?.subcategory,
            category: item?.category,
            description: editValue,
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
              props.removeItem(parseInt(props.match.params.id));
              history.replace("/admin/påVei");
            } else {
              throw new HTTPError("HTTPError", response.status);
            }
          })
          .catch((e) => {
            if (e.name === "HTTPError") {
              if (e.status === 404) {
                //TODO 404 popup message
              } else {
                //TODO standard error
              }
            } else {
              //TODO standart error
            }
          });
      }
    } else {
      setEdit(true);
    }
  };

  const textChangeHandler = (value: string) => {
    setEditValue(value);
  };

  let description;
  let buttons;
  if (edit) {
    description = (
      <TextField
        label="Beskrivelse"
        value={editValue}
        onChange={(e) => {
          textChangeHandler(e.target.value);
        }}
      />
    );
    buttons = (
      <Grid item justify="space-between">
        <Button
          variant="contained"
          color="primary"
          className="editButton"
          onClick={(event) => {
            editClickHandler();
          }}
        >
          Lagre og legg til lager
        </Button>
      </Grid>
    );
  } else {
    description = <p>{item?.description}</p>;
    buttons = (
      <Grid item justify="space-between">
        <Button
          variant="contained"
          color="primary"
          className="editButton"
          onClick={(event) => {
            editClickHandler();
          }}
        >
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
    );
  }

  function ContactInfo() {
    if (item?.name != "" || item?.phone != "" || item?.email != "") {
      return (
        <div>
          <Box>
            <Grid container spacing={1}>
              <Grid item md={4}>
                <dl>
                  <dt>Navn:</dt>
                  <dd>{item?.name}</dd>
                </dl>
              </Grid>
              <Grid item md={4}>
                <dl>
                  <dt>Telefon:</dt>
                  <dd>{item?.phone}</dd>
                </dl>
              </Grid>
              <Grid item md={4}>
                <dl>
                  <dt>E-post:</dt>
                  <dd>{item?.email}</dd>
                </dl>
              </Grid>
            </Grid>
          </Box>
        </div>
      );
    } else {
      return (
        <div>
          <Grid item md={12}>
            Ingen kontaktinfo funnet
          </Grid>
        </div>
      );
    }
  }

  return (
    <DataLoadingContainer loading={isLoading} error={error} notFound={notFound}>
      <div className={styles.root}>
        <Box p={3} mt={4} className={styles.card}>
          <div>
            <h2>
              {item?.subcategory} - {item?.brand}
            </h2>
          </div>
          <Box>
            <Grid container>
              <Grid item md={12}>
                <dt>Full beskrivelse:</dt>
                <dd>{description}</dd>
              </Grid>
              <Grid item md={4}>
                <dl>
                  <dt>Dato funnet:</dt>
                  <dd>{moment(item?.date).format("DD.MM.yy")}</dd>
                </dl>
              </Grid>
              <Grid item md={4}>
                <dl>
                  <dt>Linje:</dt>
                  <dd>{item?.line}</dd>
                </dl>
              </Grid>
              <Grid item md={4}>
                <dl>
                  <dt>Farge:</dt>
                  <dd>{item?.color}</dd>
                </dl>
              </Grid>
            </Grid>
          </Box>
          <h3 className="h4">Kontaktinfo:</h3>
          <ContactInfo />
          <Grid>{buttons}</Grid>
        </Box>
      </div>
    </DataLoadingContainer>
  );
}

export default TransitItem;
