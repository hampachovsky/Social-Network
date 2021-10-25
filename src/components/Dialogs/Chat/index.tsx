import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { DialogsUserType, MessagesType } from 'types/types';
import * as yup from 'yup';
import style from './Chat.module.css';
import Message from './Message/index';

const validationSchema = yup.object().shape({
  messageBody: yup.string().max(300, 'Max char 300'),
});

type PropsType = {
  messages: Array<MessagesType>;
  userData: Array<DialogsUserType>;
  sendMessage: (newMessageBody: string) => void;
};

type FormInitialValuesType = {
  messageBody: string;
};

const Chat: React.FC<PropsType> = ({ messages, userData, sendMessage }) => {
  const initialValues: FormInitialValuesType = {
    messageBody: '',
  };
  const filtred = messages.filter((m) => m.author === 'user1');
  const messageElement = filtred.map((m, i) => (
    <Message message={m.content} owner={m.owner} photoUrl={userData[0].photoUrl} key={i} />
  ));

  return (
    <div className={style.chatContainer}>
      <div className={style.chatHeader}>
        <div className={style.chatHeaderItem}>
          <div className={style.avaImageContainer}>
            <img className={style.avaImage} src={userData[1].photoUrl} alt="" />
          </div>
          <div className={style.chatHeaderInfo}>
            <h4 className={style.username}>{`${userData[0].username}`}</h4>
            <p className={style.status}>{`is ${userData[0].status}`}</p>
          </div>
        </div>
      </div>
      <div>
        <div>{messageElement}</div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            actions.validateForm(values.messageBody);
            sendMessage(values.messageBody);
            actions.setSubmitting(false);
            actions.setValues({ messageBody: '' });
          }}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ values, touched, errors, dirty, isValid, handleChange, handleSubmit }) => (
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
    </div>
  );
};

export default Chat;
