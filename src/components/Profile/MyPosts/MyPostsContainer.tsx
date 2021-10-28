import { connect } from 'react-redux';
import { actions } from 'redux/profileReducer';
import { AppStateType } from 'redux/reduxStore';
import MyPosts from '.';

const mapStateToProps = (state: AppStateType) => {
  return {
    postData: state.profilePage.postData,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  actions.addPost,
})(MyPosts);

export default MyPostsContainer;
