import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { translations } from "../../translations/translations";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { useStyles } from "./header.style";

import MenuItem from "@mui/material/MenuItem";

const Header = ({ pages }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleRoute = (route) => () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" component="div">
            {translations.sysAid}
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            style={{ marginLeft: 20 }}
            onClick={handleRoute("/")}
          >
            {translations.calculator}
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            style={{ marginLeft: 20 }}
            onClick={handleRoute("/history")}
          >
            {translations.history}
          </Button>

          {!!user && (
            <>
              <Button
                key={"logout"}
                onClick={logout}
                variant="outlined"
                color="inherit"
                style={{ marginLeft: "auto", marginRight: 20 }}
              >
                {translations.logout}
              </Button>
              <Typography
                variant="h5"
                textAlign="center"
                style={{ color: "black" }}
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
