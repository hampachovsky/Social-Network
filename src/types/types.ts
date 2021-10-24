export type PostDataType = {
  id: number;
  text: string;
  likeCount: number;
};
export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};

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
