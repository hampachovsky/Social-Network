import { authAPI } from 'api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

const setUserData = ({ id, login, email }, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, login, email, isAuth },
});

const getUser = () => (dispatch) => {
  authAPI.me().then((data) => {
    dispatch(setUserData(data.data, true));
  });
};

const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((respone) => {
    if (respone.data.resultCode === 0) {
      dispatch(getUser());
    }
  });
};

const logout = () => (dispatch) => {
  authAPI.logout().then((respone) => {
    if (respone.data.resultCode === 0) {
      dispatch(setUserData({ id: null, login: null, email: null }, false));
    }
  });
};

export { getUser, login, logout };

export default authReducer;
