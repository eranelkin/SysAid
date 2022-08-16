import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./hooks/useAuth";
import "./index.css";
import App from "./App";

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#C0C1BC",
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {/* <ThemeProvider theme={theme}> */}
        <App />
        {/* </ThemeProvider> */}
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
