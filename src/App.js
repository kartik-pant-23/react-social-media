import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { loadUsersData } from "./actions/User.actions";
import PrivateRoute from "./components/privateRoute";
import Welcome from "./screens/welcome";
import Dashboard from "./screens/dashboard";
import Home from "./screens/dashboard/components/home";
import Chat from "./screens/dashboard/components/chat";
import CreatePost from "./screens/dashboard/components/createPost";
import Profile from "./screens/profile";
import ChangeUser from "./screens/changeUser";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='welcome' element={<Welcome />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route
            exact
            path='home'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path='chat'
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path='chat/:userId'
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path='create'
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          exact
          path='profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='changeUser'
          element={
            <PrivateRoute>
              <ChangeUser />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
