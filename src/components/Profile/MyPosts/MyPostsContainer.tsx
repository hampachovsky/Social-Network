import { connect } from 'react-redux';
import { addPost } from 'redux/profileReducer';
import { AppStateType } from 'redux/reduxStore';
import MyPosts from '.';

const mapStateToProps = (state: AppStateType) => {
  return {
    postData: state.profilePage.postData,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
})(MyPosts);

export default MyPostsContainer;
