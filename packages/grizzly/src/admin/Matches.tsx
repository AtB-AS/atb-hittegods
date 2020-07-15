import React, { useEffect, useState } from "react";
import {Button, Grid} from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import Collapse from '@material-ui/core/Collapse';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import Henvendelser from "./Henvendelser";
import Henvendelse from "./Henvendelse";

type MatchIDs = {
  lostid:number;
  ids: number[];
};

type MatchResponse = {
  status: string;
  data: Match;
};

type Match = {
  lostid: number;
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

type ConfirmMatch = {
  lostid:number,
  foundid:number,
}

function confirmMatch() {
  //TODO functionality for confirm match button
  console.log("Match button clicked")
}


function MatchDetails(item:Match) {


  return(
      <div>

      <Paper>
        <h6>Detaljvisning for {item.subcategory} - {item.brand}</h6>
        <Table size="small">
          <TableContainer>
            <TableBody>
              <TableRow>
                <TableCell>ID: </TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>Status: </TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Farge: </TableCell>
                <TableCell>{item.color}</TableCell>
                <TableCell>Registreringsdato: </TableCell>
                <TableCell>{item.date.slice(0,10)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Beskrivelse: </TableCell>
                <TableCell colSpan={3}>{item.description}</TableCell>
              </TableRow>
              <TableRow>

              </TableRow>
            </TableBody>
          </TableContainer>
        </Table>
          <Button onClick={confirmMatch}>
            Bekreft match
          </Button>
      </Paper>


      </div>
  )

}




function MatchRow(item:Match) {
  const [isClicked,setClicked]=useState(false)

  function clickedRowItem(id:number){
    if(isClicked===false){
      setClicked(true)}
    else{
      setClicked(false)}
    console.log(isClicked)
  }



  return (
    <TableBody>
      <TableRow
          hover
          onClick={(event) => clickedRowItem(item.id)}
      >

        <TableCell>{item.name}</TableCell>
        <TableCell>{item.subcategory}</TableCell>
        <TableCell>{item.brand}</TableCell>
        <TableCell>{item.line}</TableCell>

      </TableRow>
      <TableRow>
        <TableCell colSpan={4}>
          <Collapse in={isClicked} timeout="auto" unmountOnExit>
            <MatchDetails {...item}/>
          </Collapse>
        </TableCell>
      </TableRow>
    </TableBody>)


}

function Matches(matchIDs: MatchIDs) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    // fetch info on all the matches
    const promises: Promise<Response>[] = [];
    matchIDs.ids.forEach((id) => {
      promises.push(fetch("/api/admin/found/" + id));
    });
    Promise.all(promises).then((data) => {
      const promises2: Promise<MatchResponse>[] = [];
      data.forEach((response) => {
        promises2.push(response.json());
      });
      Promise.all(promises2).then((data) => {
        setMatches(data.map((item) => item.data));
        setLoading(false);
      });
    });
  }, []);

  if (error) {
    return <p>Noe gikk galt :(</p>;
  }

  if (isLoading) {
    return <p>Laster...</p>;
  }
  return (
    <Grid item md={12}>
      <TableContainer>
        <h3>Mulige funn:</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Navn</TableCell>
              <TableCell>Underkategori</TableCell>
              <TableCell>Merke</TableCell>
              <TableCell>Linje</TableCell>
            </TableRow>
          </TableHead>
          {matches.map((item)=>(
              <MatchRow {...item}/>
              ))}


        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Matches;
