import { useHistory, useParams } from "react-router";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@material-ui/core";
import React from "react";
import { log } from "util";

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
      <Button onClick={() => confirmMatch()}>Bekreft match</Button>
    );
  } else {
    confirmButton = (
      <Button disabled={true}>Gjenstand er ikke bekreftet ankommet</Button>
    );
  }

  return (
    <div>
      <Paper>
        <h6>
          Detaljvisning for {props.item.subcategory} - {props.item.brand}
        </h6>
        <Table size="small">
          <TableContainer>
            <TableBody>
              <TableRow>
                <TableCell>ID: </TableCell>
                <TableCell>{props.item.id}</TableCell>
                <TableCell>Status: </TableCell>
                <TableCell>{props.item.status}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Farge: </TableCell>
                <TableCell>{props.item.color}</TableCell>
                <TableCell>Registreringsdato: </TableCell>
                <TableCell>{props.item.date.slice(0, 10)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Beskrivelse: </TableCell>
                <TableCell colSpan={3}>{props.item.description}</TableCell>
              </TableRow>
              <TableRow></TableRow>
            </TableBody>
          </TableContainer>
        </Table>
        {confirmButton}
      </Paper>
    </div>
  );
}
export default MatchDetails;
