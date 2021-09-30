const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-BODY';

const store = {
  _state: {
    profilePage: {
      postData: [
        { id: 0, text: 'Hi, man', likeCount: '1' },
        { id: 1, text: 'Hi, guys', likeCount: '4' },
        { id: 2, text: "Hi, i'ts me", likeCount: '5' },
        { id: 3, text: "I'm here", likeCount: '51' },
      ],
      postValue: '',
    },
    dialogsPage: {
      userData: [
        {
          username: 'user1',
          userId: '1',
          status: 'online',
          messages: [
            {
              content: 'hello world',
              recipient: 'user2',
              owner: false,
              date: '11.06.2021',
            },
            {
              content: 'new message',
              recipient: 'user2',
              owner: false,
              date: '11.05.2021',
            },
            {
              content: 'second wind',
              recipient: 'user2',
              owner: false,
              date: '11.04.2021',
            },
          ],
          avaImg:
            'https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012',
        },
        {
          username: 'user2',
          userId: '2',
          status: 'online',
          messages: [
            {
              content: 'test world',
              recipient: 'user3',
              owner: false,
              date: '11.09.2021',
            },
            {
              content: 'new message user 2',
              recipient: 'user3',
              owner: false,
              date: '11.08.2021',
            },
            {
              content: 'second wind',
              recipient: 'user3',
              owner: false,
              date: '11.07.2021',
            },
          ],
          avaImg: 'https://www.daphnedemaris.com/wp-content/uploads/2017/11/ava-img.jpg',
        },
        {
          username: 'user3',
          userId: '3',
          messages: [
            {
              content: 'from world',
              recipient: 'user1',
              owner: false,
              date: '13.09.2021',
            },
            {
              content: 'new message user 3',
              recipient: 'user1',
              owner: false,
              date: '12.08.2021',
            },
            {
              content: 'wind',
              recipient: 'user1',
              owner: false,
              date: '01.07.2021',
            },
          ],
          status: 'online',
          avaImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapsczAOf7_g-ZzXikO78qCP9Ytw1eKwoLgQ&usqp=CAU',
        },
        {
          username: 'user4',
          userId: '4',
          messages: [
            {
              content: 'message world',
              recipient: 'user2',
              owner: false,
              date: '06.09.2021',
            },
            {
              content: 'new message user 4',
              recipient: 'user3',
              owner: false,
              date: '08.08.2021',
            },
            {
              content: 'second wind',
              recipient: 'user1',
              owner: false,
              date: '09.07.2021',
            },
          ],
          status: 'offline',
          avaImg:
            'https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/44a6d6c4-86fd-4f93-8204-7ffd4fa4e4e4-4445-IMGWorldsofAdventure-2.JPG',
        },
      ],
      newMessageBody: '',
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('state changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  // Aaction = {type: ..., some data: ...,}
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let id = this._state.profilePage.postData.length - 1;
        this._state.profilePage.postData.push({
          id,
          text: this._state.profilePage.postValue,
          likeCount: 0,
        });
        this._state.profilePage.postValue = '';
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.postValue = action.newText;
        this._callSubscriber(this._state);
        break;
      case SEND_MESSAGE:
        this._state.dialogsPage.userData[action.id].messages.push({
          content: this._state.dialogsPage.newMessageBody,
          recipient: `user${action.id}`,
          owner: true,
          date: '20.11.2020',
        });
        this._state.dialogsPage.newMessageBody = '';
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this._state.dialogsPage.newMessageBody = action.newText;
        this._callSubscriber(this._state);
        break;
      default:
        break;
    }
  },
};

const addPostActionCreator = () => ({
  type: ADD_POST,
});

const updatePostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});

const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
  id: 0,
});

const updateMessageBodyCreator = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText,
});

window.store = store;

export {
  sendMessageActionCreator,
  updateMessageBodyCreator,
  addPostActionCreator,
  updatePostTextActionCreator,
};

export default store;
