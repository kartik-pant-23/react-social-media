import axios from "axios";

const FETCH_USER_REQUEST = "fetch_user_request";
const FETCH_USER_SUCCESS = "fetch_user_success";
const FETCH_USER_FAILURE = "fetch_user_failure";
const CHANGE_CURRENT_USER = "change_current_user";
const CHANGE_CURRENT_USER_RANDOMLY = "change_current_user_randomly";

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
      dispatch(fetchUserSuccess(usersData.data));
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
};
