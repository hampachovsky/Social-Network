import dialogsReducer from 'redux/dialogsReducer';
import { sendMessage } from 'redux/dialogsReducer';

const state = {
  messages: [
    {
      content: 'hello world',
      recipient: 'user2',
      author: 'user1',
      owner: false,
      date: '11.06.2021',
    },
    {
      content: 'new message',
      recipient: 'user2',
      author: 'user1',
      owner: false,
      date: '11.05.2021',
    },
    {
      content: 'second wind',
      recipient: 'user2',
      author: 'user1',
      owner: false,
      date: '11.04.2021',
    },
  ],
};

describe('dialogs reducer', () => {
  it('length of messages should be incremented', () => {
    const newState = dialogsReducer(state, sendMessage('test message'));
    expect(newState.messages.length).toBe(4);
  });
  it('state should be returned whitout changes', () => {
    const newState = dialogsReducer(state, { type: 'w' });
    expect(newState.messages).toEqual(state.messages);
  });
});
