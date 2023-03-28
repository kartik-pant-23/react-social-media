import { combineReducers } from "redux";

import userReducer from "./User.reducer";
import postsReducer from "./Post.reducer";

export default combineReducers({
  users: userReducer,
  posts: postsReducer,
});
