import { ResultCodeCaptchaEnum } from './../api/api';
import { ResultCodeEnum } from 'api/api';
import authAPI from 'api/authAPI';
import securityAPI from 'api/securityAPI';
import { AppThunk, InferActionsTypes } from './reduxStore';
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
type ActionsType = InferActionsTypes<typeof actions>;
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

export const actions = {
  setUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({
      type: SET_USER_DATA,
      payload: { id, login, email, isAuth },
    } as const),

  setCaptcha: (captchaUrl: string) =>
    ({
      type: SET_CAPTCHA_URL,
      payload: { captchaUrl },
    } as const),
};

const getAuthUser = (): ThunkType => async (dispatch) => {
  const data = await authAPI.authUser();
  if (data.resultCode === ResultCodeEnum.Success) {
    const { id, login, email } = data.data;
    dispatch(actions.setUserData(id, login, email, true));
  }
};

const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptcha();
  dispatch(actions.setCaptcha(data.url));
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
    dispatch(actions.setUserData(null, null, null, false));
  }
};

export { getAuthUser, login, logout };

export default authReducer;
