import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState, ChangeEvent } from 'react';
import { ContactsType, ProfileType } from 'types/types';
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

type PropsType = {
  profile: ProfileType;
  status: string;
  toggleEditMode: () => void;
  updateUserStatus: (status: string) => void;
  setUserPhoto: (file: any) => void;
  saveProfile: (profile: ProfileType) => void;
};

interface FormInitialValuesType extends ProfileType {
  status: string;
}

const ProfileDataForm: React.FC<PropsType> = ({
  profile,
  status,
  toggleEditMode,
  updateUserStatus,
  setUserPhoto,
  saveProfile,
}) => {
  const [newPhotoFile, setPhotoFile] = useState<any>();

  const initialValues: FormInitialValuesType = {
    ...profile,
    contacts: {
      facebook: profile.contacts.facebook ? profile.contacts.facebook : '',
      vk: profile.contacts.vk ? profile.contacts.vk : '',
      github: profile.contacts.github ? profile.contacts.github : '',
      instagram: profile.contacts.instagram ? profile.contacts.instagram : '',
      mainLink: profile.contacts.mainLink ? profile.contacts.mainLink : '',
      twitter: profile.contacts.twitter ? profile.contacts.twitter : '',
      website: profile.contacts.website ? profile.contacts.website : '',
      youtube: profile.contacts.youtube ? profile.contacts.youtube : '',
    },
    status: status,
  };

  const onMainFotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      setPhotoFile(e.target.files[0]);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnBlur
        validationSchema={validationScheme}
        onSubmit={async (values, actions) => {
          try {
            await saveProfile(values);
            updateUserStatus(values.status);
            newPhotoFile && setUserPhoto(newPhotoFile);
            actions.setSubmitting(false);
            toggleEditMode();
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

            <ContactFields contacts={profile.contacts} />
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

type ContactsFieldPropsType = {
  contacts: ContactsType;
};

const ContactFields: React.FC<ContactsFieldPropsType> = ({ contacts }) => {
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
