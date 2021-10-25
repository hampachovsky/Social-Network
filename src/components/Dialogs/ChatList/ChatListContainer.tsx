import { connect } from 'react-redux';
import { AppStateType } from 'redux/reduxStore';
import ChatList from '.';

const mapStateToProps = (state: AppStateType) => {
  return {
    userData: state.dialogsPage.userData,
  };
};

export default connect(mapStateToProps, {})(ChatList);
