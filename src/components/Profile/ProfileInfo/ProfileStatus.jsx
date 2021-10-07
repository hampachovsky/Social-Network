import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  render() {
    return (
      <div>
        {this.state.editMode === false ? (
          <div>
            <p onDoubleClick={this.toggleEditMode} className={style.aboutMe}>
              {this.props.status}
            </p>
          </div>
        ) : (
          <div className={style.profileStatusInputContainer}>
            <input
              autoFocus={true}
              onBlur={this.toggleEditMode}
              className={style.profileStatusInput}
              value={this.props.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
