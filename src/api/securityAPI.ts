import { APIResponseType, instance } from './api';

type CaptchaResponseType = {
  url: string;
};

const securityAPI = {
  getCaptcha() {
    return instance
      .get<APIResponseType<CaptchaResponseType>>('security/get-captcha-url')
      .then((response) => response.data);
  },
};

export default securityAPI;
