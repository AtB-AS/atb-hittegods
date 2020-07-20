import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
  loading: {
    display: "grid",
    placeItems: "center",
    height: "100%",
  },
});

type Props = {
  loading: boolean;
  error: boolean;
  notFound?: string;
};

const DataLoadingContainer: React.FC<Props> = ({
  loading,
  error,
  notFound,
  children,
}) => {
  const classes = useStyles();
  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return <div>Noe gikk galt</div>;
  }
  if (notFound) {
    return <p>{notFound}</p>;
  }
  return <>{children}</>;
};

export default DataLoadingContainer;
