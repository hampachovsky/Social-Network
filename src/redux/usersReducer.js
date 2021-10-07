import { usersAPI } from 'api/api';
import { followAPI } from 'api/api';

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGGRES = 'TOGGLE_IS_FOLLOWING_PROGGRES';

const initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
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
      return { ...state, totalUsersCount: action.totalCount - 15000 };
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

const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });

const setUsers = (users) => ({ type: SET_USERS, users });

const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });

const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });

const toggleFetching = () => ({ type: TOGGLE_FETCHING });

const toggleFollowingProgress = (isFetching, id) => ({
  type: TOGGLE_IS_FOLLOWING_PROGGRES,
  isFetching,
  id,
});

const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleFetching());
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(toggleFetching());
    });
  };
};

const getCurrentPage = (page, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleFetching());
    usersAPI.getUsers(page, pageSize).then((data) => {
      dispatch(toggleFetching());
      dispatch(setUsers(data.items));
    });
  };
};

const toggleFollowedStatus = (followed, id) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, id));
  followed
    ? followAPI.unfollow(id).then((data) => {
        if (data.resultCode === 0) {
          dispatch(toggleFollow(id));
        }
        dispatch(toggleFollowingProgress(false, id));
      })
    : followAPI.follow(id).then((data) => {
        if (data.resultCode === 0) {
          dispatch(toggleFollow(id));
        }
        dispatch(toggleFollowingProgress(false, id));
      });
};

export { toggleFollowingProgress, getUsers, getCurrentPage, toggleFollowedStatus };

export default usersReducer;
