import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationScheme = yup.object().shape({
  postValue: yup.string().min(8, '8 Char min').max(300, '300 Char max'),
});

const MyPosts = (props) => {
  const postElements = props.profilePage.postData.map((p) => (
    <Post key={p.id} text={p.text} likeCount={p.likeCount} />
  ));

  return (
    <div className={style.postsContainer}>
      <Formik
        initialValues={{ postValue: '' }}
        onSubmit={(values, actions) => {
          props.addPost(values.postValue);
          actions.setSubmitting(false);
          actions.resetForm({
            postValue: '',
          });
        }}
        validationSchema={validationScheme}
        validateOnBlur
      >
        {({ values, dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className={style.postField}>
            <ErrorMessage component={`p`} className={style.errors} name={`postValue`} />
            <Field
              type={`text`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postValue}
              name={`postValue`}
              component={PostInput}
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
};

const PostInput = ({ field, form, ...props }) => (
  <input {...field} className={style.postValueInput} placeholder="Post text" />
);

export default MyPosts;
