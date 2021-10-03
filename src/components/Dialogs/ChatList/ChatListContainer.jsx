import { connect } from 'react-redux';
import ChatList from '.';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatList);

export default ChatListContainer;
