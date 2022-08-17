import React from "react";
import { useStyles } from "./history.style";
import { Button } from "@mui/material";
import { useCalculator } from "../../hooks/useCalculator";
import { translations } from "../../translations/translations";
import clsx from "clsx";
import { ACTIONS_COUNT } from "../../constants";

const History = () => {
  const { historyActions, clearHistory, totalIndexes } = useCalculator();
  const totals =
    historyActions.length > ACTIONS_COUNT
      ? totalIndexes
          .map((total) => total - (historyActions.length - ACTIONS_COUNT))
          .filter((total) => total >= 0)
      : [...totalIndexes];
  const classes = useStyles();

  const handleClearHistory = () => {
    clearHistory();
  };
  const shouldDisplay = historyActions.length > 0 || historyActions[0] !== "0";

  return (
    <div className={classes.history}>
      <div className={classes.historyBoard}>
        {shouldDisplay &&
          historyActions.slice(ACTIONS_COUNT * -1).map((item, index) => (
            <span key={`${item}-${index}`} className={classes.historyRow}>
              <div className={classes.counter}>{`${index + 1}.`}</div>
              <div
                className={clsx(classes.action, {
                  [classes.error]: item === translations.err,
                  [classes.total]: totals.includes(index),
                })}
              >
                {item}
              </div>
            </span>
          ))}
      </div>
      <Button
        variant="contained"
        size="md"
        onClick={handleClearHistory}
        className={classes.clearHistory}
      >
        {translations.clearHistory}
      </Button>
    </div>
  );
};

export default History;
