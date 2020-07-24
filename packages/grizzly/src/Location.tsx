import React, { useEffect, useState } from "react";
import { Box, Grid, Button, Grow, createStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import DataLoadingContainer from "./DataLoadingContainer";
import NextBtn from "./components/NextBtn";
import makeStyles from "@material-ui/core/styles/makeStyles";

type Props = {
  onLocationSelect: (location: string) => void;
  line: string;
};

type LineObj = {
  line: string;
  description: string;
};

function Location(props: Props) {
  const { handleSubmit } = useForm<Props>();
  const [lines, setLines] = useState<LineObj[]>([]);
  const [error, setError] = useState(false);
  const [isloading, setLoading] = useState(true);
  const [line, setLine] = useState(props.line);
  //Displays "Neste" button if true
  const [status, setStatus] = useState(false);

  const useStyles = makeStyles(() =>
    createStyles({
      rightAlign: {
        display: "flex",
        justifyContent: "flex-end",
      },
    })
  );
  const classes = useStyles();

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

  const onSubmit: SubmitHandler<Props> = () => {
    props.onLocationSelect(line);
  };

  // "Usikker"-button
  function unknownLineButtonHandler() {
    props.onLocationSelect("");
  }

  return (
    <div>
      <Box mt={4} mb={4}>
        <h2 className="h4">Husker du hvilken linje du tok? </h2>
        <p>Om du er usikker, går det også fint. </p>
      </Box>
      <DataLoadingContainer loading={isloading} error={error}>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grow in timeout={400}>
                <Grid item xs={12}>
                  <InputLabel htmlFor="line">Linjenummer</InputLabel>
                  <Autocomplete
                    options={lines}
                    getOptionLabel={(item) =>
                      item.line + " " + item.description
                    }
                    defaultValue={lines.find((l) => l.line === line)}
                    onChange={(event, value) => {
                      if (value?.line) {
                        // @ts-ignore
                        setLine(value.line);
                        setStatus(true);
                      }
                    }}
                    renderInput={(params) => (
                      <TextField
                        placeholder="Linjenummer"
                        {...params}
                        variant="standard"
                        name="line"
                        id="line"
                      />
                    )}
                  />
                </Grid>
              </Grow>
              <Grid item xs={12}>
                <Grow in timeout={600}>
                  <Button variant="outlined" onClick={unknownLineButtonHandler}>
                    Usikker
                  </Button>
                </Grow>
              </Grid>
              {status && (
                <Grow in>
                  <Grid item xs={12}>
                    <Box className={classes.rightAlign}>
                      <NextBtn />
                    </Box>
                  </Grid>
                </Grow>
              )}
            </Grid>
          </form>
        </Box>
      </DataLoadingContainer>
    </div>
  );
}

export default Location;
