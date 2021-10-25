import { connect } from 'react-redux';
import { sendMessage } from 'redux/dialogsReducer';
import { AppStateType } from 'redux/reduxStore';
import Chat from '.';

const mapStateToProps = (state: AppStateType) => {
  return {
    messages: state.dialogsPage.messages,
    userData: state.dialogsPage.userData,
  };
};

export default connect(mapStateToProps, { sendMessage })(Chat);
