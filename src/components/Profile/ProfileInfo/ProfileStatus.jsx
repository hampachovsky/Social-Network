import React, { useState, useEffect } from 'react';

function ProfileStatus(props) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode ? (
        <div>
          <p onDoubleClick={() => setEditMode(true)} className={props.style.aboutMe}>
            {props.status ? props.status : 'No status'}
          </p>
        </div>
      ) : (
        <div className={props.style.profileStatusInputContainer}>
          <input
            className={props.style.profileStatusInput}
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
}

export default ProfileStatus;
