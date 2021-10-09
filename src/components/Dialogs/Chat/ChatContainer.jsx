import { sendMessage } from 'redux/dialogsReducer';
import Chat from '.';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default connect(mapStateToProps, { sendMessage })(Chat);
