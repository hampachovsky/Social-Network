import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '4619fab4-7668-4006-aaf0-c30e1e6a4b3f',
  },
});

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeCaptchaEnum {
  CaptchaIsRequired = 10,
}

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};
