import React from "react";
import { useStyles } from "./history.style";
import { Button } from "@mui/material";
import { useCalculator } from "../../hooks/useCalculator";
import { translations } from "../../translations/translations";
import clsx from "clsx";

function History() {
  const { historyActions, clearHistory, isValid, totalIndexes } =
    useCalculator();
  const classes = useStyles();

  const handleClearHistory = () => {
    clearHistory();
  };
  const shouldDisplay = historyActions.length > 0 || historyActions[0] !== "0";

  return (
    <div className={classes.history}>
      <div className={classes.historyBoard}>
        {shouldDisplay &&
          historyActions.map((item, index) => (
            <span key={`${item}-${index}`} className={classes.historyRow}>
              <div className={classes.counter}>{`${index + 1}.`}</div>
              <div
                className={clsx(classes.action, {
                  [classes.error]: item === translations.err,
                  [classes.total]: totalIndexes.includes(index),
                })}
              >
                {item}
              </div>
            </span>
          ))}
      </div>
      <Button
        variant="solid"
        size="md"
        onClick={handleClearHistory}
        className={classes.clearHistory}
      >
        {translations.clearHistory}
      </Button>
    </div>
  );
}

export default History;
