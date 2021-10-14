import { createSelector } from 'reselect';

export const getUsersSelector = (state) => {
  return state.usersPage.users;
};

export const getUsersPageSizeSelector = (state) => {
  return state.usersPage.pageSize;
};

export const getUsersTotalUsersCountSelector = (state) => {
  return state.usersPage.totalUsersCount - 15150;
};

export const getFiltredUsersSelector = createSelector(
  (getUsersSelector,
  (users) => {
    return users.filter((u) => true);
  })
);

export const getUsersCurrentPageSelector = (state) => {
  return state.usersPage.currentPage;
};

export const getUsersIsFetchingSelector = (state) => {
  return state.usersPage.isFetching;
};

export const getUsersFollowingInProgressSelector = (state) => {
  return state.usersPage.followingInProgress;
};
