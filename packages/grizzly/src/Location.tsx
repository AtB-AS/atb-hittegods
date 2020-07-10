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

type Line = {
  id: string;
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
  const [lines, setLines] = useState<Line[]>([]);
  const [error, setError] = useState(false);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("api/line")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setLines(jsonData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const onSubmit: SubmitHandler<Props> = (data) => {
    console.log(data.line + "OKKKK");
    props.onLocationSelect(data.line);
  };

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
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h3 className={styles.heading}>Linje</h3>

              <select name="line">
                {lines.map((item) => {
                  return <option>{item.id}</option>;
                })}
              </select>

              <TextField
                className={styles.textfield}
                type="text"
                name="line"
                defaultValue={props.line}
                label="Linje"
                error={!!errors.line}
                helperText={errors.line?.message}
                variant="outlined"
                inputRef={register({
                  //required: "Dette feltet må du fylle inn",
                  maxLength: {
                    value: 3,
                    message: "Linjen kan ikke bestå av mer enn tre siffer",
                  },
                })}
              />
            </Grid>
            <Button name="line" variant="contained">
              Usikker
            </Button>
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

export default Location;
