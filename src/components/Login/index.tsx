import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from 'redux/authReducer';
import { AppStateType } from 'redux/reduxStore';
import * as yup from 'yup';
import style from './Login.module.css';

const validationScheme = yup.object().shape({
  email: yup.string().email('Enter correct email').required('Please enter email'),
  password: yup.string().min(8, '8 Char min').required('Please enter password'),
  /* error: yup.boolean(),
  captcha: yup.string().when('error', {
    is: () => true,
    then: yup.string().required('Please enter captcha'),
  }),*/
});

type FormInitialValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

const Login: React.FC<PropsFromRedux> = (props) => {
  const [captcha, setCaptcha] = useState<string | null>(null);
  const initialValues: FormInitialValuesType = {
    email: '',
    password: '',
    rememberMe: false,
    captcha: '',
  };

  if (props.isAuth) return <Redirect to="/profile " />;
  return (
    <div className={style.loginFormWrapper}>
      <Formik
        initialValues={initialValues}
        validateOnBlur
        validationSchema={validationScheme}
        onSubmit={async ({ email, password, rememberMe, captcha }, actions) => {
          try {
            await props.login({ email, password, rememberMe, captcha });
            actions.setSubmitting(false);
            actions.resetForm({
              values: {
                email: '',
                password: '',
                captcha: '',
                rememberMe: false,
              },
            });
          } catch (formError: any) {
            const captcha: string | null = formError.captcha;
            const error: string | null = formError.error;
            setCaptcha(captcha);
            actions.setStatus(error);
            actions.setSubmitting(false);
          }
        }}
      >
        {({
          values,
          dirty,
          isValid,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          status,
        }) => (
          <Form onSubmit={handleSubmit} className={style.loginFormConainer}>
            <h1>Log in</h1>
            <p>Email and password</p>
            <div className={style.inputContainer}>
              {!!status && <p className={style.error}>{status}</p>}
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

            {captcha ? (
              <div className={style.captchaContainer}>
                <img alt="" src={captcha} />
                <div>
                  <ErrorMessage component={`p`} className={style.error} name={`captcha`} />
                  <Field
                    className={style.captchaInput}
                    name={`captcha`}
                    type="text"
                    placeholder="Captcha"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.captcha}
                  />
                </div>
              </div>
            ) : null}

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

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const connector = connect(mapStateToProps, { login });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Login);
