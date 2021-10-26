import { ResultCodeCaptchaEnum } from './../api/api';
import { ResultCodeEnum } from 'api/api';
import authAPI from 'api/authAPI';
import securityAPI from 'api/securityAPI';
import { AppThunk } from './reduxStore';
import { LoginRequestType } from 'types/types';

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
type ActionsType = SetCaptchaActionType | SetUserDataActionType;
type ThunkType = AppThunk<ActionsType>;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
  isAuth: boolean;
};
type SetUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetUserDataPayloadType;
};

const setUserData = (
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
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

const getAuthUser = (): ThunkType => async (dispatch) => {
  const data = await authAPI.authUser();
  if (data.resultCode === ResultCodeEnum.Success) {
    const { id, login, email } = data.data;
    dispatch(setUserData(id, login, email, true));
  }
};

const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptcha();
  dispatch(setCaptcha(data.url));
};
const login =
  (request: LoginRequestType): ThunkType =>
  async (dispatch, getState) => {
    const data = await authAPI.login(request);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(getAuthUser());
    }
    if (data.resultCode === ResultCodeEnum.Error) {
      return Promise.reject({ error: data.messages[0] });
    }
    if (data.resultCode === ResultCodeCaptchaEnum.CaptchaIsRequired) {
      await dispatch(getCaptchaUrl());
      const captchaUrl = getState().auth.captchaUrl;
      return Promise.reject({ captcha: captchaUrl, error: data.messages[0] });
    }
  };

const logout = (): ThunkType => async (dispatch) => {
  const { data } = await authAPI.logout();
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(setUserData(null, null, null, false));
  }
};

export { getAuthUser, login, logout, setUserData };

export default authReducer;
