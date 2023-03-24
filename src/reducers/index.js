import { combineReducers } from "redux";

import userReducer from "./User.reducer";

export default combineReducers({
  users: userReducer,
});
