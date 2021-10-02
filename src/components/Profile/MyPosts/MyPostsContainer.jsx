import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from 'redux/profile_reducer';
import StoreContext from 'StoreContext';
import MyPosts from '.';

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().profilePage;
        const onAddPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text) => {
          store.dispatch(updatePostTextActionCreator(text));
        };
        return (
          <MyPosts
            upateNewPostText={onPostChange}
            onAddPost={onAddPost}
            postValue={state.postValue}
            postsData={state.postData}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
