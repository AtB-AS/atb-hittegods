import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MatchRow from "./MatchRow";
import { Match } from "./Henvendelse";
import DataLoadingContainer from "../DataLoadingContainer";

type Props = {
  matches: Match[];
  hendvendelsesid: number;
  removeItem: (id: number) => void;
  setLoading: (loading: boolean) => void;
  decrementNewMatch: (id: number) => void;
};

type MatchResponse = {
  status: string;
  data: Found;
};

export type Found = {
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

function Matches(props: Props) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const [foundItems, setFoundItems] = useState<Found[]>([]);

  useEffect(() => {
    setLoading(true);
    // fetch info on all the matches
    const responsePromises: Promise<Response>[] = [];
    props.matches.forEach((match) => {
      responsePromises.push(fetch("/api/admin/found/" + match.foundid));
    });
    Promise.all(responsePromises)
      .then((responses) => {
        const jsonPromises: Promise<MatchResponse>[] = [];
        responses.forEach((response) => {
          if (response.ok) {
            jsonPromises.push(response.json());
          }
        });
        return Promise.all(jsonPromises);
      })
      .then((jsonDataList) => {
        setFoundItems(jsonDataList.map((jsonData) => jsonData.data));
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const matchByFoundId = (foundid: number): Match | undefined => {
    return props.matches.find((m) => m.foundid === foundid);
  };

  return (
    <DataLoadingContainer loading={isLoading} error={error}>
      <Grid item md={12}>
        <h3>Mulige funn</h3>
        {foundItems.length === 0 && (
          <p>Fant ingenting på lager som passet denne henvendelsen</p>
        )}
        {foundItems.length > 0 && (
          <div>
            {foundItems.map((foundItem) => (
              <MatchRow
                foundItem={foundItem}
                removeItem={props.removeItem}
                setLoading={props.setLoading}
                decrementNewMatch={props.decrementNewMatch}
                match={matchByFoundId(foundItem.id)}
                hendvendelsesid={props.hendvendelsesid}
              />
            ))}
          </div>
        )}
      </Grid>
    </DataLoadingContainer>
  );
}

export default Matches;
