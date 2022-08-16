import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Calculator from "./components/Calculator/Calculator";
import History from "./components/History/History";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

export default function App() {
  return (
    <Routes>
      {/* <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route> */}

      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Calculator />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
