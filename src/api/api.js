import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '4619fab4-7668-4006-aaf0-c30e1e6a4b3f',
  },
});

const usersAPI = {
  getUsers(page = 1, pageSize = 4) {
    return instance
      .get(`users?page=${page}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => response.data);
  },
};

const followAPI = {
  follow(id) {
    return instance.post(`follow/${id}`, {}).then((response) => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};

const authAPI = {
  getUser() {
    return instance.get('auth/me').then((response) => response.data);
  },
};

const profileAPI = {
  getUser(id) {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },
};

export { usersAPI, followAPI, authAPI, profileAPI };
