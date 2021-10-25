import { LoginRequestType } from 'types/types';
import { APIResponseType, instance, ResultCodeEnum, ResultCodeCaptchaEnum } from './api';

type AuthUserType = {
  id: number;
  email: string;
  login: string;
};

type LoginType = {
  userId: number;
};

//instance.post
const authAPI = {
  authUser() {
    return instance.get<APIResponseType<AuthUserType>>('auth/me').then((response) => response.data);
  },
  login({ email, password, rememberMe = false, captcha = null }: LoginRequestType) {
    return instance
      .post<LoginRequestType, APIResponseType<LoginType, ResultCodeEnum | ResultCodeCaptchaEnum>>(
        `auth/login`,
        {
          email,
          password,
          rememberMe,
          captcha,
        }
      )
      .then((response) => response);
  },
  logout() {
    return instance.delete<APIResponseType>('auth/login');
  },
};

export default authAPI;
