import { instance } from './api';

const usersAPI = {
  getUsers(page = 1, pageSize = 4) {
    return instance.get(`users?page=${page}&count=${pageSize}`).then((response) => response.data);
  },
};

export default usersAPI;
