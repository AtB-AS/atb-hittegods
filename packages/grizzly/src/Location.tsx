import React, { useState } from "react";
import { Box, Grid, Button, Grow } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import DataLoadingContainer from "./DataLoadingContainer";
import NextBtn from "./components/NextBtn";
import useFetch from "use-http";

type Props = {
  onLocationSelect: (location: string) => void;
  line: string;
};

type Line = {
  line: string;
  description: string;
};

type LineResponse = {
  data: {
    lines: Line[];
  };
};

function Location(props: Props) {
  const [line, setLine] = useState(props.line);
  const { loading, error, data = { data: { lines: [] } } } = useFetch<
    LineResponse
  >("api/line", {}, []);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onLocationSelect(line);
  };

  function unknownLineButtonHandler() {
    props.onLocationSelect("");
  }

  return (
    <div>
      <Box mt={4} mb={4}>
        <h2 className="h4">Husker du hvilken linje du tok? </h2>
        <p>Om du er usikker, går det også fint. </p>
      </Box>
      <DataLoadingContainer loading={loading} error={!!error}>
        <Box>
          <form onSubmit={onSubmit}>
            <Grid container spacing={3}>
              <Grow in timeout={400}>
                <Grid item xs={12}>
                  <InputLabel htmlFor="line">Linjenummer</InputLabel>
                  <Autocomplete
                    options={data.data.lines}
                    getOptionLabel={(item) =>
                      item.line + " " + item.description
                    }
                    defaultValue={data.data.lines.find((l) => l.line === line)}
                    onChange={(event, value) => {
                      if (value?.line) {
                        setLine(value.line);
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
              {line && (
                <Grid item xs={12}>
                  <Grow in>
                    <Box textAlign="right">
                      <NextBtn />
                    </Box>
                  </Grow>
                </Grid>
              )}
            </Grid>
          </form>
        </Box>
      </DataLoadingContainer>
    </div>
  );
}

export default Location;
