import { profileAPI } from 'api/api';
import { PostDataType, PhotosType, ProfileType } from '../types/types';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCSESS = 'profile/SAVE_PHOTO_SUCCSESS';

const initialState = {
  postData: [
    { id: 0, text: 'Hi, man', likeCount: 1 },
    { id: 1, text: 'Hi, guys', likeCount: 4 },
    { id: 2, text: "Hi, i'ts me", likeCount: 5 },
    { id: 3, text: "I'm here", likeCount: 51 },
  ] as Array<PostDataType>,
  status: '',
  profile: null as ProfileType | null,
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: state.postData.length,
            text: action.newPostText,
            likeCount: state.postData.length + 3,
          },
        ],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return { ...state, postData: state.postData.filter((post) => post.id !== action.postId) };
    }
    case SAVE_PHOTO_SUCCSESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default: {
      return state;
    }
  }
};

type AddPostActionType = {
  type: typeof ADD_POST;
  newPostText: string;
};

type deletePostActionType = {
  type: typeof DELETE_POST;
  postId: number;
};

type SetUserPostActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};

type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS;
  status: string;
};

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCSESS;
  photos: PhotosType;
};

const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText });

const deletePost = (postId: number): deletePostActionType => ({ type: DELETE_POST, postId });

const setUserProfile = (profile: ProfileType): SetUserPostActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

const setUserStatus = (status: string): SetUserStatusActionType => ({
  type: SET_USER_STATUS,
  status,
});

const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCSESS,
  photos,
});

const getUserProfile = (id: number | null) => async (dispatch: any) => {
  const data = await profileAPI.getUser(id);
  dispatch(setUserProfile(data));
};

const getUserStatus = (id: number | null) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(id);
  if (data.status === 200) {
    dispatch(setUserStatus(data.data));
  }
};

const updateUserStatus = (status: string) => async (dispatch: any) => {
  const data = await profileAPI.updateStatus(status);
  if (data.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

const setUserPhoto = (file: any) => async (dispatch: any) => {
  const { data } = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};
const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.id;
  const { data } = await profileAPI.updateProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    return Promise.reject(data.messages[0]);
  }
};

export {
  addPost,
  setUserProfile,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  setUserStatus,
  deletePost,
  setUserPhoto,
  saveProfile,
};

export default profileReducer;
