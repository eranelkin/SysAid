import React from "react";
import Box from "@mui/material/Box";
import Display from "./Display/Display";
import Panel from "./Panel/Panel";
import { useStyles } from "./calculator.style";

const Calculator = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.container}>
      <Display />
      <Panel />
    </Box>
  );
};

export default Calculator;
