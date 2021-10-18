import { profileAPI } from 'api/api';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

const initialState = {
  postData: [
    { id: 0, text: 'Hi, man', likeCount: '1' },
    { id: 1, text: 'Hi, guys', likeCount: '4' },
    { id: 2, text: "Hi, i'ts me", likeCount: '5' },
    { id: 3, text: "I'm here", likeCount: '51' },
  ],
  status: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: state.postData.length,
            text: action.newPostText,
            likeCount: state.postData.length + 3,
          },
        ],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return { ...state, postData: state.postData.filter((post) => post.id !== action.postId) };
    }
    default: {
      return state;
    }
  }
};

const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
const deletePost = (postId) => ({ type: DELETE_POST, postId });

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

const getUserProfile = (id) => async (dispatch) => {
  const data = await profileAPI.getUser(id);
  dispatch(setUserProfile(data));
};

const getUserStatus = (id) => async (dispatch) => {
  const data = await profileAPI.getStatus(id);
  if (data.status === 200) {
    dispatch(setUserStatus(data.data));
  }
};

const updateUserStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export {
  addPost,
  setUserProfile,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  setUserStatus,
  deletePost,
};

export default profileReducer;
