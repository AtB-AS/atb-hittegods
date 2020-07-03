import React, { useState } from "react";
import { Box, createStyles, Grid, Theme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  onLocationSelect: (location: string) => void;
  line: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfield: {
      display: "flex",
    },
    heading: {
      fontWeight: 300,
      fontSize: "24px",
    },
  })
);

function Location(props: Props) {
  const [line, setLocation] = useState(props.line);
  const styles = useStyles();

  function onSubmit() {
    props.onLocationSelect(line);
  }

  return (
    <div>
      <Box mt={6}>
        <h2>Husker du hvor du mistet gjenstanden din?</h2>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3 className={styles.heading}>Linje</h3>
            <TextField
              className={styles.textfield}
              type="text"
              value={line}
              label="Linje"
              onChange={(event) => setLocation(event.target.value)}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={onSubmit}
            >
              Neste
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Location;
