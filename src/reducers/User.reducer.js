import _get from "lodash.get";
import _random from "lodash.random";

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CHANGE_CURRENT_USER,
  CHANGE_CURRENT_USER_RANDOMLY,
} from "../actions/User.actions";

const initialState = {
  loading: false,
  users: null,
  error: null,
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: _get(action, "payload"),
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: _get(action, "payload"),
      };
    case CHANGE_CURRENT_USER:
      return {
        ...state,
        currentUser: _get(action, "payload"),
      };
    case CHANGE_CURRENT_USER_RANDOMLY: {
      const usersLength = _get(state, "users", []).length;
      let currentUser = null;
      if (usersLength > 0) {
        const randomUserIndex = _random(usersLength - 1);
        currentUser = _get(state, ["users", randomUserIndex]);
      }
      return {
        ...state,
        currentUser,
      };
    }
    default:
      return state;
  }
};

export default reducer;
