import { UserType } from 'types/types';
import { APIResponseType, instance } from './api';
import { AxiosResponse } from 'axios';

type UsersResponseType = {
  items: Array<UserType>;
  error: string | null;
  totalCount: number;
};

const usersAPI = {
  getUsers(page = 1, pageSize = 4) {
    return instance
      .get<UsersResponseType>(`users?page=${page}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(id: number) {
    return instance.post<any, AxiosResponse<APIResponseType>>(`follow/${id}`, {});
  },
  unfollow(id: number) {
    return instance.delete<APIResponseType>(`follow/${id}`);
  },
};

export default usersAPI;
