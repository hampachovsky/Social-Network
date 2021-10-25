import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { PostDataType } from 'types/types';
import * as yup from 'yup';
import style from './MyPosts.module.css';
import Post from './Post';

const validationScheme = yup.object().shape({
  postValue: yup.string().min(8, '8 Char min').max(300, '300 Char max'),
});

type FormInitialValuesType = {
  postValue: string;
};

type PropsType = {
  postData: Array<PostDataType>;
  addPost: (newPostText: string) => void;
};

const MyPosts: React.FC<PropsType> = React.memo(({ postData, addPost }) => {
  const postElements = postData.map((p) => (
    <Post key={p.id} text={p.text} likeCount={p.likeCount} />
  ));
  const initialValues: FormInitialValuesType = {
    postValue: '',
  };

  return (
    <div className={style.postsContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          addPost(values.postValue);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
        validationSchema={validationScheme}
        validateOnBlur
      >
        {({ values, dirty, isValid, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className={style.postField}>
            <ErrorMessage component={`p`} className={style.errors} name={`postValue`} />
            <Field
              type={`text`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postValue}
              name={`postValue`}
              className={style.postValueInput}
              placeholder="Post text"
            />
            <button disabled={!dirty && isValid} className={style.addPostBtn} type={`submit`}>
              Add Post
            </button>
          </Form>
        )}
      </Formik>
      <div className={style.posts}>
        <div className={style.myPosts}>My posts</div>
        {postElements}
      </div>
    </div>
  );
});

export default MyPosts;
