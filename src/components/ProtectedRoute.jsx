import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "./Header/Header";

const ProtectedRoute = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      {outlet}
    </div>
  );
};

export default ProtectedRoute;
