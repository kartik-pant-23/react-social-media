import axios from "axios";
import _map from "lodash.map";
import _random from "lodash.random";

const FETCH_USER_REQUEST = "fetch_user_request";
const FETCH_USER_SUCCESS = "fetch_user_success";
const FETCH_USER_FAILURE = "fetch_user_failure";
const CHANGE_CURRENT_USER = "change_current_user";
const CHANGE_CURRENT_USER_RANDOMLY = "change_current_user_randomly";
const CURRENT_USER_COLOR = "teal";
const OTHER_USER_COLORS = [
  "darkmagenta",
  "cornflowerblue",
  "darkorange",
  "brown",
  "chocolate",
  "coral",
  "crimson",
  "darkred",
];

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (usersData) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: usersData,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const loadUsersData = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const usersData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(
        fetchUserSuccess(
          _map(usersData.data, (user) => {
            const randomIndex = _random(OTHER_USER_COLORS.length - 1);
            const randomColor = OTHER_USER_COLORS[randomIndex];
            return {
              ...user,
              color: randomColor,
            };
          })
        )
      );
    } catch (e) {
      console.error(e);
      dispatch(
        fetchUserFailure(
          "Failed to fetch users' data. Try refreshing the page."
        )
      );
    }
  };
};

export const changeCurrentUserRandomly = () => {
  return {
    type: CHANGE_CURRENT_USER_RANDOMLY,
  };
};

export const changeCurrentUser = (newUserId) => {
  return {
    type: CHANGE_CURRENT_USER,
    payload: newUserId,
  };
};

export {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CHANGE_CURRENT_USER,
  CHANGE_CURRENT_USER_RANDOMLY,
  CURRENT_USER_COLOR,
  OTHER_USER_COLORS,
};
