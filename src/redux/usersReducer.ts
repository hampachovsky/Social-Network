import usersAPI from 'api/usersAPI';
import { UserType } from '../types/types';
import { AppThunk, InferActionsTypes } from './reduxStore';
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

type ActionsType = InferActionsTypes<typeof actions>;
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

export const actions = {
  toggleFollow: (userId: number) => ({ type: TOGGLE_FOLLOW, userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: SET_USERS, users } as const),
  setCurrentPage: (pageNumber: number) =>
    ({
      type: SET_CURRENT_PAGE,
      pageNumber,
    } as const),
  setTotalUsersCount: (totalCount: number) =>
    ({
      type: SET_TOTAL_USERS_COUNT,
      totalCount,
    } as const),
  toggleFetching: () => ({ type: TOGGLE_FETCHING } as const),
  toggleFollowingProgress: (isFetching: boolean, id: number) =>
    ({
      type: TOGGLE_IS_FOLLOWING_PROGGRES,
      isFetching,
      id,
    } as const),
};

const requestUsers =
  (currentPage: number, pageSize: number): ThunkType =>
  async (dispatch) => {
    dispatch(actions.toggleFetching());
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
    dispatch(actions.toggleFetching());
  };

const getCurrentPage =
  (page: number, pageSize: number): ThunkType =>
  async (dispatch) => {
    dispatch(actions.setCurrentPage(page));
    dispatch(actions.toggleFetching());
    const data = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.toggleFetching());
    dispatch(actions.setUsers(data.items));
  };

const toggleFollowedStatus =
  (followed: boolean, id: number): ThunkType =>
  async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, id));
    let { data } = followed ? await usersAPI.unfollow(id) : await usersAPI.follow(id);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(actions.toggleFollow(id));
    }
    dispatch(actions.toggleFollowingProgress(false, id));
  };

export { requestUsers, getCurrentPage, toggleFollowedStatus };

export default usersReducer;
