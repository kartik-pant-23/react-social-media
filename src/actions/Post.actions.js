const CREATE_POST_REQUEST = "create_post_request";
const CREATE_POST_FAILURE = "create_post_failure";
const CREATE_POST_SUCCESS = "create_post_success";
const RESET_DRAFT_POST = "reset_draft_post";
const UPDATE_DRAFT_POST = "update_draft_post";

function createPostRequest() {
  return {
    type: CREATE_POST_REQUEST,
  };
}

function createPostFailure(error) {
  return {
    type: CREATE_POST_FAILURE,
    payload: error,
  };
}

function createPostSuccess(postData) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: postData,
  };
}

export const createPost = (postData) => {
  return (dispatch) => {
    dispatch(createPostRequest());
    try {
      setTimeout(() => dispatch(createPostSuccess(postData)), 500);
    } catch (e) {
      dispatch(
        createPostFailure(
          e.message || "Failed to create post, something went wrong!"
        )
      );
    }
  };
};

export const resetDraftPost = () => {
  return {
    type: RESET_DRAFT_POST,
  };
};

export const updateDraftPost = (draftPostData) => {
  return {
    type: UPDATE_DRAFT_POST,
    payload: draftPostData,
  };
};

export {
  CREATE_POST_REQUEST,
  CREATE_POST_FAILURE,
  CREATE_POST_SUCCESS,
  RESET_DRAFT_POST,
  UPDATE_DRAFT_POST,
};
