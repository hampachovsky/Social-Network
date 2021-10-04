import { connect } from 'react-redux';
import ChatList from '.';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const ChatListContainer = connect(mapStateToProps, {})(ChatList);

export default ChatListContainer;
