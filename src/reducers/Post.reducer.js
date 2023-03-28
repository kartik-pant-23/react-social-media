import {
  CREATE_POST_REQUEST,
  CREATE_POST_FAILURE,
  CREATE_POST_SUCCESS,
  RESET_DRAFT_POST,
  UPDATE_DRAFT_POST,
} from "../actions/Post.actions";

const draftPostInitialState = {
  file: null,
  caption: "",
  uploadStatus: {
    uploaded: false,
    loading: false,
    error: null,
  },
};
const intialState = {
  posts: [],
  draftPost: draftPostInitialState,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST: {
      return {
        ...state,
        draftPost: {
          ...state.draftPost,
          uploadStatus: {
            loading: true,
            uploaded: false,
            error: null,
          },
        },
      };
    }
    case CREATE_POST_FAILURE: {
      return {
        ...state,
        draftPost: {
          ...state.draftPost,
          uploadStatus: {
            loading: false,
            uploaded: false,
            error: action.payload,
          },
        },
      };
    }
    case CREATE_POST_SUCCESS: {
      const { file, caption, authorId } = action.payload;
      const newPostData = {
        id: state.posts.length,
        file,
        caption,
        authorId,
        createdAt: new Date(),
      };
      return {
        posts: [newPostData, ...state.posts],
        draftPost: {
          ...state.draftPost,
          uploadStatus: {
            loading: false,
            error: null,
            uploaded: true,
          },
        },
      };
    }
    case UPDATE_DRAFT_POST: {
      const { file, caption } = action.payload;
      return {
        ...state,
        draftPost: {
          ...state.draftPost,
          file,
          caption,
        },
      };
    }
    case RESET_DRAFT_POST: {
      return {
        ...state,
        draftPost: draftPostInitialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
