import React from "react";
import Box from "@mui/material/Box";
import Panel from "./Panel/Panel";
import { useCalculator } from "../../hooks/useCalculator";
import { useStyles } from "./calculator.style";
import { translations } from "../../translations/translations";

const Calculator = () => {
  const { sessionActions, isValid } = useCalculator();
  const classes = useStyles();
  let displayText = "0";

  if (!isValid) {
    displayText = translations.err;
  } else if (sessionActions.length > 0) {
    displayText = sessionActions.join("");
  }
  return (
    <Box component="div" className={classes.container}>
      <div className={classes.display}>{displayText}</div>
      <Panel className={classes.panel} />
    </Box>
  );
};

export default Calculator;
