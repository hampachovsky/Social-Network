import { profileAPI } from 'api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
  postData: [
    { id: 0, text: 'Hi, man', likeCount: '1' },
    { id: 1, text: 'Hi, guys', likeCount: '4' },
    { id: 2, text: "Hi, i'ts me", likeCount: '5' },
    { id: 3, text: "I'm here", likeCount: '51' },
  ],
  postValue: '',
  status: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postValue: '',
        postData: [
          ...state.postData,
          {
            id: state.postData.length,
            text: state.postValue,
            likeCount: state.postData.length + 3,
          },
        ],
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, postValue: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    default: {
      return state;
    }
  }
};

const addPost = () => ({ type: ADD_POST });

const updatePostText = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText });

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

const getUserProfile = (id) => (dispatch) => {
  profileAPI.getUser(id).then((data) => {
    dispatch(setUserProfile(data));
  });
};

const getUserStatus = (id) => (dispatch) => {
  profileAPI.getStatus(id).then((response) => {
    if (response.status === 200) {
      dispatch(setUserStatus(response.data));
    }
  });
};

const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export {
  addPost,
  updatePostText,
  setUserProfile,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  setUserStatus,
};

export default profileReducer;
