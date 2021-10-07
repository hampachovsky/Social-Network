import { sendMessage, updateMessageBody } from 'redux/dialogsReducer';
import Chat from '.';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default connect(mapStateToProps, { sendMessage, updateMessageBody })(Chat);
