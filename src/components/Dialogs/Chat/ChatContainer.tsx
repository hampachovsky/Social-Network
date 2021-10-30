import { connect } from 'react-redux';
import { actions } from 'redux/dialogsReducer';
import { AppStateType } from 'redux/reduxStore';
import Chat from '.';

const mapStateToProps = (state: AppStateType) => {
  return {
    messages: state.dialogsPage.messages,
    userData: state.dialogsPage.userData,
  };
};

export default connect(mapStateToProps, { ...actions })(Chat);
