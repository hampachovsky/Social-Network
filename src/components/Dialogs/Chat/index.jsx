import React from 'react';
import style from './Chat.module.css';
import Message from './Message/index';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  messageBody: yup.string().max(300, 'Max char 300'),
});

const Chat = (props) => {
  const filtred = props.dialogsPage.messages.filter((m) => m.author === 'user1');
  const messageElement = filtred.map((m, i) => (
    <Message
      username={props.dialogsPage.userData[0].username}
      message={m.content}
      owner={m.owner}
      photoUrl={props.dialogsPage.userData[0].photoUrl}
      key={i}
    />
  ));

  return (
    <div className={style.chatContainer}>
      <div className={style.chatHeader}>
        <div className={style.chatHeaderItem}>
          <div className={style.avaImageContainer}>
            <img className={style.avaImage} src={props.dialogsPage.userData[1].photoUrl} alt="" />
          </div>
          <div className={style.chatHeaderInfo}>
            <h4 className={style.username}>{`${props.dialogsPage.userData[0].username}`}</h4>
            <p className={style.status}>{`is ${props.dialogsPage.userData[0].status}`}</p>
          </div>
        </div>
      </div>
      <div>
        <div>{messageElement}</div>
        <Formik
          initialValues={{ messageBody: '' }}
          onSubmit={(values, actions) => {
            actions.validateForm(values.messageBody);
            props.sendMessage(values.messageBody);
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
              {touched.messageBody && errors.messageBody && (
                <div className={style.errorContainer}>
                  <p className={style.errors}>{errors.messageBody}</p>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Chat;
