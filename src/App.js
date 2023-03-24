import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadUsersData } from "./actions/User.actions";
import Welcome from "./screens/welcome";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersData());
  }, [dispatch]);

  return <Welcome />;
}

export default App;
