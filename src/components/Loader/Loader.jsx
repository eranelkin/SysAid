// Loader.jsx

import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/material/styles";

export default function Loader() {
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: "100%",
    },
    progress: {
      textAlign: "center",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.progress}>
          <CircularProgress />
        </Grid>
      </Grid>
    </div>
  );
}
