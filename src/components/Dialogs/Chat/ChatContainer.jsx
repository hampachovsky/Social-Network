import { sendMessageActionCreator, updateMessageBodyCreator } from 'redux/dialogs_reducer';
import Chat from '.';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: () => dispatch(sendMessageActionCreator()),
    onNewMessageTextChange: (text) => dispatch(updateMessageBodyCreator(text)),
  };
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
