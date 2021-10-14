import { connect } from 'react-redux';
import { sendMessage } from 'redux/dialogsReducer';
import Chat from '.';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default connect(mapStateToProps, { sendMessage })(Chat);
