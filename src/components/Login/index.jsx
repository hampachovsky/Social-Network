import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react';
import style from './Login.module.css';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { login } from 'redux/authReducer';
import { Redirect } from 'react-router';

const validationScheme = yup.object().shape({
  email: yup.string().email('Enter correct email').required('Please enter email'),
  password: yup.string().min(8, '8 Char min').required('Please enter password'),
});
const Login = (props) => {
  if (props.isAuth) return <Redirect to="/profile" />;
  return (
    <div className={style.loginFormWrapper}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validateOnBlur
        validationSchema={validationScheme}
        onSubmit={(values, actions) => {
          props.login(values.email, values.password, values.rememberMe);
          actions.setSubmitting(false);
          actions.resetForm({
            values: {
              email: '',
              password: '',
              rememberMe: false,
            },
          });
        }}
      >
        {({ values, dirty, isValid, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className={style.loginFormConainer}>
            <h1>Log in</h1>
            <p>Email and password</p>
            <div className={style.inputContainer}>
              {props.formError && <p className={style.error}>{props.formError}</p>}
              <ErrorMessage component={`p`} className={style.error} name={`email`} />
              <Field
                className={style.email}
                name={`email`}
                type="text"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage component={`p`} className={style.error} name={`password`} />
              <Field
                className={style.password}
                name={`password`}
                type="password"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>

            <div className={style.checkboxContainer}>
              <Field className={style.checkbox} name={`rememberMe`} type="checkbox" />
              <label htmlFor="rememberme">Remember me </label>
            </div>
            <button
              disabled={(!dirty && isValid) || isSubmitting}
              type={`submit`}
              className={style.loginBtn}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    formError: state.auth.formError,
  };
};

export default connect(mapStateToProps, { login })(Login);
