const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  postData: [
    { id: 0, text: 'Hi, man', likeCount: '1' },
    { id: 1, text: 'Hi, guys', likeCount: '4' },
    { id: 2, text: "Hi, i'ts me", likeCount: '5' },
    { id: 3, text: "I'm here", likeCount: '51' },
  ],
  postValue: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let id = state.postData.length - 1;
      state.postData.push({
        id,
        text: state.postValue,
        likeCount: 0,
      });
      state.postValue = '';
      break;
    case UPDATE_NEW_POST_TEXT:
      state.postValue = action.newText;
      break;
    default:
      break;
  }

  return state;
};

const addPostActionCreator = () => ({
  type: ADD_POST,
});

const updatePostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});

export { addPostActionCreator, updatePostTextActionCreator };

export default profileReducer;
