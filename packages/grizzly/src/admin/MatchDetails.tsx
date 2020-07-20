import { useHistory, useParams } from "react-router";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@material-ui/core";
import React from "react";
import { HTTPError } from "./Errors";

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
  if (props.foundItem.status === "Funnet") {
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
          Detaljvisning for {props.foundItem.subcategory} -{" "}
          {props.foundItem.brand}
        </h6>
        <Table size="small">
          <TableContainer>
            <TableBody>
              <TableRow>
                <TableCell>ID: </TableCell>
                <TableCell>{props.foundItem.id}</TableCell>
                <TableCell>Status: </TableCell>
                <TableCell>{props.foundItem.status}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Farge: </TableCell>
                <TableCell>{props.foundItem.color}</TableCell>
                <TableCell>Registreringsdato: </TableCell>
                <TableCell>{props.foundItem.date.slice(0, 10)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Beskrivelse: </TableCell>
                <TableCell colSpan={3}>{props.foundItem.description}</TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>
        </Table>
        {confirmButton}
      </Paper>
    </div>
  );
}
export default MatchDetails;
