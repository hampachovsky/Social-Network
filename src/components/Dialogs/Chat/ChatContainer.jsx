import { sendMessage, updateMessageBody } from 'redux/dialogs_reducer';
import Chat from '.';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const ChatContainer = connect(mapStateToProps, { sendMessage, updateMessageBody })(Chat);

export default ChatContainer;
