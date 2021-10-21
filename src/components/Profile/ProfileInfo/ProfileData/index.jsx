import React from 'react';
import style from '../ProfileInfo.module.css';
import Contact from '../Contact';

const ProfileData = (props) => {
  const contactElement = Object.keys(props.profile.contacts).map((key) => {
    return (
      <Contact
        key={key}
        contactTitle={key}
        contactValue={props.profile.contacts[key]}
        style={style}
      />
    );
  });
  return (
    <>
      <h2 className={style.fullName}>{props.profile.fullName}</h2>
      <p className={style.aboutMe}>About me: {props.profile.aboutMe}</p>
      <div>
        <p className={style.aboutMe}>{props.status ? props.status : 'No status'}</p>
      </div>
      {props.profile.lookingForAJob ? (
        <div className={style.jobDescriptionContainer}>
          <p className={style.jobFindStatus}>Work: in active search</p>
          <p className={style.jobFindDescription}>
            Skills: {props.profile.lookingForAJobDescription}
          </p>
        </div>
      ) : (
        <p className={style.jobFindStatus}>Not looking for work</p>
      )}
      <div className={style.contactsContainer}>{contactElement}</div>
    </>
  );
};

export default ProfileData;
