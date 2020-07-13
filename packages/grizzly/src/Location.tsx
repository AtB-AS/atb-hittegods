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
  // status = 0 (no show), status = 1 (show yes), status = 2 (show no)
  const [status, setStatus] = useState(0);
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
  };

  function radioHandler(status: number) {
    return setStatus(status);
  }

  function displayNoContent() {
    props.onLocationSelect("");
  }

  function displayYesContent() {
    return (
      <div>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h3 className={styles.heading}>Linje</h3>
                {console.log(lines)}
                <select name="line" onChange={(e) => setLine(e.target.value)}>
                  {lines.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </select>
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
    );
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
        <label>Ja</label>
        <input
          type="radio"
          name="yesNo"
          checked={status === 1}
          onChange={(event) => radioHandler(1)}
        />
        <label>Nei</label>
        <input
          type="radio"
          name="yesNo"
          checked={status === 2}
          onChange={(event) => radioHandler(2)}
        />
        {status === 1 && displayYesContent()}
        {status === 2 && displayNoContent()}
      </div>
    </div>
  );
}

export default Location;
