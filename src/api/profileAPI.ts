import { ProfileType } from 'types/types';
import { instance } from './api';

const profileAPI = {
  getUser(id: number) {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },
  getStatus(id: number) {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status });
  },
  savePhoto(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    return instance.put(`profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  updateProfile(profile: ProfileType) {
    return instance.put('profile', profile);
  },
};

export default profileAPI;
