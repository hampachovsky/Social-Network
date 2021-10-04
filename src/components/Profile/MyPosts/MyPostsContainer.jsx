import { connect } from 'react-redux';
import { addPost, updatePostText } from 'redux/profile_reducer';
import MyPosts from '.';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updatePostText,
})(MyPosts);

export default MyPostsContainer;
