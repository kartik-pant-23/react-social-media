import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const usersState = useSelector((state) => state.users);
  console.log(usersState);
  return usersState.currentUser ? children : <Navigate to='/' />;
}

export default PrivateRoute;
