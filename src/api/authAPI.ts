import { LoginRequestType } from 'types/types';
import { APIResponseType, instance, ResultCodeEnum, ResultCodeCaptchaEnum } from './api';
import { AxiosResponse } from 'axios';

type AuthUserResponseType = {
  id: number;
  email: string;
  login: string;
};

type LoginResponseType = {
  userId: number;
};

//instance.post
const authAPI = {
  authUser() {
    return instance
      .get<APIResponseType<AuthUserResponseType>>('auth/me')
      .then((response) => response.data);
  },
  login({ email, password, rememberMe = false, captcha = null }: LoginRequestType) {
    return instance
      .post<
        LoginRequestType,
        AxiosResponse<APIResponseType<LoginResponseType, ResultCodeEnum | ResultCodeCaptchaEnum>>
      >(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete<APIResponseType>('auth/login');
  },
};

export default authAPI;
