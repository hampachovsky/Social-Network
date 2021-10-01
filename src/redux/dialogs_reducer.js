const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      state.userData[action.id].messages.push({
        content: state.newMessageBody,
        recipient: `user${action.id}`,
        owner: true,
        date: '10.11.2020',
      });
      state.newMessageBody = '';
      break;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newText;
      break;
    default:
      break;
  }
  return state;
};

const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
  id: 0,
});

const updateMessageBodyCreator = (newText) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newText,
});

export { sendMessageActionCreator, updateMessageBodyCreator };

export default dialogsReducer;
