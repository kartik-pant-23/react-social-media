import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { loadUsersData } from "./actions/User.actions";
import PrivateRoute from "./components/privateRoute";
import Welcome from "./screens/welcome";
import Dashboard from "./screens/dashboard";
import Profile from "./screens/profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route
          exact
          path='home'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
