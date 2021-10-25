import React from 'react';
import { ProfileType } from 'types/types';
type PropsType = {
  style: any;
  profile: ProfileType;
};

const Contacts: React.FC<PropsType> = ({ profile, style }) => {
  return (
    <>
      {(Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>).map((key) => {
        return (
          <div key={key}>
            <span className={style.contact}>
              {key}: {profile.contacts[key]}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default Contacts;
