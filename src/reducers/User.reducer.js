import _get from "lodash.get";
import _map from "lodash.map";
import _random from "lodash.random";

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CHANGE_CURRENT_USER,
  CHANGE_CURRENT_USER_RANDOMLY,
  CURRENT_USER_COLOR,
  OTHER_USER_COLORS,
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
    case CHANGE_CURRENT_USER: {
      const currentUser = _get(action, "payload");
      return {
        ...state,
        users: _map(_get(state, "users"), (user) => {
          if (_get(user, "id") === _get(_get(state, "currentUser"), "id")) {
            const randomColorIndex = _random(OTHER_USER_COLORS.length - 1);
            const randomColor = OTHER_USER_COLORS[randomColorIndex];
            return {
              ...user,
              color: randomColor,
            };
          }
          return user;
        }),
        currentUser: {
          ...currentUser,
          color: CURRENT_USER_COLOR,
        },
      };
    }
    case CHANGE_CURRENT_USER_RANDOMLY: {
      const usersLength = _get(state, "users", []).length;
      let currentUser = null;
      if (usersLength > 0) {
        const randomUserIndex = _random(usersLength - 1);
        currentUser = _get(state, ["users", randomUserIndex]);
        currentUser = {
          ...currentUser,
          color: CURRENT_USER_COLOR,
        };
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
