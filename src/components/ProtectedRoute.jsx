import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AppBar } from "./Header/AppBar";
import Header from "./Header/Header";

const ProtectedRoute = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {/* <AppBar
        pages={[
          { label: "Calculator", path: "/" },
          { label: "History", path: "history" },
        ]}
      /> */}
      <Header />
      {outlet}
    </div>
  );
};

export default ProtectedRoute;
