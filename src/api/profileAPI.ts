import { PhotosType, ProfileType } from 'types/types';
import { APIResponseType, instance } from './api';
import { AxiosResponse } from 'axios';
type PhotoRespnseType = {
  photos: PhotosType;
};

const profileAPI = {
  getUser(id: number) {
    return instance.get<ProfileType>(`profile/${id}`).then((response) => response.data);
  },
  getStatus(id: number) {
    return instance.get<string>(`profile/status/${id}`).then((response) => response.data);
  },
  updateStatus(status: string) {
    return instance.put<{ status: string }, AxiosResponse<APIResponseType>>(`profile/status`, {
      status,
    });
  },
  savePhoto(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    return instance.put<FormData, AxiosResponse<APIResponseType<PhotoRespnseType>>>(
      `profile/photo`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
  },
  updateProfile(profile: ProfileType) {
    return instance.put<ProfileType, AxiosResponse<APIResponseType>>('profile', profile);
  },
};

export default profileAPI;
