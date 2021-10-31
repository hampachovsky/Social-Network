import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import style from './ChatPage.module.css';

const validationSchema = yup.object().shape({
  messageBody: yup.string().max(300, 'Max char 300'),
});

type FormInitialValuesType = {
  messageBody: string;
};

export const SendMessagesForm: React.FC = () => {
  const initialValues: FormInitialValuesType = {
    messageBody: '',
  };
  return (
    <div className={style.chatContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.validateForm(values.messageBody);
          actions.setSubmitting(false);
          actions.setValues({ messageBody: '' });
        }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ values, dirty, isValid, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className={style.chatFooter}>
            <Field
              onChange={handleChange}
              value={values.messageBody}
              className={style.textarea}
              placeholder="Your message"
              name={`messageBody`}
              cols="50"
              rows="3"
            />
            <div className={style.sendBtnContainer}>
              <button disabled={!dirty && isValid} className={style.sendBtn} type={`submit`}>
                Send
              </button>
            </div>

            <ErrorMessage component={`p`} className={style.errors} name={`messageBody`} />
          </Form>
        )}
      </Formik>
    </div>
  );
};
