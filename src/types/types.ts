export type PostDataType = {
  id: number;
  text: string;
  likeCount: number;
};
export type ContactsType = {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export interface ProfileType {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
}

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};

export type DialogsUserType = {
  username: string;
  userId: string;
  status: string;
  country: string;
  city: string;
  profileStatus: string;
  photoUrl: string;
};

export type MessagesType = {
  content: string;
  recipient: string;
  author: string;
  owner: boolean;
  date: string;
};
