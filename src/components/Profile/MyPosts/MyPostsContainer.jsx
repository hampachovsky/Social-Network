import { connect } from 'react-redux';
import { addPostActionCreator, updatePostTextActionCreator } from 'redux/profile_reducer';
import MyPosts from '.';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upateNewPostText: (text) => {
      dispatch(updatePostTextActionCreator(text));
    },
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
