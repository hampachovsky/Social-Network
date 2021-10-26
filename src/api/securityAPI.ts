import { instance } from './api';

type CaptchaResponseType = {
  url: string;
};

const securityAPI = {
  getCaptcha() {
    return instance
      .get<CaptchaResponseType>('security/get-captcha-url')
      .then((response) => response.data);
  },
};

export default securityAPI;
