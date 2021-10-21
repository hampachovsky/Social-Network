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
    return instance.get(`users?page=${page}&count=${pageSize}`).then((response) => response.data);
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
  me() {
    return instance.get('auth/me').then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe });
  },
  logout() {
    return instance.delete('auth/login');
  },
};

const profileAPI = {
  getUser(id) {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append('image', file);
    return instance.put(`profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  updateProfile(profile) {
    return instance.put('profile', profile);
  },
};

export { usersAPI, followAPI, authAPI, profileAPI };
