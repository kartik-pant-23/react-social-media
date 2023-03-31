import { combineReducers } from "redux";

import handleSendMessage from "./Chats.reducer";
import userReducer from "./User.reducer";
import postsReducer from "./Post.reducer";

export default combineReducers({
  users: userReducer,
  posts: postsReducer,
  messages: handleSendMessage,
});
