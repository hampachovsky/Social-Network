import usersAPI from 'api/usersAPI';
import { UserType } from '../types/types';
import { AppThunk } from './reduxStore';
import { ResultCodeEnum } from 'api/api';

const TOGGLE_FOLLOW = 'users/TOGGLE_FOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'users/TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGGRES = 'users/TOGGLE_IS_FOLLOWING_PROGGRES';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // users id
};

export type InitialStateType = typeof initialState;
type ActionsType =
  | ToggleFollowActionType
  | SetUsersActionType
  | SetCurrentPageCountActionType
  | SetTotalUsersCountActionType
  | ToggleFetchingActionType
  | ToggleFollowingProgressActionType;
type ThunkType = AppThunk<ActionsType>;

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case TOGGLE_FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) return { ...user, followed: !user.followed };
          return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.pageNumber };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case TOGGLE_FETCHING: {
      return { ...state, isFetching: !state.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGGRES: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      };
    }
    default:
      return state;
  }
};

type ToggleFollowActionType = {
  type: typeof TOGGLE_FOLLOW;
  userId: number;
};
const toggleFollow = (userId: number): ToggleFollowActionType => ({ type: TOGGLE_FOLLOW, userId });

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users });

type SetCurrentPageCountActionType = {
  type: typeof SET_CURRENT_PAGE;
  pageNumber: number;
};
const setCurrentPage = (pageNumber: number): SetCurrentPageCountActionType => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalCount: number;
};
const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});

type ToggleFetchingActionType = {
  type: typeof TOGGLE_FETCHING;
};
const toggleFetching = (): ToggleFetchingActionType => ({ type: TOGGLE_FETCHING });

type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGGRES;
  isFetching: boolean;
  id: number;
};
const toggleFollowingProgress = (
  isFetching: boolean,
  id: number
): ToggleFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGGRES,
  isFetching,
  id,
});

const requestUsers =
  (currentPage: number, pageSize: number): ThunkType =>
  async (dispatch) => {
    dispatch(toggleFetching());
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleFetching());
  };

const getCurrentPage =
  (page: number, pageSize: number): ThunkType =>
  async (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleFetching());
    const data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleFetching());
    dispatch(setUsers(data.items));
  };

const toggleFollowedStatus =
  (followed: boolean, id: number): ThunkType =>
  async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    let { data } = followed ? await usersAPI.unfollow(id) : await usersAPI.follow(id);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(toggleFollow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
  };

export { toggleFollowingProgress, requestUsers, getCurrentPage, toggleFollowedStatus };

export default usersReducer;
