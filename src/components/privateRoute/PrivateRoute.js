import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const usersState = useSelector((state) => state.users);
  return usersState.currentUser ? children : <Navigate to='/welcome' />;
}

export default PrivateRoute;
