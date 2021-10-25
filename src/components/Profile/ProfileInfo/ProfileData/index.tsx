import React from 'react';
import style from '../ProfileInfo.module.css';
import Contacts from '../Contact';
import { ProfileType } from 'types/types';

type PropsType = {
  profile: ProfileType;
  status: string;
};

const ProfileData: React.FC<PropsType> = ({ profile, status }) => {
  /*const contactElement = Object.keys(profile.contacts).map((key) => {
    return <Contact key={key} contactTitle={key} contactValue={profile.contacts} style={style} />;
  });*/
  return (
    <>
      <h2 className={style.fullName}>{profile.fullName}</h2>
      <div>
        <p className={style.aboutMe}>{status ? status : 'No status'}</p>
      </div>
      {profile.lookingForAJob ? (
        <div className={style.jobDescriptionContainer}>
          <p className={style.jobFindStatus}>Work: in active search</p>
          <p className={style.jobFindDescription}>Skills: {profile.lookingForAJobDescription}</p>
        </div>
      ) : (
        <p className={style.jobFindStatus}>Not looking for work</p>
      )}
      <div className={style.contactsContainer}>
        <Contacts profile={profile} style={style} />
      </div>
    </>
  );
};

export default ProfileData;
