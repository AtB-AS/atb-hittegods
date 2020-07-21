import { useHistory, useParams } from "react-router";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Box, Button, Grid} from "@material-ui/core";
import React from "react";
import { HTTPError } from "./Errors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";

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
  foundItem: FoundMatch;
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

  const confirmMatch = () => {
    props.setLoading(true);
    registerMatch({
      lostid: id,
      foundid: props.foundItem.id,
    })
      .then((response) => {
        if (response.ok) {
          const lostPossibleMatchePromise = getPossibleMatches({ lostid: id });
          const foundPossibleMatchesPromise = getPossibleMatches({
            foundid: props.foundItem.id,
          });
          return Promise.all([
            lostPossibleMatchePromise,
            foundPossibleMatchesPromise,
          ]);
        } else {
          throw new HTTPError("HTTPError", response.status);
        }
      })
      .then((responses) => {
        const jsonPromises: Promise<PossibleMatchResponse>[] = [];
        responses.forEach((response) => {
          jsonPromises.push(response.json());
        });
        return Promise.all(jsonPromises);
      })
      .then((jsonDataList) => {
        const lostPromise = updateLostStatus(id);
        const foundPromise = updateFoundStatus(props.foundItem.id);
        const responsePromises: Promise<Response>[] = [
          lostPromise,
          foundPromise,
        ];
        const ids: number[] = [];
        jsonDataList.map((jsonData) => {
          jsonData.data.forEach((match) => {
            if (!ids.includes(match.id)) {
              ids.push(match.id);
            }
          });
        });
        ids.forEach((id) => {
          responsePromises.push(deletePossibleMatch(id));
        });
        return Promise.all(responsePromises);
      })
      .then((responses) => {
        props.removeItem(parseInt(id));
        history.replace("/admin/henvendelser");
        props.setLoading(false);
      })
      .catch((e) => {
        props.setLoading(false);
        if ((e.name = "HTTPError")) {
          if (e.status === 409) {
            //TODO 409 popup
          } else if (e.status === 404) {
            //TODO 404 error
          } else {
            //TODO standart error popup
          }
        } else {
          //TODO standart error popup
        }
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
        name: props.foundItem.name,
        phone: props.foundItem.phone,
        email: props.foundItem.email,
        category: props.foundItem.category,
        subCategory: props.foundItem.subcategory,
        color: props.foundItem.color,
        brand: props.foundItem.brand,
        description: props.foundItem.description,
        line: props.foundItem.line,
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
  console.log(props.foundItem.status);
  if (props.foundItem.status === "Funnet") {
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
    if (props.foundItem.name!="" || props.foundItem.phone!="" || props.foundItem.email!=""){
      return(<div>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <h3 className="h4">Kontaktinfo:</h3>
          </Grid>
          <Grid item md={4}>
            <dl>
              <dt>Navn:</dt>
              <dd>{props.foundItem.name}</dd>
            </dl>
          </Grid>
          <Grid item md={4}>
            <dl>
              <dt>Telefon:</dt>
              <dd>{props.foundItem.phone}</dd>
            </dl>
          </Grid>
          <Grid item md={4}>
            <dl>
              <dt>E-post:</dt>
              <dd>{props.foundItem.email}</dd>
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
            <h3 className="h4">{props.foundItem.subcategory} - {props.foundItem.brand}</h3>
            <Grid item md={12}>
              <dt>Full beskrivelse:</dt>
              <dd>{props.foundItem.description}</dd>
            </Grid>
            <Grid item md={4}>
              <dl>
                <dt>Dato funnet:</dt>
                <dd>{moment(props.foundItem.date).format("DD.MM.yy")}</dd>
              </dl>
            </Grid>
            <Grid item md={4}>
              <dl>
                <dt>Linje:</dt>
                <dd>{props.foundItem.line}</dd>
              </dl>
            </Grid>
            <Grid item md={4}>
              <dl>
                <dt>Farge:</dt>
                <dd>{props.foundItem.color}</dd>
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
