import { AppStateType } from './reduxStore';

export const getUsersSelector = (state: AppStateType) => {
  return state.usersPage.users;
};

export const getUsersPageSizeSelector = (state: AppStateType) => {
  return state.usersPage.pageSize;
};

export const getUsersTotalUsersCountSelector = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};

export const getUsersCurrentPageSelector = (state: AppStateType) => {
  return state.usersPage.currentPage;
};

export const getUsersIsFetchingSelector = (state: AppStateType) => {
  return state.usersPage.isFetching;
};

export const getUsersFollowingInProgressSelector = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};
