import React from "react";
import { useHistory, useParams } from "react-router";
import { Box, Button, Grid } from "@material-ui/core";
import { HTTPError } from "./Errors";
import useNotification from "./notificationCenter/useNotification";

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
  const { notify } = useNotification();

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
            notify({
              type: "error",
              description:
                "Beklager, men kan ikke matche. Ta kontakt med drift",
            });
          } else if (e.status === 404) {
            notify({
              type: "error",
              description:
                "Beklager, men henvendelse eller gjenstand finnes ikke i databasen",
            });
          } else {
            notify({
              type: "error",
              description:
                "Beklager. Teknisk feil oppstod. Prøv å last siden på nytt",
            });
          }
        } else {
          notify({
            type: "error",
            description:
              "Beklager. Teknisk feil oppstod. Prøv å last siden på nytt",
          });
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
      <Button variant="contained" onClick={() => confirmMatch()}>
        Bekreft match
      </Button>
    );
  } else {
    confirmButton = (
      <Box>
        <p style={{ color: "#999999" }}>Gjenstand er ikke bekreftet ankommet</p>
      </Box>
    );
  }

  function ContactInfo() {
    if (
      props.foundItem.name !== "" ||
      props.foundItem.phone !== "" ||
      props.foundItem.email !== ""
    ) {
      return (
        <div>
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
    <div>
      <Box ml={2}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <dt>Full beskrivelse:</dt>
            <dd>{props.foundItem.description}</dd>
          </Grid>

          <Grid item md={12}>
            <ContactInfo />
          </Grid>
          <Grid item md={12}>
            <Box mb={1}>{confirmButton}</Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default MatchDetails;
