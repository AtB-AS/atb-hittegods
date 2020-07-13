import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  createStyles,
  Grid,
  Theme,
  Button,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
  const styles = useStyles();
  const { register, handleSubmit, watch, errors } = useForm<Props>();
  const [lines, setLines] = useState([]);
  const [error, setError] = useState(false);
  const [isloading, setLoading] = useState(true);
  const [line, setLine] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("api/line")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setLines(jsonData.data.lines);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const onSubmit: SubmitHandler<Props> = (data) => {
    props.onLocationSelect(line);
    console.log(line);
  };

  function unknownLineButtonHandler() {
    setLine("");
    props.onLocationSelect(line);
  }

  if (error) {
    return <p>Kunne ikke laste inn linjer.</p>;
  }

  if (isloading) {
    return <p>Laster...</p>;
  }

  return (
    <div>
      <Box mt={4} mb={4}>
        <h2>Husker du hvor du mistet gjenstanden din?</h2>
      </Box>
      <div>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h3 className={styles.heading}>Linje</h3>
                <Autocomplete
                  options={lines}
                  getOptionLabel={(item) => item}
                  style={{ width: 300 }}
                  onInputChange={(event, value) => setLine(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Skriv inn linjenummer"
                      variant="outlined"
                      name="line"
                    />
                  )}
                />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={unknownLineButtonHandler}
                >
                  Husker ikke
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button color="primary" type="submit" variant="contained">
                  Neste
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default Location;
