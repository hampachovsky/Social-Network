import React, { useState, useEffect } from 'react';
//import style from '../ProfileInfo.module.css';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode ? (
        <div>
          <p data-testid="status" onDoubleClick={() => setEditMode(true)} className={style.aboutMe}>
            {props.status ? props.status : 'No status'}
          </p>
        </div>
      ) : (
        <div className={style.profileStatusInputContainer}>
          <input
            data-testid="editStatus"
            className={style.profileStatusInput}
            autoFocus={true}
            onChange={(e) => setStatus(e.target.value)}
            onBlur={() => {
              setEditMode(false);
              props.updateUserStatus(status);
            }}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
