import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };
  onEnd = () => {
    this.setState({ editMode: false });
    this.props.updateUserStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.editMode === false ? (
          <div>
            <p onDoubleClick={this.toggleEditMode} className={style.aboutMe}>
              {this.props.status ? this.props.status : 'No status'}
            </p>
          </div>
        ) : (
          <div className={style.profileStatusInputContainer}>
            <input
              autoFocus={true}
              onBlur={this.onEnd}
              onChange={this.onStatusChange}
              className={style.profileStatusInput}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
