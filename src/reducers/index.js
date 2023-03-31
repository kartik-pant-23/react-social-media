import { combineReducers } from "redux";

import handleSendMessage from "./Chats.reducer";
import userReducer from "./User.reducer";

export default combineReducers({
  users: userReducer,
  messages: handleSendMessage,
});
