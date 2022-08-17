import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Calculator from "./components/Calculator/Calculator";
import History from "./components/History/History";
import ProtectedRoute from "./components/ProtectedRoute";
import { CalculatorProvider } from "./hooks/useCalculator";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route
          index
          path="/"
          element={
            <CalculatorProvider>
              <Calculator />
            </CalculatorProvider>
          }
        />
        <Route
          path="/history"
          element={
            <CalculatorProvider>
              <History />
            </CalculatorProvider>
          }
        />
      </Route>
    </Routes>
  );
}
