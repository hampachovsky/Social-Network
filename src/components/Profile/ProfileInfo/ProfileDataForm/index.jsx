import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import style from '../ProfileInfo.module.css';

const validationScheme = yup.object().shape({
  fullName: yup.string().min(2, 'To short name'),
  contacts: yup.object({
    facebook: yup.string().url(),
    vk: yup.string().url(),
    github: yup.string().url(),
    instagram: yup.string().url(),
    mainLink: yup.string().url(),
    twitter: yup.string().url(),
    website: yup.string().url(),
    youtube: yup.string().url(),
  }),
});

const ProfileDataForm = (props) => {
  const [newPhotoFile, setPhotoFile] = useState();

  const initialData = {
    ...props.profile,
    contacts: {
      facebook: props.profile.contacts.facebook ? props.profile.contacts.facebook : '',
      vk: props.profile.contacts.vk ? props.profile.contacts.vk : '',
      github: props.profile.contacts.github ? props.profile.contacts.github : '',
      instagram: props.profile.contacts.instagram ? props.profile.contacts.instagram : '',
      mainLink: props.profile.contacts.mainLink ? props.profile.contacts.mainLink : '',
      twitter: props.profile.contacts.twitter ? props.profile.contacts.twitter : '',
      website: props.profile.contacts.website ? props.profile.contacts.website : '',
      youtube: props.profile.contacts.youtube ? props.profile.contacts.youtube : '',
    },
    status: props.status,
  };

  const onMainFotoSelected = (e) => {
    if (e.target.files && e.target.files.length) {
      setPhotoFile(e.target.files[0]);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialData}
        validateOnBlur
        validationSchema={validationScheme}
        onSubmit={async (values, actions) => {
          try {
            await props.saveProfile(values);
            props.updateUserStatus(values.status);
            newPhotoFile && props.setUserPhoto(newPhotoFile);
            actions.setSubmitting(false);
            props.toggleEditMode();
          } catch (error) {
            actions.setStatus(error);
            actions.setSubmitting(false);
          }
        }}
      >
        {({ values, isValid, isSubmitting, status, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <ErrorMessage component="p" className={style.error} name="fullName" />
              <label htmlFor="fullName">Full name:</label>
              <Field type="text" className={style.fullName} name="fullName" />
            </div>
            <label htmlFor="aboutMe">About me:</label>
            <Field className={style.aboutMe} type="text" name="aboutMe" />

            <div className={style.profileStatusInputContainer}>
              <Field name="status" type="text" className={style.profileStatusInput} />
            </div>
            <div className={style.jobDescriptionContainer}>
              <label htmlFor="lookingForAJob">Looking for a job: </label>
              <Field
                name="lookingForAJob"
                type="checkbox"
                className={style.jobFindStatus}
                checked={values.lookingForAJob}
              />
              <label htmlFor="lookingForAJobDescription">Skills: </label>
              <Field
                type="text"
                name="lookingForAJobDescription"
                className={style.lookingForAJobDescription}
              />
            </div>
            {status && <p className={style.error}>{status}</p>}

            <ContactFields contacts={props.profile.contacts} />
            <div className={style.photoUploadConainer}>
              <input
                type="file"
                name="photos.large"
                className={style.fileInput}
                onChange={onMainFotoSelected}
              />
            </div>
            <div className={style.saveBtnContainer}>
              <button disabled={!isValid || isSubmitting} type="submit" className={style.saveBtn}>
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

const ContactFields = ({ contacts }) => {
  return (
    <div className={style.contactFieldConainer}>
      {Object.keys(contacts).map((key) => {
        return (
          <div key={key}>
            <ErrorMessage component="p" className={style.error} name={'contacts.' + key} />
            <label htmlFor={'contacts.' + key}>{key}</label>
            <Field type="text" name={'contacts.' + key} className={style.contactField} />
          </div>
        );
      })}
    </div>
  );
};

export default ProfileDataForm;
