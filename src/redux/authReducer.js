import { authAPI } from 'api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

// FIXME: isAuth to true in SET_USER_DATA

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

const setUserData = ({ id, login, email }) => ({ type: SET_USER_DATA, data: { id, login, email } });

const getUser = () => (dispatch) => {
  authAPI.me().then((data) => {
    dispatch(setUserData(data.data));
  });
};

export { getUser };

export default authReducer;
