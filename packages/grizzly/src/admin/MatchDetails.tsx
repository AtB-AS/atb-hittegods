import { useHistory, useParams } from "react-router";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Box, Button, Grid} from "@material-ui/core";
import React from "react";
import { log } from "util";
import moment from "moment";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
  item: FoundMatch;
  removeItem: (id: number) => void;
  setLoading: (loading: boolean) => void;
};

type Match = {
  lostid?: number;
  foundid?: number;
};

type FoundMatch = {
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

type PossibleMatchResponse = {
  status: string;
  data: PossibleMatch[];
};
type PossibleMatch = {
  id: number;
  lostid: number;
  foundid: number;
  score: number;
  new: boolean;
};

function MatchDetails(props: Props) {
  const { id } = useParams();
  const history = useHistory();
  const styles = useStyles();

  //TODO Better code for network calls catching errors etc

  const confirmMatch = () => {
    props.setLoading(true);
    registerMatch({
      lostid: id,
      foundid: props.item.id,
    })
      .then((response) => {
        if (response.status === 409) {
          //TODO
          throw new Error("Conflict");
        } else if (response.status === 200) {
          const lostPossibleMatchePromise = getPossibleMatches({ lostid: id });
          const foundPossibleMatchesPromise = getPossibleMatches({
            foundid: props.item.id,
          });

          Promise.all([lostPossibleMatchePromise, foundPossibleMatchesPromise])
            .then((data) => {
              const tempPromises: Promise<PossibleMatchResponse>[] = [];
              data.forEach((response) => {
                tempPromises.push(response.json());
              });
              Promise.all(tempPromises)
                .then((data) => {
                  const lostPromise = updateLostStatus(id);
                  const foundPromise = updateFoundStatus(props.item.id);
                  const promises2: Promise<Response>[] = [
                    lostPromise,
                    foundPromise,
                  ];
                  const ids: number[] = [];
                  data.map((item) => {
                    console.log(item);
                    item.data.forEach((match) => {
                      if (!ids.includes(match.id)) {
                        ids.push(match.id);
                      }
                    });
                  });
                  ids.forEach((id) => {
                    promises2.push(deletePossibleMatch(id));
                  });
                  Promise.all(promises2)
                    .then((data) => {
                      props.removeItem(id);
                      history.replace("/admin/henvendelser");
                      props.setLoading(false);
                    })
                    .catch((e) => {
                      console.log(e);
                      props.setLoading(false);
                    });
                })
                .catch((e) => {
                  console.log(e);
                  props.setLoading(false);
                });
            })
            .catch((e) => {
              console.log(e);
              props.setLoading(false);
            });
        }
      })
      //TODO
      .catch((e) => {
        console.log(e);
        props.setLoading(false);
      });
  };

  const registerMatch = (payload: Match) => {
    return fetch("/api/admin/match", {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  const updateLostStatus = (id: number) => {
    return fetch("/api/admin/lost/" + id + "/status", {
      method: "put",
      body: JSON.stringify({ status: "Til utlevering" }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  const updateFoundStatus = (id: number) => {
    return fetch("/api/admin/found/" + id, {
      method: "put",
      body: JSON.stringify({
        status: "Til utlevering",
        name: props.item.name,
        phone: props.item.phone,
        email: props.item.email,
        category: props.item.category,
        subCategory: props.item.subcategory,
        color: props.item.color,
        brand: props.item.brand,
        description: props.item.description,
        line: props.item.line,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  const getPossibleMatches = (match: Match) => {
    const queryString = Object.entries(match)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
    return fetch("/api/admin/possibleMatch?" + queryString);
  };

  const deletePossibleMatch = (id: number) => {
    return fetch("/api/admin/possibleMatch/" + id, {
      method: "DELETE",
    });
  };
  let confirmButton;
  console.log(props.item.status);
  if (props.item.status === "Funnet") {
    confirmButton = (
      <Button
          variant="contained"
          color="primary"
          className="editButton"
          onClick={() => confirmMatch()}>Bekreft match</Button>
    );
  } else {
    confirmButton = (
      <Button
          variant="contained"
          color="primary"
          className="editButton"
          disabled={true}>Gjenstand er ikke bekreftet ankommet</Button>
    );
  }

  function ContactInfo() {
    if (props.item.name!="" || props.item.phone!="" || props.item.email!=""){
      return(<div>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <h3 className="h4">Kontaktinfo:</h3>
          </Grid>
        <Grid item md={4}>
        <dl>
          <dt>Navn:</dt>
          <dd>{props.item.name}</dd>
        </dl>
        </Grid>
        <Grid item md={4}>
          <dl>
            <dt>Telefon:</dt>
            <dd>{props.item.phone}</dd>
          </dl>
        </Grid>
        <Grid item md={4}>
          <dl>
            <dt>E-post:</dt>
            <dd>{props.item.email}</dd>
          </dl>
        </Grid>
        </Grid>
        </div>)

    }
    else{
      return(
          <div>
            <Grid item md={12}>
              Ingen kontaktinfo funnet
            </Grid>
          </div>
      )
    }

  }


  return (
      <div>
        <Box p={2} mt={1} mb={0} className={styles.card}>
        <Grid container spacing={1}>
          <h3 className="h4">{props.item.subcategory} - {props.item.brand}</h3>
          <Grid item md={12}>
            <dt>Full beskrivelse:</dt>
            <dd>{props.item.description}</dd>
          </Grid>
          <Grid item md={4}>
            <dl>
              <dt>Dato funnet:</dt>
              <dd>{moment(props.item.date).format("DD.MM.yy")}</dd>
            </dl>
          </Grid>
          <Grid item md={4}>
            <dl>
              <dt>Linje:</dt>
              <dd>{props.item.line}</dd>
            </dl>
          </Grid>
          <Grid item md={4}>
            <dl>
              <dt>Farge:</dt>
              <dd>{props.item.color}</dd>
            </dl>
          </Grid>
        </Grid>

          <ContactInfo/>

      </Box>
      <Box mb={1}>
        {confirmButton}
      </Box>
      </div>
  );
}
export default MatchDetails;
