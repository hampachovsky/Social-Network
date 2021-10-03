import { connect } from 'react-redux';
import { setUserAC, togggleFollowAC } from 'redux/users_reducer';
import Users from '.';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => dispatch(togggleFollowAC(userId)),
    setUsers: (users) => dispatch(setUserAC(users)),
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;
