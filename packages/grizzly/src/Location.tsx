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
import InputLabel from "@material-ui/core/InputLabel";
import DataLoadingContainer from "./DataLoadingContainer";

type Props = {
  onLocationSelect: (location: string) => void;
  line: string;
};

type LineObj = {
  line: string;
  description: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfield: {
      display: "flex",
    },
  })
);

function Location(props: Props) {
  const styles = useStyles();
  const { register, handleSubmit, watch, errors } = useForm<Props>();
  const [lines, setLines] = useState<LineObj[]>([]);
  const [error, setError] = useState(false);
  const [isloading, setLoading] = useState(true);
  const [line, setLine] = useState(props.line);

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

  return (
    <div>
      <Box mt={4} mb={4}>
        <h2>Husker du hvilken linje du tok? </h2>
        <p>Om du ikker er helt sikkert går det fint. </p>
      </Box>
      <DataLoadingContainer loading={isloading} error={error}>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InputLabel htmlFor="line">Velg linje</InputLabel>
                <Autocomplete
                  placeholder="Linjenummer"
                  options={lines}
                  getOptionLabel={(item) => item.line + " " + item.description}
                  style={{ width: "100%" }}
                  defaultValue={lines.find((l) => l.line === line)}
                  onChange={(event, value) => {
                    console.log("Sett veri onchange", value?.line);
                    if (value?.line) {
                      // @ts-ignore
                      props.onLocationSelect(value.line);
                      setLine(value.line);
                    }
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      name="line"
                      id="line"
                    />
                  )}
                />
                <Button variant="outlined" onClick={unknownLineButtonHandler}>
                  Usikker
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </DataLoadingContainer>
    </div>
  );
}

export default Location;
