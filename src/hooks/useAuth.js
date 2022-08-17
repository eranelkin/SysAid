import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import validation from "../utils/validation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [validationErrors, setValidationErrors] = useState(false);
  const [user, setUser] = useLocalStorage("sysaid_user", null);
  const navigate = useNavigate();

  const login = async (data) => {
    const errors = validation(data);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors(null);
    setUser(data);
    navigate("/", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        validationErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
