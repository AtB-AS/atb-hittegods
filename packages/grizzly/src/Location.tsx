import React, { useState } from "react";
import { Box, createStyles, Grid, Theme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
    headingh2: {
      fontWeight: 350,
      fontSize: "36px",
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

  const onSubmit: SubmitHandler<Props> = (data) => {
    props.onLocationSelect(data.line);
  };

  return (
    <div>
      <Box mt={6}>
        <h2 className={styles.headingh2}>
          Husker du hvor du mistet gjenstanden din?
        </h2>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12}>
              <h3 className={styles.heading}>Linje</h3>
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
                  required: "Dette feltet må du fylle inn",
                  maxLength: {
                    value: 3,
                    message: "Linjen kan ikke bestå av mer enn tre siffer",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button color="primary" type="submit" variant="contained">
                Neste
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>
    </div>
  );
}

export default Location;
