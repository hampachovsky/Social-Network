import { authAPI } from 'api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_CAPTCHA_URL: {
      return { ...state, captchaUrl: action.payload.captchaUrl };
    }
    default:
      return state;
  }
};

const setUserData = ({ id, login, email }, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, login, email, isAuth },
});

const setCaptcha = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  payload: { captchaUrl },
});

const getAuthUser = () => async (dispatch) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    dispatch(setUserData(data.data, true));
  }
};

const getCaptchaUrl = () => async (dispatch) => {
  const captchaUrl = await authAPI.getCaptcha();
  dispatch(setCaptcha(captchaUrl));
};

const login = (email, password, rememberMe, captcha) => async (dispatch, getState) => {
  const { data } = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(getAuthUser());
  } else if (data.resultCode === 1) {
    return Promise.reject({ error: data.messages[0] });
  } else if (data.resultCode === 10) {
    await dispatch(getCaptchaUrl());
    const captchaUrl = getState().auth.captchaUrl;
    return Promise.reject({ captcha: captchaUrl.url, error: data.messages[0] });
  }
};

const logout = () => async (dispatch) => {
  const { data } = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setUserData({ id: null, login: null, email: null }, false));
  }
};

export { getAuthUser, login, logout, setUserData };

export default authReducer;
