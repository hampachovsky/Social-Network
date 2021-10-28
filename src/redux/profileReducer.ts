import { AppThunk, InferActionsTypes } from './reduxStore';
import profileAPI from 'api/profileAPI';
import { PostDataType, PhotosType, ProfileType } from '../types/types';
import { ResultCodeEnum } from 'api/api';

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
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = AppThunk<ActionsType>;

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

export const actions = {
  addPost: (newPostText: string) => ({ type: ADD_POST, newPostText } as const),

  deletePost: (postId: number) => ({ type: DELETE_POST, postId } as const),

  setUserProfile: (profile: ProfileType) =>
    ({
      type: SET_USER_PROFILE,
      profile,
    } as const),

  setUserStatus: (status: string) =>
    ({
      type: SET_USER_STATUS,
      status,
    } as const),

  savePhotoSuccess: (photos: PhotosType) =>
    ({
      type: SAVE_PHOTO_SUCCSESS,
      photos,
    } as const),
};

const getUserProfile =
  (id: number): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.getUser(id);
    dispatch(actions.setUserProfile(data));
  };

const getUserStatus =
  (id: number): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.getStatus(id);
    dispatch(actions.setUserStatus(data));
  };

const updateUserStatus =
  (status: string): ThunkType =>
  async (dispatch) => {
    const { data } = await profileAPI.updateStatus(status);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(actions.setUserStatus(status));
    }
  };

const setUserPhoto =
  (file: File): ThunkType =>
  async (dispatch) => {
    const { data } = await profileAPI.savePhoto(file);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(actions.savePhotoSuccess(data.data.photos));
    }
  };
const saveProfile =
  (profile: ProfileType): ThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.id as number;
    const { data } = await profileAPI.updateProfile(profile);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(getUserProfile(userId));
    }
    if (data.resultCode === ResultCodeEnum.Error) {
      return Promise.reject(data.messages[0]);
    }
  };

export { getUserProfile, getUserStatus, updateUserStatus, setUserPhoto, saveProfile };

export default profileReducer;
