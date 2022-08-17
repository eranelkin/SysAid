import React from "react";
import { useStyles } from "./panel.style";
import { Button } from "@mui/material";
import { useCalculator } from "../../../hooks/useCalculator";

const Panel = () => {
  const { addAction, equalsActions, clearDisplay, isValid } = useCalculator();
  const classes = useStyles();
  const buttons = [
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "+",
    "0",
    "=",
    "-",
    "AC",
  ];

  const handleButtonClick = (ev) => {
    const value = ev.target.textContent;
    if (value === "=") {
      equalsActions();
    } else if (value === "AC") {
      clearDisplay();
    } else {
      isValid && addAction(ev.target.textContent);
    }
  };
  return (
    <div className={classes.panel}>
      {buttons.map((item) => (
        <Button
          key={item}
          variant="outline"
          onClick={handleButtonClick}
          className={classes.button}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Panel;
