import { instance } from './api';

const followAPI = {
  follow(id: number) {
    return instance.post(`follow/${id}`, {}).then((response) => response.data);
  },
  unfollow(id: number) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};

export default followAPI;
