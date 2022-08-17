import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { translations } from "../../translations/translations";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import clsx from "clsx";

import { useStyles } from "./header.style";

const SELECTED = {
  CALC: "calculator",
  HISTORY: "history",
};

const Header = ({ pages }) => {
  const [selected, setSelected] = useState(SELECTED.CALC);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    if (selected) {
      navigate(selected === SELECTED.CALC ? "/" : "/history");
    }
  }, [selected, navigate]);

  const handleButtonClick = (selectedBtn, route) => () => {
    setSelected(selectedBtn);
    if (route) {
      navigate(route);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" className={classes.header}>
        <Toolbar>
          <Typography variant="h5" component="div" style={{ color: "black" }}>
            {translations.sysAid}
          </Typography>
          <Button
            variant="contained"
            onClick={handleButtonClick(SELECTED.CALC, "/")}
            className={clsx(classes.buttonMargin, {
              [classes.selected]: selected === SELECTED.CALC,
            })}
          >
            {translations.calculator}
          </Button>
          <Button
            variant="contained"
            onClick={handleButtonClick(SELECTED.HISTORY, "/history")}
            className={clsx(classes.buttonMargin, {
              [classes.selected]: selected === SELECTED.HISTORY,
            })}
          >
            {translations.history}
          </Button>

          {!!user && (
            <>
              <Button
                key={"logout"}
                variant="contained"
                onClick={logout}
                style={{ marginLeft: "auto", marginRight: 20 }}
              >
                {translations.logout}
              </Button>
              <Typography
                variant="body1"
                textAlign="center"
                style={{ color: "#037284", fontWeight: "bold" }}
              >
                {`${translations.prefixUser} ${user?.username}`}
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
