import { authAPI } from 'api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_FORM_ERROR = 'auth/SET_FORM_ERROR';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  formError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_FORM_ERROR: {
      return {
        ...state,
        formError: action.payload.formError,
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

const setFormError = (error) => ({
  type: SET_FORM_ERROR,
  payload: { formError: error },
});

const getAuthUser = () => async (dispatch) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    dispatch(setUserData(data.data, true));
  }
};

const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (data.data.resultCode === 0) {
    dispatch(getAuthUser());
  } else {
    dispatch(setFormError(data.data.messages[0]));
  }
};

const logout = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.data.resultCode === 0) {
    dispatch(setUserData({ id: null, login: null, email: null }, false));
  }
};

export { getAuthUser, login, logout, setUserData, setFormError };

export default authReducer;
