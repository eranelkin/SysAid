import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAuth } from "../../hooks/useAuth";
import { translations } from "../../translations/translations";
import sysAidImage from "./sysAid.png";

const Login = () => {
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      username: data.get("username"),
      email: data.get("email"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {translations.login}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="username"
            margin="normal"
            required
            fullWidth
            name="username"
            label={translations.username}
            type="username"
            autoFocus
          />
          <TextField
            id="email"
            margin="normal"
            required
            fullWidth
            label={translations.email}
            name="email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {translations.loginIn}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
