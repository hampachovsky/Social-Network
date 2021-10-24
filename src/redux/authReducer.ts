import { authAPI } from 'api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA_URL: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

type SetUserDataPayloadType = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean | null;
};
type SetUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetUserDataPayloadType;
};

const setUserData = (
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean | null
): SetUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { id, login, email, isAuth },
});

type SetCaptchaPayloadType = {
  captchaUrl: string;
};
type SetCaptchaActionType = {
  type: typeof SET_CAPTCHA_URL;
  payload: SetCaptchaPayloadType;
};

const setCaptcha = (captchaUrl: string): SetCaptchaActionType => ({
  type: SET_CAPTCHA_URL,
  payload: { captchaUrl },
});

const getAuthUser = () => async (dispatch: any) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(setUserData(id, login, email, true));
  }
};

const getCaptchaUrl = () => async (dispatch: any) => {
  const captchaUrl = await authAPI.getCaptcha();
  dispatch(setCaptcha(captchaUrl));
};

const login =
  (email: string, password: string, rememberMe: boolean, captcha: any) =>
  async (dispatch: any, getState: any) => {
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

const logout = () => async (dispatch: any) => {
  const { data } = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export { getAuthUser, login, logout, setUserData };

export default authReducer;
