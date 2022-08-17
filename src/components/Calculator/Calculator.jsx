import React from "react";
import Box from "@mui/material/Box";
import Panel from "./Panel/Panel";
import { useCalculator } from "../../hooks/useCalculator";
import { translations } from "../../translations/translations";
import clsx from "clsx";
import { useStyles } from "./calculator.style";

const Calculator = () => {
  const { sessionActions, isValid, lastError } = useCalculator();
  const classes = useStyles();
  let displayText = "0";

  if (!isValid) {
    displayText = translations.err;
  } else if (sessionActions.length > 0) {
    displayText = sessionActions.join("");
  }
  return (
    <Box component="div" className={classes.container}>
      <div
        className={clsx(classes.display, {
          [classes.error]: !isValid,
        })}
      >
        {displayText}
      </div>
      {!isValid && <div className={classes.errorDesc}>{lastError}</div>}
      <Panel className={classes.panel} />
    </Box>
  );
};

export default Calculator;
