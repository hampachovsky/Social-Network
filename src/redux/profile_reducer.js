const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  postData: [
    { id: 0, text: 'Hi, man', likeCount: '1' },
    { id: 1, text: 'Hi, guys', likeCount: '4' },
    { id: 2, text: "Hi, i'ts me", likeCount: '5' },
    { id: 3, text: "I'm here", likeCount: '51' },
  ],
  postValue: '',
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
    default: {
      return state;
    }
  }
};

const addPost = () => ({
  type: ADD_POST,
});

const updatePostText = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export { addPost, updatePostText, setUserProfile };

export default profileReducer;
